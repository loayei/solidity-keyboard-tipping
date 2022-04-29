async function main() {
    const keyboardsContractFactory = await hre.ethers.getContractFactory("Keyboard");
    const keyboardsContract = await keyboardsContractFactory.deploy();
    await keyboardsContract.deployed();

    let keyboards = await keyboardsContract.getKeyboards();
    console.log("Keyboards Acquired:", keyboards);

    const keyboardTxn = await keyboardsContract.create("Extravagant Keyboard!");
    await keyboardTxn.wait();

    keyboards = await keyboardsContract.getKeyboards();
    console.log("Keyboards Aquired", keyboards);
}

//Properly handle errors and use async/await everywhere
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });