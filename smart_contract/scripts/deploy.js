const main = async () => {
  const gifTokenFactory = await hre.ethers.getContractFactory("GifToken");
  const gifTokenContract = await gifTokenFactory.deploy();

  await gifTokenContract.deployed();

  console.log("gifToken address: ", gifTokenContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();