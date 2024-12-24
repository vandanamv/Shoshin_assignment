import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardSummary from './components/DashboardSummary';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <Sidebar />
      <ContentArea>
        <Header />
        <DashboardSummary />
        {/* Add more content here */}
      </ContentArea>
    </AppContainer>
  );
};

export default App;
