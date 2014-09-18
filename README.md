UWDECA
======

University of Waterloo DECA Website

Setup Dev Environment 
-----

### Dependencies

Ensure the following items are installed/running on your machine.
- MongoDB
- Redis
- NodeJS
- bower (frontend dependency management)
- jake (task runer)

`./config/development.json` provides config values for development environment and are set to defualts for both mongo and redis. If different, either edit the development.json config file or create a new one and start the server using:

    node server TYPE=nameOfEnvironment


### Setup

1. clone the repo
2. install node dependencies using `npm install`
3. install frontend dependencies using `bower install`
4. compile everything using `jake compile`
5. run the server: `node server`
