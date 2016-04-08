# project-1

"Connect Four" Web Based Game by Brent Rusinow

Rules: Each turn you have a choice of which column you can drop a chip into. The objective is to complete a string of four of your color of chip before your opponent.  Winning combinations can be completed horizontally, vertically, or diagonally.

Gameplay: To play, choose your game mode (2-player or player-vs-computer) and then drag the current piece to the area just above the column of your choosing. After dropping your piece, the subsequent piece will repopulate the piece starting area. When game is completed, push the "NEW GAME" button and the board will be reset.

Technologies used: Javascript, JQuery, JQuery UI, JQuery UI Touch Punch, Bootstrap, and Google Fonts.

Things to fix: On mobile devices the sound for dropping a chip is not firing - after reading up on it, this looks like an issue with the sound not being attached to a touchEnd event and seems to be an iOS9 specific issue (apparently wasn't an issue on iOS8).

Room for improvement: 
-Adding a video background for large screen size (and toggling it off for smaller screen sizes) 
-Potentially making another media query for smaller phones (iPhone SE, iPhone 5, etc
-Improving the AI to include a more attack-based strategy, research minimax application.



History: "Connect Four" was designed by Howard Wexler and Ned Strongin and was released by Milton Bradley in 1974.

Fun Fact: For classic Connect Four, there are 4,531,985,219,092 different board positions.