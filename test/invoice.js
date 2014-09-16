var Astropay = require(__dirname+'/../');
var assert = require('assert');

describe('Astropay Invoice', function() {
  
  before(function() {

    var astropay = new Astropay.Service({
      merchantId: process.env.ASTROPAY_MERCHANT_ID,
      transactionKey: process.env.ASTROPAY_TRANSACTION_KEY,
      secretKey: process.env.ASTROPAY_SECRET_KEY
    })
  
  });

  it('should map optional required fields to Astropay fields',  function() {
    invoice = new Astropay.Invoice({
      address: 'Bonavita 1225',
      zip: '11300',
      city: 'Montevideo',
      state: 'MO',
      mobile: '099123456',
      _return: 'http://astropaycard.com/ret',
      confirmation: 'http://astropaycard.com/conf'
    });
    assert.strictEqual('Bonavita 1225', invoice.address);
    assert.strictEqual('11300', invoice.zip);
    assert.strictEqual('Montevideo', invoice.city);
    assert.strictEqual('MO', invoice.state);
    assert.strictEqual('099123456', invoice.mobile);
    assert.strictEqual('http://astropaycard.com/ret', invoice._return);
    assert.strictEqual('http://astropaycard.com/conf', invoice.confirmation);

  });

  it('should throw an Error given invalid parameters', function() {

    invoice = new Astropay.Invoice({
      amount: 15,
      currency: 'XAG',
      bank: 'SAL'
    });

    var formatted = invoice.formatRequest();
  });

});
