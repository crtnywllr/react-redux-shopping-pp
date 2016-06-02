import React from 'react'
import { connect } from 'react-redux'

var AddItem = React.createClass({
onSubmit: function(event) {
        event.preventDefault();
        this.props.addItem(this.refs.itemInput.value);
        this.refs.itemInput.value = ""
    },
    render: function() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" ref='itemInput' />
                <button>Add Item</button>
            </form>
        );
    }
    })
    
export default AddItem