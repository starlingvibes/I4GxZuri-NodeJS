// Create a number guessing game to generate a number between the range of 1 and 2. The game should prompt users for their username (saved in cookie).
// Set range as function parameter and prompt the player to predict the generated number between the given range, at a correct guess, the game should award the player a point (also saved in cookie), and move them to stage 2 by increasing the range limit value by 1, e.g range is from 1 and 3 for stage 2 and so on. Connect replit account to github and save your program in github.

// importing the useful packages
const express = require('express');
const http = require('http');
const prompt = require('prompt-sync')();
const cookieParser = require('cookie-parser');

// initialize an express instance
const app = express();
// using the cookieparser middleware
app.use(cookieParser());

// get request to root path
app.get('/', (req, res) => {
  let point = 0;
  const username = prompt('Enter your username: ');
  // setting the cookies
  res.cookie('username', username);
  res.cookie('points', point);
  res.send('Welcome to my simple number guessing game :-)');
  // guesser function
  const guesser = (range = 1) => {
    const randomNumber = Math.round(Math.random() * range + 1);
    const guessedNumber = parseInt(
      prompt(
        `Hello ${
          username.charAt(0).toUpperCase() + username.slice(1)
        }, please enter a number between 1 and ${range + 1}: `
      )
    );

    if (randomNumber === guessedNumber) {
      point += 1;
      range += 1;
      // incrementing the points key by 1 per right guess
      req.cookies.points = parseInt(req.cookies.points) + 1;
      // console.log(req.cookies);
      console.log(
        `Congratulations, you've moved to Stage ${range} and have earned ${point} point(s)`
      );
      guesser(range);
    } else {
      console.log('Not quite right, please try again!');
      guesser(range);
    }
  };

  guesser();
});

app.listen(5000, () => console.log(`Server listening on port 5000...`));
