const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const HDWalletProvider_ = require("truffle-hdwallet-provider");
const privateKey = "";
const privateKeyBsc = "";

const endpointUrl = "https://kovan.infura.io/v3/82aa14abbb9947de867e24a5f4cf8c0c";

const kovanProvider = new HDWalletProvider(
  //private keys array
  [privateKey],
  //url to ethereum node
  endpointUrl
);

const mnemonic = "";
const bscProvider = new HDWalletProvider_(mnemonic, 'https://data-seed-prebsc-1-s1.binance.org:8545');

module.exports = {
  networks: {
    kovan: {
      provider: () => kovanProvider,
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42
    },
    bsc: {
      provider: () => bscProvider,
      network_id: 97,
      gas: 5000000,
      gasPrice: 25000000000,
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    }
  },
  compilers: {
    solc: {
      version: "0.6.12"
    }
  },
  plugins: [
    'truffle-contract-size'
  ]
}

// module.exports = {
//   // Uncommenting the defaults below
//   // provides for an easier quick-start with Ganache.
//   // You can also follow this format for other networks;
//   // see <http://truffleframework.com/docs/advanced/configuration>
//   // for more details on how to specify configuration options!
//   //
//   //networks: {
//   //  development: {
//   //    host: "127.0.0.1",
//   //    port: 7545,
//   //    network_id: "*"
//   //  },
//   //  test: {
//   //    host: "127.0.0.1",
//   //    port: 7545,
//   //    network_id: "*"
//   //  }
//   //}
//   //
//   compilers: {
//     solc: {
//       version: "0.6.12"
//     }
//   }
// };