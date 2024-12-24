import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe for background color animation
const backgroundColorAnimation = keyframes`
  0% {
    background-color: #ffffff;
  }
  50% {
    background-color: #f0f4f8;
  }
  100% {
    background-color: #ffffff;
  }
`;

// Container for the entire summary section
const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding-left: 20px; /* Moves the content to the right */
  gap: 20px; /* Adds space between the containers */
  flex-wrap: wrap; /* Allows wrapping the containers to the next row */
`;

// Container for the cards
const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
`;

// Card component for each box with background color animation
const Card = styled.div`
  flex: 0 1 25%;  /* Width of the cards */
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px; /* Reduced padding to decrease height */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 150px; /* Reduced height */
  animation: ${backgroundColorAnimation} 4s ease-in-out infinite; /* Applying animation */
`;

// Title for each card
const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #495057;
  margin-bottom: 8px; /* Reduced margin */
`;

// Number displayed in each card
const CardNumber = styled.h1`
  font-size: 2.5rem;
  color: #004aad;
  margin: 5px 0; /* Reduced margin */
`;

// Subtitle text for each card
const CardSubtitle = styled.p`
  font-size: 0.9rem;
  color: #adb5bd;
`;

// Container for the recent activity section (placed to the right side) with background color animation
const RecentActivityWrapper = styled.div`
  flex: 0 1 40%; /* Adjust the width for the recent activity container */
  margin-left: auto; /* This will push the recent activity container to the right */
`;

// Recent activity container with background color animation
const RecentActivityContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  text-align: left;
  animation: ${backgroundColorAnimation} 4s ease-in-out infinite; /* Applying animation */
`;

// Recent activity title
const ActivityTitle = styled.h3`
  font-size: 1.4rem;
  color: #6c757d;
  margin-bottom: 15px;
`;

// Content for the recent activity section
const ActivityText = styled.p`
  font-size: 0.9rem;
  color: #495057;
  margin-bottom: 10px;
`;

// Activity button
const SeeActivityButton = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #004aad;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    background-color: #003b8c;
  }
`;

// Dashboard title with margin to create space above the containers
const DashboardTitle = styled.h1`
  font-size: 2rem;
  color: #495057;
  margin-bottom: 15px; /* Space between the title and first container */
  margin-left: 20px; /* Moves the title a little to the right */
`;

// New containers below the existing summary containers
const NewContainerWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px; /* Space between the new containers */
  width: 100%; /* Makes sure it takes full width within the SummaryContainer */
`;

// Individual new container
const NewContainer = styled.div`
  flex: 0 1 48%; /* Adjust width for two containers */
  background-color: #e9ecef;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

// Title for the new containers
const NewContainerTitle = styled.h3`
  font-size: 1.2rem;
  color: #495057;
  margin-bottom: 10px;
`;

// Content for the new containers
const NewContainerContent = styled.p`
  font-size: 1rem;
  color: #495057;
`;

const DashboardSummary = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;

  return (
    <div>
      {/* Dashboard title placed above the first container */}
      <DashboardTitle>Dashboard</DashboardTitle>

      {/* Summary Container holding all 3 cards */}
      <SummaryContainer>
        <CardsContainer>
          <Card>
            <CardTitle>Available Positions</CardTitle>
            <CardNumber>30</CardNumber>
            <CardSubtitle>6 Urgent Needy</CardSubtitle>
          </Card>

          <Card>
            <CardTitle>Job Openings</CardTitle>
            <CardNumber>10</CardNumber>
            <CardSubtitle>4 Actively Hiring</CardSubtitle>
          </Card>

          <Card>
            <CardTitle>New Employees</CardTitle>
            <CardNumber>4</CardNumber>
            <CardSubtitle>4 Departments</CardSubtitle>
          </Card>
        </CardsContainer>

        {/* Recent Activity Section moved to the right side */}
        <RecentActivityWrapper>
          <RecentActivityContainer>
            <ActivityTitle>Recent Activity</ActivityTitle>
            <ActivityText style={{ color: '#adb5bd' }}>Your recent activity:</ActivityText>
            <ActivityText>{formattedDate}</ActivityText>
            <ActivityText>You posted a new job.</ActivityText>
            <ActivityText>Kindly check the terms and conditions and some other text.</ActivityText>
            <ActivityText>Today you made 19 activities.</ActivityText>
            <SeeActivityButton>See the Activity</SeeActivityButton>
          </RecentActivityContainer>
        </RecentActivityWrapper>
      </SummaryContainer>
    </div>
  );
};

export default DashboardSummary;
