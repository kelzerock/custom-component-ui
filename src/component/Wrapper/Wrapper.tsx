import { ReactNode } from "react";
import "./Wrapper.css";

type WrapperProps = {
  title: string;
  children: ReactNode;
};

export const Wrapper = ({ title, children }: WrapperProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="wrapper__wrapper">{children}</div>
    </div>
  );
};
