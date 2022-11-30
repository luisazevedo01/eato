import { Button, Paper, Typography } from '@mui/material'
import { ethers, Signer } from 'ethers'
import { useEffect, useState } from 'react'
import { JsonRpcProvider } from '@ethersproject/providers'

const provider: JsonRpcProvider = new ethers.providers.Web3Provider(
  window.ethereum
)

const Dashboard = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [account, setAccount] = useState<Signer | null>(null)
  const [userBalance, setUserBalance] = useState<string | null>(null)

  const connectWalletHandler = () => {
    if (window.ethereum) {
      provider.send('eth_requestAccounts', []).then(async () => {
        await accountChangedHandler(provider.getSigner())
      })
    } else {
      setErrorMessage('Please Install Metamask!!!')
    }
  }

  const accountChangedHandler = async (signer: Signer) => {
    console.log('signer: ', signer)

    const address = await signer.getAddress()

    setAccount(signer)

    const balance = await getuserBalance(address)

    setUserBalance(ethers.utils.formatEther(balance))
  }

  const getuserBalance = async (address: string) => {
    return await provider.getBalance(address, 'latest')
  }

  const getNetwork = async () => {
    const network = await provider.getNetwork()
    const address = await account?.getAddress()

    return {
      network,
      address,
    }
  }

  useEffect(() => {
    const asyncFn = async () => {
      const { network, address } = await getNetwork()

      console.log('lorem', network)
      console.log('address: ', address)
    }
    asyncFn()
  }, [account])

  return (
    <Paper>
      <Typography align='center' variant='h2'>
        Dashboard
      </Typography>
      <Button onClick={connectWalletHandler}>
        {account?.getAddress() !== undefined ? 'Connected!!' : 'Connect'}
      </Button>
      <Typography variant='h5'>{userBalance}</Typography>
    </Paper>
  )
}

export default Dashboard
