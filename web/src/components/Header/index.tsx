import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import logo from '../../assets/logo.png';

import { Container } from './styles';

interface Props {
  toggletheme(): void;
}

const Header: React.FC<Props> = ({ toggletheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <header>
        <img src={logo} alt="GoRepositories" />
        <h1>GoRepositories</h1>
      </header>

      <Switch
        onChange={toggletheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.primary}
      />
    </Container>
  );
};

export default Header;
