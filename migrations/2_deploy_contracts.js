var HelloWorld = artifacts.require("helloworld");
module.exports = function(deployer) {
    deployer.deploy(HelloWorld, "hello");
};