import React, {useState, useEffect} from 'react';
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

const Newsfeed = props => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        const getPost = () => {
            axios
            .get('https://co-make-9cf46.web.app/api/posts')
            .then(response => {
                console.log(response);
                setFeed(response.data);
            })
            .catch(error => {
                console.error('Server error', error);
            })
        }
        getPost();
    }, []);

}

return (
    <>
        <Card>

        </Card>
    </>
)

export default Newsfeed;