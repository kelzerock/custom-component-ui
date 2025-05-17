import { InputHTMLAttributes } from "react";

export interface CustomCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  color?: string;
}
