import { ethers } from "ethers";
import * as fs from 'fs';
let output = fs.readFileSync('api.key.json');
let providers = JSON.parse(output);
//const provider = ethers.getDefaultProvider();
let alchemyProvider = new ethers.providers.AlchemyProvider("homestead", providers.alchemy[0].apikey);
let infuraProvider = new ethers.providers.InfuraProvider("homestead", providers.infura[0].apikey);
let infuraHttpProvider = new ethers.providers.JsonRpcProvider(infuraProvider.connection.url);
infuraHttpProvider.getBlockNumber().then((result) => {
    console.log("Current block number: " + result);
});
//console.log(infuraProvider);
const main = async () => {
    let balanceFromAlchemy = await alchemyProvider.getBalance(`vitalik.eth`);
    console.log(`ETH Balance of vitalik from alchemy: ${ethers.utils.formatEther(balanceFromAlchemy)} ETH`);
}
main()

setInterval(main, 6000);

/*
var ethers = require('ethers');
var url = 'https://mainnet.infura.io/v3/<API-KEY>';
var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
customHttpProvider.getBlockNumber().then((result) => {
    console.log("Current block number: " + result);
});
*/