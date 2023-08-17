export type ButtonProps = {
  label: string
  variant?: 'primary' | 'secondary'
  icon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
