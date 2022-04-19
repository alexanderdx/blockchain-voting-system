// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Platform {
    mapping(address => Poll) private polls;
    mapping(address => address[]) private userPolls;

    event PollCreated(address poll_address, address indexed user_address);

    function getPollById(address id)
        external
        view
        returns (
            address poll_address,
            string memory poll_title,
            uint256 poll_timestamp
        )
    {
        require(polls[id].getAddress() != address(0), "Poll does not exist.");
        require(polls[id].getAddress() == id, "Poll does not exist.");

        poll_address = polls[id].getAddress();
        poll_title = polls[id].getTitle();
        poll_timestamp = polls[id].getTimestamp();
    }

    function getMyPolls() external view returns (address[] memory) {
        address user = msg.sender;

        return userPolls[user];
    }

    function createPoll(
        string calldata title,
        string calldata description,
        string[] calldata options
    ) external {
        require(bytes(title).length > 0, "Poll title cannot be empty.");

        address user_address = msg.sender;

        Poll poll = new Poll(title, description, options, user_address);

        address poll_address = poll.getAddress();
        polls[poll_address] = poll;

        userPolls[user_address].push(poll_address);

        emit PollCreated(poll_address, user_address);
    }
}

contract Poll {
    struct Option {
        string name;
        uint256 voteCount;
    }

    address public creator;
    address _address;

    string public title;
    string public description;
    uint256 public timestamp;
    Option[] public options;
    mapping(address => bool) public hasVoted;

    constructor(
        string memory _title,
        string memory _description,
        string[] memory _options,
        address _creator
    ) {
        require(bytes(title).length > 0, "Poll title cannot be empty.");
        require(_options.length >= 2, "Atleast 2 options are required.");

        title = _title;
        description = _description;
        creator = _creator;
        timestamp = block.timestamp;
        _address = address(this);

        for (uint256 i = 0; i < _options.length; i++) {
            options.push(Option({name: _options[i], voteCount: 0}));
        }
    }

    modifier onlyCreator() {
        require(msg.sender == creator, "Only the pool's creator can do this");
        _;
    }

    modifier hasNotVoted() {
        require(hasVoted[msg.sender] == false, "You can only vote once!");
        _;
    }

    event LogVote(
        address indexed voterAddress,
        address indexed poll_address,
        uint256 option,
        string name,
        uint256 votes
    );

    function vote(uint256 option) public hasNotVoted {
        require(option >= 0 && option < options.length, "Invalid option.");

        address voter = msg.sender;

        hasVoted[voter] = true;
        options[option].voteCount++;

        emit LogVote(
            voter,
            _address,
            option,
            options[option].name,
            options[option].voteCount
        );
    }

    function getPollData()
        external
        view
        returns (
            address poll_creator,
            address poll_address,
            string memory poll_title,
            string memory poll_description,
            uint256 poll_timestamp,
            Option[] memory poll_options
        )
    {
        poll_creator = creator;
        poll_address = _address;
        poll_title = title;
        poll_description = description;
        poll_timestamp = timestamp;
        poll_options = options;
    }

    function getAddress() external view returns (address) {
        return _address;
    }

    function getTitle() external view returns (string memory) {
        return title;
    }

    function getTimestamp() external view returns (uint256) {
        return timestamp;
    }

    function getAllOptions() public view returns (Option[] memory) {
        return options;
    }
}
