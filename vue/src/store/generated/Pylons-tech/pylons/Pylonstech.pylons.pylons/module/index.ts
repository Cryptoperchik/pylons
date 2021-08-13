// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgExecuteRecipe } from "./types/pylons/tx";
import { MsgUpdateRecipe } from "./types/pylons/tx";
import { MsgGoogleIAPGetPylons } from "./types/pylons/tx";
import { MsgDeleteGooglIAPOrder } from "./types/pylons/tx";
import { MsgSetItemString } from "./types/pylons/tx";
import { MsgCreateRecipe } from "./types/pylons/tx";
import { MsgSendItems } from "./types/pylons/tx";
import { MsgUpdateGooglIAPOrder } from "./types/pylons/tx";
import { MsgUpdateCookbook } from "./types/pylons/tx";
import { MsgCreateGooglIAPOrder } from "./types/pylons/tx";
import { MsgCreateAccount } from "./types/pylons/tx";
import { MsgCreateCookbook } from "./types/pylons/tx";


const types = [
  ["/Pylonstech.pylons.pylons.MsgExecuteRecipe", MsgExecuteRecipe],
  ["/Pylonstech.pylons.pylons.MsgUpdateRecipe", MsgUpdateRecipe],
  ["/Pylonstech.pylons.pylons.MsgGoogleIAPGetPylons", MsgGoogleIAPGetPylons],
  ["/Pylonstech.pylons.pylons.MsgDeleteGooglIAPOrder", MsgDeleteGooglIAPOrder],
  ["/Pylonstech.pylons.pylons.MsgSetItemString", MsgSetItemString],
  ["/Pylonstech.pylons.pylons.MsgCreateRecipe", MsgCreateRecipe],
  ["/Pylonstech.pylons.pylons.MsgSendItems", MsgSendItems],
  ["/Pylonstech.pylons.pylons.MsgUpdateGooglIAPOrder", MsgUpdateGooglIAPOrder],
  ["/Pylonstech.pylons.pylons.MsgUpdateCookbook", MsgUpdateCookbook],
  ["/Pylonstech.pylons.pylons.MsgCreateGooglIAPOrder", MsgCreateGooglIAPOrder],
  ["/Pylonstech.pylons.pylons.MsgCreateAccount", MsgCreateAccount],
  ["/Pylonstech.pylons.pylons.MsgCreateCookbook", MsgCreateCookbook],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgExecuteRecipe: (data: MsgExecuteRecipe): EncodeObject => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgExecuteRecipe", value: data }),
    msgUpdateRecipe: (data: MsgUpdateRecipe): EncodeObject => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgUpdateRecipe", value: data }),
    msgGoogleIAPGetPylons: (data: MsgGoogleIAPGetPylons): EncodeObject => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgGoogleIAPGetPylons", value: data }),
    msgDeleteGooglIAPOrder: (data: MsgDeleteGooglIAPOrder): EncodeObject => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgDeleteGooglIAPOrder", value: data }),
    msgSetItemString: (data: MsgSetItemString): EncodeObject => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgSetItemString", value: data }),
    msgCreateRecipe: (data: MsgCreateRecipe): EncodeObject => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgCreateRecipe", value: data }),
    msgSendItems: (data: MsgSendItems): EncodeObject => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgSendItems", value: data }),
    msgUpdateGooglIAPOrder: (data: MsgUpdateGooglIAPOrder): EncodeObject => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgUpdateGooglIAPOrder", value: data }),
    msgUpdateCookbook: (data: MsgUpdateCookbook): EncodeObject => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgUpdateCookbook", value: data }),
    msgCreateGooglIAPOrder: (data: MsgCreateGooglIAPOrder): EncodeObject => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgCreateGooglIAPOrder", value: data }),
    msgCreateAccount: (data: MsgCreateAccount): EncodeObject => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgCreateAccount", value: data }),
    msgCreateCookbook: (data: MsgCreateCookbook): EncodeObject => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgCreateCookbook", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
