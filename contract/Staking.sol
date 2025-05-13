// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface IBEP20 {
    function totalSupply() external view returns (uint256);
    function decimals() external view returns (uint8);
    function symbol() external view returns (string memory);
    function name() external view returns (string memory);
    function getOwner() external view returns (address);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address _owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract FOURUSTAKING {
    IBEP20 public stakingToken;
    uint256 public rewardRate; // Reward per minute
    uint256 public totalStaked;
    uint256 public lastUpdateTime;
    address public owner;

    struct Stake {
        uint256 amount;
        uint256 rewardDebt;
        uint256 lastStakedTime;
    }

    mapping(address => Stake) public stakes;
    mapping(address => uint256) public rewards;

    constructor(address _stakingToken, uint256 _rewardRate) {
        stakingToken = IBEP20(_stakingToken);
        rewardRate = _rewardRate;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can execute this");
        _;
    }

    // Update owner
    function transferOwnership(address _owner) public onlyOwner {
        owner = _owner;
    }

    function stake(uint256 _amount) external {
        require(_amount > 0, "Cannot stake zero amount");

        updateReward(msg.sender);

        stakingToken.transferFrom(msg.sender, address(this), _amount);
        Stake storage userStake = stakes[msg.sender];
        userStake.amount += _amount;
        userStake.rewardDebt += _amount * rewardRate;
        userStake.lastStakedTime = block.timestamp;

        totalStaked += _amount;
        lastUpdateTime = block.timestamp;
    }

    function unstake(uint256 _amount) external {
        Stake storage userStake = stakes[msg.sender];
        require(userStake.amount >= _amount, "Withdraw amount exceeds staked amount");

        updateReward(msg.sender);

        userStake.amount -= _amount;
        stakingToken.transfer(msg.sender, _amount);

        totalStaked -= _amount;
        lastUpdateTime = block.timestamp;
    }

    function claimReward() external {
        updateReward(msg.sender);

        uint256 reward = rewards[msg.sender];
        rewards[msg.sender] = 0;

        stakingToken.transfer(msg.sender, reward);
    }

    function updateReward(address _user) internal {
        Stake storage userStake = stakes[_user];

        if (userStake.amount > 0) {
            uint256 reward = calculateReward(_user);
            rewards[_user] += reward;
            userStake.rewardDebt = (userStake.amount * rewardRate * (block.timestamp / userStake.lastStakedTime)) / 60;
        }
    }

    function calculateReward(address _user) public view returns (uint256) {
        Stake storage userStake = stakes[_user];
        uint256 stakingDuration = block.timestamp / userStake.lastStakedTime;
        uint256 pendingReward = (userStake.amount * rewardRate * stakingDuration) / 60;
        return pendingReward;
    }