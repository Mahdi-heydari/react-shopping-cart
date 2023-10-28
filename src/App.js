import { useEffect, useState } from "react";
import AppLayout from "./components/appLayout/AppLayout";
import { WithAppContext, useAppContext } from "./store";
import { loadData } from "./store/action";

export default function App() {

  return (
    <>
      <WithAppContext>
        <AppLayout/>
      </WithAppContext>
    </>
  );
}
