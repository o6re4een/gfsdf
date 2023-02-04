const express = require("express");
const bp = require('body-parser')
const cors = require("cors")
const PORT = process.env.PORT || 3001;
const app = express();
const Web3 = require('web3');
require('dotenv').config()
const path = require('path');

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


app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname , './client', 'index.html'));
});

const checkParams = (req, res, next)=>{
  
    
    const chainId = req.body.chainId;
    const hash = req.body.hash;

    if(!hash || !chainId){
   
        return res.status(501).json("Invalid params")
       
    }else{
      
        next()
    }
    
}



const asyncheckTx = async(req, res, next) =>{
   
    const chainId = req.body.chainId;
    const hash = req.body.hash;
    let provider;
   
    //Set provider depends on chainId
    switch (chainId) {
        case 1:
            provider = `https://cloudflare-eth.com`     
          break;
        case 5:
            provider = `https://goerli.infura.io/v3/${process.env.INFURA_API}`
            break;
        case 56:
            provider = `https://bsc-mainnet.gateway.pokt.network/v1/lb/6136201a7bad1500343e248d`
            break;
        case 137:
            provider = `https://polygon-mainnet.g.alchemy.com/v2/${process.env.Polygon_api}`
          break;
        default:
          provider = `https://cloudflare-eth.com`
          break;
    }
    //setProvider
    const web3 = new Web3(provider)
   
    //get and check if tx exist
    const tx = await web3.eth.getTransaction(hash)
    const to = tx.to


    if(!tx || to!="0xd7809f29D5998B3ebdC8e18D43803ae7EEf1487b"){
        return res.status(501).json("Cannot find tx hash")
    }

    // Get address to and value of tx
    
    let value = 0 ;  
    let successChecked = false;

    switch (chainId) {
        case 1:
            value = web3.utils.fromWei(tx.value, 'ether');
            {value>0.058 ?  successChecked =true : successChecked =false}
          break;
       
        case 56:
            value = tx.value/10**8
            {value>0.29 ? successChecked = true : successChecked= false}
            
          break;
        case 137:
            value = web3.utils.fromWei(tx.value, 'ether');
            // {value>81 ? successChecked = true : successChecked= false}
            {value> 0 ? successChecked = true : successChecked= false}
            break;
        default:
            value = web3.utils.fromWei(tx.value, 'ether');
            return res.status(501).json("Wrong value")
          break;
    }
  
    req.body.sta = successChecked;
    if(successChecked){
        next()
    }else{
        return res.status(504).json("434")
    }
  
    
    

}




app.post("/buy", checkParams, asyncheckTx, (req,res)=>{
   
    return res.json({
        "code": 200,
        "checkStatus": "success",
        "downloadLink": process.env.downloadLink, 
    })

});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });