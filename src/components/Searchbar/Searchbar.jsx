import { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = { value: '' };

  handleChange = ({ target: value }) => {
    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submit(this.setState.value)
  }

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormbutton}>
            <span className={css.SearchFormbuttonlabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className={css.SearchForminput}
            type="text"
            placeholder="Search images and photos"
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
