import { InputHTMLAttributes } from "react";

export interface CustomTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  label?: string;
}
