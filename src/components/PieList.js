import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';

function PieList(props) {

    const pies = props.pies.map(pie => {
        return (
            <Media tag="li" key={pie.id}>
                <RenderPartner pie={pie}/>
            </Media>
        );
    }); 

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-12">
                    <h2>Sweet PIES</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col mt-4">
                    <Media list>
                        {pies}
                    </Media>
                </div>
            </div>
        </div>
    );
}

function RenderPartner({pie}){
    if(pie){
        return(
            <React.Fragment>
                <Media object width="250" src={pie.image} alt={pie.name} />
                <Media body className="col-md-5 mb-4">
                    <Media heading>{pie.name}</Media>
                                   <h4>{pie.calories}</h4>
                                   {pie.description}<br/><p className="price mt-1">{pie.priceDollar}<sup>{pie.priceCent}</sup></p>
                                   <hr className="hr-secondary" />
                </Media>
            </React.Fragment>
        );
    }else{
        return <div/>
    }
    
}

export default PieList;