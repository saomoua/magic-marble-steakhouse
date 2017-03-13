$("#form-contact").validate({
    rules: {
        contactName: {
            required: true,
            minlength: 3
        },
        contactEmail: {
            required: true,
            email: true
        },
        contactMessage: {
            required: true,
            minlength: 3
        }
    },

    submitHandler: function (form) {
        form.submit();
        alert("Thank you for sending your message! We appreciate you taking the time to contact us, to let us know how we are doing and serving you. We hope that you share us with your friends and return to enjoy our food. If you have requested a response, we will get back to you within 48 business hours.") 
    }

});
