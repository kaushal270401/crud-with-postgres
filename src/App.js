import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import {  QueryClient, QueryClientProvider } from "react-query";
import React,{ lazy } from "react";
import Bookmark from "./components/Bookmark";


function App() {
  const queryClient = new QueryClient();
  const Table = lazy(() => import("./components/Table"));
  const CreateUser = lazy(() => import("./components/CreateUser"));
  const EditUsers =lazy(()=>import("./components/EditUsers"))

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              path="table"
              element={
                <React.Suspense fallback={<>... Loading</>}>
                  <Table />
                </React.Suspense>
              }
            />
            <Route
              path="user/createuser"
              element={
                <React.Suspense fallback={<>... Loading</>}>
                  {<CreateUser />}
                </React.Suspense>
              }
            />
              <Route
              path="user/:id/edit"  
              element={
                <React.Suspense fallback={<>... Loading</>}>
                  {<EditUsers />}
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Bookmark></Bookmark> */}
    </QueryClientProvider>
  );
}

export default App;
