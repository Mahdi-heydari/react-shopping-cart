import Footer from "../UI/Footer";
import Header from "../UI/Header";
import Main from "../UI/Main";
import "./index.css" ;

export default function AppLayout() {
  return (
    <div className="grid-container">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
