const BwlERC20 = artifacts.require('./BwlERC20.sol')

module.exports = function (deployer) {
  deployer.deploy(BwlERC20, 'BlueWhaleLockerToken', 'BWL', 8)
}
