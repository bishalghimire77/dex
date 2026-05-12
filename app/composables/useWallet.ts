import {
  createWalletClient,
  createPublicClient,
  http,
  formatEther,
  type Chain,
  type WalletClient,
  type Transport,
  custom,
  type Address
} from 'viem'

import { cronos } from 'viem/chains'

export const useWallet = () => {

  const address = useState<Address | undefined>(
    'wallet-address',
    () => undefined
  )

  const balance = useState<string>(
    'wallet-balance',
    () => "0"
  )

  const isConnected = useState<boolean>(
    'connected',
    () => false
  )

  const getPublicClient = () => {
    return createPublicClient({
      chain: cronos,
      transport: http()
    })
  }

  const getWalletClient = (): WalletClient<Transport, Chain> => {

    // IMPORTANT
    if (!process.client) {
      throw new Error('Client only')
    }

    if (typeof window === 'undefined') {
      throw new Error('Window unavailable')
    }

    const provider = window.ethereum

    if (!provider) {
      throw new Error(
        'No Ethereum provider found'
      )
    }

    return createWalletClient({
      chain: cronos,
      transport: custom(provider)
    })
  }

  const fetchAddress = async () => {

    // IMPORTANT
    if (!process.client) return

    try {

      const addresses =
        await getWalletClient().getAddresses()

      if (addresses.length === 0) return

      address.value = addresses[0] as `0x${string}`
      isConnected.value = true

      const blc =
        await getPublicClient().getBalance({
          address: addresses[0] as `0x${string}`
        })

      balance.value = formatEther(blc)

    } catch (err) {
      console.log(err)
    }
  }

  const onAccountsChanged = (
    callback: (account: `0x${string}` | null) => void,
  ) => {

    // IMPORTANT
    if (!process.client) return

    if (typeof window === 'undefined') return

    const provider = window.ethereum

    if (!provider) return

    const handler = (accounts: string[]) => {

      if (accounts.length === 0) {
        callback(null)
      } else {

        callback(accounts[0] as `0x${string}`)

        address.value =
          accounts[0] as `0x${string}`
      }
    }

    provider.on("accountsChanged", handler)

    return () => {
      provider.removeListener(
        "accountsChanged",
        handler
      )
    }
  }

  return {
    getWalletClient,
    address,
    onAccountsChanged,
    fetchAddress,
    isConnected,
    balance
  }
}