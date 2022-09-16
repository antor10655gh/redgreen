import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import FooterMain from './components/FooterMain';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Map from './Dashboard/Menu/Map';
import Menu from './Dashboard/Menu/Menu';
import Settings from './Dashboard/Others/Settings';
import Accounts from './Dashboard/Others/Accounts';
import Helps from './Dashboard/Others/Helps';


const { Header, Footer, Sider, Content } = Layout;


function App() {

  const showSidebar = () =>{
    document.getElementById('sidebar').style.display = "block";
  }
  
  return (
      <div className="App">
      <Layout>
      <Header>
        <TopHeader showSidebar={showSidebar}></TopHeader>
      </Header>
      <Layout>
        <Sider id='sidebar'>
          <Sidebar></Sidebar>
        </Sider>
        <Layout>
          <Content
            style={{
              padding: '0 10px',
            }}
          >
          <div className='main-content'>
            <Routes>
              <Route path='/' element={<Dashboard/>}></Route>
              <Route path='/map' element={<Map/>}></Route>
              <Route path='/menu' element={<Menu />}></Route>
              <Route path='/settings' element={<Settings />}></Route>
              <Route path='/accounts' element={<Accounts />}></Route>
              <Route path='/helps' element={<Helps />}></Route>
            </Routes>
          </div>
          </Content>
          <Footer>
            <FooterMain></FooterMain>
          </Footer>
        </Layout>
      </Layout>
      </Layout>
    </div>
  );
}

export default App;
