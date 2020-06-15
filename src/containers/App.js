import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';

import UserRegistrationInfo from '../components/UserRegistrationInfo';
import RegistrationForm from '../components/RegistrationForm';

import { handleRegisterUser, handleLogout } from '../redux/actions';

import './App.css';
const { Header, Footer, Content } = Layout;
class App extends Component {


  render(){
    const {isRegistered,registrationForm,handleRegisterUser,handleLogout} = this.props;
    return (
      <React.Fragment>
        <Layout>
          <Header>Header</Header>
          <Content className="main-layout">
            <Row>
              <Col span={12} offset={6}>
                {isRegistered 
                ? (
                  <UserRegistrationInfo
                    registrationForm={registrationForm}
                    onLogout={handleLogout}
                  />
                )
              : (
                <RegistrationForm
                  onRegisterUser={handleRegisterUser}
                />
              ) }
              </Col>
            </Row>
          </Content>
          <Footer style={{ backgroundColor: '#001529' }}></Footer>
        </Layout>
      </React.Fragment>
    );
  }
};

const mapStateToProps=(state) => {
  const{coreReducer} = state;
  const{
    registrationForm,
    isRegistered
  } = coreReducer
  return {
    registrationForm,
    isRegistered
  };
};

export default connect(mapStateToProps, {
  handleRegisterUser,
  handleLogout
})(App);


