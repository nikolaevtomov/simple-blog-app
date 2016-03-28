'use strict';

import React                                         from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App                                           from './App';
import HomePage                                      from './pages/HomePage';
import SamplePage                                    from './pages/SamplePage';
import NotFoundPage                                  from './pages/NotFoundPage';

import PostsIndex                                    from './components/posts_index';
import PostsNew                                      from './components/posts_new';
import PostsShow                                     from './components/posts_show';

export default () => (
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>

        <IndexRoute component={ PostsIndex } />
        <Route path="/posts/new" component={ PostsNew } />
        <Route path="/posts/:id" component={ PostsShow } />
        <Route path="*" component={ NotFoundPage } />

      </Route>
    </Router>
);
