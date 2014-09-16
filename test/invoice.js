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

  it('should map required fields to Astropay fields',  function() {

    invoice = new Astropay.Invoice({
      amount: 199.95,
      currency: 'USD',
      bank: 'BB',
      country: 'BR',
      description: 'Hello, this is a description',
      iduser: 'Userivan123',
      cpf: '123456789',
      name: 'Ivan Lolivier',
      email: 'ivan@astropaycard.com',
      bdate: '19851908'
    });

    var formatted = invoice.formatRequest(); 
    assert.strictEqual(formatted.x_amount, invoice.amount);
    assert.strictEqual(formatted.x_currency, invoice.currency);
    assert.strictEqual(formatted.x_bank, invoice.bank);
    assert.strictEqual(formatted.x_country, invoice.country);
    assert.strictEqual(formatted.x_description, invoice.description);
    assert.strictEqual(formatted.x_iduser, invoice.iduser);
    assert.strictEqual(formatted.x_cpf, invoice.cpf);
    assert.strictEqual(formatted.x_name, invoice.name);
    assert.strictEqual(formatted.x_email, invoice.email);
    assert.strictEqual(formatted.x_bdate, invoice.bdate);
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
