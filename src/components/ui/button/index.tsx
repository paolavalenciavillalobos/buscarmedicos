import { ReactNode } from "react"

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children: ReactNode
}

export default function Button ({ children, ...props }: Props) {
  return <button {...props}>{children}</button>
}
