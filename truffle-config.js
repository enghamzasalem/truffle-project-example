var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = '';

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/API_KEY")
            },
            network_id: 3,
            gas: 4000000 //make sure this gas allocation isn't over 4M, which is the max
        }
    }
};