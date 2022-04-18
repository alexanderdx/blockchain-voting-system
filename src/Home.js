import { Container, Typography } from "@mui/material";
import { useContext } from "react";

import { StateContext } from "./StateContext";

const Home = () => {
  const state = useContext(StateContext);
  console.log(state);
  return (
    <div>
      <Container sx={{ textAlign: "center" }}>
        <Typography>Your account is {state.user}</Typography>
      </Container>
    </div>
  );
};

export default Home;
