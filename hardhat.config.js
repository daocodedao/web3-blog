require("@nomiclabs/hardhat-waffle")

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  networks:{
    hardhat:{
      chainId:1337
    },
    mumbai: {
      url: "https://polygon-mumbai.blockpi.network/v1/rpc/public",
      accounts: ["ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"]
    },
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   accounts: [process.env.pk]
    // }
  }
};
