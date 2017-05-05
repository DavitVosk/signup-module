export default (values) => {
    const { email, password, confirm_password } = values;
    const requiredFields = ['email', 'password'];

    const errors = {};
    if (email && ! /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address';
    }

    if (password && password.length < 6) {
        errors.password = 'Password must be not less then 6 symbols';
    }

    if (password !== confirm_password) {
        errors.confirm_password = 'Password confirmation must match the password';
    }

    requiredFields.forEach(field => {
        if (! values[field]) {
            errors[field] = 'Required'
        }
    });

    return errors;
};

