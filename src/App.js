import React, { Component } from 'react';
import './App.css';
import './index.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LogoB from './img/logoB.png';
import Homepage from './components/homepage'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" scroll>
            <Link to="/">
              <img src={LogoB} alt="LogoB" />
            </Link>
            <Navigation>
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
