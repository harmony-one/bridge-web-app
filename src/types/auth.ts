import WalletConnect from '@walletconnect/client'
import { ethers } from 'ethers'
import { WalletEnum } from './wallet'

export type User = {
  address: string
  walletConnect?: WalletConnect
  provider?: ethers.providers.Web3Provider
  walletType: WalletEnum
}
