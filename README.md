astropay-plugin
===============

Bridge in and out of Ripple via Astropay and its banking APIs.

## Installation

    npm install --save gatewayd-astropay

## Usage

    var AstropayPlugin = require('gatewayd-astropay');

    module.exports = function(gatewayd) {
      var astropayPlugin = new AstropayPlugin({
        gatewayd: gatewayd
      });
       
      gatewayd.server.use('/astropay', astropayPlugin.router);
      gatewayd.processes.add(astropayPlugin.processes.outToAstropay);
    }

