const nodeUrl = 'https://nodes.gscscan.com';

export default {
    networkId: 'mainnet',
    displayName: 'Mainnet',
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: true,
    dataServicesBaseUrl: 'https://api.gscscan.com/v0',
    spamListUrl: 'https://raw.githubusercontent.com/gicsportsofficial/gic-client-config/refs/heads/main/scam/scam-tokens.csv',
    nodes: [{url: nodeUrl, maintainer: 'GIC'}],
    dappsUrl: 'https://raw.githubusercontent.com/gicsportsofficial/gic-client-config/refs/heads/main/dapp-names/official_gic_dapps.json'
};
