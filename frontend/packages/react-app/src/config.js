import { defineChain } from "@thirdweb";

const bitrock = defineChain(7171);

export const ROUTER_ADDRESS = "0x6789f48F8ED4506362592Ca58E9c160d624932B6";

export const DAPP_CONFIG = {
    readOnlyChainId: bitrock.chainId,
    readOnlyUrls: {
        [bitrock.chainId]: process.env.REACT_APP_TW_API_KEY,
    },
};
