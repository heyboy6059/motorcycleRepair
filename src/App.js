import React, { Component } from 'react';
import './App.css';
import './index.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LogoB from './img/logoB.png';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" scroll>
            <img src={LogoB} alt="LogoB" />
            <Navigation>
              <Link to="/motorcycle">Motorcycle Information</Link>
              <Link to="/match">Matching Page</Link>
              <Link to="/mechanic">Mechanic Registration</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}
export default App;
