import React, { Component } from 'react';
import './App.css';
import './index.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className='header-color' title="Smart Bikers" scroll>
                <Navigation>
                    <Link to="/match">Matching Page</Link>
                    <Link to="/mechanic">Mechanic Registration</Link>
                </Navigation>
            </Header>
            <Content>
                <div className="page-content" />
                <Main/>

            </Content>
        </Layout>
    </div>
  );
}
}
export default App;
