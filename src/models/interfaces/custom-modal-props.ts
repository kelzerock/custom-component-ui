import { HTMLAttributes, ReactNode } from "react";

export interface CustomModalProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
}
