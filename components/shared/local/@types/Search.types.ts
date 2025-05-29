import { ChangeEvent } from "react";

export type SearchItem = {
  title: string;
  className: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
