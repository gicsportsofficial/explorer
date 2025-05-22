const nodeUrl = 'http://0.devnet.gscscan.com:6869';
export default {
    networkId: 'devnet',
    displayName: 'Devnet',
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: false,
    nodes: [
        {url: nodeUrl, maintainer: 'GIC', showAsLink: true},
        {url: 'http://1.devnet.gscscan.com:6869', maintainer: 'GIC', showAsLink: true},
        {url: 'http://2.devnet.gscscan.com:6869', maintainer: 'GIC', showAsLink: true},
        {url: 'http://3.devnet.gscscan.com:6869', maintainer: 'GIC', showAsLink: true},
        {url: 'http://4.devnet.gscscan.com:6869', maintainer: 'GIC', showAsLink: true},
        {url: 'http://5.devnet.gscscan.com:6869', maintainer: 'GIC', showAsLink: true},
        {url: 'http://6.devnet.gscscan.com:6869', maintainer: 'GIC', showAsLink: true}
    ]
};
