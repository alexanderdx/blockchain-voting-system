import { useContext, useEffect, useState } from "react";
import { StateContext } from "./StateContext";

import {
  Button,
  Box,
  Card,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
  Paper,
  Avatar,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import PollRoundedIcon from "@mui/icons-material/PollRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

import PollForm from "./PollForm";
import { Link } from "react-router-dom";

import ReactTimeAgo from "react-time-ago";
import ShareButton from "./ShareButton";

const PollDashboard = () => {
  const state = useContext(StateContext);

  const [myPolls, setMyPolls] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchMyPolls = async () => {
    setLoading(true);

    let temp = [];
    state.contract.methods
      .getMyPolls()
      .call()
      .then(function (result) {
        for (const poll of result) {
          state.contract.methods
            .getPollById(poll)
            .call()
            .then(function (res) {
              temp.push(res);
            });
        }
      });

    setMyPolls(temp);
    setDialog(false);
    setTimeout(() => setLoading(false), 400);
  };

  state.contract.events
    .PollCreated({
      filter: { user_address: state.user },
    })
    .on("data", (event) => fetchMyPolls());

  useEffect(() => {
    fetchMyPolls();
    console.log(myPolls);
  }, []);

  const openDialog = () => {
    setDialog(true);
  };

  const closeDialog = () => {
    setDialog(false);
  };

  return (
    <div>
      <Container maxWidth="md" sx={{ mt: "2rem" }}>
        <Button variant="contained" onClick={openDialog}>
          Create Poll
        </Button>
        <Dialog
          open={dialog}
          onClose={closeDialog}
          fullWidth={true}
          maxWidth="sm"
        >
          <DialogTitle>Create a new poll</DialogTitle>
          <DialogContent>
            <PollForm />
          </DialogContent>
        </Dialog>
        <Paper sx={{ mt: "2rem", backgroundColor: "#e3f2ff" }}>
          <Typography variant="h5" sx={{ px: 4, py: 4 }}>
            My Polls
          </Typography>
          {loading ? (
            <Box fullWidth sx={{ textAlign: "center", py: "4rem" }}>
              <CircularProgress />
            </Box>
          ) : (
            myPolls.map((poll, index) => (
              <div>
                <Divider />
                <Stack direction="row" spacing={3} sx={{ py: 3, px: 4 }}>
                  <PollRoundedIcon fontSize="large" color="primary" />
                  <Stack
                    component={Link}
                    to={`/poll/${poll.poll_address}`}
                    sx={{
                      flexGrow: 1,
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <Typography variant="h6">{poll.poll_title}</Typography>
                    <Typography variant="body1">
                      <ReactTimeAgo
                        date={new Date(poll.poll_timestamp * 1000)}
                        locale="en-US"
                        timeStyle="round-minute"
                      />
                    </Typography>
                  </Stack>
                  <Box sx={{ alignSelf: "center" }}>
                    <ShareButton poll={poll.poll_address} />
                  </Box>
                </Stack>
              </div>
            ))
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default PollDashboard;
