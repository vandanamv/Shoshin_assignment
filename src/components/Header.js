import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaBell, FaEnvelope, FaCaretDown } from 'react-icons/fa';

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;



const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f3f5;
  border-radius: 8px;
  padding: 5px 10px;
  width: 300px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  flex: 1;
  padding: 5px;
  font-size: 0.9rem;
`;

const SearchIcon = styled.div`
  font-size: 1rem;
  color: #adb5bd;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled.div`
  font-size: 1.2rem;
  color: #495057;
  margin: 0 15px;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #004aad;
  }
`;

const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: #495057;
  cursor: pointer;
`;

const DownIcon = styled.div`
  font-size: 0.8rem;
  margin-left: 5px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      {/* Left Section */}
      <LeftSection>
        
        <SearchBarContainer>
          <SearchInput placeholder="Search..." />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </SearchBarContainer>
      </LeftSection>

      {/* Right Section */}
      <RightSection>
        <IconButton>
          <FaBell />
        </IconButton>
        <IconButton>
          <FaEnvelope />
        </IconButton>
        <ProfileImage src="https://via.placeholder.com/40" alt="User" />
        <UserInfo>
          Vandana
          <DownIcon>
            <FaCaretDown />
          </DownIcon>
        </UserInfo>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
