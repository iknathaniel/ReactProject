import React from 'react';
import { Media } from 'reactstrap';

function SaladList(props) {

    const salads = props.salads.map(salad => {
        return (
            <Media tag="li" key={salad.id}>
                <RenderSalad salad={salad}/>
            </Media>
        );
    }); 

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-12">
                    <h2>Healthy SALADS</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col mt-4">
                    <Media list>
                        {salads}
                    </Media>
                </div>
            </div>
        </div>
    );
}

function RenderSalad({salad}){
    if(salad){
        return(
            <React.Fragment>
                <Media object width="250" src={salad.image} alt={salad.name} />
                <Media body className="col-md-5 mb-4">
                    <Media heading>{salad.name}</Media>
                                   <h4>{salad.calories}</h4>
                                   {salad.description}<br/><br/><p className="price">{salad.priceDollar}<sup>{salad.priceCent}</sup></p>
                                   <hr className="hr-secondary" />
                </Media>
            </React.Fragment>
            
        );
    }else{
        return <div/>
    }
    
}

export default SaladList;