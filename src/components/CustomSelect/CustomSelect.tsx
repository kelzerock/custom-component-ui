import { ChangeEvent, FC, useMemo, useState } from "react";
import { CustomSelectProps, OptionsData } from "../../models/interfaces";
import styles from "./CustomSelect.module.scss";
import clsx from "clsx";

export const CustomSelect: FC<CustomSelectProps> = ({
  options = [],
  title,
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
    console.log("start");
    if (props.disabled) return;

    const selectedOption = options.find((opt) => {
      console.log(opt.value, event.target.value);

      return String(opt.value) === event.target.value;
    });
    console.log({ selectedOption });
    setSelectedValue(selectedOption || null);

    event.target.classList.toggle(styles.shrink, event.target.value !== "");
  };

  return (
    <div
      className={clsx(styles.wrapper, props.disabled && styles.disabled)}
      data-testid="wrapper"
    >
      <select
        className={clsx(styles.select, defaultSelected && styles.shrink)}
        value={selectedValue?.value || ""}
        onChange={handleChange}
        data-testid="select"
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
