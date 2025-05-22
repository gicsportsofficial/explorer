const nodeUrl = 'https://nodes-testnet.gscscan.com';

export default {
    networkId: 'testnet',
    displayName: 'Testnet',
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: true,
    dataServicesBaseUrl: 'https://api.testnet.gscscan.com/v0',
    nodes: [
        {url: nodeUrl, maintainer: 'Gic', showAsLink: true},
        {url: 'https://testnode2.gscscan.com', maintainer: 'Gic', showAsLink: true},
        {url: 'https://testnode3.gscscan.com', maintainer: 'Gic', showAsLink: true},
        {url: 'https://testnode4.gscscan.com', maintainer: 'Gic', showAsLink: true}
    ],
    faucet: {
        url: 'https://gic-faucet-testnet.gscscan.com/faucet',
        captchaKey: '6Le5cskZAAAAAGR6u8UvY1-wn4Gg97lUef-hFfQC',
        address: '3Myqjf1D44wR8Vko4Tr5CwSzRNo2Vg9S7u7'
    }
};
