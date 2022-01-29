// c)	Write a JS function to validate contents of a form
//      the form should have at least one mandatory numerical field
//      and one field to be checked with a regular expression (e.g. an e-mail).
//      Fields not passing validation should have
//      their style modified to inform the user.
//      The JS function should return false if form fails validation, true if it passes.

function validateData() {
    const formFields = {
        name: document.forms.stInfo.name,
        snum: document.forms.stInfo.snum,
        email: document.forms.stInfo.email
    }
    let isValid = true
    formFields.name.style.backgroundColor = 'green'
    formFields.snum.style.backgroundColor = 'green'
    formFields.email.style.backgroundColor = 'green'
    // name validation
    if (!formFields.name.value || /\d/.test(formFields.name.value)) {
        isValid = false
        formFields.name.style.backgroundColor = 'red'
    }
    // snum validation
    if (formFields.snum.value > 99999 || formFields.snum.value < 0 || !formFields.snum.value ) {
        isValid = false
        formFields.snum.style.backgroundColor = 'red'
    }
    // email validation
    if (!formFields.email.value || !/\S+@\S+\.\S+/.test(formFields.email.value)) {
        isValid = false
        formFields.email.style.backgroundColor = 'red'
    }
    return isValid
}