export const getNetworkByte = (id) => {
    let byte
    switch (id) {
        case 'testnet':
            byte = 'T'.charCodeAt()
            break;
        case 'mainnet':
            byte = 'A'.charCodeAt()
            break;
        case 'stagenet':
            byte = 'S'.charCodeAt()
            break;
        case 'custom':
            byte = 'C'.charCodeAt()
            break;
        default:
            byte = 'S'.charCodeAt()
    }
    return byte
}
