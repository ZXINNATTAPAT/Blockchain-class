const MyToken1155 =  artifacts.require("MyERC1155");

module.exports = function(deployer) {
    account = "0xE935a4C890a1D1B8b1F9aFC83eA96b65792e2736";
    urls = 'http://localhost:3000';
    deployer.deploy(MyToken1155,urls,account);
  };
  