import React, { Component, PropTypes } from 'react';
import contentful from 'contentful';
import autoBind from 'react-autobind';
import showdown from 'showdown';
import CSSModules from 'react-css-modules';
import styles from './post.css';

const converter = new showdown.Converter();

class Post extends Component {

  constructor() {
    super();
    autoBind(this);
    this.state = {
      post: null
    }
  }

  retrievePost(client) {
    client.getEntries({
      'fields.slug': this.props.params.post,
      'content_type': "2wKn6yEnZewu2SCCkus4as"
    })
    .then(post => {
      console.log('Featured Post', post)
      this.setState({post: post})
    })
  }

  formatBody() {
    return (
      <div
        dangerouslySetInnerHTML={
          {
            __html: converter.makeHtml(this.state.post.items[0].fields.body)
          }
        }
      />
    )
  }

  componentDidMount() {
    let client = contentful.createClient({
      space: '1f39m5m6ztui',
      accessToken: 'b1c34dc2720ae32318c9bdfd46d9e48f390bf07eca77c59c2ffe8a52472960e8'
    })

    this.retrievePost(client);
  }

  render() {
    return (
      <div>
        {this.state.post ? this.formatBody() : null}
      </div>
    )
  }
}

export default CSSModules(Post, styles);
