import LoadingButton from "@mui/lab/LoadingButton";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import { ABI_Poll } from "./ABI";
import PollResults from "./PollResults";
import ShareButton from "./ShareButton";
import { StateContext, web3 } from "./StateContext";

const Poll = () => {
  const state = useContext(StateContext);
  const { pollId } = useParams();
  const [pollContract, setPollContract] = useState([]);
  const [poll, setPoll] = useState([]);

  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState(-1);

  const [submitError, setSubmitError] = useState("");
  const [showResults, setShowResults] = useState(false);

  const fetchContract = async () => {
    setLoading(true);

    const contract = new web3.eth.Contract(ABI_Poll.abi, pollId);
    setPollContract(contract);

    contract.methods
      .getPollData()
      .call()
      .then(function (result) {
        setPoll(result);
      });

    setTimeout(() => setLoading(false), 300);
  };

  useEffect(() => {
    const init = async () => {
      await fetchContract();
    };

    init().catch(console.error);
    console.log(poll);
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleResults = () => {
    setShowResults(!showResults);
  };

  const submitVote = () => {
    if (selectedOption < 0) {
      setSubmitError("You must choose an option.");
      return;
    }

    setLoadingButton(true);

    pollContract.methods
      .vote(selectedOption)
      .send({ from: state.user })
      .catch((error) => {
        setSubmitError("You can only vote once!");
        setTimeout(() => setLoadingButton(false), 300);
        console.log(error);
      })
      .then(function (result) {
        setTimeout(() => setLoadingButton(false), 300);
      });
  };

  return (
    <div>
      <Container maxWidth="md" sx={{ mt: "2rem" }}>
        <Paper sx={{ mt: "2rem", backgroundColor: "#e3f2ff" }}>
          {loading ? (
            <Box fullWidth sx={{ textAlign: "center", py: "4rem" }}>
              <CircularProgress />
            </Box>
          ) : (
            <div>
              <Box sx={{ mx: 4, pb: 4 }}>
                <Stack direction="row" spacing={3} sx={{ py: 3 }}>
                  <Stack sx={{ flexGrow: 1 }}>
                    <Typography variant="h4">{poll.poll_title}</Typography>
                    <Typography variant="body1">
                      by{" "}
                      {poll.poll_creator == state.user
                        ? "me"
                        : poll.poll_creator}
                      {" · "}
                      {
                        <ReactTimeAgo
                          date={new Date(poll.poll_timestamp * 1000)}
                          locale="en-US"
                          timeStyle="round-minute"
                        />
                      }
                    </Typography>
                  </Stack>
                  <Box sx={{ alignSelf: "center" }}>
                    <ShareButton poll={pollId} />
                  </Box>
                </Stack>
                <Divider />
                <Stack spacing={1} sx={{ py: 3 }}>
                  <Typography variant="body1">Make a choice:</Typography>

                  <FormControl>
                    <RadioGroup value={selectedOption} onChange={handleChange}>
                      {poll.poll_options.map((option, index) => (
                        <FormControlLabel
                          key={index}
                          value={index}
                          label={option.name}
                          control={<Radio />}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>

                  {submitError && (
                    <Alert onClose={() => setSubmitError("")} severity="error">
                      {submitError}
                    </Alert>
                  )}
                </Stack>

                <Grid container spacing={4}>
                  <Grid item xs={8}>
                    <LoadingButton
                      loading={loadingButton}
                      fullWidth
                      variant="contained"
                      onClick={submitVote}
                    >
                      Vote
                    </LoadingButton>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={toggleResults}
                    >
                      Results
                    </Button>
                  </Grid>
                </Grid>

                {showResults && (
                  <PollResults poll={poll} pollContract={pollContract} />
                )}
              </Box>
            </div>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Poll;
