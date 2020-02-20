import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardFooter,
  CardTitle, CardSubtitle
} from 'reactstrap';

const APODCard = (props) => {
    console.log(props);
  return (
    <div className="APOD-card">
      <Card>
       
        <CardTitle>Title: {props.apod.title}</CardTitle>
        <CardSubtitle>Date: {props.apod.date}</CardSubtitle>
        <CardBody>
        <CardImg width="100%" src={props.apod.hdurl} alt="Nasa APOD" />
        </CardBody>
        <CardText>Explanation: {props.apod.explanation}</CardText>
        <CardFooter> {props.apod.copyright}</CardFooter>
        
       
      </Card>
    </div>
  );
};

export default APODCard;