import React from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import $ from 'jquery';
const axios = require('axios');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // render() {
  //   return (
  //     <div>
  //       Hello World 2
  //     </div>
  //   );
  // }
}

// if (typeof window !== 'undefined') {
//   ReactDOM.render(<App />, document.getElementById('app'));
// }
