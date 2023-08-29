import { Box, Button, Flex, Text, } from "@radix-ui/themes"
import { InputText } from "./components/InputText";
import { InputNumber } from "./components/InputNumber";

function App() {
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
              <Text style={{ color: "#33307c" }} size="3">Total Supply: 1000 TK</Text>
            </Flex>
            <Flex gap="3" align="center">
              <InputText placeholder="100" />
              <Button
                size="3"
                color="blue"
                style={{ cursor: "pointer" }}
                onClick={() => { }}>Mint
              </Button>
            </Flex>
          </Flex>
        </section>

        {/* Burn */}
        <section id="#burn">
          <Flex gap="3" align="start" direction="column">
            <Text style={{ color: "#fafafa" }} size="5">🔥 Burn Token</Text>
            <Flex gap="3" align="center">
              <InputText placeholder="100" />
              <Button
                size="3"
                color="red"
                style={{ cursor: "pointer" }}>Burn
              </Button>
            </Flex>
          </Flex>
        </section>

        {/* Transfer */}
        <section id="#transfer">
          <Flex gap="3" align="start" direction="column">
            <Flex gap="3" align="center">
              <Text style={{ color: "#fafafa" }} size="5">🚀 Transfer Token</Text>
              <Text style={{ color: "#33307c" }} size="3">Balance: 1000 TK</Text>
            </Flex>
            {/* Address */}
            <InputText placeholder="0x123..." />
            <Flex gap="3" align="center">
              <InputNumber placeholder="100" />
              <Button
                size="3"
                color="blue"
                style={{ cursor: "pointer" }}>Transfer
              </Button>
            </Flex>
          </Flex>
        </section>
      </Flex >
    </Box >
  );
}

export default App;
