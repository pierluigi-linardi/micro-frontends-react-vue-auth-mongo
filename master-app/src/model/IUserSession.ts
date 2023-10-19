export interface IUserSession {
    id: string;
    userName: string;
    token: string;
    email: string;
    firstName: string;
    lastName: string;
    attributes: IUserAttributes;
    metaMask: IMetaMaskSession | null;
}

export interface IUserAttributes {
    userType: string;
    professionalism: string;
    interests: string[];
    company: string;
    country: string;
}

export interface IMetaMaskSession {
    account: string;
    chainId: number;
    balance: number;
}
