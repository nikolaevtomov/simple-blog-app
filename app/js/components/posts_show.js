'use strict';

import React, { Component }      from 'react';
import { connect }               from 'react-redux';
import { Link, browserHistory }  from 'react-router';
import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
    .then(() => {
      browserHistory.push('/')
     });
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return (<div>Loading...</div>);
    }

    return (
      <div>
        <div><Link to="/">Back to index</Link></div>
        <h3>{ post.title }</h3>
        <h5>Categories: { post.categories }</h5>
        <p>{ post.content }</p>
        <button onClick={ this.onDeleteClick.bind(this) } type="button">Delete Post</button>
      </div>
    );
  }

}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
