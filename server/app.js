const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const router = require('./routes/api')
const cors = require('cors')
const app = express()
dotenv.config()

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors())
app.use(bodyParser.json())
// app.use('/', router )
app.use(router)
// app.use(cors(corsOptions))
    


// app.use(cors({
//     origin: 'http://localhost:3000'
// }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin", "x-Requested-With", "Content-Type", "Accept", "Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({})
    }
    next();
})


const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  //  useFindAndModify : false
}

mongoose.connect(process.env.DB_CONNECT , connectionParams)
.then(() => console.log("connected to DB"))
.catch(err => console.log(err))



app.listen(process.env.PORT , ()=>console.log(`listening port ${process.env.PORT}`))


