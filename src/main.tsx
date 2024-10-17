import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import { Provider } from "react-redux";
import { persistore, store } from "./redux/store.ts";
import { Toaster as Sonner } from "sonner";
import { Toaster } from "@/components/ui/toaster";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
    <Sonner duration={2000} richColors closeButton />
    <Toaster />
  </React.StrictMode>
);
