// import Image from "next/image";
'use client'
import Homepage from './api/auth/components/Home'
import LandingPage from "./api/auth/components/Landingpage";
import { store } from './store'
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { opportunitiesApi } from "./features/api";
import LoggedOutPage from "./api/auth/signout/page";
export default function Home() {
  return (
    <Provider store={store}>
          <div>
            <Homepage />
          </div>
        
     </Provider>
    
  );
}
