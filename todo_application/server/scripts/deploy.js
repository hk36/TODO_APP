const main = async() => {
  const contractFactory = await ethers.getContractFactory('TaskContract');
  const contract = await contractFactory.deploy();
  await contract.deployed();

  console.log("Contract deployed to: ", contract.address);
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();

//0xf8E2faB18CB239f382c01Fdd0f71493c8C155d44