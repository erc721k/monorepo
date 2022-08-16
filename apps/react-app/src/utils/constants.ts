import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
export const NODE_ENV = publicRuntimeConfig.NODE_ENV || "development";
export const ALCHEMY_ID = process.env.NEXT_PUBLIC_ALCHEMY_ID;
export const ENABLE_TESTNETS = process.env.NEXT_PUBLIC_ENABLE_TESTNETS;
export const FORKING_ENABLED = process.env.NEXT_PUBLIC_FORKING_ENABLED;
export default {
  NODE_ENV,
  ALCHEMY_ID,
  ENABLE_TESTNETS,
  FORKING_ENABLED
};
