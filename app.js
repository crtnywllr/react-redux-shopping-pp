var React = require('react');
var ReactDOM = require('react-dom');

var PopularItemsFooterRow = React.createClass({
    render: function() {
        var name = this.props.item.popular ? this.props.item.name : null;
    return (
        <div className="popular">{name}</div>
        );
    }
});

var PopularItemsFooter = React.createClass({
    render: function() {
        var popularItemsRow = [];
        this.props.items.forEach(function(item) {
                popularItemsRow.push(<PopularItemsFooterRow item={item} key={item.name} />);
            });
        return (
            <div className="footer">
            {popularItemsRow}
            </div>
        );
    }
});

var ClearListButton = React.createClass({
    render: function() {
    return (
        <button>Clear List</button>
        );
    }
});

/*var CheckButton = React.createClass({
    render:
    return ()
})*/

/*var DeleteButton = React.createClass({
    render:
    return ()
})*/

var ItemsTableRow = React.createClass({
   render: function() {
        var name = this.props.item.active ? this.props.item.name : null;
    return (
        <div className="">{name}</div>
        );
    }
});

var ItemsTable = React.createClass({
    render: function() {
        var activeItemsRow = [];
        this.props.items.forEach(function(item) {
               activeItemsRow.push(<ItemsTableRow item={item} key={item.name} />);
            });
        return (
            <div className="">
            {activeItemsRow}
            </div>
        );
    }
});

var AddButton = React.createClass({
     render: function() {
    return (
        <button type="submit">Add</button>
        );
    }
});

var AddItemBar = React.createClass({
      render: function() {
    return (
        <input type="text" placeholder="Enter your item..." />
        );
    }
});
/*var InstructionText = React.createClass({
    render:
    return ()
})*/
/*var Header = React.createClass({
    render:
    return ()
})*/

var AppContainer = React.createClass({
    render: function () {
    return (
        <div>
        <AddButton />
        <ItemsTable items={this.props.items} />
        <ClearListButton />
        <PopularItemsFooter items={this.props.items} />
       </div>
        );
    }
});

var ITEMS = [
    {name: "bacon", active: false, popular: true},
    {name: "eggs", active: true, popular: true},
    {name: "almond milk", active: false, popular: true},
    {name: "sweet potato", active: false, popular: true},
    {name: "spinach", active: false, popular: true},
    {name: "chicken", active: true, popular: true},
    {name: "onions", active: false, popular: true},
    {name: "salmon", active: false, popular: true},
    {name: "soda water", active: true, popular: true},
    {name: "apples", active: true, popular: true}
    ];

ReactDOM.render(
  <AppContainer items={ITEMS} />,
  document.getElementById('app')
  );