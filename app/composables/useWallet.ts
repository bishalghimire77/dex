import {createWalletClient, createPublicClient, http, formatEther, type Chain, type WalletClient, type Transport, custom, type Address} from 'viem';
import { cronos } from 'viem/chains';


export const useWallet = () => {

    const address = useState <Address | undefined>('wallet-address', () => undefined);
    const balance = useState<string>('wallet-balance', () => "0");
    const isConnected = useState<boolean>('connected', () => false);

    const getPublicClient = () => {
        return createPublicClient({
            chain: cronos,
            transport: http()
        })
    }

    const getWalletClient = () : WalletClient<Transport, Chain> => {
        if (window.ethereum ===  undefined) {
            throw new Error ("No Ethereum provider found. Please install MetaMask or another wallet.");
        }
        const provider = window.ethereum;

        if (!provider){
            throw new Error ("No Provider found. Please install MetaMask or another wallet.");
        }

        return createWalletClient({
            chain: cronos,
            transport: custom(provider)
        })
    }

    const fetchAddress = async () =>{
        const addresses = await getWalletClient().getAddresses();
        if (addresses.length == 0){
            throw new Error('No accounts found')
        }

        address.value = addresses[0];
        isConnected.value = true;

        const addressValue = address.value;
        if (!addressValue) {
            throw new Error('Address is undefined');
        }

        const blc = await getPublicClient().getBalance({address: addressValue});
        balance.value = formatEther(blc);

    }

    const onAccountsChanged = (
    callback: (account: `0x${string}` | null) => void,
  ) => {
    if (window.ethereum === undefined) {
      throw new Error("No window object  found");
    }

    const provider = window.ethereum;

    if (!provider) {
      throw new Error("No Ethereum provider found");
    }

    const handler = (accountes: string[]) => {
      if (accountes.length === 0) {
        callback(null);
      } else {
        callback(accountes[0] as `0x${string}`);
        address.value = accountes[0] as `0x${string}`;
      }
    };

    provider.on("accountsChanged", handler);

    return () => {
      provider.removeListener("accountsChanged", handler);
    };
  };

  return {
    getWalletClient,
    address,
    onAccountsChanged,
    fetchAddress,
    isConnected,
    balance
  }

    
}

