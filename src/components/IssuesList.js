import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CardFooter} from 'reactstrap';

const IssuesList = props => {
    console.log (props)
    return (
        <div className= "issue-list">
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
        <Container>
            
         <Card style={{width: '30rem'}}>
           
            <CardTitle>Title: {title}
            </CardTitle>
            {/* <CardImg src=> */}
            <CardText>Description: {description}</CardText>
        <CardText>Name of poster: {owner.name}</CardText>
            <CardFooter>Upvotes: {upvotes}</CardFooter>
         </Card>
            
       
        </Container>
         </>
    )
}

export default IssuesList;