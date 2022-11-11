import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarMobile from "./components/Sidebar/SidebarMobile/SidebarMobile";

function App() {
  return (
    <div>
      {window.screen.width <= 740 && <SidebarMobile />}
      <div className="container row">
        <div className="sidebar c-1-2">
          {window.screen.width > 740 && <Sidebar />}
        </div>
        <div className="content c-10-8">
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
