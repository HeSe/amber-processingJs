Amber-ProcessingJs
=====

By Sebastian Heidbrink

Amber is an implementation of the Smalltalk language that runs on top of the JavaScript runtime. It is designed to make client-side development faster and easier.
This Project enhances Amber by an interface layer to ProcessingJs. This shall make it easier to enhance Amber applications with data visualization capabilities.

About
-------
* License:                        MIT
* Amber Web Site:                 http://amber-lang.net
* Amber Github Repo:              http://github.com/NicolasPetton/amber
* ProcessingJs Web Site:          http://processingjs.org
* ProcessingJs Github Repo:       http://github.com/jeresig/processing-js


## Prerequisites

1. A web browser with reasonably good support for HTML5 canvas.
2. [nodejs](http://www.nodejs.org/). This will give you the node package manager `npm` as well.
3. A global install of the [`amber`](http://amber-lang.net/) [npm](http://npmjs.org/) package
4. A global install of the [`bower`](http://bower.io/) client side package manager in order to install the dependencies

The `amber` and `bower` packages can be installed with the following command (In some cases you have to call `npm` with `sudo npm`):

    npm install --global amber-cli bower

or the same thing, but less typing:

    npm i -g amber-cli bower

## Getting Started

Clone the repo, and start the amber server:

    git clone https://github.com/HeSe/amber-processingJs.git
    cd amber-processingJs
    amber serve

Point your browser to:

    http://localhost:4000/index.html

Enjoy!

The default port is 4000. Use --port to specify a custom port:

    amber serve --port 9000



