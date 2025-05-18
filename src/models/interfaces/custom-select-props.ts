import { SelectHTMLAttributes } from "react";
import { OptionsData } from "./option-data";

export interface CustomSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  title?: string;
  options?: OptionsData[];
}
