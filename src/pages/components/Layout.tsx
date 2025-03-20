import { Layout_Props } from "@/utils/types";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }: Layout_Props) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
