export type LinkProps = {
  text: string;
  variant?: "primary" | "secondary";
  href: string;
} & React.LinkHTMLAttributes<HTMLLinkElement>;
