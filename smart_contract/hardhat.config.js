require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
defaultNetwork: "matic_testnet",
    networks: {
        hardhat: {},
        matic_testnet: {
            url: "https://rpc-mumbai.maticvigil.com",
            accounts:["60f78d270a8e52d3dd95128aa5757a5248ac8ce494fa51f4d77c9e96e8928da7"],
            gasPrice: "auto",
        		gas:"auto"
        },
        avax_testnet: {
          url: "https://api.avax-test.network/ext/bc/C/rpc",
			    accounts:["a15715c7eef165c319efe2ea5049531d41a16ee5beee8362db6f1349cc71d345"],
          gasPrice: "auto",
          gas:"auto"
      }

    },
	solidity: "0.8.4",
};
