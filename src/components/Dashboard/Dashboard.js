// import './App.css';
import * as actions from '../../store/actions/index';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import Spinner from '../UI/Spinner/Spinner';
import Card from '../UI/Card/Card';
import ErrorBox from '../ErrorBox/ErrorBox';

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
                                    <Card image={user.image} name={user.name} account={user.account} type="dashboard" />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                    :
                    <ErrorBox>No Users Found!</ErrorBox>
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

