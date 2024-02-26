import { Provider } from "react-redux";
import "./App.css";
import Head from "./components/Head";
import appStore from "./utils/store";
import { createHashRouter } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import Shimmer from "./components/Shimmer";
import LoadingBar from "react-top-loading-bar";
import Breadcrumbs from "./components/Breadcrumbs";

const MainContainer = lazy(() => import("./components/MainContainer"));
const Watch = lazy(() => import("./components/Watch"));
const LiveVideos = lazy(() => import("./components/LiveVideos"));
const SearchResult = lazy(() => import("./components/SearchResult"));
function App() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Body = lazy(() => import("./components/Body"));
  return (
    <Provider store={appStore}>
      <div className="flex flex-col h-full">
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Head />
        <Breadcrumbs />
        <Suspense fallback={<Shimmer />}>
          <Body setProgress={setProgress} />
        </Suspense>
      </div>
    </Provider>
  );
}

export const appRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <MainContainer />
          </Suspense>
        ),
      },
      {
        path: "watch",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Watch />
          </Suspense>
        ),
      },
      {
        path: "live",
        element: (
          <Suspense fallback={<Shimmer />}>
            <LiveVideos />
          </Suspense>
        ),
      },
      {
        path: "results",
        element: (
          <Suspense fallback={<Shimmer />}>
            <SearchResult />
          </Suspense>
        ),
      },
    ],
  },
]);

export default App;