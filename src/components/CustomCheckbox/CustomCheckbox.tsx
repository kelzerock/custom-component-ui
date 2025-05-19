import { FC, useState } from "react";
import { Checkbox } from "../../models/enums";
import { CustomCheckboxProps } from "../../models/interfaces";
import styles from "./CustomCheckbox.module.scss";
import clsx from "clsx";

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
  title,
  color,
  onChange,
  checked,
  required,
  className,
  disabled,
  defaultChecked,
  ...props
}: CustomCheckboxProps) => {
  const requiredBlock = required ? " *" : "";
  const [checkedState, setCheckedState] = useState<boolean>(
    defaultChecked ?? false,
  );

  const handleClick = () => {
    if (disabled) return;

    setCheckedState((prev) => !prev);
  };

  return (
    <label
      className={clsx(styles.wrapper, disabled && styles.disabled)}
      data-testid={Checkbox.wrapper}
    >
      <input
        onChange={onChange ?? handleClick}
        type="checkbox"
        checked={checked ?? checkedState}
        className={clsx(styles.checkbox, className)}
        style={{ accentColor: color }}
        data-testid={Checkbox.checkbox}
        disabled={disabled}
        {...props}
      />
      {title && (
        <span
          className={styles.title}
          data-testid={Checkbox.title}
        >{`${title}${requiredBlock}`}</span>
      )}
    </label>
  );
};
