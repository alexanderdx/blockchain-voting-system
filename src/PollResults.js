import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import {
  Chart,
  Legend,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { useEffect, useState } from "react";

const data = [
  { country: "Russia", area: 12 },
  { country: "Canada", area: 7 },
];

const PollResults = ({ poll, pollContract }) => {
  const [data, setData] = useState(
    poll.poll_options.map((opt, index) => ({
      option: opt.name,
      count: opt.voteCount + 1,
    }))
  );

  const updateChart = () => {
    pollContract.methods
      .getAllOptions()
      .call()
      .then(function (result) {
        console.log("Vote event received!");
        setData(
          result.map((opt, index) => ({
            option: opt.name,
            count: opt.voteCount + 1,
          }))
        );
      });
  };

  pollContract.events
    .LogVote({
      filter: { poll_address: poll.poll_address },
    })
    .on("data", (event) => updateChart());

  return (
    <div>
      <Box sx={{ pt: 4 }}>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4">Results</Typography>
        <Chart data={data} sx={{ mt: "4rem" }}>
          <PieSeries valueField="count" argumentField="option" />
          <Legend />
          <Animation />
        </Chart>
      </Box>
    </div>
  );
};

export default PollResults;
