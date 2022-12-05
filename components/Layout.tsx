import Header from "./Header";
import Footer from "./Footer";
import { FC, ReactNode } from "react";

type layoutPropsType = {
  children: ReactNode;
}

const Layout: FC<layoutPropsType> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
