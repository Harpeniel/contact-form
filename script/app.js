const firstnameInput = document.getElementById('firstname')
const lastnameInput = document.getElementById('lastname')
const emailInput = document.getElementById('email')
const queryInputs = document.querySelectorAll('input[name="query-type"]')
let checkedQueryInput = null
const messageTextArea = document.getElementById('message')
const cguInput = document.getElementById('cgu')
let isCguChecked = false
const submitBtn = document.querySelector('input[type="submit"]')
let firstname = firstnameInput.value
let lastname = lastnameInput.value
let email = emailInput.value
let message = messageTextArea.value

const firstnameErrorMessage = document.getElementById('firstname-error-message')
const lastnameErrorMessage = document.getElementById('lastname-error-message')
const emailErrorMessage = document.getElementById('email-error-message')
const queryTypeErrorMessage = document.getElementById('query-type-error-message')
const messageErrorMessage = document.getElementById('message-error-message')
const cguErrorMessage = document.getElementById('cgu-error-message')
submitBtn.addEventListener('click', e => {
    e.preventDefault()
    firstname = firstnameInput.value
    lastname = lastnameInput.value
    email = emailInput.value
    message = messageTextArea.value
    if (!firstname) {
        firstnameErrorMessage
            .classList.remove('sr-only')
        firstnameInput.classList.add('error')
        firstnameInput.setAttribute('aria-invalid', true)
    }
    if (!lastname) {
        lastnameErrorMessage
            .classList.remove('sr-only')
        lastnameInput.classList.add('error')
        lastnameInput.setAttribute('aria-invalid', true)
    }
    if (!email) {
        emailErrorMessage
            .classList.remove('sr-only')
        emailInput.classList.add('error')
        emailInput.setAttribute('aria-invalid', true)
    }
    if (!checkedQueryInput) {
        queryTypeErrorMessage.classList.remove('sr-only')
        queryInputs.forEach(input => {
            input.setAttribute('aria-invalid', true)
        })

    }
    if (!message) {
        messageErrorMessage
            .classList.remove('sr-only')
        messageTextArea.classList.add('error')
        messageTextArea.setAttribute('aria-invalid', true)
    }
    if (!isCguChecked) {
        cguErrorMessage
            .classList.remove('sr-only')
        cguInput.setAttribute('aria-invalid', true)
    }

    if (firstname && lastname && email && checkedQueryInput && message && isCguChecked) {
        const successTpl = document.getElementById('success-template')
        const successSection = successTpl.content.cloneNode(true)
        document.body.append(successSection)
        setTimeout(() => {
            document.querySelector('.success').remove()
        }, 3000)
    }
})

firstnameInput.addEventListener('input', () => {
    if (firstnameInput.value.trim()) {
        firstnameErrorMessage.classList.add('sr-only')
        firstnameInput.classList.remove('error')
        firstnameInput.setAttribute('aria-invalid', false)
    } else {
        firstnameErrorMessage.classList.remove('sr-only')
        firstnameInput.classList.add('error')
        firstnameInput.setAttribute('aria-invalid', true)
    }
})

lastnameInput.addEventListener('input', () => {
    if (lastnameInput.value.trim()) {
        lastnameErrorMessage.classList.add('sr-only')
        lastnameInput.classList.remove('error')
        lastnameInput.setAttribute('aria-invalid', false)
    } else {
        lastnameErrorMessage.classList.remove('sr-only')
        lastnameInput.classList.add('error')
        lastnameInput.setAttribute('aria-invalid', true)
    }
})
emailInput.addEventListener('input', () => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (regexEmail.test(emailInput.value)) {
        emailErrorMessage.classList.add('sr-only')
        emailInput.classList.remove('error')
        emailInput.setAttribute('aria-invalid', false)

    } else {
        emailErrorMessage.classList.remove('sr-only')
        emailInput.classList.add('error')
        emailInput.setAttribute('aria-invalid', true)
    }
})

queryInputs.forEach(queryInput => {
    queryInput.addEventListener('change', () => {
        queryTypeErrorMessage.classList.add('sr-only')
        checkedQueryInput = queryInput
        queryInputs.forEach(input => {
            input.setAttribute('aria-invalid', false)
        })
    })
})


messageTextArea.addEventListener('input', () => {
    if (messageTextArea.value.trim()) {
        messageErrorMessage.classList.add('sr-only')
        messageTextArea.classList.remove('error')
        messageTextArea.setAttribute('aria-invalid', false)
    } else {
        messageErrorMessage.classList.remove('sr-only')
        messageTextArea.classList.add('error')
        messageTextArea.setAttribute('aria-invalid', true)
    }
})

cguInput.addEventListener('change', () => {
    if (cguInput.checked) {
        cguErrorMessage.classList.add('sr-only')
        cguInput.classList.remove('error')
        isCguChecked = true
        cguInput.setAttribute('aria-invalid', false)

    } else {
        cguErrorMessage.classList.remove('sr-only')
        cguInput.classList.add('error')
        isCguChecked = false
        cguInput.setAttribute('aria-invalid', true)

    }
    
})