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
    },
    success: function () {
        $('#form-contact').fadeOut();
        $('#contact-success').fadeIn();
    }

});
