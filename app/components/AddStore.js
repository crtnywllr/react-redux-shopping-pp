import React from 'react'
import { connect } from 'react-redux'

var AddStore = React.createClass({
onSubmit: function(event) {
        event.preventDefault();
        let input = this.refs.storeInput.value
        this.props.addStore(input);
        this.refs.storeInput.value = ""
    },
    render: function() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" ref='storeInput' />
                <button>Add Store</button>
            </form>
        );
    }
    })
    
export default AddStore