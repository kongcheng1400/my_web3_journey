import { ethers } from "ethers";
import * as fs from 'fs';
let output = fs.readFileSync('api.key.json');
let providers = JSON.parse(output);
//const provider = ethers.getDefaultProvider();
//let alchemyProviders = new ethers.providers.AlchemyProvider("homestead", providers.alchemy[0].apikey);




/*
var ethers = require('ethers');
var url = 'https://mainnet.infura.io/v3/<API-KEY>';
var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
customHttpProvider.getBlockNumber().then((result) => {
    console.log("Current block number: " + result);
});
*/