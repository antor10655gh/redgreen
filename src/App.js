import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';


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
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
      </Layout>
    </div>
  );
}

export default App;
