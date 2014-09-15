var Astropay = require('astropay');

describe('Astropay Invoice', function() {
  
  before(function() {

    var astropay = new Astropay.Service({
      merchantId: process.env.ASTROPAY_MERCHANT_ID,
      transactionKey: process.env.ASTROPAY_TRANSACTION_KEY,
      secretKey: process.env.ASTROPAY_SECRET_KEY
    })
  
  });

  it('should map required fields to Astropay fields',  function(done) {

    invoice = new Astropay.Invoice({
      amount: 15,
      currency: '',
      bank: '',
      country: '',
      description: '',   
      iduser: '',
      cpf: '',
      name: '',
      email: '',
      bdate: '',
      control: ''
    });

    var formatted = invoice.formatRequest(); 
    assert.strictEqual(formatted.x_amount, invoice.amount);
  });

  it('should map optional required fields to Astropay fields',  function(done) {
    invoice = new Astropay.Invoice({
      address: '',
      zip: '',
      city: '',
      state: '',
      mobile: '',
      _return: '',
      confirmation: '',
    }) 
  });

  it('should throw an Error given invalid parameters', function(done) {

    invoice = new Astropay.Invoice({
      amount: 15,
      currency: 'XAG',
      bank: 'SAL'
    });

    var formatted = invoice.formatRequest();
  });

})
