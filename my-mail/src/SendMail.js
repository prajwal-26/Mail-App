// import React from "react";
// import "./SendMail.css";
// import CloseIcon from "@mui/icons-material/Close";
// import { Button } from "@mui/material";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { closeSendMessage } from "./features/mailSlice";
// import { db } from "./firebase";
// import firebase from "firebase/compat/app";
// const SendMail = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const dispatch = useDispatch();
//   const onSubmit = (formData) => {
//     console.log(formData);

//     try {
//       const docRef = await addDoc(collection(db, "emails"), {
//         to: formData.to,
//         subject: formData.subject,
//         message: formData.message,
//         timestamp: serverTimestamp(),
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }

//     dispatch(closeSendMessage());
//   };
import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase"; // Import your Firebase configuration
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Import Firestore methods

const SendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  
  const onSubmit = async (formData) => {
    console.log(formData);

    try {
      const docRef = await addDoc(collection(db, "emails"), {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail_close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail_error">to is required</p>}

        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail_error">subject is required</p>
        )}

        <input
          name="message"
          type="text"
          placeholder="Message..."
          className="sendMail_message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail_error">message is required</p>
        )}

        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
