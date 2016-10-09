import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import contentful from 'contentful';
import autoBind from 'react-autobind';
import CSSModules from 'react-css-modules';
import styles from './blog.css';

class Blog extends Component {

  constructor() {
    super();
    this.state = {
      entries: [],
      featuredPost: null
    }
    autoBind(this);
  }

  retrieveNonFeaturedPosts(client) {
    client.getEntries({
      'fields.featuredPost[ne]': true,
      'content_type': "2wKn6yEnZewu2SCCkus4as"
    })
    .then(entries => {
      console.log('entries', entries)
      this.setState({entries: entries.items})
    })
  }

  retrieveFeaturedPost(client) {
    client.getEntries({
      'fields.featuredPost': true,
      'content_type': "2wKn6yEnZewu2SCCkus4as"
    })
    .then(entry => {
      console.log('Featured Post', entry)
      this.setState({featuredPost: entry})
    })
  }

  componentDidMount() {
    let client = contentful.createClient({
      space: '1f39m5m6ztui',
      accessToken: 'b1c34dc2720ae32318c9bdfd46d9e48f390bf07eca77c59c2ffe8a52472960e8'
    })

    this.retrieveNonFeaturedPosts(client);
    this.retrieveFeaturedPost(client);
  }

  render() {
    return (
      <div>
        <Link to={`/blog/${this.state.featuredPost ? this.state.featuredPost.items[0].fields.slug : null}`} styleName='featured-container'>
          {
            this.state.featuredPost ?
              <div
                styleName='featured-img'
                style={{backgroundImage: `url(http://${this.state.featuredPost.items[0].fields.heroImage.fields.file.url})`}}
              />
            : null
          }
          <div styleName='featured-content-container'>
            <div styleName='featured-content'>
              <h1 styleName='featured-title'>{this.state.featuredPost ? this.state.featuredPost.items[0].fields.title : null}</h1>
              {/*<p>{this.state.featuredPost ? this.state.featuredPost.items[0].fields.author[0].fields.name : null}</p>*/}
              <p styleName='featured-date'>{this.state.featuredPost ? this.state.featuredPost.items[0].fields.date : null}</p>
            </div>
          </div>
        </Link>
        <div styleName="posts-container">
          { this.state.entries ? this.state.entries.map(entry => (
            <Link to={''} styleName="post" key={entry.sys.id}>
              <div
                styleName="post-img"
                style={{backgroundImage: entry.fields.featuredImage ? `url(http://${entry.fields.featuredImage.fields.file.url})` : null}}
              />
              <h2 styleName="title">{entry.fields.title}</h2>
              <p styleName="date">{entry.fields.date}</p>
            </Link>
          )) : null }
        </div>
      </div>
    )
  }
}

export default CSSModules(Blog, styles);
