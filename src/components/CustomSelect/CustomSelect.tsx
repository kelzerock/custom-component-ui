import { ChangeEvent, FC, useMemo, useState } from "react";
import { CustomSelectProps, OptionsData } from "../../models/interfaces";
import styles from "./CustomSelect.module.scss";
import clsx from "clsx";

export const CustomSelect: FC<CustomSelectProps> = ({
  options = [],
  title,
  onChange,
  disabled,
  className,
  value,
  ...props
}: CustomSelectProps) => {
  const defaultSelected = useMemo(
    () => options.find((el) => el.defaultSelect === true) || null,
    [options],
  );

  const [selectedValue, setSelectedValue] = useState<OptionsData | null>(
    defaultSelected,
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (disabled) return;

    const selectedOption = options.find((opt) => {
      return String(opt.value) === event.target.value;
    });
    setSelectedValue(selectedOption || null);
  };

  return (
    <div
      className={clsx(styles.wrapper, disabled && styles.disabled)}
      data-testid="wrapper"
    >
      <select
        className={clsx(
          styles.select,
          (value || defaultSelected) && styles.shrink,
          className,
        )}
        value={value ?? (selectedValue?.value || "")}
        onChange={onChange ?? handleChange}
        disabled={disabled}
        data-testid="select"
        {...props}
      >
        {defaultSelected === null && (
          <option
            value=""
            className={styles.defaultOption}
            disabled
            data-testid="defaultOption"
          ></option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} data-testid="option">
            {option.title}
          </option>
        ))}
      </select>
      {title && (
        <span className={styles.title} data-testid="title">
          {title}
        </span>
      )}
    </div>
  );
};
