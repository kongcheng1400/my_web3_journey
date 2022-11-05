import { ethers } from "ethers"
import * as fs from 'fs'
let output = fs.readFileSync('api.key.json')
let providers = JSON.parse(output)

let providerToId = new Map()
for (let p of providers.alchemy) {
    let provider = new ethers.providers.JsonRpcProvider(p.https)
    console.log(p.https, provider.apikey)
    providerToId.set(provider, p.id)
}
/*
let infuraProvider = new ethers.providers.JsonRpcProvider(providers.infura[0].https)
urlToId.set(infuraProvider, providers.infura[0].id);
*/

const main = async() => {
    console.log('the iteration begins:');
    for (const [p, id] of providerToId.entries()) {
        console.log(p.apikey, id)
        const balance = await p.getBalance(`vitalik.eth`)
        console.log(`ETH Balance of vitalik: ${ethers.utils.formatEther(balance)} ETH`)
    }
}
main()