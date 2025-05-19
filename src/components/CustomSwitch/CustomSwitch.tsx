import { ChangeEvent, FC, useState } from "react";
import { Switch } from "../../models/enums";
import { CustomCheckboxProps } from "../../models/interfaces";
import styles from "./CustomSwitch.module.scss";
import clsx from "clsx";

export const CustomSwitch: FC<CustomCheckboxProps> = ({
  title,
  color,
  ...props
}: CustomCheckboxProps) => {
  const { required } = props;
  const requiredBlock = required ? " *" : "";
  const [checkedState, setCheckedState] = useState<boolean>(
    props.checked ?? false,
  );

  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.disabled) return;

    if (props.onChange !== undefined) {
      props.onChange(event);
    } else {
      setCheckedState((prev) => !prev);
    }
  };

  const isControlled = props.checked !== undefined;
  const checked = isControlled ? props.checked : checkedState;

  return (
    <label
      className={clsx(
        styles.wrapper,
        props.disabled && styles.disabled,
        checked && styles.checked,
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
          onChange={handleClick}
          {...props}
          type="checkbox"
          checked={checked}
          className={styles.checkbox}
          data-testid={Switch.input}
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
