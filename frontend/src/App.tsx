import { Box, Button, Flex, Text, } from "@radix-ui/themes"
import { InputText } from "./components/InputText";
import { InputNumber } from "./components/InputNumber";
import { useEffect, useState } from "react";
import TokenRepository from "./repositories/tokenRepository";
import { ethers } from "ethers";

function App() {
  const [walletAddress, setWalletAddress] = useState('')
  const [mintAmount, setMintAmount] = useState("")
  const [burnAmount, setBurnAmount] = useState("")
  const [transferAmount, setTransferAmount] = useState("")
  const [transferAddress, setTransferAddress] = useState("")
  const [tokenRepository, setTokenRepository] =
    useState<TokenRepository>()

  async function connect(): Promise<string[] | undefined> {
    if (window.ethereum) {
      const accounts = (await window.ethereum.request({
        method: 'eth_requestAccounts',
      })) as string[] | undefined

      if (accounts && accounts.length) {
        setWalletAddress(accounts[0])
        // setIsConnected(true)
      }

      return accounts
    }
  }

  function getProvider() {
    if (window.ethereum !== undefined) {
      const windowEthereum: any = window.ethereum
      // Get the provider and signer from the browser window
      const provider = new ethers.providers.Web3Provider(windowEthereum)

      return provider
    }
  }

  useEffect(() => {
    const tokenRepository = new TokenRepository(getProvider())
    setTokenRepository(tokenRepository)
  }, [])

  async function handleMintSubmit() {
    await tokenRepository?.mint({ address: walletAddress, amount: mintAmount })
  }

  function handleBurnSubmit() {
    console.log(burnAmount);
  }

  function handleTransferSubmit() {
    console.log(transferAddress, transferAmount);
  }

  return (
    <Box p="9" >
      <header>
        <Flex gap="3" align="center" direction="column" mb="9">
          <Text color="sky" size="9">Sinform Token</Text>

          {walletAddress ?
            <Text color="cyan" size="4">{walletAddress}</Text> :
            <Button
              size="3"
              color="blue"
              style={{ cursor: "pointer" }}
              mb="5"
              onClick={connect}
            >
              Connect Wallet
            </Button>
          }
        </Flex>
      </header>


      <Flex gap="9" align="start" direction="column">
        {/* MINT */}
        <section id="#mint">
          <Flex gap="3" align="start" direction="column">
            <Flex gap="3" align="center">
              <Text style={{ color: "#fafafa" }} size="5">💰 Mint Token</Text>
              <Text style={{ color: "#434098" }} size="3">Total Supply: 1000 TK</Text>
            </Flex>
            <Flex gap="3" align="end">
              <InputNumber
                label="Amount"
                placeholder="100"
                onChange={(event) => { setMintAmount(event.target.value) }}
              />
              <Button
                size="3"
                color="blue"
                style={{ cursor: "pointer" }}
                onClick={handleMintSubmit}
              >
                Mint
              </Button>
            </Flex>
          </Flex>
        </section>

        {/* Burn */}
        <section id="#burn">
          <Flex gap="3" align="start" direction="column">
            <Text style={{ color: "#fafafa" }} size="5">🔥 Burn Token</Text>
            <Flex gap="3" align="end">
              <InputNumber
                label="Amount"
                placeholder="100"
                onChange={(event) => { setBurnAmount(event.target.value) }}
              />
              <Button
                size="3"
                color="red"
                style={{ cursor: "pointer" }}
                onClick={handleBurnSubmit}
              >
                Burn
              </Button>
            </Flex>
          </Flex>
        </section>

        {/* Transfer */}
        <section id="#transfer">
          <Flex gap="3" align="start" direction="column">
            <Flex gap="3" align="center">
              <Text style={{ color: "#fafafa" }} size="5">🚀 Transfer Token</Text>
              <Text style={{ color: "#434098" }} size="3">Balance: 1000 TK</Text>
            </Flex>
            {/* Address */}
            <InputText
              label="Address"
              placeholder="0x123..."
              onChange={(event) => { setTransferAddress(event.target.value) }}
            />
            <Flex gap="3" align="end">
              <InputNumber
                label="Amount"
                placeholder="100"
                onChange={(event) => { setTransferAmount(event.target.value) }}
              />
              <Button
                size="3"
                color="blue"
                style={{ cursor: "pointer" }}
                onClick={handleTransferSubmit}
              >
                Transfer
              </Button>
            </Flex>
          </Flex>
        </section>
      </Flex >
    </Box >
  );
}

export default App;
