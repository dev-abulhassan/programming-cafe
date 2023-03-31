import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {


  return (
    <div className="App container mx-auto ">
      <Header></Header>
      <Blogs></Blogs>
      <ToastContainer />
    </div>
  )
}

export default App
