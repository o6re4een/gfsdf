const express = require("express");
const bp = require('body-parser')
const cors = require("cors")
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config()
const path = require('path');
const QiwiBillPaymentsAPI = require('@qiwi/bill-payments-node-js-sdk');

const SECRET_KEY = process.env.SECRET_KEY
const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY);


const corsOptions = ({
  origin: "*",
  credentials: true
})
app.use(express.static(path.join(__dirname, './client')));
app.use(
  cors()
);


app.options('/*', (_, res) => {
    res.sendStatus(200);
  });
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


// app.get('/', (req,res) =>{
//     res.sendFile('index.html', {root: path.join(__dirname, './client')});
// });



app.post("/bill", async(req,res)=>{
   
    const billId = qiwiApi.generateId();
    const lifetime = qiwiApi.getLifetimeByDay(1);
    console.log("first")

    const fields = {
        amount: 5000,
        currency: 'RUB',
        comment: 'Trade bot',
        expirationDateTime: lifetime,
        successUrl: 'https://clck.ru/33SmAy',
       
    };
    const data = await qiwiApi.createBill( billId, fields)
   
    return res.json({
        payUrl: data.payUrl
       })


    
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

module.exports = app;