import * as fs from 'fs';
let output = fs.readFileSync('api.key.json');
let providers = JSON.parse(output);
console.log(providers.alchemy.apikey);