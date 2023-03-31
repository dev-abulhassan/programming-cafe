import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer/Footer';

function App() {


  return (
    <div className="App container mx-auto ">
      <Header></Header>
      <Blogs></Blogs>
      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
