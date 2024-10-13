import { ethers } from 'ethers';

const verifySignature = (message: string, signature: string, address: string) => {
    const recoveredAddress = ethers.utils.verifyMessage(message, signature);
    return recoveredAddress === address; // True if the signature is valid
};
