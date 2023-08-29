import { TextField } from "@radix-ui/themes";

interface IInputNumberProps {
  placeholder?: string
}

export function InputNumber({ placeholder }: IInputNumberProps) {
  return <TextField.Input size="3" type="number" placeholder={placeholder} variant="classic" radius="full" color="purple" />
}