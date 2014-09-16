var Astropay = require(__dirname+'/../');
var assert = require('assert');

describe('Astropay Bank List', function() {

    it('should return a list of valid bank codes for a given country', function() {
        var bankList = new Astropay.BankList();

        // Brazil
        var brazilianBanks = bankList.getBanksByCountry('Brazil');
        assert.strictEqual(brazilianBanks[0].code, 'I');
        assert.strictEqual(brazilianBanks[0].description, 'Itau');

        assert.strictEqual(brazilianBanks[1].code, 'BL');
        assert.strictEqual(brazilianBanks[1].description, 'Boleto');

        assert.strictEqual(brazilianBanks[2].code, 'B');
        assert.strictEqual(brazilianBanks[2].description, 'Bradesco');

        assert.strictEqual(brazilianBanks[3].code, 'BB');
        assert.strictEqual(brazilianBanks[3].description, 'Banco de Brasil');

        assert.strictEqual(brazilianBanks[4].code, 'H');
        assert.strictEqual(brazilianBanks[4].description, 'HSBC');

        assert.strictEqual(brazilianBanks[5].code, 'SB');
        assert.strictEqual(brazilianBanks[5].description, 'Santander');

        // Chile
        var chileanBanks = bankList.getBanksByCountry('Chile');
        assert.strictEqual(chileanBanks[0].code, 'WP');
        assert.strictEqual(chileanBanks[0].description, 'Credit Cards, Debit Cards and Online Bank Payments');

        // Peru
        var peruBanks = bankList.getBanksByCountry('Peru');
        assert.strictEqual(peruBanks[0].code, 'PA');
        assert.strictEqual(peruBanks[0].description, 'BCP (via LatinAmericanPayments)');

        assert.strictEqual(peruBanks[1].code, 'IB');
        assert.strictEqual(peruBanks[1].description, 'InterBank');

        assert.strictEqual(peruBanks[2].code, 'BP');
        assert.strictEqual(peruBanks[2].description, 'BBVA');

        assert.strictEqual(peruBanks[3].code, 'EF');
        assert.strictEqual(peruBanks[3].description, 'Pago Efectivo');

        // Mexico
        var mexicoBanks = bankList.getBanksByCountry('Mexico');
        assert.strictEqual(mexicoBanks[0].code, 'BV');
        assert.strictEqual(mexicoBanks[0].description, 'Bancomer (BBVA)');

        assert.strictEqual(mexicoBanks[1].code, 'BM');
        assert.strictEqual(mexicoBanks[1].description, 'Banamex');

        assert.strictEqual(mexicoBanks[2].code, 'SM');
        assert.strictEqual(mexicoBanks[2].description, 'Santander');

        assert.strictEqual(mexicoBanks[3].code, 'OX');
        assert.strictEqual(mexicoBanks[3].description, 'Oxxo');

        // Uruguay
        var uruguayBanks = bankList.getBanksByCountry('Uruguay');
        assert.strictEqual(uruguayBanks[0].code, 'RE');
        assert.strictEqual(uruguayBanks[0].description, 'Redpagos');


    });
});
