const express = require('express')
const app = express()
const request = require('request');
const url = 'https://www.lrt.lt/servisai/stream_url/live/get_live_url.php?channel=LTV1';
const https = require('https')

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/program', (req,res)=>{
  const request = https.get('https://www.lrt.lt/static/tvprog/tvprog.json', (response)=>{
    console.log(response)
    response.pipe(res);
  })
})

app.get('/getVideo',(req, res)=>{
  const request = https.get(url, (response)=>{
    console.log('new Request');
    response.pipe(res)
  });
  request.on('error',(e)=>{
    console.error(e);
  });
  request.end();
})



app.get('/', (req, res)=>{
  res.send('Server is Up')
})
app.listen(3000, () => console.log('App listening on port 3000!'))
