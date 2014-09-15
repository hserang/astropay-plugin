astropay-plugin
===============

Bridge in and out of Ripple via Astropay and its banking APIs.

## Installation

    npm install --save gatewayd-astropay

## Usage

    var AstropayPlugin = require('gatewayd-astropay');

    module.exports = function(gatewayd) {
      var astropayPlugin = new AstropayPlugin({
        gatewayd: gatewayd,
        merchantId: gatewayd.config.get('ASTROPAY').merchantId,
        apiKey: gatewayd.config.get('ASTROPAY').apiKey
      });
       
      gatewayd.server.use('/astropay', astropayPlugin.router);
      gatewayd.processes.add(astropayPlugin.processes.outToAstropay);
    }

### Astropay API Documentation

"Streamline" API -- payments to merchants -- "inbound bridge"

    https://merchant.astropay.com/downloads/AstroPay_STREAMLINE_API.pdf
