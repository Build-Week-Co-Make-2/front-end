import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CardFooter} from 'reactstrap';

const IssuesList = props => {
    console.log (props)
    return (
        <div className="centered">
            {props.issues.map(issue => (
                <IssueDetails key={issue.id} issue={issue} />
            ))}
            </div>
    )
}

function IssueDetails({ issue }) {
    const { title, description, upvotes, owner } = issue;
    return (
        <>
      
            
         <Card style={{width: '30rem', margin: '5px'}}>
           
            <CardTitle><strong>Title:</strong> {title}
            </CardTitle>
            {/* <CardImg src=> */}
            <CardText><strong>Description:</strong> {description}</CardText>
        <CardText><strong>Name of poster:</strong> {owner.name}</CardText>
            <CardFooter><strong>Upvotes:</strong> {upvotes}</CardFooter>
         </Card>
            

         </>
    )
}

export default IssuesList;