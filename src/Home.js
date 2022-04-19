import { Container, Stack, Typography } from "@mui/material";
import { useContext } from "react";

import { StateContext } from "./StateContext";

const Home = () => {
  const state = useContext(StateContext);
  console.log(state);
  return (
    <div>
      <Container sx={{ textAlign: "left", mt: "4rem" }}>
        <Stack spacing={2}>
          <Typography variant="h3">Hey there,</Typography>
          <Typography variant="h4">{state.user}</Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
