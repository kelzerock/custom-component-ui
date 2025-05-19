import { FC, useState } from "react";
import styles from "./CustomTextField.module.scss";
import { CustomTextFieldProps } from "../../models/interfaces";
import clsx from "clsx";
import { TextField } from "../../models/enums";

export const CustomTextField: FC<CustomTextFieldProps> = ({
  label,
  error,
  defaultValue,
  value,
  className,
  onChange,
  ...props
}: CustomTextFieldProps) => {
  const [valueInput, setValueInput] = useState(defaultValue ?? "");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { target } = event;
    if (target instanceof HTMLInputElement) {
      const { value } = target;
      setValueInput(value);
    }
  };

  return (
    <div
      className={clsx(styles.wrapper, error && styles.error)}
      data-testid={TextField.wrapper}
    >
      <input
        type="text"
        className={clsx(
          styles.input,
          (value || (typeof valueInput === "string" && valueInput.trim())) &&
            styles.shrink,
          className,
        )}
        value={value ?? valueInput}
        onChange={onChange ?? handleChange}
        {...props}
        data-testid={TextField.input}
      ></input>
      {label && (
        <label className={styles.label} data-testid={TextField.label}>
          {label}
        </label>
      )}
    </div>
  );
};
