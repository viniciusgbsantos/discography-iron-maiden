import React, { Component } from 'react';
import Album from './Album';
import './Discography.css';

class Discography extends Component {

  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  componentDidMount() {
    const discographyUrl = 'https://github.com/viniciusgbsantos/discography-iron-maiden/edit/main/albums.json';

    fetch(discographyUrl)
      .then(result => result.json())
      .then((result) => {
        this.setState({ data: result.data || [] })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { data } = this.state;

    if (!data || !data.length) return (<h2>Loading...</h2>);

    return (
      <div>
        <h2>Discography</h2>
        <div className="discography">
          {data.map(album => <Album key={album.title} item={album} />)}
        </div>
      </div>
    );
  }
}

export default Discography;