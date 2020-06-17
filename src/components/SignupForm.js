import React, {useState, useEffect} from 'react';
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

const SignupForm = props => {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [formData, setFormData] = useState({
        // name: "",
        email: "",
        password: "",
        zip: ""
    })
    const schema = yup.object().shape({
        // name: yup.string().required("Name is required").min(2),
        email: yup.string().required("email is required"),
        zip: yup.string().required("Must enter a valid zip").min(5),
        password: yup.string().required("Please enter a password").min(6)
      })

    useEffect(() => {
        schema.isValid(formData).then(valid => {
          setButtonDisabled(!valid);
        })
        
      }, [formData]);  
      const submit = () => {
        schema.validate(formData).then( () => {
          axios.post("https://reqres.in/api/users", formData).then( (res) => {
          console.log(res.data)
         })
        })
      }
      const handleChanges = event => {
        event.persist();
          setFormData({ ...formData, [event.target.name]: event.target.value });
          console.log(event)
          
        };
        
        return (
            <>
            <Card color="info">
                <h2 style={{color: "white", margin: "0 auto"}}>Please sign up for access</h2>
            </Card>
            <Form onSubmit={
                (event) => {
                    event.preventDefault();
                   submit();
                    setFormData({
                         // name: "",
        email: "",
        password: "",
        zip: ""})
    
    }} style={{margin: "5%"}}>
        {/* <FormGroup>
            <Label for="name">Name</Label>
            <Input name="name"id="name" placeholder="name" value={formData.name} onChange={handleChanges}/>
        </FormGroup> */}
        <FormGroup>
            <Label for="email">email</Label>
            <Input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChanges}/>
        </FormGroup>
        <FormGroup>
            <Label for="zip">Zip code</Label>
            <Input name="zip" placeholder="zip" value={formData.zip} onChange={handleChanges}/>
        </FormGroup>
        <FormGroup>
            <Label for="password">Create a password</Label>
            <Input name="password" placeholder="password" value={formData.password} onChange={handleChanges}/>
        </FormGroup>
        <Button data-cy="submit" disabled={buttonDisabled}>Sign Up!</Button>

    </Form>
    </>

        )
}

export default SignupForm;