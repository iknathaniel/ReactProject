import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col">
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>MealBite</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-theme text-white"><h3>Brief about MealBite</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Date Founded</dt>
                                <dd className="col-6">July 23, 2018</dd>
                                <dt className="col-6">No. of Outlets: 2018</dt>
                                <dd className="col-6">43</dd>
                                <dt className="col-6">No. of Outlets: 2019</dt>
                                <dd className="col-6">75</dd>
                                <dt className="col-6">Total Employees</dt>
                                <dd className="col-6">265</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                                <footer className="blockquote-footer">MelaBiter,{' '}
                                    <cite title="Source Title">"Wen we Bite Meal" -
                                    Cook Book, 2019</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}


export default About;