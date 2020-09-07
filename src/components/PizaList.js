import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';

function PizaList(props) {

    const pizzas = props.pizzas.map(pizza => {
        return (
            <Media tag="li" key={pizza.id}>
                <RenderPartner pizza={pizza}/>
            </Media>
        );
    }); 

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-12">
                    <h2>Best PIZZA in town</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col mt-4">
                    <Media list>
                        {pizzas}
                    </Media>
                </div>
            </div>
        </div>
    );
}

function RenderPartner({pizza}){
    if(pizza){
        return(
            <React.Fragment>
                <Media object width="250" src={pizza.image} alt={pizza.name} />
                <Media body className="col-md-5 mb-4">
                    <Media heading>{pizza.name}</Media>
                                   <h4>{pizza.calories}</h4>
                                   {pizza.description}<br/><br/><p className="price">{pizza.priceDollar}<sup>{pizza.priceCent}</sup></p>
                                   <hr className="hr-secondary" />
                </Media>
            </React.Fragment>
            
        );
    }else{
        return <div/>
    }
    
}

export default PizaList;