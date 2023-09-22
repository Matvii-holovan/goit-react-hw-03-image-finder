import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    image: [],
    page: 1,
    query: '',
    tags: '',
    error: false,
    isLoading: false,
    searchQuery: ''
  };

  getAllPhotoBySearch = () => {};

  handleSetSearchQuery = (value) => {
    this.setState({searchQuery: value})
  }

  render() {
    return <Searchbar submit={this.handleSetSearchQuery}/>;
  }
}
