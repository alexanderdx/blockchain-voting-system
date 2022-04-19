import { Route, Routes, Navigate } from "react-router-dom";

import Elections from "./Elections";
import Header from "./Header";
import Home from "./Home";
import PollDashboard from "./PollDashboard";
import Poll from "./Poll";
import { StateContextProvider } from "./StateContext";

function App() {
  return (
    <StateContextProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="elections" element={<Elections />} />
          <Route path="poll" element={<PollDashboard />} />
          <Route path="poll/:pollId" element={<Poll />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </StateContextProvider>
  );
}

export default App;
