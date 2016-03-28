'use strict';

import React, { Component } from 'react';
import { Link }             from 'react-router';
import DocumentTitle        from 'react-document-title';

class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Home">
        <section className="home-page">

          <h3>Home Page</h3>
          <div>
            <Link to="/sample">Sample</Link>
          </div>

        </section>
      </DocumentTitle>
    );
  }

}

export default HomePage;
