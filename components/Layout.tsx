type LayoutProps = {
  children?: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return <div className="bg-gray-600">{children}</div>;
};

export default Layout;
