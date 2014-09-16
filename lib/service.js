function Service(options) {
    this.merchantId = options.merchantId;
    this.transactionKey = options.transactionKey;
    this.secretKey = options.secretKey;
}

Service.prototype = {

    generateInvoice : function(invoice) {

    },

    validateInvoice : function(invoice) {
        if (!invoice.amount) {
            // Mandatory field
        }
        if (!invoice.currency) {}
        if (!invoice.bank) {}
        if (!invoice.country) {}
        if (!invoice.description) {}
        if (!invoice.iduser) {}
        if (!invoice.cpf) {}
        if (!invoice.name) {}
        if (!invoice.email) {}
        if (!invoice.bdate) {}
    },

    formatInvoice : function(invoice) {
        return {
            x_amount : invoice.amount,
            x_currency : invoice.currency,
            x_bank : invoice.bank,
            x_country : invoice.country,
            x_description : invoice.description,
            x_iduser : invoice.iduser,
            x_cpf : invoice.cpf,
            x_name : invoice.name,
            x_email : invoice.email,
            x_bdate : invoice.bdate,
            x_address : invoice.address,
            x_zip : invoice.zip,
            x_city : invoice.city,
            x_state : invoice.state,
            x_mobile : invoice.mobile,
            x_return : invoice._return,
            x_confirmation : invoice.confirmation
        }
    } 

};

module.exports = Service;