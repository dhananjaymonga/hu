const express =  require('express')
const app =  express()
const port = 5000 ; 

app.get("/" ,(req ,res)=>{
    const query =   req.query
    console.log(query.app)
    res.status(200).send("all good")
})

app.listen(port, ()=>{
  console.log("sever start port is "+ port)
})
