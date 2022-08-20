import React from "react";
//Box item
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import AvatorImage from "../../Image/web-image.png";
import "./Comment.css";

const Comment = (props) => {
  const { email, name, body } = props.commentId;
  console.log(props.commentId);
  return (
    <div>
      <Box className="BoxItem">
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={AvatorImage} alt="Profile Picture" />
            </ListItemAvatar>
            <ListItemText>
              <strong>{email} </strong>
              <br />
              <div className="commentText">
                <b>
                  <i>{name}</i>{" "}
                </b>
                <br />
                {body}{" "}
              </div>{" "}
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default Comment;
