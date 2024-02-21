const Kmutnb = artifacts.require('KmutnbToken');

module.exports = function(deployer) {
  // account = "0xE935a4C890a1D1B8b1F9aFC83eA96b65792e2736";
  account = "0x229C0c5Da0A6595F652639271297C8Ee8324Ae52";
  deployer.deploy(Kmutnb, account);
};
