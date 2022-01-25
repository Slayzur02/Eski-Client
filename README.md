# Overview & motivation

This project is the client for a chess-repertoire building app: Eski Chess. 

The app has been built to service intermediate / advanced chess players in their paths to becoming stronger players - specifically through the building and learning of opening repertoires. 

## Instructions

The setup for the app requires the setup for the server as well. Since the server is responsible for the logic and validation of chess moves (which is a backbone requirement of all chess games), chess cannot be played without the server-setup. Instructions for the server, however, are not included here, and is at: https://github.com/Slayzur02/Eski-Server

1. Clone the project: `git clone https://github.com/Slayzur02/Eski-Client`
2. Install dependencies: `npm install`
3. Set up the server at: https://github.com/Slayzur02/Eski-Server 
4. Start the development server: `npm run start`

Yarn users: you know what to do ( I believe anyone who uses yarn over npm should have a solid understanding of the similarities and differences between the two package managers, and everything here is pretty trivial).

## Features

1. As a project to serve the building of opening repertoires, main focus is on an intuitive, fast line-by-line chess explorer. Users can add, remove, edit, annotate, star moves, and the book can be extended infinitely. 
2. Learning system that helps users memorize "queried" lines from each book. 
3. Online chess system with elo rating. Includes all chess rules such as castling, en-pessant, under-promotion, and so on. 
4. All chess boards have the associated PGN export for analysis at Lichess if needed. 

## Tech Stack

1. The project uses Create React App for the main "bootstrapper", with TailwindCSS for the styling. Typescript included. No global state manager except context + useReducer. 
2. Main package for building the chess board is: react-drag-and-drop. This was used to create my own customizable chess package on [npm]([here](https://www.npmjs.com/package/chess-package))
3. Uses websockets for move validation and board monitering, and REST for the rest. 

Reasoning: The choice for Create React App was due to its simplicity of setup. I also considered Next (which is amazing, but does not allow fluid websocket libs), and nano-react-app (which was much lighter and enjoyable to work with, but I was scared of its maturity at the time). TailwindCSS is my go-to for styling, simply because of the standardization of its design and speed of development, and I don't care enough to write only css. Typescript was used since this is a fairly big project and the chessboard itself had many, many types, and I wanted to publish a chess package alternative ([here](https://www.npmjs.com/package/chess-package)) from the existing ones, which are all pretty outdated.  React-drag-and-drop was just flexible enough for building the chess board, without being too restrictive and outdated like other more complete chess versions I found elsewhere. And finally, the choice for communication protocols was obvious, since I did not find a good use case for graphQL within the app (as the API changes were not rapid in teams, nor did the data structure require anything other than SQL). 