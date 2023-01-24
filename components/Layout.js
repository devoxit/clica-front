

import Navbar from "./Navbar";


const Layout = ({ children }) => {
  

  return (
    
      
        <>
         <main class="main" id="top">
          <div class="container-fluid px-0">
          <Navbar/>
          {children}
        </div>
        </main>
         
        </>
      )
    }
    

export default Layout;
