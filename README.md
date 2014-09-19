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

Getting started
===============

To get started you must first get the tools for this project:

    npm install -g amber-cli
    npm install -g bower

 and dependencies of this project:
 
    git submodule update --init --recursive
    npm install
    bower install

Afterwards execute the server:

`amber serve`

and point your browser to

`http://localhost:4000/`



