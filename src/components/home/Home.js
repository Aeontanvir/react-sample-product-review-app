import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loader from '../layout/Loader';

class Home extends Component {

    render() {
        const { loading } = this.props;
        return (
            <div className="container">

                {loading ? <Loader /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.movies.loading
});

export default connect()(Home);


