require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strike rival noble modify give clog metal gift'; 
let testAccounts = [
"0x2dcb917ae2f932477614c4bc7009b23a8636f8625950dd4514b1ec35cf7f6643",
"0xc524f4f7094f297d547d8b8c8b75cbf7e53c3625846663070269ccb1bd9d86fb",
"0xf2cd84bcb3cb8d0a78bb3739f93abe56f2440f29065fea103a38f4432ec12d06",
"0x1f0606e34a5ce1f472a97f99121b409876c5b0955133b6e0e12f4e1bbaddfd32",
"0xd36be0e6c48561f1b04df97a92d6b6ec62a48845d9009c0a3374774ca8fbdceb",
"0xbc0eb24f9ed5acc53481e56b7ac09491150083c203ad523f9c55cbbdcb930848",
"0xd383a8f16f5c387eaac4375ab3748d9dea7cd10dc5ded08cee5e3e0dd027e57c",
"0xc726d22a9802e0d6db27b131248d4afbf691ab515007d7159d1a7acc89713204",
"0xdbf656c6cf7ebe285d5f552ce76ecc350b5e56b80776dd6e0ee735b0019f8507",
"0x9cfa27d5c01be56d310f84c479e06b6b88dd4b21d7c92ff7f8424b552ed9cd0a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


