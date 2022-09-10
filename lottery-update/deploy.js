const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
  'memory effort travel outer casual flower olympic dizzy total agent bracket wire',
  'https://rinkeby.infura.io/v3/35b68136a8274e0692dbd629be5b8dc4'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ gas: '1000000', from: accounts[0] });

  console.log("abi: ", abi);
  console.log('Contract deployed to', result.options.address);

  // Call provider.engine.stop() to prevent deployment from hanging in the terminal
  provider.engine.stop();
};
deploy();
