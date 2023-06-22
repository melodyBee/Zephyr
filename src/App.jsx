import React from 'react'
import {Route,Routes}from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Products from './Pages/Products'
import SignUp from './Pages/SignUp'
import Categories from './Pages/Categories'
import Page404 from './Pages/Page404'
import Navigationbar from './Components/Navigationbar'
import Footer from './Components/Footer'
import './app.css';

export default function App() {

  // const [user,setUser] = useState(true)
  return (
    <>
      <Navigationbar />

          {/* // this block will be triggered if user has logedIn */}
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        {/* )
        :
        (
          // this block will be triggered if the user has not logedIn
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<Login />} />
        </Routes>
        )
      } */}

    
    
    </>
  )
}
