// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Platform {
    mapping(address => Poll) private polls;
    mapping(address => address[]) private userPolls;

    function getPollById(address id) external view returns (Poll) {
        require(polls[id].getAddress() != address(0), "Poll does not exist.");

        return polls[id];
    }

    function getMyPolls() external view returns (address[] memory) {
        address user = msg.sender;

        return userPolls[user];
    }

    function createPoll() external {
        address user = msg.sender;

        Poll poll = new Poll(user);

        address poll_address = poll.getAddress();
        polls[poll_address] = poll;

        userPolls[user].push(poll_address);
    }
}

contract Poll {
    struct Option {
        string name;
        uint256 voteCount;
    }

    address public creator;
    address _address;

    Option[] public options;
    mapping(address => bool) public hasVoted;

    constructor(address _creator) {
        creator = _creator;
        _address = address(this);
    }

    modifier onlyCreator() {
        require(msg.sender == creator, "Only the pool's creator can do this");
        _;
    }

    modifier hasNotVoted() {
        require(hasVoted[msg.sender] == false, "You can only vote once!");
        _;
    }

    event LogVote(address indexed voterAddress, string name, uint256 votes);
    event OptionAdded(address indexed pollAddress, string optionName);

    function addOption(string calldata optionName) public onlyCreator {
        require(bytes(optionName).length > 0, "Option name cannot be empty.");

        options.push(Option({name: optionName, voteCount: 0}));

        emit OptionAdded(_address, optionName);
    }

    function vote(uint256 option) public hasNotVoted {
        address voter = msg.sender;

        hasVoted[voter] = true;
        options[option].voteCount++;

        emit LogVote(voter, options[option].name, options[option].voteCount);
    }

    function getAllOptions() public view returns (Option[] memory) {
        return options;
    }

    function getAddress() external view returns (address) {
        return _address;
    }
}
