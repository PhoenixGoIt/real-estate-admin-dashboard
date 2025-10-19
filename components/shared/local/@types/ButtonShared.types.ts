export type ButtonSharedProps = {
  isPending?: boolean;
  onClick?: () => void;
  title: string;
  type?: "submit" | "reset" | "button" | undefined;
  width?: string | "full" | "auto";
  style?: string;
  height?: string;
}
