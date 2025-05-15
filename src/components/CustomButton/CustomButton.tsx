import { FC } from "react";
import { CustomButtonProps } from "../../models/interfaces";
import styles from "./CustomButton.module.scss";

export const CustomButton: FC<CustomButtonProps> = ({
  children,
  variant,
  size,
  ...props
}: CustomButtonProps) => {
  const className: string[] = [];
  if (variant) className.push(styles[variant]);
  if (size) className.push(styles[size]);
  className.push(styles.button);

  return (
    <button {...props} className={className.join(" ")}>
      {children}
    </button>
  );
};
