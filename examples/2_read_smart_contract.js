const { ethers } = require("ethers");
const stakingContractAbi = require('./staking.json');

const provider = new ethers.providers.JsonRpcProvider(`https://aged-withered-flower.bsc.quiknode.pro/7af22bf6a00dc835df81b02bd1549ffe37fd98f5/`)

const address = '0xD9dA44C4131986F64951aB0dDcDB36a0C73160d5';
const contract = new ethers.Contract(address, stakingContractAbi, provider);

const main = async () => {
    const stake = await contract.stakes()
    // const symbol = await contract.symbol()
    // const totalSupply = await contract.totalSupply()

    console.log(`\nReading from ${address}\n`)
    console.log(`Stake: ${stake}`)
    // console.log(`Symbol: ${symbol}`)
    // console.log(`Total Supply: ${totalSupply}\n`)

    // const balance = await contract.balanceOf('0x6c6Bc977E13Df9b0de53b251522280BB72383700')

    // console.log(`Balance Returned: ${balance}`)
    // console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`)
}

main()