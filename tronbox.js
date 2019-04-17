module.exports = {
  networks: {
    development: {
// For trontools/quickstart docker image
      //  启动命令中的私钥
      //privateKey: 'beb11c7470b453e53ecd67ade13bd8a36e4a4f3c16bcd1b8e6a3d344873f1559',
      // 向元的私钥
      privateKey:'e901ef62b241b6f1577fd6ea34ef8b1c4b3ddee1e3c051b9e63f5ff729ad47a1',
      // admin
      //privateKey:'eb20a3a5fd5487fa0c5f9297419a8480d5a62289f1654c432ae26bdbd53196da',
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      origin_energy_limit:10000000,
      // Requires TronBox 2.1.9+ and Tron Quickstart 1.1.16+
      // fullHost: "http://127.0.0.1:9090",

      // The three settings below for TronBox < 2.1.9
      //fullNode: "http://127.0.0.1:9090",
      //solidityNode: "http://127.0.0.1:9090",
      //eventServer: "http://127.0.0.1:9090",
      fullNode: "http://47.94.247.175:16667",
      solidityNode: "http://47.94.247.175:16668",
      eventServer: "http://47.94.247.175:18891/event",
      network_id: "*"
    },
    mainnet: {
// Don't put your private key here:
      privateKey: process.env.PK,
      /*
      Create a .env file (it must be gitignored) containing something like

        export PK=4E7FECCB71207B867C495B51A9758B104B1D4422088A87F4978BE64636656243

      Then, run the migration with:

        source .env && tronbox migrate --network mainnet

      */
      consume_user_resource_percent: 30,
      fee_limit: 100000000,

      // tronbox 2.1.9+
      // fullHost: "https://api.trongrid.io",

      // tronbox < 2.1.9
      fullNode: "https://api.trongrid.io",
      solidityNode: "https://api.trongrid.io",
      eventServer: "https://api.trongrid.io",

      network_id: "*"
    },
    shasta: {
      privateKey: "6daa492c788d0e5928168bc9cd1b79fe588a60a5d675266efe3138db5f45009c",
      consume_user_resource_percent: 30,
      fee_limit: 100000000,

      // tronbox 2.1.9+
      // fullHost: "https://api.shasta.trongrid.io",

      // tronbox < 2.1.9
      fullNode: "https://api.shasta.trongrid.io",
      solidityNode: "https://api.shasta.trongrid.io",
      eventServer: "https://api.shasta.trongrid.io",

      network_id: "*"
    }
  }
}
