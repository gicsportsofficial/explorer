const nodeUrl = 'https://nodes.gscscan.com';

export default {
    networkId: 'mainnet',
    displayName: 'Mainnet',
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: true,
    dataServicesBaseUrl: 'https://api.gscscan.com/v0',
    spamListUrl: 'https://raw.githubusercontent.com/gicsportsofficial/ym-community/main/scam%20tokens%20according%20to%20ym%20community.csv',
    nodes: [{url: nodeUrl, maintainer: 'GIC'}],
    dappsUrl: 'https://raw.githubusercontent.com/gicsportsofficial/ym-client-config/main/official_ym_dapps.json'
};
