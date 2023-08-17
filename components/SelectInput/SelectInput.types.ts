export type Options = {
  value: string
  label: string
}

export type SelectInputProps = {
  options: Options[]
  onChange?: (value: string) => void
  error?: string
  label?: string
  placeholder?: string
  id: string
  disabled?: boolean
}
