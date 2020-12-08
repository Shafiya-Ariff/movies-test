// import './App.css';
import * as actions from '../../store/actions/index';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Spinner from '../UI/Spinner/Spinner';

export const App = (props) => {

    useEffect(() => {
        props.getUsers();
    }, []);

    return (
        <div>
            {props.loading ? <Spinner /> :
                Object.values(props.users).length > 0 ?
                    <Container fluid className="my-5">
                        <Row>
                            {Object.values(props.users).map(user => (
                                <Col key={user.account} sm={6} md={6} xl={4} lg={4}>
                                    <Card style={{ boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: '18rem', margin: "20px" }}>
                                        <div style={{ height: "200px" }}>
                                            <Card.Img style={{ maxHeight: "100%" }} variant="top" src={user.image} />
                                        </div>
                                        <Card.Body className="text-center">
                                            <Card.Title>{user.name}</Card.Title>
                                            <div>
                                                <Link to={"/show/" + user.account} className="mr-2 btn btn-success btn-sm">Show</Link>
                                            </div>
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
        error: state.user.error,
        users: state.user.users,
        loading: state.user.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(actions.getUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

