// const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider")
require("dotenv").config()
const mnemonic = 'evoke club entry catalog unveil truly run lyrics melt property main noise'; // funded accounts[0]
const maintest = 'gap cage shrug cake general simple cable air raw vessel dignity reduce'; // funded accounts[0]
//
const rop = 'process eternal ill spawn purpose replace solve humble mimic nothing element portion';

module.exports = {
	// See <http://truffleframework.com/docs/advanced/configuration> to customize your Truffle configuration!
	// contracts_build_directory: path.join(__dirname, "client/src/contracts"),
	networks: {
	  development: {
	    host: "127.0.0.1",
	    port: 8545,
	    // gas: 20000000,
	    network_id: "*",
	    skipDryRun: true
	  },
	  ropsten: {
	    provider: new HDWalletProvider(rop, "https://ropsten.infura.io/v3/4a3706ac2ddf434fbc3ca2e68a746382"),
	    network_id: 3,
	    gas: 5000000,
		gasPrice: 5000000000 // 5 Gwei
	  },
	  kovan: {
	    provider: new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/4a3706ac2ddf434fbc3ca2e68a746382"),
	    network_id: 42,
	    gas: 5000000,
		gasPrice: 5000000000, // 5 Gwei
		skipDryRun: true
	  },
	  mainnet: {
	    provider: new HDWalletProvider(maintest, "https://mainnet.infura.io/v3/4a3706ac2ddf434fbc3ca2e68a746382"),
	    network_id: 1,
	    gas: 5000000,
	    gasPrice: 5000000000 // 5 Gwei
	  }
	},
	compilers: {
		solc: {
			version: "^0.6.6",
		},
	},
}
