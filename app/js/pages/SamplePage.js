'use strict';

import React, { Component } from 'react';
import { Link }             from 'react-router';
import DocumentTitle        from 'react-document-title';

class SamplePage extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <DocumentTitle title="Sample Page">
        <section className="sapmle-page">

          <div>
            <h3>Semple Page</h3>
          </div>

          <div>
            <Link to="/">Back to Home</Link>
          </div>

        </section>
      </DocumentTitle>
    );
  }

}

export default SamplePage;
