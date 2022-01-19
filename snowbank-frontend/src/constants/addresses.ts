import { Networks } from "./blockchain";

const AVAX_MAINNET = {
    DAO_ADDRESS: "0x561c56b6ea927c157A9F51fCcCfa50B777c1EA7C",
    SSB_ADDRESS: "0x6851d123E697848Bfb43674415e403083315546E",
    WSSB_ADDRESS: "0x9ca8E9846aD8568A6569de0367B098bED8D95165",
    SB_ADDRESS: "0x4CEd793E815fC4ea9e74A9cDCE178D8E2050dC91",
    MIM_ADDRESS: "0x130966628846BFd36ff31a822705796e8cb8C18D",
    STAKING_ADDRESS: "0x50696031447ae31ac3dF0af767E878de13F74FFe",
    STAKING_HELPER_ADDRESS: "0x3d371d925Db78F8e46130AF95756789ecE6387ce",
    SB_BONDING_CALC_ADDRESS: "0xf1AC1eD0Ef7F61223df64e52A6E6E1d6Ca6f992b",
    TREASURY_ADDRESS: "0x8ACC210BBb115abeF08911EbB7A1bC46BeFbAA38",
    ZAPIN_ADDRESS: "0xc669dC61aF974FdF50758d95306e4083D36f1430",
    REDEEM_ADDRESS: "0xFc3625cD7a5C9D40BfE6EE075A73867B32073f5E",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;

    throw Error("Network not supported");
};
