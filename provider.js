import { ethers } from "ethers"
import * as fs from 'fs'
let output = fs.readFileSync('api.key.json')
let providers = JSON.parse(output)

const DELAY = 2000;
/*
await new Promise(resolve => setTimeout(resolve, 1000));
*/

let providerToId = new Map()
for (const p of providers.alchemy) {
    const provider = new ethers.providers.AlchemyProvider("homestead", p.apikey)
    providerToId.set(provider, p.id)
}

let infuraProvider = new ethers.providers.JsonRpcProvider(providers.infura[0].https)
providerToId.set(infuraProvider, providers.infura[0].id)

const main = async() => {
    console.log('the iteration begins:');

    for (const [p, id] of providerToId.entries()) {
        console.log('\n\n', p.connection.url, id)
        const balance = await p.getBalance(`vitalik.eth`)
        console.log(`ETH Balance of vitalik: ${ethers.utils.formatEther(balance)} ETH`)
        await new Promise(resolve => setTimeout(resolve, DELAY));

        //check network
        const network = await p.getNetwork();
        console.log('current network: ', network.name)
        await new Promise(resolve => setTimeout(resolve, DELAY));

        //check block
        const blockNumber = await p.getBlockNumber()
        console.log('currentBlocknumber: ', blockNumber);
        await new Promise(resolve => setTimeout(resolve, DELAY))

        //check gas price
        const gasPrice = await p.getGasPrice()
        console.log('gasPrice: ', gasPrice)
        await new Promise(resolve => setTimeout(resolve, DELAY))

    }
}
//main()
setInterval(main, 120000);