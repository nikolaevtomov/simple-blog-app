'use strict';

import React, { Component } from 'react';
import DocumentTitle        from 'react-document-title';

class NotFoundPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="404: Not Found">
        <section className="not-found-page">

          Page Not Found

        </section>
      </DocumentTitle>
    );
  }

}

export default NotFoundPage;
