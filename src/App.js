import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import FooterMain from './components/FooterMain';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Map from './Dashboard/Map';
import Menu from './Dashboard/Menu';


const { Header, Footer, Sider, Content } = Layout;


function App() {
  
  return (
      <div className="App">
      <Layout>
      <Header>
        <TopHeader></TopHeader>
      </Header>
      <Layout>
        <Sider>
          <Sidebar></Sidebar>
        </Sider>
        <Layout>
          <Content
            style={{
              padding: '0 10px',
            }}
          >
          <div style={{background: "#fff", padding: "24px", marginTop: "10px", minHeight: "480px"}}>
            <Routes>
              <Route path='/' element={<Dashboard/>}></Route>
              <Route path='/map' element={<Map/>}></Route>
              <Route path='/menu' element={<Menu />}></Route>
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
