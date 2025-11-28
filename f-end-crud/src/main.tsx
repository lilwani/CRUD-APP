import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
import Spinner from "./misc/Spinner.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <Suspense fallback={<Spinner />}>
  //     <RouterProvider router={router} />
  //   </Suspense>
  // </StrictMode>
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
);
