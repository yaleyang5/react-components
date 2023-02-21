// TODO
const App = function () {
  const items = ['Apples', 'Bananas'];
  return (
    <div>
      <h2>Here's your Grocery List:</h2>
      <GroceryList items={items}/>
    </div>
  );
}

const GroceryList = function (props) {
  return (
    <ul>
      {props.items.map((item) => (
        <GroceryListItem item={item} />
      ))}
    </ul>
  );
};

const GroceryListItem = (props) => {
  const [isBold, setIsBold] = React.useState(false);

  const onGroceryListItemClick = function (event) {
    console.log('click!');
  };

  const onGroceryListItemOnEnter = function (event) {
    setIsBold(!isBold);
    // console.log('hovering!');
  };

  const onGroceryListItemOnLeave = function (event) {
    setIsBold(!isBold);
    // console.log('leaving!');
  };

  const style = {
    fontWeight: isBold ? 'bold' : 'normal'
  };

  return (
    <li style={style}
    onClick={onGroceryListItemClick}
    onMouseEnter={onGroceryListItemOnEnter}
    onMouseLeave={onGroceryListItemOnLeave}>
      {props.item}
    </li>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));