import './App.css'
import Footer from './Footer'
import Header from './Header'
import {Outlet} from 'react-router'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
