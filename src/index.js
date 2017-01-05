import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <h1>hello world!</h1>,
  document.getElementById('div1')
);

// const element= <h1>hello world!</h1>;

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user= {
  firstName: 'steve',
  lastName: 'chen'
};

const element = (
  <h1>hello, {formatName(user)}
  </h1>
);

ReactDOM.render(
  element,document.getElementById("div05")
);

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<ShoppingList name="mark"/>,
document.getElementById("div06")
)
