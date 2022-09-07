# Seven at One Blow

## Description 
Seven at One Blow is a text adventure game, an experiment in how to make the original video game. 

Adapted from a Brothers Grimm fairy tale, the narrative puts you in the role of a quick-witted tailor with a vastly inflated ego.  

You can play the game [here](https://seven-at-one-blow.herokuapp.com/).

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Contributing](#contributing)
* [Credits](#credits)
* [License](#license)


## Installation

You can clone or fork this repository to play it on your computer offline. Once downloaded, run `npm run install`, `npm run seed`, and `npm run develop` to start a local server. Be sure to run the seed file, as the text of the story is held there. 

## Usage 

To play this game simply type a few simple commands into the mock terminal to solve the puzzles. All of the commands are hinted to in the text provided, see if you can get the right combination of words to progress through the storyline!

If you get stuck, use the `help` command to see what you can do. Alternatively, you can take a look at the original story this game is based on [found here](https://www.gutenberg.org/files/503/503-h/503-h.htm#link2H_4_0031). 

There's also a secret ending if you can find it! 

## Features

## Contributing

If you want to contribute, feel free to submit a pull request! 

The story is organized in two places, `./seeds/item.json` and `./seeds/story.json`. The former contains the various item documents which have pointers to the stages where there's relevant text to print. The latter simply contains a matrix of all the possible text in the story in a chapter - stage format. Optional or error dialogue should be kept to the end of a given chapter, while core plot dialogue that every player encounters should be arranged in order at the start. 

There will soon be a helper file to edit the existing item script coordinates programmatically when inserting new dialogue options and paths. 

## Credits

This text-adventure is adapted from the fairy tale [The Brave Little Tailor](https://www.gutenberg.org/files/503/503-h/503-h.htm#link2H_4_0031), which can be found at the link. 

The icon for this site was taken from [flaticon.io](https://www.flaticon.com/free-icons/sew)

### Technologies Used

* MongoDB
* Mongoose
* Express
* Apollo
* Graphql
* Bcrypt
* React
* The [terminal-in-react package](https://www.npmjs.com/package/terminal-in-react).

## [License](./LICENSE)
This website uses the open-source MIT License.

## Spoilers!
*We know that it can be tough figuring out the commands, so we've included a cheatsheet for each Chapter*

<details><summary>Chapter 1 — Discovering Greatness</summary>use needle on cloth, use cloth on flies, use needle on cloth, take cheese, take bird</details>
<details><summary>Chapter 2 — The Trials of a Giant</summary>use belt, use cheese, use bird, branches?!?!?!?!?, use floor, use bed</details>
<details><summary>Chapter 3 — A Royal Trifle</summary>take bones, use bones on giant, use bones on giant, use bones on giant, use bones on giant, use sword on giant</details>
<details><summary>Chapter 4 — The Narrow Escape</summary>use tree, use rope</details>
<details><summary>Chapter 5 — The Regal Resolve</summary>none?</details>

--- 