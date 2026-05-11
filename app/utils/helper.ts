import {type Address} from 'viem';


export const formatAddress = (address: Address) => {
  if (!address) return "";
  const lowerAddress = address.toLowerCase();

  return lowerAddress.slice(0, 6) + "..." + address.slice(-4);
};

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(
    () => {
      console.log("Address copied to clipboard");
    }
  );
};

export const isAmountEntered = (amount : number) => {
  return amount > 0;
}
