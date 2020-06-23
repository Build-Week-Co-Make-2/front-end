import React, {useState, useEffect} from 'react';
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axiosWithAuth from "../utils/axiosWithAuth";
import {Link} from 'react-router-dom';

import IssuesList from './IssuesList';



const Newsfeed = props => {
    const [feed, setFeed] = useState([]);

   useEffect(() => {
     axiosWithAuth()
    .get('/posts/')
    .then(res => setFeed(res.data))
   .catch(err => console.log(err))
  },[]);
      

return (
    <>
       <h1>You have Arrived, enjoy your potHOLE</h1>
       <IssuesList issues={feed}/> 
       <Link to="/newPost"><Button>Post!</Button></Link>
    </>
)

}
export default Newsfeed;