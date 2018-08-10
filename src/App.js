import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav/Nav';
import routes from './routes';

export default class App extends Component {
  render() {

      return (
        <div>
          <Nav/>
          {routes}
        </div>
      )
    //   );
    // } else {
    //     return(
    //       <div>
    //       {routes}
    //     </div>
    //     )
    // }
  // }
    }
}
