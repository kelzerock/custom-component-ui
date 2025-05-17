import { useState } from "react";
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

  const handleClick = () => {
    setCheckedState((prev) => !prev);
  };

  return (
    <label
      className={clsx(styles.wrapper, props.disabled && styles.disabled)}
      data-testid={Checkbox.wrapper}
    >
      <input
        onChange={handleClick}
        {...props}
        type="checkbox"
        checked={checkedState}
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
