
import "../index.css";


const Sidebar = () => {

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Crypto Tracker</h2>
      <nav className="sidebar-nav">
       
          <a href="/" className="sidebar-link">
            Home
          </a>
          <a href="about" className="sidebar-link">
            about
          </a>
          <a href="Track" className="sidebar-link">
            Track 
          </a>
    
      </nav>
    </aside>
  );
};

export default Sidebar;
