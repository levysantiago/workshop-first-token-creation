import { Flex, Text, TextField } from "@radix-ui/themes";

interface IInputTextProps {
  label: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
}

export function InputText({ placeholder, label, onChange }: IInputTextProps) {
  return (
    <Flex gap="2" align="start" direction="column">
      <Text
        style={{ color: "#6561d4" }}
        size="1">{label}
      </Text>
      <TextField.Input
        size="3"
        type="text"
        placeholder={placeholder}
        variant="classic"
        radius="full"
        color="purple"
        onChange={onChange}
      />
    </Flex>
  )
}