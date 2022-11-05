import { ethers } from "ethers";
import * as fs from 'fs';
let output = fs.readFileSync('api.key.json');
let providers = JSON.parse(output);
//const provider = ethers.getDefaultProvider();
//let alchemyProviders = new ethers.providers.AlchemyProvider("homestead", providers.alchemy[0].apikey);
const alchemyProviders = new Array();
for (const alchemy of providers.alchemy) {
    let key = alchemy.apikey;
    alchemyProviders.push(new ethers.providers.AlchemyProvider("homestead", key));
}


const main = async () => {
    for (const alchemyProvider of alchemyProviders) {
        let balanceFromAlchemy = await alchemyProvider.getBalance(`vitalik.eth`);
        console.log(`ETH Balance of vitalik from alchemy: ${ethers.utils.formatEther(balanceFromAlchemy)} ETH`);
    }
    console.log('round finish!')
}
main()

setInterval(main, 30000);

/*
var ethers = require('ethers');
var url = 'https://mainnet.infura.io/v3/<API-KEY>';
var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
customHttpProvider.getBlockNumber().then((result) => {
    console.log("Current block number: " + result);
});
*/