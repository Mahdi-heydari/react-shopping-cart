import Footer from "../../UI/Footer";
import Header from "../../UI/Header";
import Main from "../../UI/Main";
import "./index.css" ;

export default function AppLayout({productState,sizeState,sortState}) {
  return (
    <div className="grid-container">
      <Header/>
      <Main productState={productState} sizeState={sizeState} sortState={sortState}/>
      <Footer/>
    </div>
  )
}
