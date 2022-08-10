pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;

    function Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable {
        // The require function checks for a certain condition and, if it fails, it throws an error and stop execution
        require(msg.value > .01 ether);

        players.push(msg.sender);
    }

    function random() private view returns (uint) {
        // wrap it in unit() to convert the generated had into uint
        return uint(keccak256(block.difficulty, now, players)); // Keccakk256() is same as sha3()
    }

    function pickWinner() public restricted {
        uint index = random() % players.length;
        players[index].transfer(this.balance); // this.balance is the current amount of money that the contract has available
        players = new address[](0); // initialize a dynamic array w/ initial size of 0
    }

    // we created a modifier called 'restricted' (you can call anything you want)
    // We will check if the account is the manager, if not, we will 'kick them out'
    modifier restricted() { // SEE VIDEO #82 (Function modifiers)
        require(msg.sender == manager);
        _; // target where the injected code will run (e.g. pickWinner())
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }
}
