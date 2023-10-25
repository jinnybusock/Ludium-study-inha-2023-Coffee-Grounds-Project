// ㅜ 참고한 링크
// https://docs.web3js.org/guides/smart_contracts/deploying_and_interacting_with_smart_contracts


// This code will compile smart contract and generate its ABI and bytecode
// Alternatively, you can use something like `npm i solc && npx solcjs MyContract.sol --bin --abi`


const solc = require('solc');
const path = require('path');
const fs = require('fs');


module.exports.compile_fn = (folderName, fileName, contractName) => {


  // Read the Solidity source code from the file system
  const contractPath = path.join(__dirname, "..", folderName, fileName);
  const sourceCode = fs.readFileSync(contractPath, 'utf8');


  // solc compiler config
  const input = {
    language: 'Solidity',
    sources: {
      [fileName]: {
        content: sourceCode,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };


  // Compile the Solidity code using solc
  const compiledCode = JSON.parse(solc.compile(JSON.stringify(input)));


  // Get the bytecode from the compiled contract
  const bytecode = compiledCode.contracts[fileName][contractName].evm.bytecode.object;


  // Write the bytecode to a new file
  const bytecodePath = path.join(__dirname, 'default_contract_bytecode.bin');
  fs.writeFileSync(bytecodePath, bytecode);


  // Log the compiled contract code to the console
  console.log('Contract Bytecode:\n', bytecode);


  // Get the ABI from the compiled contract
  const abi = compiledCode.contracts[fileName][contractName].abi;


  // Write the Contract ABI to a new file
  const abiPath = path.join(__dirname, 'default_contract_abi.json');
  fs.writeFileSync(abiPath, JSON.stringify(abi, null, '\t'));


  // Log the Contract ABI to the console
  console.log('Contract ABI:\n', abi);
}