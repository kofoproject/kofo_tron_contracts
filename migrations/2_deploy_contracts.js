var htlock = artifacts.require("./HashedTimelock.sol");

module.exports = function(deployer) {
  deployer.deploy(htlock, 1000000, "GUIDE", 6, "GD");
};
