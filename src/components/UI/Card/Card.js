import React from 'react'
import { connect } from 'react-redux';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import './Card.css';
import * as actions from '../../../store/actions/index';

export const CardUI = (props) => {

    const changeRating = (newRating, name) => {
        props.changeRating(props.account, name, newRating);
    }

    return (
        <div>
            <Card className="card">
                <div className="cardImageContainer">
                    <Card.Img className="cardImage" variant="top" src={props.image} />
                </div>
                <Card.Body className="text-center">
                    <Card.Title>{props.name}</Card.Title>
                    {props.type === "dashboard" &&
                        <div>
                            <Link to={"/show/" + props.account} className="mr-2 btn btn-success btn-sm">Show</Link>
                        </div>
                    }
                    {props.type === "apps" &&
                        <StarRatings
                            starRatedColor="gold"
                            numberOfStars={5}
                            name={props.cardKey}
                            rating={props.rating}
                            starDimension="20px"
                            changeRating={changeRating}
                        />
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        app: state.app.app
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeRating: (account, app, rating) => dispatch(actions.changeRating(account, app, rating)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardUI);
