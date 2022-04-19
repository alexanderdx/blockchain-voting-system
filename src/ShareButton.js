import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import { Alert, IconButton, Snackbar } from "@mui/material";
import { useState } from "react";

const ShareButton = ({ poll }) => {
  const [toast, setToast] = useState(false);

  const onClickShare = (pollId) => {
    navigator.clipboard.writeText(pollId);
    setToast(true);
  };

  const closeToast = () => {
    setToast(false);
  };

  return (
    <>
      <IconButton onClick={() => onClickShare(poll)}>
        <ShareRoundedIcon color="primary" />
      </IconButton>
      <Snackbar
        open={toast}
        autoHideDuration={3000}
        onClose={closeToast}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Alert
          onClose={closeToast}
          severity="info"
          sx={{ borderRadius: 20, width: "100%" }}
        >
          Poll URL copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ShareButton;
