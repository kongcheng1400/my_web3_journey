import { ethers } from "ethers";
var url = 'https://mainnet.infura.io/v3/fbd7e21dd9324b38b56294db620093cf';
var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
customHttpProvider.getBlockNumber().then((result) => {
    console.log("Current block number: " + result);
});