import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import ShoppingListContainer from './ShoppingListContainer';

function mapStateToProps(state, props) {
    return {
        items: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

const Container = connect(mapStateToProps, mapDispatchToProps)(ShoppingListContainer)

export default Container;
