const express = require('express');
// const cors = require('cors');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express()

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    const bodyReq = req.body
    res.send('hello world kmn acen sobay')
})

const users = [
    { id: 1, name: 'sabana', email: 'saba@gamil.com', phone: '0183283443' },
    { id: 2, name: 'sabana-alamgir', email: 'saba@gamil.com', phone: '0183283443' },
    { id: 3, name: 'sabnur', email: 'saba@gamil.com', phone: '0183283443' },
    { id: 4, name: 'purnima', email: 'saba@gamil.com', phone: '0183283443' },
    { id: 5, name: 'japor iqbal', email: 'saba@gamil.com', phone: '0183283443' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }

})

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)

    res.send(user)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'orange', 'lemon'])
})

app.listen(port, () => {
    console.log('port is running', port);
})