import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderCategoryItem({meal}){
        return(
            <Card>
                <Link to={`/category/${meal.id}`}>
                    <CardImg width="100%" src={meal.image} alt={meal.name} />
                </Link>
                <CardBody>
                    <CardTitle>{meal.name}</CardTitle>
                    <CardText>{meal.description}</CardText>
                    <CardFooter>{meal.priceDollar}<sup>{meal.priceCent}</sup></CardFooter>
                </CardBody>
            </Card>
        );
    }

    function Category(props) {

        const category = props.meals.map(meal => {
            return (
                <div key={meal.id} className="col-md-3">
                    <RenderCategoryItem meal={meal}/>
                    
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <h2>Features Meals</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {category}
                </div>
            </div>
        );
        
    }

export default Category;