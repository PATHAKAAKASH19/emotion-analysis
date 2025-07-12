import Container from "./components/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {


  return (
    <div className="bg-linear-to-t from-[#2D0F45] to-black md:flex md: flex-col md:">
      <Header/>
      <Container/>
      <Footer/>
    </div>
  )
}

export default App
