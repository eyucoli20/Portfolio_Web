import './App.css'
import About from './Components/About/About'
import Banner from './Components/Banner/Banner'
import Blog from './Components/Blogs/Blog'
import Contact from './Components/Contact/Contact'
import Experiance from './Components/Experience/Experiance'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Skills from './Components/Skills/Skills'

function App() {
  return (
    <>
      <Header/>
      <Banner />
      <About />
      <Skills />
      <Experiance />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}
export default App
