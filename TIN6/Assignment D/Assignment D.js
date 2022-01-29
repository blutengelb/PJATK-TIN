// d)	Write a JS function that will add a row to HTML table
//      based on contents of a form on the same page.
//      Function should be invoked using HTML button.

function addData() {
    const formFields = {
        name: document.forms.stInfo.name,
        snum: document.forms.stInfo.snum,
        email: document.forms.stInfo.email
    }
    const validated = validateData(formFields)
    if (validated) {
        const studentsTable = document.getElementById('students')
        const newRow = studentsTable.insertRow(-1)
        newRow.insertCell(0).appendChild(document.createTextNode(formFields.name.value))
        newRow.insertCell(1).appendChild(document.createTextNode(formFields.snum.value))
        newRow.insertCell(2).appendChild(document.createTextNode(formFields.email.value))
    }
}

function validateData(formFields) {
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
    if (formFields.snum.value > 99999 || formFields.snum.value < 0 || !formFields.snum.value) {
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