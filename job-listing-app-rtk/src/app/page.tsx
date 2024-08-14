// import Image from "next/image";
'use client'
import LandingPage from "./components/Landingpage";
import { store } from './store'
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { opportunitiesApi } from "./features/api";
export default function Home() {
  return (
    <Provider store={store}>
      {/* <ApiProvider api={opportunitiesApi}> */}
          <div>
            <LandingPage />
          </div>
      {/* </ApiProvider> */}
        
     </Provider>
    
  );
}
