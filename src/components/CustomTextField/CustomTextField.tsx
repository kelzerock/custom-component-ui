import { FC, useState } from "react";
import styles from "./CustomTextField.module.scss";
import { CustomTextFieldProps } from "../../models/interfaces";

export const CustomTextField: FC<CustomTextFieldProps> = ({
  label,
  error,
  value,
  ...props
}: CustomTextFieldProps) => {
  const [valueInput, setValueInput] = useState(value);
  const className = [styles.wrapper];
  if (error) {
    className.push(styles.error);
  }
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { target } = event;
    if (target instanceof HTMLInputElement) {
      const { value } = target;
      setValueInput(value);
      if (value.trim() !== "") {
        target.classList.add(styles.shrink);
      } else {
        target.classList.remove(styles.shrink);
      }
    }
  };

  return (
    <div className={className.join(" ")} data-testid="wrapper">
      <input
        type="text"
        className={`${styles.input} ${valueInput ? styles.shrink : ""}`}
        value={valueInput}
        onInput={handleInput}
        {...props}
      ></input>
      {label && <label className={styles.label}>{label}</label>}
    </div>
  );
};
