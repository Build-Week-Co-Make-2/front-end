import React, {useState, useEffect} from 'react';
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


const Newsfeed = props => {
    const [feed, setFeed] = useState([]);

   useEffect(() => {
      const getNewsfeed = () => {
      axios
      .get('https://co-make-9cf46.web.app/api/posts')
      .then(response => {
         console.log(response)
         setFeed(response.data);

      })
      .catch(error => {
         console.error('Server error', error);

      })
      }
      getNewsfeed()
   }, []);


return (
    <>
       <h1>You have Arrived, enjoy your potHOLE</h1> 
    </>
)

}
export default Newsfeed;