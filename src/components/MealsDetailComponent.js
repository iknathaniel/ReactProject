import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardFooter, Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

    const required = val => val && val.length;
    const maxLength = len => val => !val || (val.length <= len);
    const minLength = len => val => val && (val.length >= len);

    class CommentForm extends Component{
        constructor(props){
            super(props);
            
            this.state = {
                rating: '',
                author: '',
                text: '',
                isModalOpen: false
            };
            this.toggleModal = this.toggleModal.bind(this);
            
        }
        
            toggleModal(){
                this.setState({
                    isModalOpen: !this.state.isModalOpen
                });
            }
        
        render(){
            return(
                <React.Fragment>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        
                            <ModalHeader toggle={this.toggleModal}>Checkout</ModalHeader>
                            <ModalBody>
                                <div className="container">
                                    <div className="row">
                                        
                                    </div>
                                </div>    

                            </ModalBody>
                        
                    </Modal>
    
                    <Button type="submit" outline onClick={this.toggleModal}  >
                        <i className="fa fa-shopping-basket fa-lg" /> Order Now
                    </Button>
                </React.Fragment>
            );
            
        }
    }

    function RenderMeal({meal}) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={meal.image} alt={meal.name} />
                    <CardBody>
                        <CardText>{meal.description}</CardText>
                        <CardFooter className="price">{meal.priceDollar}<sup>{meal.priceCent}</sup></CardFooter>
                    </CardBody>
                </Card>
            </div>
        );  
    }

    function RenderComments({comments}) {
        if (comments) 
        {
            return (
                    <div className="col-md-5 m-1">
                        {comments.map
                                (comment => 
                                    <p key={comment.id}><h3>{comment.calories}</h3> {comment.detail} <br/> <br/> 
                                        <b>SELECTION FROM:</b> <br/>
                                        {comment.ingredients}  <br/> <br/> 
                                        <b>SIZE:</b> <br/>
                                        {comment.size}  <br/> <br/> 
                                        <b>ENJOY WITH:</b> <br/>
                                        {comment.sauces}
                                    </p>
                                )
                        }
                        <CommentForm />
                    </div>
                    );   
        }
            else
        {
            return (<div/>);
        }
        
    }
    
    function MealDetail(props){
        if (props.meal) 
            {
                return  (
                        <div className="container">
                            <div className="row mt-3">
                                <div className="col">
                                    <h2>{props.meal.name}</h2>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <RenderMeal meal={props.meal}/>
                                <RenderComments comments={props.comments} />
                            </div>
                        </div>
                        );  
            }
              return (<div/>);
        }
          
export default MealDetail;