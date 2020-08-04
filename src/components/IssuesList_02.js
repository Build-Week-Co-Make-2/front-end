import React from 'react';
import { CardImg, Card, CardTitle, CardText, CardFooter} from 'reactstrap';

const IssuesList02 = props => {
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
    const { title, desc, votes, state, owner } = issue;
    return (
        <>
      
            
         <Card style={{width: '30rem', margin: '5px'}}>
           
            <CardTitle><strong>Title:</strong> {title}
            </CardTitle>
            {/* <CardImg src=> */}
            <CardText><strong>Description:</strong> {desc}</CardText>
        <CardText><strong>Name of poster:</strong> {owner.name}</CardText>
        <CardText><strong>State:</strong> {state}</CardText>
            <CardFooter><strong>Upvotes:</strong> {votes}</CardFooter>
         </Card>
            

         </>
    )
}

export default IssuesList02;