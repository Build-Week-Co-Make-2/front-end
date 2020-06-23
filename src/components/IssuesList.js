import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardTitle, CardText, CardFooter} from 'reactstrap';

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
    const { title, description, owner } = issue;
    return (
        <>
         <Card>
           
            <CardTitle>{title}
            </CardTitle>
            {/* <CardImg src=> */}
            <CardText>{description}</CardText>
            <CardFooter>{owner.name}</CardFooter>
         </Card>
         </>
    )
}

export default IssuesList;