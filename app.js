  
const { getTransport, sendEmail } = require('./send-email')

const config = {
    service: 'gmail',
    email: 'bacochinakawai1@gmail.com',
    password: 'teteu1601'
}

const destination = {
    remetente: 'bacochinayt@gmail.com',
    email: 'bacochinayt@gmail.com',
    subject: 'mc maconha'
}

const html =  `<h1> Testando Diário do Noob`

const transport = getTransport(config)

sendEmail(transport)(destination, html)
    .then(response => console.log(response))
    .catch(err => console.log(err))