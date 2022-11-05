import { ethers } from "ethers";
import * as fs from 'fs';
let output = fs.readFileSync('api.key.json');
let providers = JSON.parse(output);
const alchemyProviders = new Array();
for (const alchemy of providers.alchemy) {
    let key = alchemy.apikey;
    alchemyProviders.push(new ethers.providers.AlchemyProvider("homestead", key));
}

let url = 'https://mainnet.infura.io/v3/fbd7e21dd9324b38b56294db620093cf';
let infuraProvider = new ethers.providers.JsonRpcProvider(url);
infuraProvider.getBlockNumber().then((result) => {
    console.log("Current block number: " + result);
});

const main = async () => {
    for (const alchemyProvider of alchemyProviders) {
        let balanceFromAlchemy = await alchemyProvider.getBalance(`vitalik.eth`);
        console.log(`ETH Balance of vitalik from alchemy: ${ethers.utils.formatEther(balanceFromAlchemy)} ETH`);
    }

    let url = 'https://mainnet.infura.io/v3/fbd7e21dd9324b38b56294db620093cf';
    let infuraProvider = new ethers.providers.JsonRpcProvider(url);
    infuraProvider.getBlockNumber().then((result) => {
        console.log("Current block number from infura: " + result);
    });
    console.log('round finish!')
}
main()

setInterval(main, 50000);

/*
var ethers = require('ethers');
var url = 'https://mainnet.infura.io/v3/fbd7e21dd9324b38b56294db620093cf';
var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
customHttpProvider.getBlockNumber().then((result) => {
    console.log("Current block number: " + result);
});
*/