import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pagina }) => {
  return (
    <div>
   
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
