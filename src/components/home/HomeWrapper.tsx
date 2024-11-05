import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const HomeWrapper: React.FC<IProps> = ({ children }) => {
  return <div className="flex flex-col gap-5 shadow pb-5">{children}</div>;
};

export default HomeWrapper;
