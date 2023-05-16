import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./Main";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
   return (
    <div className="App">     
      <Header />
      <Outlet />
      <Main />  
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        closeOnClick
        theme="dark" 
        limit={1}
      />
      </div>
  );
}
export default App;


