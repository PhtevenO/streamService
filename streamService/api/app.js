const express = require('express')
const request = require('request')
const app = express()
const bodyParser = require('body-parser')
const fetch = require("node-fetch");



const url = 'https://srautas.lrt.lt'


app.get('/', (req, res)=>{

})


app.get('/getData', (req, res) =>{
res.json({'test': 'test'})
})

app.post('/postData', bodyParser.json(), (req, res) => {
  res.json(req.body)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
