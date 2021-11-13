require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remain mixture hunt only force security'; 
let testAccounts = [
"0xc80d74daabc1f080588d75dc21bbf21326146898a2ea6bd4d4222a0ad857192d",
"0x4c6ba89475e506dafe44ea994816a835da33fdf1b27a0e3bb875cd26376ddecb",
"0x08341f6bf931a4e4469c54f9b483843bc1f8fdf876553d72d941bdac4f7905be",
"0xe8916f62c92ff75d3c2be445e1681430b211be4087628a17b010dd8d5e97471c",
"0xb693b534183a2271938e66d02162bf4f6456e736e1135af75eb45b60dd674396",
"0xcafadb2d5d97764ee18c70e63fad2bb2e4e75e56c4b030579a256e045ae8df0b",
"0x1581273053da31f36f8b235b848d1a254538d36f9a4804ce000f34b1c4d47186",
"0x0c0781bb02b7d25b114bdd2487db251efaa48064058566b3b0545d2db95cad4d",
"0x59a392e743e84abe3e54a3e467521ea2b5bd36fcdee64ee3ab99e80919cc197b",
"0x0510bc2e636df35de0432660cac6f7d1e61518f60c4e04793a6c0b785581c529"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

