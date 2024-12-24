import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTachometerAlt, FaClipboardList, FaCalendarAlt, FaBuilding, FaCog, FaLifeRing } from 'react-icons/fa';

const CompanyName = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #ecf0f1;
`;

const MenuSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  margin: 10px 0;
  padding-left: 10px;
  text-transform: uppercase;
  color: #bdc3c7;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${(props) => (props.active ? '#34495e' : 'transparent')}; /* Active state color */
  
  &:hover {
    background-color: #34495e; /* Hover state color */
  }
`;

const Icon = styled.span`
  margin-right: 15px;
  font-size: 1.2rem;
`;

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    position: fixed;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &.active {
      transform: translateX(0);
    }
  }
`;

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null); // State to track the active item

  const handleItemClick = (item) => {
    setActiveItem(item); // Set the clicked item as active
  };

  return (
    <SidebarContainer>
      {/* Company Name */}
      <CompanyName>Vasitum</CompanyName>

      {/* Main Menu Section */}
      <MenuSection>
        <SectionTitle>Main Menu</SectionTitle>
        <MenuItem
          active={activeItem === 'dashboard'}
          onClick={() => handleItemClick('dashboard')}
        >
          <Icon>
            <FaTachometerAlt />
          </Icon>
          Dashboard
        </MenuItem>
        <MenuItem
          active={activeItem === 'requirement'}
          onClick={() => handleItemClick('requirement')}
        >
          <Icon>
            <FaClipboardList />
          </Icon>
          Requirement
        </MenuItem>
        <MenuItem
          active={activeItem === 'schedule'}
          onClick={() => handleItemClick('schedule')}
        >
          <Icon>
            <FaCalendarAlt />
          </Icon>
          Schedule
        </MenuItem>
        <MenuItem
          active={activeItem === 'department'}
          onClick={() => handleItemClick('department')}
        >
          <Icon>
            <FaBuilding />
          </Icon>
          Department
        </MenuItem>
      </MenuSection>

      {/* Other Section */}
      <MenuSection>
        <SectionTitle>Other</SectionTitle>
        <MenuItem
          active={activeItem === 'support'}
          onClick={() => handleItemClick('support')}
        >
          <Icon>
            <FaLifeRing />
          </Icon>
          Support
        </MenuItem>
        <MenuItem
          active={activeItem === 'setting'}
          onClick={() => handleItemClick('setting')}
        >
          <Icon>
            <FaCog />
          </Icon>
          Setting
        </MenuItem>
      </MenuSection>
    </SidebarContainer>
  );
};

export default Sidebar;
