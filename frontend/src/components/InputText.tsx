import { TextField } from "@radix-ui/themes";

interface IInputTextProps {
  placeholder?: string
}

export function InputText({ placeholder }: IInputTextProps) {
  return <TextField.Input size="3" type="text" placeholder={placeholder} variant="classic" radius="full" color="purple" />
}