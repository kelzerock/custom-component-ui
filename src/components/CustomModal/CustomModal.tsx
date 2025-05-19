import { FC, useEffect } from "react";
import { CustomModalProps } from "../../models/interfaces/custom-modal-props";
import styles from "./CustomModal.module.scss";
import { Modal } from "../../models/enums";
import clsx from "clsx";

export const CustomModal: FC<CustomModalProps> = ({
  onClose,
  open,
  children,
  onClick,
  className,
  ...props
}: CustomModalProps) => {
  useEffect(() => {
    if (open) document.body.classList.add(styles.lock);

    return () => {
      document.body.classList.remove(styles.lock);
    };
  }, [open]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) onClose();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.wrapper}
      onClick={onClick ?? handleClick}
      data-testid={Modal.wrapper}
    >
      <div
        className={clsx(styles.modal, className)}
        {...props}
        data-testid={Modal.modal}
      >
        {children}
      </div>
    </div>
  );
};
