import style from '../css/style.css'

let messages = require('./messages');


let app = document.getElementById('app');
app.innerHTML = '<p>' + messages.hi + ' ' + messages.event + '</p>'

