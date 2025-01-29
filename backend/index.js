const express =  require('express')
const cors = require('cors')
const app =  express()
const port = 5000 ; 

app.use(cors({
  origin : "http://localhost:3000"
}))

app.use(express.json())

app.get("/" ,(req ,res)=>{
    const query =   req.query
    console.log(query.app)
    res.status(200).send("all good")
})

app.post("/logindata" ,(req, res)=>{
  const data = req.body
  console.log(data)
   res.json({"messages" : "dataSave"})
})

app.listen(port, ()=>{
  console.log("sever start port is "+ port)
})
