import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'

const  router = createBrowserRouter(
  [
    {
      path : "/",
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path : "/pastes",
      element: 
      <div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path: "/pastes/:id", // Use :id to define a dynamic route
      element: (
        <div>
          <Navbar />
          <ViewPaste />
        </div>
      ),
    },
    
  ]
)

function App() {
  

  return (
    <div className= ''>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
