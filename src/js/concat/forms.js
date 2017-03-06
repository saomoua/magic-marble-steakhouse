$("#form-contact").validate({
    rules: {
        name: {
            required: true,
            minlength: 3
        },
        email: {
            required: true,
            email: true
        },
        message: {
            required: true,
            minlength: 3
        }
    },
    submitHandler: function (form) {
        form.submit();
    }
});
