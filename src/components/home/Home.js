import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loader from '../layout/Loader';
import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';

class Home extends Component {

    render() {
        const { loading } = this.props;
        return (
            <div className="container">
                <SearchForm />
                {loading ? <Loader /> : <MoviesContainer />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.movies.loading
});

export default connect(mapStateToProps)(Home);


