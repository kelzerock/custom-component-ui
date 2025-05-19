import { FC, useState } from "react";
import { Switch } from "../../models/enums";
import { CustomCheckboxProps } from "../../models/interfaces";
import styles from "./CustomSwitch.module.scss";
import clsx from "clsx";

export const CustomSwitch: FC<CustomCheckboxProps> = ({
  title,
  color,
  onChange,
  className,
  required,
  defaultChecked,
  checked,
  disabled,
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
      className={clsx(
        styles.wrapper,
        disabled && styles.disabled,
        (checked ?? checkedState) && styles.checked,
      )}
      data-testid={Switch.wrapper}
    >
      <span className={styles.switchBox} data-testid={Switch.switchBox}>
        <span
          className={styles.switch}
          style={{ backgroundColor: color }}
          data-testid={Switch.switch}
        >
          <span
            className={styles.switchDash}
            data-testid={Switch.switchDash}
          ></span>
          <span
            className={styles.switchPoint}
            data-testid={Switch.switchPoint}
          ></span>
        </span>
        <input
          onChange={onChange ?? handleClick}
          type="checkbox"
          checked={checked ?? checkedState}
          className={clsx(styles.checkbox, className)}
          data-testid={Switch.input}
          disabled={disabled}
          {...props}
        />
      </span>
      {title && (
        <span
          className={styles.title}
          data-testid={Switch.title}
        >{`${title}${requiredBlock}`}</span>
      )}
    </label>
  );
};
