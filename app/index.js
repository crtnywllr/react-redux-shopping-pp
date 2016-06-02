import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
//import store from './store'
import update from 'react-addons-update'
import ShoppingListContainer from './components/ShoppingListContainer'


var AppContainer = React.createClass({
    getInitialState: function(){
        return {
            shops: [{
                title: "Store 1",
                items: [{
                    id: 0,
                    name: 'eggs',
                    completed: false
                }]
            }],
             
        }
    },
    handleAddItem:function (index, input){
        var shops = this.state.shops.concat();
        shops[index] = {
            title: shops[index].title || '',
            items: shops[index].items.concat({id: (shops[index].items.length), name: input , completed: false})
        };
        this.setState({
            shops: shops
    })
    },
    handleAddStore:function (input){
        var newState = update(this.state, {
            shops: {$push: [{ title: input, items: [] }]}
        } );
        this.setState(newState)
    },
    
    handleDeleteItem: function(shopIndex, itemIndex) {
        this.setState(state => {
            state.shops[shopIndex].items.splice(itemIndex, 1);
            return {shops: state.shops};
        });
    },
    handleDeleteShop: function(shopIndex) {
        this.setState(state => {
            state.shops.splice(shopIndex, 1);
            return {shops: state.shops};
        });
    },
    checkItem: function(e) {
        var itemIndex = parseInt(e.target.value, 10);
        var newState = update(this.state, {
            items: {0: {checked: {$set: !this.state.checked }}}
        } );
        this.setState(newState)
        },
    handleClearShops: function() {
        this.setState(state => {
            state.shops = []
        })
    },
    handleClearItems: function(shopIndex) {
        this.setState(state => {
            state.shops[shopIndex].items = [];
        })
    },
    
    render: function(){ 
        return(
            <ShoppingListContainer shops={this.state.shops} onAddStore={this.handleAddStore} onAddItem={this.handleAddItem} onDeleteItem={this.handleDeleteItem} onDeleteShop={this.handleDeleteShop} onClearShops={this.handleClearShops} onClearItems={this.handleClearItems}/>
        );
    }
});

ReactDOM.render(<AppContainer />, document.getElementById('app'));