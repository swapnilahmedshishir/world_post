import React, { useEffect, useState } from 'react';
import {useParams,Link} from 'react-router-dom';
import Image from  '../../Image/wordpress_elememtor-website.png';
import postImage from '../../Image/postImage.jpg';
import './PostDetalis.css';
import Container from '@mui/material/Container';
import Comment from '../Comment/Comment';

const PostDetails = () => {
    const { postId } = useParams();
    //See the Post Item 
     const [postItem , setPostItem] = useState({});
     useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostItem(data))
     },[]);

     // see the commnet item
     const [comment , setComment] = useState([]);
     useEffect(() => {
         const URL = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
         fetch(URL)
         .then(res => res.json())
         .then(data => setComment(data) )
     },[] );
     
     
     //data 
     const current = new Date();
     const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

     const {id,title,body} = postItem;
    return (
        <Container maxWidth="sm" >
            <div className='AuthorStyle'>
                <img className='ImageStyle' src={Image} alt='adminImage' />
                <div>
                <Link to='/admin'><span>Swapnil ahmed</span></Link><br/>                
                <span>Post : {date}</span>
                </div>
            </div>
            <hr/>
            <div className='PostItem'>
                <img className='postImage' src={postImage} alt="postImage"/>
                <h2 className='Title'>Title: {title}</h2>
                <p><strong>Post- {id} : </strong>{body}</p>
                <hr/>
                <span>Comments ({comment.length}) </span>
            </div>
            {
                comment.map(user => <Comment key={user.id} commentId ={user}></Comment> )
            }
            
           
        </Container>
    );
};

export default PostDetails;