const MyToken1155 =  artifacts.require("MyERC1155");

module.exports = function(deployer) {
    account = "0x229C0c5Da0A6595F652639271297C8Ee8324Ae52";
    urls = 'http://localhost:3000';
    deployer.deploy(MyToken1155,urls,account);
  };
  