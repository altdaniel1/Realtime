import React from 'react';
import { Header, Nav, Buttons } from "../styles/styled-components";
import { Button, InputBase, IconButton, Divider } from '@material-ui/core';
import { Search, Home, Settings, PowerSettingsNew, Person, Security, Tune } from "@material-ui/icons";
import Logo from '../styles/symbol.svg';

function HeaderComponent({ setFilterDrawer }) {
  const styles = {
    basicWhiteButton: { height: '42px', marginRight: '8px', fill: 1, backgroundColor: "#FFFFFF" },
    userIncludeButton: { height: '48px', width: '176px', fill: 1, backgroundColor: "#D83367" },
    userGradientButton: { height: '42px', fill: 1, backgroundImage: 'linear-gradient(to right, #FF8700, #D83367)' },
    iconsNavGroup: { display: 'flex', justifyContent: 'space-between', margin: '0 40px 0 0' },
    genericIcon: { padding: 10, width: '20px', height: '20px' }
  }
  return (
      <Header data-testid="header">
        <Nav>
          <div style={{ display: 'flex' }}>
            <img src={Logo} alt="logo" />

            <Divider style={{ width: '2px', height: '24px', color: '#E9E9E9', margin: '12px 0 12px 0' }} orientation="vertical" />

            <Buttons>
              <Button style={styles.basicWhiteButton}><Security style={{ ...styles.genericIcon, color: "#666666" }} /></Button>
              <Button style={styles.userGradientButton}><Person style={{ ...styles.genericIcon, color: 'white' }} /></Button>
            </Buttons>

            <InputBase style={{ color: '#333333' }} placeholder="Pesquisar…" inputProps={{ 'aria-label': 'Pesquisar…' }}></InputBase>
            <IconButton type="submit" style={{ ...styles.genericIcon, width: 0, height: '40px' }} aria-label="search">
              <Search />
            </IconButton>
          </div>

          <div style={{ display: 'flex' }}>
            <Buttons style={{ marginRight: '24px' }}>
              <Button data-testid="filterButton" style={styles.basicWhiteButton} onClick={() => setFilterDrawer(true)}>
                <Tune style={{ ...styles.genericIcon, padding: 0, color: "#666666" }} />
              </Button>
              <Button style={styles.userIncludeButton}>
                <Person style={{ ...styles.genericIcon, padding: 0, color: '#FFFFFF', marginRight: '8px' }}/>
                <label style={{ fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap', color: '#FFFFFF' }}>INCLUIR USUÁRIO</label></Button>
            </Buttons>

            <Divider style={{ width: '2px', height: '24px', color: '#E9E9E9', margin: '12px 16px 12px 0' }} orientation="vertical" />

            <div style={styles.iconsNavGroup}>
              <IconButton type="submit"  aria-label="Home">
                <Home />
              </IconButton>

              <IconButton type="submit"  aria-label="Settings">
                <Settings />
              </IconButton>

              <IconButton type="submit" aria-label="Power">
                <PowerSettingsNew />
              </IconButton>
            </div>
          </div>
        </Nav>
      </Header>
  );
}

export default HeaderComponent;
