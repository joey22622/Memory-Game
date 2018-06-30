# Memory-Game

Card randomizing, GIF-themed memory game

**Gameplay Description**

* To initiate gameplay, user searches for a type of GIF which queries the GIPHY API, returning 12 results that will be printed to the page as cards.
* Once cards are printed to the page, the user aims to click as many cards as possible without clicking the same one twice.
* After every click the cards will reprint in a new random order.  Correct clicks will incrementally increase the score while incorrect clicks will reset the score to zero.
* If the score becomes greater than the high score, high score will equal the current score
* At any time, the user can initiate a new search for GIFS that will repopulate the page.


**Code Details**
* This app uses the following languages/libraries: *CSS, Javascript, React, HTML*
* API calls are made to the GIPHY API


**FILE STRUCTURE**

.
├── README.md
├── build
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── service-worker.js
│   └── static
│       ├── css
│       │   ├── main.1cec16d1.css
│       │   └── main.1cec16d1.css.map
│       └── js
│           ├── main.4c62e245.js
│           └── main.4c62e245.js.map
├── package.json
├── public
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── service-worker.js
├── src
│   ├── App.css
│   ├── App.js
│   ├── components
│   │   ├── Card.js
│   │   └── GameStart.js
│   ├── index.js
│   ├── registerServiceWorker.js
│   └── utils
│       └── API.js
├── static
│   ├── css
│   │   ├── main.23a31036.css
│   │   └── main.23a31036.css.map
│   └── js
│       ├── main.87a7d0e4.js
│       └── main.87a7d0e4.js.map
└── yarn.lock