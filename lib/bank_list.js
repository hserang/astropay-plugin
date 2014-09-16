function BankList() {
    this.map = {
        'brazil' : [{code : 'I', description : 'Itau'},
            {code : 'BL', description : 'Boleto'},
            {code : 'B', description : 'Bradesco'},
            {code : 'BB', description : 'Banco de Brasil'},
            {code : 'H', description : 'HSBC'},
            {code : 'SB', description : 'Santander'}],
        'chile' : [{code : 'WP', description : 'Credit Cards, Debit Cards and Online Bank Payments'}],
        'peru' : [{code : 'PA', description : 'BCP (via LatinAmericanPayments)'},
            {code : 'IB', description : 'InterBank'},
            {code : 'BP', description : 'BBVA'},
            {code : 'EF', description : 'Pago Efectivo'}],
        'mexico' : [{code : 'BV', description: 'Bancomer (BBVA)'},
            {code : 'BM', description : 'Banamex'},
            {code : 'SM', description : 'Santander'},
            {code : 'OX', description : 'Oxxo'}],
        'uruguay' : [{code : 'RE', description : 'Redpagos'}]
    }
}

BankList.prototype = {
    getBanksByCountry: function(country) {
        return this.map[country.toLowerCase()];
    }
};

module.exports = BankList;