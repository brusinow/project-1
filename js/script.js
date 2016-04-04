var currentScore =  [ ["","","","","","",""],
                      ["","","","","","",""],
                      ["","","","","","",""],
                      ["","","","","","",""],
                      ["","","","","","",""],
                      ["","","","","","",""] ];


var board = $("div.eachCircle");
var keepPlaying = true;

var count = 0;




var noMove = '<div class="circle-clear"></div>';
var redMove = '<div class="circle-red"></div>';
var blackMove = '<div class="circle-black"></div>';



$('#column-one-button').click(function(){
    var x = 0;
 
  whichColumn(x);
  count++;
});

$('#column-two-button').click(function(){
    var x = 1;
 
  whichColumn(x);
  count++;
});


$('#column-three-button').click(function(){
    var x = 2;

  whichColumn(x);
  count++;
});

$('#column-four-button').click(function(){
    var x = 3;

  whichColumn(x);
  count++;
});

$('#column-five-button').click(function(){
    var x = 4;
 
  whichColumn(x);
  count++;
});

$('#column-six-button').click(function(){
    var x = 5;
 
  whichColumn(x);
  count++;
});

$('#column-seven-button').click(function(){
    var x = 6;
 
  whichColumn(x);
  count++;
});


function whoseTurn(count){ 
    if (count % 2 === 0){
    console.log('whoseTurn returns red move');
    return "R";
  } else { 
    console.log('whoseTurn returns black move'); 
    return "B"; 
    }
}












// var makeMove = function(y, x, count){}
//   var currentBox = board[count-1];
//   var thisMoveOutcome = currentScore[i][j];
//     if (0)



//   currentBox.click(function(){
//     if (currentBox.html === noMove && keepPlaying)
//       currentBox.html = whoseTurn(count);
//       currentScore.splice(i, 1, currentBox.innerText);




  // });


// for (var i = 0; i < board.length; i++){
//   makeMove(i);
// }


// function running(win) {
//   var win = getWinner(result);
//   if (win) {
//     keepPlaying = false;
//     document.getElementById('whose-turn').textContent = 'We have a winner!';
//     console.log('operation should stop');
//   } else {
//     console.log('keep playing...')
//     keepPlaying = true;
//   }
// }



// var getWinner = function(){}



      






function whichColumn(x){
    // console.log("x is "+ x);
    var y = 5;
  if (keepPlaying){
    do {
      var dimensionChange = (7*y) + x;
      
      if (currentScore[y][x] === "" && whoseTurn(count)==="R"){
        var redPlayer = "R";
        board[dimensionChange].className = 'eachCircle circle-red';
        currentScore[y].splice(x, 1, 'R');
        console.log(currentScore);
        console.log('red');
        getWinner(y,x,redPlayer);
        return true;
      }   else if (currentScore[y][x] === "" && whoseTurn(count)==="B"){
          var blackPlayer = "B";
          board[dimensionChange].className = 'eachCircle circle-black';
          currentScore[y].splice(x, 1, 'B');
     
          console.log(currentScore);
          console.log('black');
          getWinner(y,x,blackPlayer);
          return false
          } else {
          y--;
          console.log("something there");
          console.log(y + " at bottom");
          }
      // console.log("x is "+ x);
    }
  while(y >= 0);
  }
}



function getWinner(lastPieceY, lastPieceX, player) { 
  var needFour = 1, 
     i = 1;
   // // across
    while(currentScore[lastPieceY][lastPieceX - i] === player && (lastPieceX - i) >= 0 ) { 
      needFour++; 
      i++; 
      console.log('horiz loop 1');
    };
      i = 1;

    while(currentScore[lastPieceY][lastPieceX + i] === player && (lastPieceX + i) <= 6) {
      needFour++; 
      i++; 
      console.log('horiz loop 2');
    };

      if (needFour >= 4) { 
      console.log("win horizontal");
      keepPlaying = false;
      return true; 
      }


    //down
      needFour = 1;

    while(((lastPieceY - i) >= 0)  && (currentScore[lastPieceY-i][lastPieceX] === player)) { 
      needFour++; 
      i++; 
      console.log('vert loop 1');
    };
      i = 1;
    
    while(((lastPieceY + i) <= 5) && (currentScore[lastPieceY+i][lastPieceX] === player)) {
      needFour++; 
      i++; 
      console.log('vert loop 2');
    };

      if (needFour >= 4) { 
      console.log("win vertical");
      keepPlaying = false;
      return true; 
      }

//------------------------------>
// diagonal descending
    needFour = 1;

    while((lastPieceY - i) >= 0 && (lastPieceX - i) >= 0  &&  currentScore[lastPieceY-i][lastPieceX-i] === player ) { 
      needFour++; 
      i++; 
      console.log('while loop 1');
    };
      i = 1;
    

    while((lastPieceY + i) <= 5 && (lastPieceX + i) <= 6  && currentScore[lastPieceY+i][lastPieceX+i] === player ) {
      needFour++; 
      i++; 
      console.log('while loop 2');
    };

      if (needFour >= 4) { 
      console.log("win diag descending");
      keepPlaying = false;
      return true; 
      }

// diagonal ascending
    needFour = 1;

    while((lastPieceY + i) <= 5 && (lastPieceX - i) >= 0  &&  currentScore[lastPieceY+i][lastPieceX-i] === player ) { 
      needFour++; 
      i++; 
      console.log('while loop 1');
    };
      i = 1;
    

    while((lastPieceY - i) >= 0 && (lastPieceX + i) <= 6  && currentScore[lastPieceY-i][lastPieceX+i] === player ) {
      needFour++; 
      i++; 
      console.log('while loop 2');
    };

      if (needFour >= 4) { 
      console.log("win diag ascending");
      keepPlaying = false;
      return true; 
      }









   console.log("no winner yet");
   console.log("needFour is now "+needFour)
   return false;
}













