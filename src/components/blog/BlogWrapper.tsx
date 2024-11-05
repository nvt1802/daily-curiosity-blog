import { Fragment, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  banner: JSX.Element;
}

const BlogWrapper: React.FC<IProps> = ({ children, banner }) => {
  return (
    <Fragment>
      {banner}
      <div className="flex flex-col gap-5 shadow py-5 max-w-7xl mx-auto">{children}</div>
    </Fragment>
  );
};

export default BlogWrapper;
