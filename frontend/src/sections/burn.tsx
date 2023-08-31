import { useState } from "react"
import TokenRepository from "../repositories/tokenRepository"
import { Button, Flex, Text } from "@radix-ui/themes"
import { InputNumber } from "../components/InputNumber"

interface IBurnProps {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  tokenRepository: TokenRepository | undefined
  fetchBalance: () => Promise<void>
}

export function BurnSection({ loading, setLoading, tokenRepository, fetchBalance }: IBurnProps) {
  const [burnAmount, setBurnAmount] = useState("")

  async function handleBurnSubmit() {
    try {
      setLoading(true)
      const trx = await tokenRepository?.burn({ amount: burnAmount })
      await trx?.wait()
      setBurnAmount("")
      await fetchBalance()
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="#burn">
      <Flex gap="3" align="start" direction="column">
        <Text style={{ color: "#fafafa" }} size="5">🔥 Burn Token</Text>
        <Flex gap="3" align="end">
          <InputNumber
            label="Amount"
            placeholder="100"
            value={burnAmount}
            onChange={(event) => { setBurnAmount(event.target.value) }}
          />
          <Button
            size="3"
            color="red"
            style={{ cursor: "pointer" }}
            onClick={handleBurnSubmit}
          >
            {loading ? "..." : "Burn"}
          </Button>
        </Flex>
      </Flex>
    </section>
  )
}