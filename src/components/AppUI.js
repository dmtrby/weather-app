import { connect } from 'react-redux';

import * as actions from '../actions/index';
import App from '../App';

const mapDispatchToProps = dispatch => {
    return {
        changeCity: (index) => {
            dispatch(actions.changeCity(index));
        }
    }
}

const mapStateToProps = (state) => {
    const { activeCity } = state;
    return {
        activeCity: activeCity,
    }
};

const AppUI = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppUI;

