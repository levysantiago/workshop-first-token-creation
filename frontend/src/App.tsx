import { Box, Button, Flex, Text, } from "@radix-ui/themes"
import { InputText } from "./components/InputText";
import { InputNumber } from "./components/InputNumber";
import { useState } from "react";

function App() {
  const [mintAmount, setMintAmount] = useState("")
  const [burnAmount, setBurnAmount] = useState("")
  const [transferAmount, setTransferAmount] = useState("")
  const [transferAddress, setTransferAddress] = useState("")

  function handleMintSubmit() {
    console.log(mintAmount);
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
