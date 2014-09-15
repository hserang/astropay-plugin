var assert = require('assert');
var Astropay = require(__dirname+'/..');

describe('Astropay Invoice Generator', function() {

  it('should generate an invoice', function(done) {

    invoiceGenerator = new Astropay.InvoiceGenerator();

    invoiceGenerator.generateInvoice({
      
    })
    .then(function(invoice) {
      assert(invoice);
    };)
  });
});

