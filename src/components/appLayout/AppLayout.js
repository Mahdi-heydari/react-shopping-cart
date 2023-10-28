import { useEffect } from "react";
import Footer from "../../UI/Footer";
import Header from "../../UI/Header";
import Main from "../../UI/Main";
import { useAppContext } from "../../store";
import "./index.css";
import { loadData } from "../../store/action";

export default function AppLayout() {
  const { state, dispatch } = useAppContext();

  useEffect(
    function () {
      dispatch(loadData());
    },
    [dispatch]
  );

  return (
    <div className="grid-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
