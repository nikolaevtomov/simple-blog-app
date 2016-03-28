'use strict';

import React, { Component }     from 'react';
import { reduxForm }            from 'redux-form';
import { Link, browserHistory } from 'react-router';
import { createPost }           from '../actions/index';

class PostsNew extends Component {

  onSubmit(props) {
    this.props.createPost(props)
    .then(() => {
      browserHistory.push('/')
     });
  }

  render() {

    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return(
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } className={`postsNew`}>

        <h3>Create A New Post</h3>

        <div className={`postsNew__group ${ title.touched && title.invalid ? 'error' : '' }`}>
          <label className={`postsNew__group--label`}>Title</label>
          <input type="text" className={`postsNew__group--input`} {...title} />
          <div className={`postsNew__group--error`}>
            { title.touched ? title.error : '' }
          </div>
        </div>

        <div className={`postsNew__group ${ categories.touched && categories.invalid ? 'error' : '' }`}>
          <label className={`postsNew__group--label`}>Categories</label>
          <input type="text" className={`postsNew__group--input`} {...categories} />
          <div className={`postsNew__group--error`}>
            { categories.touched ? categories.error : '' }
          </div>
        </div>

        <div className={`formGroup ${ content.touched && content.invalid ? 'error' : '' }`}>
          <label className={`postsNew__group--label`}>Content</label>
          <textarea className={`postsNew__group--input`} {...content} />
          <div className={`postsNew__group--error`}>
            { content.touched ? content.error : '' }
          </div>
        </div>

        <button type="submit" className={`postsNew--button`}>Submit</button>
        <div className={`postsNew--cancel`}><Link to="/">Cancel</Link></div>
      </form>
    );
  }
}

function validate(values) {

  const errors = {};

  if(!values.title) {
    errors.title = 'Please enter a title!';
  }
  if(!values.categories) {
    errors.categories = 'Please enter a category!';
  }
  if(!values.content) {
    errors.content = 'Please enter a content!';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
