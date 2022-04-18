import { Route, Routes } from "react-router-dom";

import Elections from "./Elections";
import Header from "./Header";
import Home from "./Home";
import Poll from "./Poll";
import RedirectToHome from "./RedirectToHome";

import { StateContextProvider } from "./StateContext";

function App() {
  return (
    <StateContextProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="elections" element={<Elections />} />
          <Route path="poll" element={<Poll />} />
          <Route path="*" element={<RedirectToHome />} />
        </Route>
      </Routes>
    </StateContextProvider>
  );
}

export default App;
