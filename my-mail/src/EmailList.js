
// import React, { useState,useEffect } from "react";
// import "./EmailList.css";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// import { IconButton } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import RedoIcon from "@mui/icons-material/Redo";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
// import SettingsIcon from "@mui/icons-material/Settings";
// import Section from "./Section";
// import InboxIcon from '@mui/icons-material/Inbox';
// import PeopleIcon from '@mui/icons-material/People';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import EmailRow from "./EmailRow";
// import { db } from "./firebase";
// const EmailList = () => {
//   const [emails,setEmails] = useState([]);

//   useEffect(() => {
//     db.collection('emails')
//     .orderBy('timestamp','desc')
//     .onSnapshot((snapshot) => setEmails(snapshot.docs.map((doc )=> ({
//       id: doc.id,
//       data: doc.data(),
//     }))
//     )
//   )
//   }, [])
  
//   return (
//     <div className="emailList">
//       <div className="emailList_settings">
//         <div className="emailList_settingsLeft">
//           <CheckBoxOutlineBlankIcon />
//           <IconButton>
//             <ArrowDropDownIcon />
//           </IconButton>
//           <IconButton>
//             <RedoIcon />
//           </IconButton>
//           <IconButton>
//             <MoreVertIcon />
//           </IconButton>
//         </div>
//         <div className="emailList_settingsRight">
//           <IconButton>
//             <ChevronLeftIcon />
//           </IconButton>
//           <IconButton>
//             <ChevronRightIcon />
//           </IconButton>
//           <IconButton>
//             <KeyboardHideIcon />
//           </IconButton>
//           <IconButton>
//             <SettingsIcon />
//           </IconButton>
//         </div>
//       </div>

//       <div className="emailList_section">
//         <Section Icon={InboxIcon} title='primary' color='red' selected />
//         <Section Icon={PeopleIcon} title='Social' color='#1A73E8'  />
//         <Section Icon={LocalOfferIcon} title='Promotions' color='green'  />

//       </div>
//       <div className="emailList_list">
//         {emails.map(({id , data: {to , subject , message , timestamp
//         }}) => (
//           <EmailRow
//           id = {id}
//           key={id}
//           title={to}
//           subject={subject}
//           description={message}
//           time={new Date(timestamp?.seconds * 1000).toUTCString()}
//           />
//         ))}
// <EmailRow
// title='Twitch'
// subject='Hey fellow streamer'
// description='this is a test'
// time='10pm'/>
//       </div>
//     </div>
//   );
// };

// export default EmailList;

// import React, { useState, useEffect } from "react";
// import "./EmailList.css";
// import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
// import { IconButton } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import RedoIcon from "@mui/icons-material/Redo";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
// import SettingsIcon from "@mui/icons-material/Settings";
// import Section from "./Section";
// import InboxIcon from '@mui/icons-material/Inbox';
// import PeopleIcon from '@mui/icons-material/People';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import EmailRow from "./EmailRow";
// import { db } from "./firebase";
// const EmailList = () => {
//   const [emails, setEmails] = useState([]);

//   useEffect(() => {
//     const unsubscribe = db
//     .collection('emails')
//       .orderBy('timestamp', 'desc')
//       .onSnapshot((snapshot) => {
//         setEmails(
//           snapshot.docs.map((doc) => ({
//             id: doc.id,
//             data: doc.data(),
//           }))
//         );
//       });

//     // Clean up the listener when the component unmounts
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <div className="emailList">
//       <div className="emailList_settings">
//         <div className="emailList_settingsLeft">
//           <CheckBoxOutlineBlankIcon />
//           <IconButton>
//             <ArrowDropDownIcon />
//           </IconButton>
//           <IconButton>
//             <RedoIcon />
//           </IconButton>
//           <IconButton>
//             <MoreVertIcon />
//           </IconButton>
//         </div>
//         <div className="emailList_settingsRight">
//           <IconButton>
//             <ChevronLeftIcon />
//           </IconButton>
//           <IconButton>
//             <ChevronRightIcon />
//           </IconButton>
//           <IconButton>
//             <KeyboardHideIcon />
//           </IconButton>
//           <IconButton>
//             <SettingsIcon />
//           </IconButton>
//         </div>
//       </div>

//       <div className="emailList_section">
//         <Section Icon={InboxIcon} title='Primary' color='red' selected />
//         <Section Icon={PeopleIcon} title='Social' color='#1A73E8'  />
//         <Section Icon={LocalOfferIcon} title='Promotions' color='green'  />
//       </div>

//       <div className="emailList_list">
//         {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
//           <EmailRow
//             id={id}
//             key={id}
//             title={to}
//             subject={subject}
//             description={message}
//             time={new Date(timestamp?.seconds * 1000).toUTCString()}
//           />
//         ))}
//         {/* Example EmailRow */}
//         <EmailRow
//           title='Twitch'
//           subject='Hey fellow streamer'
//           description='This is a test'
//           time='10pm'
//         />
//       </div>
//     </div>
//   );
// };

// export default EmailList;

import React, { useState, useEffect } from "react";
import "./EmailList.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import Section from "./Section";
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from "./EmailRow";
import { db } from "./firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"; // Import necessary functions from Firebase v9

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const emailsCollection = collection(db, "emails");
    const queryForEmails = query(emailsCollection, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(queryForEmails, (snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    // Don't forget to return the unsubscribe function
    // return () => {
    //   unsubscribe();
    // };
  }, []);


  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <CheckBoxOutlineBlankIcon />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList_section">
        <Section Icon={InboxIcon} title='Primary' color='red' selected />
        <Section Icon={PeopleIcon} title='Social' color='#1A73E8'  />
        <Section Icon={LocalOfferIcon} title='Promotions' color='green'  />
      </div>

      <div className="emailList_list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        {/* Example EmailRow */}
        <EmailRow
          title='Twitch'
          subject='Hey fellow streamer'
          description='This is a test'
          time='10pm'
        />
      </div>
    </div>
  );
};

export default EmailList;









