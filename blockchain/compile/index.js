// ㅜ 참고한 링크
// https://docs.web3js.org/guides/smart_contracts/deploying_and_interacting_with_smart_contracts


// This code will compile smart contract and generate its ABI and bytecode
// Alternatively, you can use something like `npm i solc && npx solcjs MyContract.sol --bin --abi`


const solc = require('solc');
const path = require('path');
const fs = require('fs');


module.exports.compile_fn = (fileName, contractName) => {
    //
    
    const contractFolderName = "contract";


    // Read the Solidity source code from the file system
    const contractPath = path.join(__dirname, "..", contractFolderName, `${fileName}.sol`);
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

    console.log(compiledCode)


    // Get the bytecode from the compiled contract
    const bytecode = compiledCode.contracts[fileName][contractName].evm.bytecode.object;


    // Write the bytecode to a new file
    const bytecodePath = path.join(__dirname, `${fileName}_bytecode.bin`);
    fs.writeFileSync(bytecodePath, bytecode);


    // Log the compiled contract code to the console
    console.log('Contract Bytecode:\n', bytecode);


    // Get the ABI from the compiled contract
    const abi = compiledCode.contracts[fileName][contractName].abi;


    // Write the Contract ABI to a new file
    const abiPath = path.join(__dirname, `${fileName}_abi.json`);
    fs.writeFileSync(abiPath, JSON.stringify(abi, null, '\t'));


    // Log the Contract ABI to the console
    console.log('Contract ABI:\n', abi);
}


module.exports.get_abi_fn = (fileName) => abi = require(`./${fileName}_abi.json`);


module.exports.get_bytecode_fn = (fileName) => {
    //

    // Read the bytecode from the file system
    // 바이트코드 bin 파일을 읽어오고
    const bytecodePath = path.join(__dirname, `${fileName}_bytecode.bin`);
    return fs.readFileSync(bytecodePath, 'utf8');
}