// import './App.css';
import * as actions from '../../store/actions/index';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

import Spinner from '../UI/Spinner/Spinner';

export const ShowApps = (props) => {

    useEffect(() => {
        props.getAccounts(props.match.params.account);
    }, [props.app]);

    const acc = props.account || {};

    const changeRating = (newRating, name) => {
        props.changeRating(props.match.params.account, name, newRating);
    }

    return (
        <div>
            {props.loading ? <Spinner /> :
                Object.values(acc).length > 0 ?
                    <Container fluid className="my-5">
                        <Row>
                            {Object.entries(acc).map(([key, acc]) => (
                                <Col key={key} sm={6} md={6} xl={4} lg={4}>
                                    <Card style={{ boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: '18rem', margin: "20px" }}>
                                        <div style={{ height: "200px" }}>
                                            <Card.Img style={{ maxHeight: "100%" }} variant="top" src={acc.image} />
                                        </div>
                                        <Card.Body className="text-center">
                                            <Card.Title>{acc.title}</Card.Title>
                                            <StarRatings
                                                starRatedColor="gold"
                                                numberOfStars={5}
                                                name={key}
                                                rating={acc.rating}
                                                starDimension="20px"
                                                changeRating={changeRating}
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container> :
                    <div className="errorMessageBox container">
                        No users found!
                    </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.account.error,
        account: state.account.account,
        loading: state.account.loading,
        app: state.app.app
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAccounts: (account) => dispatch(actions.getAccounts(account)),
        changeRating: (account, app, rating) => dispatch(actions.changeRating(account, app, rating)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowApps);

