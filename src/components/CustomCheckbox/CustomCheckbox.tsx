import { ChangeEvent, useState } from "react";
import { Checkbox } from "../../models/enums";
import { CustomCheckboxProps } from "../../models/interfaces";
import styles from "./CustomCheckbox.module.scss";
import clsx from "clsx";

export const CustomCheckbox = ({
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
      className={clsx(styles.wrapper, props.disabled && styles.disabled)}
      data-testid={Checkbox.wrapper}
    >
      <input
        onChange={handleClick}
        {...props}
        type="checkbox"
        checked={checked}
        className={styles.checkbox}
        style={{ accentColor: color }}
        data-testid={Checkbox.checkbox}
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
