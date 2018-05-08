import React, { Component } from 'react';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Select from 'react-select';
import Counter from './Counter';
import 'react-select/dist/react-select.css';
import Filters from '../components/Filters';

class App extends Component {
  state = {
    selection: null
  }

  render() {
    return (
      <div className="App">
        <Counter />
        <Filters />
        <ArticleList  />
      </div>
    );
  }

  changeSlection = (selection) => this.setState({selection});
}

export default App;
