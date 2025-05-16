import { ChangeEvent, FC, useState } from "react";
import { CustomSelectProps } from "../../models/interfaces";
import styles from "./CustomSelect.module.scss";

export const CustomSelect: FC<CustomSelectProps> = ({
  options = [],
  title,
  ...props
}: CustomSelectProps) => {
  const [selectedValue, setSelectedValue] = useState<number | string>("");
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { target } = event;
    const { value } = target;
    setSelectedValue(value);
    if (value !== "") {
      target.classList.add(styles.shrink);
    } else {
      target.classList.remove(styles.shrink);
    }
  };

  return (
    <div className={styles.wrapper} data-testid="wrapper">
      <select
        className={styles.select}
        onChange={handleChange}
        value={selectedValue}
        data-testid="select"
        {...props}
      >
        <option
          value=""
          className={styles.defaultOption}
          disabled
          data-testid="defaultOption"
        ></option>
        {options.map((option) => (
          <option key={option.id} value={option.value} data-testid="option">
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
