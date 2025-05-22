const nodeUrl = 'https://nodes-stagenet.gscscan.com';

export default {
    networkId: 'stagenet',
    displayName: 'Stagenet',
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: true,
    dataServicesBaseUrl: 'https://api-stagenet.gicsports.com/v0',
    nodes: [{url: nodeUrl, maintainer: 'Gic', showAsLink: true}],
    faucet: {
        url: 'https://gic-faucet-stagenet.gicsports.com/faucet',
        captchaKey: '6Lfir7MUAAAAAAWip4okLvtW8de3fvZaZbGVN-bn',
        address: '3MgSuT5FfeMrwwZCbztqLhQpcJNxySaFEiT'
    }
};
