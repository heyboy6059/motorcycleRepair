import React, { Component } from 'react';
import './App.css';
import './index.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import UserServiceRequest from './components/userServiceRequest';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Smart Bikers" scroll>
            <Navigation>
              <Link to="/signin">Sign in</Link>
              <Link to="/locator">Locator</Link>
            </Navigation>
          </Header>
          <Drawer title="Menu">
            <Navigation>
              <a href="#">Profile</a>
              <a href="#">Status</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
            {/* user service request form */}
            <UserServiceRequest />
          </Content>
        </Layout>
      </div>
    );
  }
}
export default App;
