// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IBEP20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function totalSupply() external view returns (uint256);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract TokenManager {
    IBEP20 public token; // BEP-20 Token
    address public owner;
    uint256 public liquidityUnlockTime;

    event LiquidityLocked(uint256 amount, uint256 unlockTime);
    event AirdropExecuted(uint256 totalRecipients, uint256 totalTokens);
    event DividendsDistributed(uint256 totalAmount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(address _tokenAddress) {
        token = IBEP20(_tokenAddress);
        owner = msg.sender;
    }

    // Transfer ownership
    function transferOwnership(address newOwner) external onlyOwner {
        owner = newOwner;
    }

    // Lock liquidity for a certain period
    function lockLiquidity(uint256 amount, uint256 lockTime) external onlyOwner {
        require(token.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        liquidityUnlockTime = block.timestamp + lockTime;
        emit LiquidityLocked(amount, liquidityUnlockTime);
    }

    // Withdraw liquidity after the lock period
    function unlockLiquidity(address recipient) external onlyOwner {
        require(block.timestamp >= liquidityUnlockTime, "Liquidity is still locked");
        uint256 balance = token.balanceOf(address(this));
        require(token.transfer(recipient, balance), "Transfer failed");
    }

    // Airdrop tokens to multiple addresses
    function executeAirdrop(address[] calldata recipients, uint256 amountPerRecipient) external onlyOwner {
        uint256 totalAmount = recipients.length * amountPerRecipient;
        require(token.balanceOf(address(this)) >= totalAmount, "Insufficient tokens");

        for (uint256 i = 0; i < recipients.length; i++) {
            require(token.transfer(recipients[i], amountPerRecipient), "Transfer failed");
        }

        emit AirdropExecuted(recipients.length, totalAmount);
    }

    // Distribute dividends in tokens or BNB
    function distributeDividends(address[] calldata holders, uint256 totalAmount) external payable onlyOwner {
        uint256 amountPerHolder = totalAmount / holders.length;

        if (msg.value > 0) {
            // Distribute BNB
            require(msg.value == totalAmount, "Incorrect BNB amount sent");
            for (uint256 i = 0; i < holders.length; i++) {
                payable(holders[i]).transfer(amountPerHolder);
            }
        } else {
            // Distribute tokens
            require(token.balanceOf(address(this)) >= totalAmount, "Insufficient tokens");
            for (uint256 i = 0; i < holders.length; i++) {
                require(token.transfer(holders[i], amountPerHolder), "Transfer failed");
            }
        }

        emit DividendsDistributed(totalAmount);
    }
}
