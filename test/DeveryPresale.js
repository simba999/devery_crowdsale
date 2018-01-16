var tokenOutput={
   "contracts" : {
      "DeveryPresale.sol:DeveryPresale" : {
         "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"_ethMinContribution\",\"type\":\"uint256\"}],\"name\":\"setEthMinContribution\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"TEST_CONTRIBUTION\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_usdCap\",\"type\":\"uint256\"}],\"name\":\"setUsdCap\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"START_DATE\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"_totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"ethMinContribution\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_picopsCertifier\",\"type\":\"address\"}],\"name\":\"setPICOPSCertifier\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"mintable\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"wallet\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"closed\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"picopsCertifier\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"usdCap\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"contributedUsd\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"ethCap\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_whitelist\",\"type\":\"address\"}],\"name\":\"setWhitelist\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"transferable\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"whitelist\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"enableTransfers\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"contributedEth\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"usdPerKEther\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_usdPerKEther\",\"type\":\"uint256\"}],\"name\":\"setUsdPerKEther\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokenAddress\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferAnyERC20Token\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_wallet\",\"type\":\"address\"}],\"name\":\"setWallet\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_addr\",\"type\":\"address\"}],\"name\":\"addressCanContribute\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"closeSale\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"oldWallet\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newWallet\",\"type\":\"address\"}],\"name\":\"WalletUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"oldEthMinContribution\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"newEthMinContribution\",\"type\":\"uint256\"}],\"name\":\"EthMinContributionUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"oldUsdCap\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"newUsdCap\",\"type\":\"uint256\"}],\"name\":\"UsdCapUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"oldUsdPerKEther\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"newUsdPerKEther\",\"type\":\"uint256\"}],\"name\":\"UsdPerKEtherUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"oldWhitelist\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newWhitelist\",\"type\":\"address\"}],\"name\":\"WhitelistUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"oldPICOPSCertifier\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"newPICOPSCertifier\",\"type\":\"address\"}],\"name\":\"PICOPSCertifierUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"addr\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"ethAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"ethRefund\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"usdAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"contributedEth\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"contributedUsd\",\"type\":\"uint256\"}],\"name\":\"Contributed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"MintingDisabled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"TransfersEnabled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]",
         "bin" : "60606040526006805461ff0019166101001790556801158e460913d00000600a55621e8480600b55620b2390600c5534156200003a57600080fd5b604080519081016040908152600582527f50524556450000000000000000000000000000000000000000000000000000006020830152805190810160405260128082527f50726573616c652045564520546f6b656e730000000000000000000000000000602083015260008054600160a060020a03191633600160a060020a03161790556002838051620000d392916020019062000129565b506003828051620000e992916020019062000129565b506004805460ff90921660ff19909216919091179055505060005460098054600160a060020a031916600160a060020a03909216919091179055620001ce565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200016c57805160ff19168380011785556200019c565b828001600101855582156200019c579182015b828111156200019c5782518255916020019190600101906200017f565b50620001aa929150620001ae565b5090565b620001cb91905b80821115620001aa5760008155600101620001b5565b90565b61142c80620001de6000396000f3006060604052600436106101be5763ffffffff60e060020a60003504166304f5222c81146103ec57806306fdde0314610404578063095ea7b31461048e57806318160ddd146104c457806323b872dd146104e957806324425cbf146105115780632919496414610524578063313ce5671461053a578063372c6533146105635780633eaaf86b1461057657806341d2076714610589578063433003691461059c5780634bf365df146105bb578063521eb273146105ce578063597e1fb5146105fd5780635f111074146106105780636298c93a146106235780636e2e9c3b1461063657806370a082311461064957806379ba5097146106685780637a4681701461067b578063854cff2f1461068e5780638da5cb5b146106ad57806392ff0d31146106c057806393e59dc1146106d357806395d89b41146106e6578063a9059cbb146106f9578063af35c6c71461071b578063b4d3ef5f1461072e578063bb5b586b14610741578063d4ee1d9014610754578063d9e4fa6a14610767578063dc39d06d1461077d578063dd62ed3e1461079f578063deaa59df146107c4578063ec2bcd22146107e3578063ee55efee14610802578063f2fde38b14610815575b6000806000635a5f4acf421015806101f5575060005433600160a060020a0390811691161480156101f55750662386f26fc1000034145b151561020057600080fd5b60095460a060020a900460ff161561021757600080fd5b61022033610834565b151561022b57600080fd5b600a543410158061025b575060005433600160a060020a03908116911614801561025b5750662386f26fc1000034145b151561026657600080fd5b3492506000915061027561092e565b600d54610288908563ffffffff61094b16565b11156102bd576102a8600d5461029c61092e565b9063ffffffff61095b16565b92506102ba348463ffffffff61095b16565b91505b600083116102ca57600080fd5b600c54683635c9adc5dea000009084020490506102f283600d5461094b90919063ffffffff16565b600d55600e54610308908263ffffffff61094b16565b600e556103153384610970565b600954600160a060020a031683156108fc0284604051600060405180830381858888f19350505050151561034857600080fd5b33600160a060020a03167f382ef94565f44bde0934ee70556f78be0181d7954f7ca2d7a3521e2577bb0a57848484600d54600e54604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390a260008211156103e757600160a060020a03331682156108fc0283604051600060405180830381858888f1935050505015156103e757600080fd5b505050005b34156103f757600080fd5b610402600435610a21565b005b341561040f57600080fd5b610417610a7c565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561045357808201518382015260200161043b565b50505050905090810190601f1680156104805780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561049957600080fd5b6104b0600160a060020a0360043516602435610b1a565b604051901515815260200160405180910390f35b34156104cf57600080fd5b6104d7610b97565b60405190815260200160405180910390f35b34156104f457600080fd5b6104b0600160a060020a0360043581169060243516604435610bc9565b341561051c57600080fd5b6104d7610cf0565b341561052f57600080fd5b610402600435610cfb565b341561054557600080fd5b61054d610d57565b60405160ff909116815260200160405180910390f35b341561056e57600080fd5b6104d7610d60565b341561058157600080fd5b6104d7610d68565b341561059457600080fd5b6104d7610d6e565b34156105a757600080fd5b610402600160a060020a0360043516610d74565b34156105c657600080fd5b6104b0610dfa565b34156105d957600080fd5b6105e1610e08565b604051600160a060020a03909116815260200160405180910390f35b341561060857600080fd5b6104b0610e17565b341561061b57600080fd5b6105e1610e27565b341561062e57600080fd5b6104d7610e36565b341561064157600080fd5b6104d7610e3c565b341561065457600080fd5b6104d7600160a060020a0360043516610e42565b341561067357600080fd5b610402610e5d565b341561068657600080fd5b6104d761092e565b341561069957600080fd5b610402600160a060020a0360043516610eeb565b34156106b857600080fd5b6105e1610f71565b34156106cb57600080fd5b6104b0610f80565b34156106de57600080fd5b6105e1610f89565b34156106f157600080fd5b610417610f98565b341561070457600080fd5b6104b0600160a060020a0360043516602435611003565b341561072657600080fd5b6104026110d6565b341561073957600080fd5b6104d761113c565b341561074c57600080fd5b6104d7611142565b341561075f57600080fd5b6105e1611148565b341561077257600080fd5b610402600435611157565b341561078857600080fd5b6104b0600160a060020a03600435166024356111b3565b34156107aa57600080fd5b6104d7600160a060020a0360043581169060243516611256565b34156107cf57600080fd5b610402600160a060020a0360043516611281565b34156107ee57600080fd5b6104b0600160a060020a0360043516610834565b341561080d57600080fd5b610402611307565b341561082057600080fd5b610402600160a060020a0360043516611367565b600f546000908190600160a060020a0316639b19251a84836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561089157600080fd5b6102c65a03f115156108a257600080fd5b5050506040518051905011806109285750601054600160a060020a031663cc1d4c028360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561090c57600080fd5b6102c65a03f1151561091d57600080fd5b505050604051805190505b92915050565b6000600c546015600a0a600b540281151561094557fe5b04905090565b8181018281101561092857600080fd5b60008282111561096a57600080fd5b50900390565b600654610100900460ff16151561098657600080fd5b600160a060020a0382166000908152600760205260409020546109af908263ffffffff61094b16565b600160a060020a0383166000908152600760205260409020556005546109db908263ffffffff61094b16565b600555600160a060020a03821660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405190815260200160405180910390a35050565b60005433600160a060020a03908116911614610a3c57600080fd5b7e988a16235b4f86ea9fb9b08f6f3c67a967661d4268682a1acf6697e8104b2a600a548260405191825260208201526040908101905180910390a1600a55565b60038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b125780601f10610ae757610100808354040283529160200191610b12565b820191906000526020600020905b815481529060010190602001808311610af557829003601f168201915b505050505081565b60065460009060ff161515610b2e57600080fd5b600160a060020a03338116600081815260086020908152604080832094881680845294909152908190208590557f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b6000805260076020527f6d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df546005540390565b60065460009060ff161515610bdd57600080fd5b600160a060020a038416600090815260076020526040902054610c06908363ffffffff61095b16565b600160a060020a0380861660009081526007602090815260408083209490945560088152838220339093168252919091522054610c49908363ffffffff61095b16565b600160a060020a0380861660009081526008602090815260408083203385168452825280832094909455918616815260079091522054610c8f908363ffffffff61094b16565b600160a060020a03808516600081815260076020526040908190209390935591908616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060019392505050565b662386f26fc1000081565b60005433600160a060020a03908116911614610d1657600080fd5b7f844706a64b1a935ddb2ecf8cbd98352cf0fbeb0445d87557ffd51917473cb894600b548260405191825260208201526040908101905180910390a1600b55565b60045460ff1681565b635a5f4acf81565b60055481565b600a5481565b60005433600160a060020a03908116911614610d8f57600080fd5b601054600160a060020a0380831691167f9efbc411732b6d763d78f7f043e2086132113e26ee199ade2d124491e34cd27060405160405180910390a36010805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600654610100900460ff1681565b600954600160a060020a031681565b60095460a060020a900460ff1681565b601054600160a060020a031681565b600b5481565b600e5481565b600160a060020a031660009081526007602052604090205490565b60015433600160a060020a03908116911614610e7857600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b60005433600160a060020a03908116911614610f0657600080fd5b600f54600160a060020a0380831691167f0b00a1112524b562c52fd702a5b927f07a0b1bafa6243b83cf3b78a9316bb1a760405160405180910390a3600f805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600054600160a060020a031681565b60065460ff1681565b600f54600160a060020a031681565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b125780601f10610ae757610100808354040283529160200191610b12565b60065460009060ff16151561101757600080fd5b600160a060020a033316600090815260076020526040902054611040908363ffffffff61095b16565b600160a060020a033381166000908152600760205260408082209390935590851681522054611075908363ffffffff61094b16565b600160a060020a0380851660008181526007602052604090819020939093559133909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600192915050565b60005433600160a060020a039081169116146110f157600080fd5b60065460ff161561110157600080fd5b6006805460ff191660011790557feadb24812ab3c9a55c774958184293ebdb6c7f6a2dbab11f397d80c86feb65d360405160405180910390a1565b600d5481565b600c5481565b600154600160a060020a031681565b60005433600160a060020a0390811691161461117257600080fd5b7fda24b08c8dd5211861cbd763d68ed6681bc82d8c0b57feecb2b12b6a08da7362600c548260405191825260208201526040908101905180910390a1600c55565b6000805433600160a060020a039081169116146111cf57600080fd5b60008054600160a060020a038086169263a9059cbb929091169085906040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561123557600080fd5b6102c65a03f1151561124657600080fd5b5050506040518051949350505050565b600160a060020a03918216600090815260086020908152604080832093909416825291909152205490565b60005433600160a060020a0390811691161461129c57600080fd5b600954600160a060020a0380831691167f0f37c6733428a3a65d46b7f1853a5ce4bfa3cf92d25322507a50bf23a0b5a0a860405160405180910390a36009805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60005433600160a060020a0390811691161461132257600080fd5b60095460a060020a900460ff161561133957600080fd5b6009805474ff0000000000000000000000000000000000000000191660a060020a1790556113656113b1565b565b60005433600160a060020a0390811691161461138257600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600654610100900460ff1615156113c757600080fd5b6006805461ff00191690557faf79b4370f6af9d950564bbe6b81f7f0834c003c455db9248f4e55e6bf865eb760405160405180910390a15600a165627a7a72305820caa8883473d9bc23d14b4ad47f914727861689ee4dd2149d58121a7806f82db20029"
      },
      "DeveryPresale.sol:DeveryPresaleWhitelist" : {
         "abi" : "[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"whitelist\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]",
         "bin" : "6060604052341561000f57600080fd5b60bc8061001d6000396000f300606060405260043610603e5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416639b19251a81146043575b600080fd5b3415604d57600080fd5b606c73ffffffffffffffffffffffffffffffffffffffff60043516607e565b60405190815260200160405180910390f35b600060208190529081526040902054815600a165627a7a72305820fbb27199dc7defadb0062b0f7f4cad1785cf966af7001da228e958666a98364d0029"
      },
      "DeveryPresale.sol:ERC20Interface" : {
         "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]",
         "bin" : ""
      },
      "DeveryPresale.sol:ERC20Token" : {
         "abi" : "[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"_totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"mintable\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"transferable\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"enableTransfers\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokenAddress\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferAnyERC20Token\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_symbol\",\"type\":\"string\"},{\"name\":\"_name\",\"type\":\"string\"},{\"name\":\"_decimals\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"MintingDisabled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"TransfersEnabled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]",
         "bin" : "60606040526006805461ff001916610100179055341561001e57600080fd5b604051610b6e380380610b6e8339810160405280805182019190602001805182019190602001805160008054600160a060020a03191633600160a060020a03161790559150600290508380516100789291602001906100a9565b50600382805161008c9291602001906100a9565b506004805460ff191660ff92909216919091179055506101449050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100ea57805160ff1916838001178555610117565b82800160010185558215610117579182015b828111156101175782518255916020019190600101906100fc565b50610123929150610127565b5090565b61014191905b80821115610123576000815560010161012d565b90565b610a1b806101536000396000f3006060604052600436106100fb5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde038114610100578063095ea7b31461018a57806318160ddd146101c057806323b872dd146101e5578063313ce5671461020d5780633eaaf86b146102365780634bf365df1461024957806370a082311461025c57806379ba50971461027b5780638da5cb5b1461029057806392ff0d31146102bf57806395d89b41146102d2578063a9059cbb146102e5578063af35c6c714610307578063d4ee1d901461031a578063dc39d06d1461032d578063dd62ed3e1461034f578063f2fde38b14610374575b600080fd5b341561010b57600080fd5b610113610393565b60405160208082528190810183818151815260200191508051906020019080838360005b8381101561014f578082015183820152602001610137565b50505050905090810190601f16801561017c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561019557600080fd5b6101ac600160a060020a0360043516602435610431565b604051901515815260200160405180910390f35b34156101cb57600080fd5b6101d36104af565b60405190815260200160405180910390f35b34156101f057600080fd5b6101ac600160a060020a03600435811690602435166044356104e1565b341561021857600080fd5b610220610608565b60405160ff909116815260200160405180910390f35b341561024157600080fd5b6101d3610611565b341561025457600080fd5b6101ac610617565b341561026757600080fd5b6101d3600160a060020a0360043516610625565b341561028657600080fd5b61028e610640565b005b341561029b57600080fd5b6102a36106ce565b604051600160a060020a03909116815260200160405180910390f35b34156102ca57600080fd5b6101ac6106dd565b34156102dd57600080fd5b6101136106e6565b34156102f057600080fd5b6101ac600160a060020a0360043516602435610751565b341561031257600080fd5b61028e610824565b341561032557600080fd5b6102a361088a565b341561033857600080fd5b6101ac600160a060020a0360043516602435610899565b341561035a57600080fd5b6101d3600160a060020a0360043581169060243516610955565b341561037f57600080fd5b61028e600160a060020a0360043516610980565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104295780601f106103fe57610100808354040283529160200191610429565b820191906000526020600020905b81548152906001019060200180831161040c57829003601f168201915b505050505081565b60065460009060ff16151561044557600080fd5b600160a060020a03338116600081815260086020908152604080832094881680845294909152908190208590557f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a35060015b92915050565b6000805260076020527f6d5257204ebe7d88fd91ae87941cb2dd9d8062b64ae5a2bd2d28ec40b9fbf6df546005540390565b60065460009060ff1615156104f557600080fd5b600160a060020a03841660009081526007602052604090205461051e908363ffffffff6109ca16565b600160a060020a0380861660009081526007602090815260408083209490945560088152838220339093168252919091522054610561908363ffffffff6109ca16565b600160a060020a03808616600090815260086020908152604080832033851684528252808320949094559186168152600790915220546105a7908363ffffffff6109df16565b600160a060020a03808516600081815260076020526040908190209390935591908616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060019392505050565b60045460ff1681565b60055481565b600654610100900460ff1681565b600160a060020a031660009081526007602052604090205490565b60015433600160a060020a0390811691161461065b57600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b60065460ff1681565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104295780601f106103fe57610100808354040283529160200191610429565b60065460009060ff16151561076557600080fd5b600160a060020a03331660009081526007602052604090205461078e908363ffffffff6109ca16565b600160a060020a0333811660009081526007602052604080822093909355908516815220546107c3908363ffffffff6109df16565b600160a060020a0380851660008181526007602052604090819020939093559133909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600192915050565b60005433600160a060020a0390811691161461083f57600080fd5b60065460ff161561084f57600080fd5b6006805460ff191660011790557feadb24812ab3c9a55c774958184293ebdb6c7f6a2dbab11f397d80c86feb65d360405160405180910390a1565b600154600160a060020a031681565b6000805433600160a060020a039081169116146108b557600080fd5b60008054600160a060020a038086169263a9059cbb92909116908590604051602001526040517c010000000000000000000000000000000000000000000000000000000063ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561093457600080fd5b6102c65a03f1151561094557600080fd5b5050506040518051949350505050565b600160a060020a03918216600090815260086020908152604080832093909416825291909152205490565b60005433600160a060020a0390811691161461099b57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000828211156109d957600080fd5b50900390565b818101828110156104a957600080fd00a165627a7a72305820b80a7469da7f7d5f9a9f6507ee45e40ca9035f24d30221ce9c5a7edc81fba9c60029"
      },
      "DeveryPresale.sol:Owned" : {
         "abi" : "[{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]",
         "bin" : "6060604052341561000f57600080fd5b60008054600160a060020a033316600160a060020a03199091161790556101fe8061003b6000396000f3006060604052600436106100615763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166379ba509781146100665780638da5cb5b1461007b578063d4ee1d90146100aa578063f2fde38b146100bd575b600080fd5b341561007157600080fd5b6100796100dc565b005b341561008657600080fd5b61008e61016a565b604051600160a060020a03909116815260200160405180910390f35b34156100b557600080fd5b61008e610179565b34156100c857600080fd5b610079600160a060020a0360043516610188565b60015433600160a060020a039081169116146100f757600080fd5b600154600054600160a060020a0391821691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031681565b600154600160a060020a031681565b60005433600160a060020a039081169116146101a357600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a7230582010fe2ac9d14bc92966569f9729ef0668e9e77321c470180d017d1550abbace970029"
      },
      "DeveryPresale.sol:PICOPSCertifier" : {
         "abi" : "[{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"certified\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]",
         "bin" : ""
      },
      "DeveryPresale.sol:SafeMath" : {
         "abi" : "[]",
         "bin" : "60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a72305820d7c4cb40dadbe928976ffd2b82f0cad295e39fc2269e0d6a94b4bf8fd79725040029"
      }
   },
   "version" : "0.4.18+commit.9cf6e910.Darwin.appleclang"
};
