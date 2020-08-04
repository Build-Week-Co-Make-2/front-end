import React, {useState, useEffect} from 'react';
import { Button } from 'reactstrap';
import axiosWithAuth from "../utils/axiosWithAuth";
import {Link} from 'react-router-dom';

import IssuesList02 from './IssuesList_02';



const Newsfeed02 = props => {
    const [feed, setFeed] = useState([]);

   useEffect(() => {
     axiosWithAuth()
    .get('/api/issues/')
    .then(res => setFeed(res.data))
   .catch(err => console.log(err))
  },[]);
      

return (
    <>
       
       <IssuesList02 issues={feed}/> 
       <Link to="/newPost"><Button className="btn" >Post an issue!</Button></Link>
    
    </>
)

}
export default Newsfeed02;