
const next = require('next');
const express = require('express')
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express()

  // server.get('/post/:id', (req, res)=> {
  //   console.log(req.params)
  //   app.render(req, res, "/post", {id: req.params.id}) 
  // })
  // server.get('/lol', (req, res)=> {
  //   res.send('lol') 
  // })
  // server.get('/auth/:req', (req, res)=> {
  //   console.log(req.params)
  //   app.render(req, res, "/auth", {req: req.params.req}) 
  // })
  server.get('*', (req, res) => {
    return handle(req,res)
  })

  server.listen(3000, err=>{
    if (err) throw err;
    console.log('> Now serving on localhost:3000')
  })
}).catch(err=>console.log(err))