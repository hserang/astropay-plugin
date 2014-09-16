var Astropay = require(__dirname+'/../');
var assert = require('assert');

describe('Astropay Service', function() {

    it('should map required fields to Astropay fields',  function() {
        var service = new Astropay.Service({merchantId: 'login123', transactionKey: 'trans_key_test', secretKey: 'secretkey324802394'});

        var invoice = new Astropay.Invoice({
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

        var formatted = service.formatInvoice(invoice);
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

    it('should throw an error when validating an invoice with a missing mandatory field',  function() {
        var service = new Astropay.Service({merchantId: 'login123', transactionKey: 'trans_key_test', secretKey: 'secretkey324802394'});

        var invoice = new Astropay.Invoice({
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

        assert.doesNotThrow(function() { service.validateInvoice(invoice) }, Error);
        invoice.currency = undefined;
        assert.throws(function() { service.validateInvoice(invoice) }, Error);
        invoice.currency = 'USD';
        invoice.bank = undefined;
        assert.throws(function() { service.validateInvoice(invoice) }, Error);
        invoice.bank = 'BR';
        invoice.country = undefined;
        assert.throws(function() { service.validateInvoice(invoice) }, Error);
        invoice.country = 'BR';
        invoice.description = undefined;
        assert.throws(function() { service.validateInvoice(invoice) }, Error);
        invoice.description = 'Hello, this is a description';
        invoice.iduser = undefined;
        assert.throws(function() { service.validateInvoice(invoice) }, Error);
        invoice.iduser = 'Userivan123';
        invoice.cpf = undefined;
        assert.throws(function() { service.validateInvoice(invoice) }, Error);
        invoice.cpf = '1234356789';
        invoice.name = undefined;
        assert.throws(function() { service.validateInvoice(invoice) }, Error);
        invoice.name = 'Ivan Lolivier';
        invoice.email = undefined;
        assert.throws(function() { service.validateInvoice(invoice) }, Error);
        invoice.email = 'ivan@astropaycard.com';
        invoice.bdate = undefined;
        assert.throws(function() { service.validateInvoice(invoice) }, Error);
    });
});
