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
            throw new Error('Amount field is required');
        }
        if (!invoice.currency) {
            throw new Error('Currency field is required');
        }
        if (!invoice.bank) {
            throw new Error('Bank field is required');
        }
        if (!invoice.country) {
            throw new Error('Country field is required');
        }
        if (!invoice.description) {
            throw new Error('Description field is required');
        }
        if (!invoice.iduser) {
            throw new Error('ID User field is required');
        }
        if (!invoice.cpf) {
            throw new Error('CPF field is required');
        }
        if (!invoice.name) {
            throw new Error('Name field is required');
        }
        if (!invoice.email) {
            throw new Error('Email field is required');
        }
        if (!invoice.bdate) {
            throw new Error('Bdate field is required');
        }
        // Validate that this is a decimal
        if (!invoice.amount) {

        }
        if (invoice.currency.length != 3) {
            throw new Error('Currency field must be 3 characters');
        }
        if (invoice.bank.length > 3) {
            throw new Error('Bank field cannot be greater than 3 characters');
        }
        if (invoice.country.length != 2) {
            throw new Error('Country field must be 2 characters');
        }
        if (invoice.description.length > 200) {
            throw new Error('Description field cannot be greater than 200 characters');
        }
        if (invoice.iduser.length > 20) {
            throw new Error('ID User field cannot be greater than 20 characters');
        }
        if (invoice.cpf.length > 30) {
            throw new Error('CPF field cannot be greater than 30 characters');
        }
        if (invoice.bdate.length != 8) {
            throw new Error('Bdate field must be in YYYYMMDD format');
        }
        // If optional fields exists, validate the correct length
        if (invoice.zip && invoice.zip.length > 10) {
            throw new Error('Optional zip field cannot be greater than 10 characters');
        }
        if (invoice.state && invoice.state.length != 2) {
            throw new Error('Optional state field must be 2 characters');
        }
        if (invoice.mobile && invoice.mobile > 20) {
            throw new Error('Optional mobile field cannot be greater than 20 characters');
        }
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
    },

    generateControlString : function (invoice) {

    }
};

module.exports = Service;