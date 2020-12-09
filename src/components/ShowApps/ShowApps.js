// import './App.css';
import * as actions from '../../store/actions/index';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import Spinner from '../UI/Spinner/Spinner';
import Card from '../UI/Card/Card';
import ErrorBox from '../ErrorBox/ErrorBox';

export const ShowApps = (props) => {

    useEffect(() => {
        props.getAccounts(props.match.params.account);
    }, [props.app]);

    const acc = props.account || {};

    return (
        <div>
            {props.loading ? <Spinner /> :
                Object.values(acc).length > 0 ?
                    <Container fluid className="my-5">
                        <Row>
                            {Object.entries(acc).map(([key, acc]) => (
                                <Col key={key} sm={6} md={6} xl={4} lg={4}>
                                    <Card image={acc.image} name={acc.title} rating={acc.rating} cardKey={key} account={props.match.params.account} type="apps" />
                                </Col>
                            ))}
                        </Row>
                    </Container> :
                    <ErrorBox>No Apps Found!</ErrorBox>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowApps);

