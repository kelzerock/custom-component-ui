import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonSize, ButtonVariant } from "../types";

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}
