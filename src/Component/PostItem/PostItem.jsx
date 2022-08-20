import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './PostItem.css';
import {Link} from 'react-router-dom';

const PostItem = (props) => {
  const { id, title, body } = props.post;

  return (
    
   
        <div className="modifyCards">
        <Card  sx={{ maxWidth: 345 }} margin="3px">
        <CardContent>
          <Typography className="Title" gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
            <Link to={`/post/${id}`}>
            <Button size="small">Learn More</Button>
            </Link>
          
        </CardActions>
      </Card>

        </div>
      
   
  );
};

export default PostItem;
