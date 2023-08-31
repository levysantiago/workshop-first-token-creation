import { ethers } from 'ethers'
import { ERC20ABI__factory as ERC20ABITypedFactory } from '../smc-types/factories'
import { ERC20ABI as IERC20ABI } from '../smc-types'
import { TransactionResponse, Web3Provider } from '@ethersproject/providers'

class TokenRepository {
  private token: IERC20ABI
  private provider: Web3Provider | undefined

  constructor(provider: ethers.providers.Web3Provider) {
    this.provider = provider
    this.provider = provider
    this.token = ERC20ABITypedFactory.connect(
      process.env.REACT_APP_TOKEN_ADDRESS || '',
      provider,
    )
  }

  public async balanceOf(address: string): Promise<string> {
    if (!this.token) throw new Error('token not defined')
    const balance = await this.token.balanceOf(address)
    return ethers.utils.formatEther(balance)
  }

  public async totalSupply(): Promise<string> {
    if (!this.token) throw new Error('token not defined')
    const _totalSupply = await this.token.totalSupply()
    return ethers.utils.formatEther(_totalSupply)
  }

  public async mint({
    address,
    amount,
  }: {
    address: string
    amount: string
  }): Promise<TransactionResponse> {
    if (!this.token) throw new Error('token not defined')
    const signer = this.provider!.getSigner()
    const unsignedTrx = await this.token.populateTransaction.mint(
      address,
      ethers.utils.parseEther(amount),
    )
    return await signer.sendTransaction(unsignedTrx)
  }

  public async burn({
    amount,
  }: {
    amount: string
  }): Promise<TransactionResponse> {
    if (!this.token) throw new Error('token not defined')
    const signer = this.provider!.getSigner()
    const unsignedTrx = await this.token.populateTransaction.burn(
      ethers.utils.parseEther(amount),
    )
    return await signer.sendTransaction(unsignedTrx)
  }

  public async transfer({
    addressTo,
    amount,
  }: {
    addressTo: string
    amount: string
  }): Promise<TransactionResponse> {
    if (!this.token) throw new Error('token not defined')
    const signer = this.provider!.getSigner()
    const unsignedTrx = await this.token.populateTransaction.transfer(
      addressTo,
      ethers.utils.parseEther(amount),
    )
    return await signer.sendTransaction(unsignedTrx)
  }
}

export default TokenRepository
