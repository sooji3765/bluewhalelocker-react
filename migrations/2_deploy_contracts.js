var locker = artifacts.require("./locker.sol");

module.exports = function(deployer) {
  deployer.deploy(locker);
};
