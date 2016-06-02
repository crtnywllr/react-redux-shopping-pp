import React from 'react'
import { connect } from 'react-redux'
import AddItem from './AddItem'

var ShoppingList = React.createClass({
    render: function(){
        return (
          <div>
            <AddItem addItem={this.props.onAddItem}/>
            <ul>
            {this.props.items.map((item, itemIndex) => 
                <li key={itemIndex}>
                    <button value={itemIndex}>✓</button>
                    <h3>{item.name}</h3>
                    <button onClick={this.props.onDeleteItem.bind(null, itemIndex)} value={itemIndex}> X </button>
                </li>
            )}
            </ul>
            <button onClick={this.props.onClearItems} > Clear Items </button>
          </div>
        )
    }
 });
 
 export default ShoppingList;