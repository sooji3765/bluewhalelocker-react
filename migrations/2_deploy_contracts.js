var locker = artifacts.require("Locker.sol");

module.exports = function(deployer) {
  deployer.deploy(locker);
};
