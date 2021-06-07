  
const { getTransport, sendEmail } = require('./send-email')

const config = {
    service: 'gmail',
    email: '',
    password: ''
}

const destination = {
    remetente: '',
    email: '',
    subject: ''
}

const html =  ``

const transport = getTransport(config)

sendEmail(transport)(destination, html)
    .then(response => console.log(response))
    .catch(err => console.log(err))