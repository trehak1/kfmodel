import React from 'react';
import ReactDOM from 'react-dom';
import {connect, Provider} from "react-redux";
import {createStore} from 'redux'
import './index.css';


function reducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text]);
        default:
            return state
    }
}

const store = createStore(reducer, []);

const stateToProps = (s) => {
    return {...s};
};

const dispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch({type: "ADD_TODO", text: "click click"})
        }
    }
};


class Landscape extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick}>
                {JSON.stringify(this.props)}
            </div>
        );
    }
}


const ConnectedLandscape = connect(stateToProps, dispatchToProps)(Landscape);


// ========================================

ReactDOM.render(
    <Provider store={store}>
        <ConnectedLandscape/>
    </Provider>,
    document.getElementById('root')
);

