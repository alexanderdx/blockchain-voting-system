import AddIcon from "@mui/icons-material/Add";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Alert,
  Box,
  IconButton,
  InputAdornment,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { StateContext } from "./StateContext";

const PollForm = () => {
  const state = useContext(StateContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState(false);
  const [error, setError] = useState("");

  const closeToast = () => {
    setToast(false);
  };

  const newOption = () => {
    setOptions([...options, ""]);
  };

  const updateOption = (index, value) => {
    let optionsCopy = [...options];
    optionsCopy[index] = value;
    setOptions(optionsCopy);
  };

  const removeOption = (index) => {
    let optionsCopy = [...options];
    optionsCopy.splice(index, 1);
    setOptions([...optionsCopy]);
  };

  const createPoll = async () => {
    if (!title) {
      setError("Failed to create poll. Title is required.");
      setToast(true);
      return;
    }

    let filtered = options.filter((option) => option);

    if (filtered.length < 2) {
      setError("Failed to create poll. Atleast 2 options are required.");
      setToast(true);
      return;
    }

    setLoading(true);

    const poll = await state.contract.methods
      .createPoll(title, description, filtered)
      .send()
      .catch((error) => {});

    setLoading(false);
  };

  return (
    <div>
      <Stack spacing={2}>
        <TextField
          id="title"
          label="Poll Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          fullWidth
          variant="standard"
        />
        <TextField
          id="title"
          label="Poll Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          fullWidth
          variant="standard"
        />
        <Typography sx={{ pt: "2rem" }}>Options</Typography>
        {options.map((option, index) => (
          <TextField
            key={index}
            label={`Option ${index}`}
            onChange={(event) => updateOption(index, event.target.value)}
            fullWidth
            value={options[index]}
            variant="filled"
            InputProps={{
              endAdornment: options.length > 2 && (
                <InputAdornment position="end">
                  <IconButton onClick={() => removeOption(index)}>
                    <RemoveCircleIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        ))}
        <Box sx={{ textAlign: "center" }}>
          <IconButton onClick={newOption}>
            <AddIcon />
          </IconButton>
        </Box>
        <Box sx={{ textAlign: "end" }}>
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={createPoll}
          >
            Create Poll
          </LoadingButton>
        </Box>
      </Stack>

      <Snackbar
        open={toast}
        autoHideDuration={3000}
        onClose={closeToast}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Alert
          onClose={closeToast}
          severity="error"
          sx={{ borderRadius: 20, width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PollForm;
