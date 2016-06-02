import React from 'react'
import ShoppingList from './ShoppingList'
import AddItem from './AddItem'
import Header from './Header'
import Instructions from './Instructions'
import AddStore from './AddStore'
import { connect } from 'react-redux'

var ShoppingListContainer = React.createClass({
    
    render() {
    return (
           <div>   
                <Header />
                <Instructions />
                <AddStore addStore={this.props.onAddStore} />
                {this.props.shops.map((shop, shopIndex) => 
                    <li key={shopIndex}>
                        {shop.title}
                        <button onClick={this.props.onDeleteShop.bind(null,shopIndex)}>X</button>
                        <ShoppingList shop={shop} items={shop.items} onAddItem={this.props.onAddItem.bind(null, shopIndex)} onDeleteItem={this.props.onDeleteItem.bind(null, shopIndex)} onClearItems={this.props.onClearItems.bind(null, shopIndex)}/>
                    </li>
                   )}
                <button onClick={this.props.onClearShops} > Clear All </button>
            </div>
        )
    }
})

export default ShoppingListContainer;