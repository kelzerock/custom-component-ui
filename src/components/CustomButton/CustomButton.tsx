import { FC } from "react";
import { CustomButtonProps } from "../../models/interfaces";
import styles from "./CustomButton.module.scss";
import clsx from "clsx";

export const CustomButton: FC<CustomButtonProps> = ({
  children,
  variant,
  size,
  className,
  ...props
}: CustomButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        variant && styles[variant],
        size && styles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
