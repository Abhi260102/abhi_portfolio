function FormValidation() {
    return {
        fullName: {
            required: 'Please enter full name.', minLength: {
                value: 2,
                message: 'Name must be at least 2 characters',
            },
            maxLength: {
                value: 30,
                message: 'Name must not exceed 30 characters.',
            },
            pattern: {
                value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                message: 'Name should contain only letters and single spaces.',
            },
        },

        email: {
            required: "Please enter email ID.",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter valid email ID."
            },
            validate: {
                whiteSpace: value => (value.trim() ? true : 'White space not allowed.')
            }
        },

        mobile: {
            required: "please enter Mobile No.",
            minLength: {
                value: 10,
                message: 'Minimum length should be 10 digits.'
            },
            min: {
                value: 0,
                message: 'Minimum value must is 0.'
            },
            maxLength: {
                value: 10,
                message: 'Maximum length should be 10 digits.'
            }
        },
        description: {
            required: 'Please enter description.',
            minLength: {
              value: 10,
              message: 'Description should contains at least 10 characters.'
            },
            maxLength: {
              value: 500,
              message: 'Description should not exceed 350 characters.'
            },
            validate: {
              whiteSpace: value => (value.trim() ? true : 'White space not allowed.')
            }
          },

    }
}

export default FormValidation