import * as React from "react";
import { Box, Typography, Modal } from "@mui/material/";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalMessage = ({ open, handleClose, userInfo }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h4">
            Welcome !
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {userInfo && (
              <div>
                <p> Firstname : {userInfo.firstname}</p>
                <p> Lastname : {userInfo.lastname}</p>
                <p> Age : {userInfo.age}</p>
                <p> Email : {userInfo.email}</p>
                <p
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  Message : {userInfo.message}
                </p>
              </div>
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalMessage;
