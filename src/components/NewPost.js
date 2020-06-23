import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';
import * as yup from 'yup';

const NewPost = props => {
    const [buttonDisabled, setButtonDisabled] = useState(true);
	const [formData, setFormData] = useState({
		title: '',
		description: '',
    });
    
    const schema = yup.object().shape({
		title: yup.string().required('Title is required').min(3),
        description: yup.string().required('A description is required').min(15)
    })

    useEffect(() => {
		schema.isValid(formData).then((valid) => {
			setButtonDisabled(!valid);
		});
    }, [formData, schema]);
    const submit = () => {
		schema.validate(formData).then(() => {
            axiosWithAuth()
            .post('/posts', formData).then( (res) => {
                console.log(res.data)
               })
              })
        

};
const handleChanges = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
};

return (
    <>
	<div className="sform">
    <Form
					onSubmit={(event) => {
						event.preventDefault();
						submit();
						setFormData({
							title: '',
							description: ''
						});
                    }}>
                    
                    <h2>Please tell us your issue</h2>
					<FormGroup>
						<Label for="title">Title</Label>
						<Input
							name="title"
							id="title"
							placeholder="title"
							value={formData.title}
							onChange={handleChanges}
						/>
					</FormGroup>
                    <FormGroup>
						<Label for="description">Description</Label>
						<Input
                        type="textarea"
							name="description"
							id="description"
							placeholder="description"
							value={formData.description}
							onChange={handleChanges}
						/>
					</FormGroup>
                    <Button className="btn" disabled={buttonDisabled}>
						Post!
					</Button>
				</Form>
				</div>
                </>
                )
}

export default NewPost;

