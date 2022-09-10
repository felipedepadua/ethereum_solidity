import web3 from "./web3";

// To deploy a new smart contract:
// 1) Make any changes in the Lottery.sol
// 2) Go to 'lottery-update' and run 'node compile.js'
// 3) Also in 'lottery-update', run 'node deploy.js'

const address = "0xE7784c76F5B6aD5FDC61d44191e651Bf1a19C8e0"; // contract deployed to the rinkeby network

// ABI that we get back after we deployed Lottery.sol (see compile.js) to rinkeby network
const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor",
  },
  {
    inputs: [],
    name: "enter",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    constant: undefined,
    payable: true,
    signature: "0xe97dcb62",
  },
  {
    inputs: [],
    name: "getPlayers",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
    constant: true,
    payable: undefined,
    signature: "0x8b5b9ccc",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
    constant: true,
    payable: undefined,
    signature: "0x481c6a75",
  },
  {
    inputs: [],
    name: "pickWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    constant: undefined,
    payable: undefined,
    signature: "0x5d495aea",
  },
  {
    inputs: [[Object]],
    name: "players",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
    constant: true,
    payable: undefined,
    signature: "0xf71d96cb",
  },
  {
    inputs: [],
    name: "winner",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
    constant: true,
    payable: undefined,
    signature: "0xdfbf53ae",
  },
];

// exports a copy of the deployed contract (so that we can use it on our react app)
export default new web3.eth.Contract(abi, address);
