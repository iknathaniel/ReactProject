import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return(
        <Card>
            <CardImg width="100%" src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.pizza}/>
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.salad}/>
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.pie}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.pasta}/>
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.lasagna}/>
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.pie}/>
                </div>
            </div>
        </div>
    );
}

export default Home;  