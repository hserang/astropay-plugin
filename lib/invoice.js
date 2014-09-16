function Invoice(options) {

    this.amount = options.amount;
    this.currency = options.currency;
    this.bank = options.bank;
    this.country = options.country;
    this.description = options.description;
    this.iduser = options.iduser;
    this.cpf = options.cpf;
    this.name = options.name;
    this.email = options.email;
    this.bdate = options.bdate;
    this.address = options.address;
    this.zip = options.zip;
    this.city = options.city;
    this.state = options.state;
    this.mobile = options.mobile;
    this._return = options._return;
    this.confirmation = options.confirmation;
}

Invoice.prototype = {


};

module.exports = Invoice;