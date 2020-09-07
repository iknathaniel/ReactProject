import React, { Component } from 'react';
import Category from './CategoryComponent';
import MealDetail from './MealsDetailComponent';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import PizaList from './PizaList';
import PieList from './PieList';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        meals: state.meals,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions,
        pizzas: state.pizzas,
        salads: state.salads,
        pies: state.pies,
        pastas: state.pastas,
        lasagnas: state.lasagnas
    };
};

class Main extends Component {
  
  render() {
      const HomePage = () => {
          return (
              <Home 
                    meal={this.props.meals.filter(meal => meal.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                    pizza={this.props.pizzas.filter(pizza => pizza.featured)[0]}
                    salad={this.props.salads.filter(salad => salad.featured)[0]}
                    pie={this.props.pies.filter(pie => pie.featured)[0]}
                    pasta={this.props.pastas.filter(pasta => pasta.featured)[0]}
                    lasagna={this.props.lasagnas.filter(lasagna => lasagna.featured)[0]}
              />
          );
      };

      
      const MealWithId = ({match}) => {
        return (
            <MealDetail 
                meal={this.props.meals.filter(meal => meal.id === +match.params.mealId)[0]}
                comments={this.props.comments.filter(comment => comment.mealId === +match.params.mealId)}
            />
        );
    };    

      return (
          <div>
              <Header/>
              <Switch>
                  <Route exact path='/home' render={() => <Category meals={this.props.meals} />} />
                  <Route path='/category/:mealId' component={MealWithId} />
                  <Route exact path='/aboutus' 
                           render = {
                                    () => <About partners={this.props.partners}/>
                                }/>
                  <Route path='/aboutus/:partner' component={About}/> 

                  <Route exact path='/pizalist' 
                           render = {
                                    () => <PizaList pizzas={this.props.pizzas}/>
                                }/>
                  <Route path='/pizalist/:pizza' component={PizaList}/> 


                  <Route exact path='/pielist' 
                           render = {
                                    () => <PieList pies={this.props.pies}/>
                                }/>
                  <Route path='/pielist/:pie' component={PieList}/> 


                  <Route exact path='/contactus' component={Contact} />
                  <Redirect to='/home' />
              </Switch>
              <Footer />
          </div>
      );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
