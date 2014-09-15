var Astropay = require(__dirname+'/../');

describe('Astropay Bank List', function() {
  it('should return a list of valid bank codes for a given country', function() {
    var bankList = new Astropay.BankList();
    var brazilianBanks = banklist.getBanksByCountry('Brazil'); 

    assert.strictEqual(brazilianBanks[0].code, 'I');
    assert.strictEqual(brazilianBanks[0].description, 'Itau');

    assert.strictEqual(brazilianBanks[1].code, 'BL');
    assert.strictEqual(brazilianBanks[1].description, 'Boleto');

    var chileanBanks = banklist.getBanksByCountry('Chile'); 

    assert.strictEqual(chileanBanks[0].code, 'WP');
    assert.strictEqual(chileanBanks[0].description, 'Credit Cards, Debit Cards and Online Bank Payments');

    assert.strictEqual(chileanBanks[1].code, 'PA');
    assert.strictEqual(chileanBanks[1].description, 'BCP (via LatinAmericanPayments)');
  });
});

function BankList() {

}

BankList.prototype = {
  getBanksByCountry: function(country) {
  }
}

module.exports = BanksList;

