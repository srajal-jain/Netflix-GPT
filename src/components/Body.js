import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Player from "./Player";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/player",
      element: <Player />,
    },
    // {
    //   path: "*",
    //   element: <div>{Error("kgifuayif")}</div>,
    //   errorElement: (err)=><><div className="flex w-screen h-5 text-black">
    //     <h1>error page{err}</h1>
    //   </div></>,
    // },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
