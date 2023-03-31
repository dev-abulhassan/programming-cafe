import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import News from './components/News/News'

function App() {


  return (
    <div className="App container mx-auto ">
     <Header></Header>
     <Blogs></Blogs>
    </div>
  )
}

export default App
