import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

const SignupForm = () => {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [formData, setFormData] = useState({
       
        email: "",
        password: "",
       
    })
    const schema = yup.object().shape({
        
        email: yup.string().required("email is required"),
        
        password: yup.string().required("Please enter a password").min(6)
      })

    useEffect(() => {
        schema.isValid(formData).then(valid => {
          setButtonDisabled(!valid);
        })
        
      }, [formData]);  
      const submit = () => {
        schema.validate(formData).then( () => {
          axios.post("https://co-make-9cf46.web.app/api/register", formData).then( (res) => {
          console.log(res.data)
         })
        })
      }
      const handleChanges = event => {
        event.persist();
          setFormData({ ...formData, [event.target.name]: event.target.value });
          // console.log(event)
          
        };
        
        return (
            <>
            <Card color="info">
                <h2 style={{color: "white", margin: "0 auto"}}>Please Login</h2>
            </Card>
            <Form onSubmit={
                (event) => {
                    event.preventDefault();
                   submit();
                    setFormData({
                    
        email: "",
        password: "",
        })
    
    }} style={{margin: "5%"}}>
       
        <FormGroup>
            <Label for="email">email</Label>
            <Input type="email" name="email" placeholder="enter your email" value={formData.email} onChange={handleChanges}/>
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input name="password" placeholder="enter your password..." value={formData.password} onChange={handleChanges}/>
        </FormGroup>
        <Button data-cy="submit" disabled={buttonDisabled}>Login</Button>

    </Form>
    </>

        )
}

export default SignupForm;