import React from "react";
import { Link } from "react-router-dom";
import Svg from "../SVG/Svg";
import Tmdb from "../SVG/Tmdb";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg>
          <Svg />
        </LogoImg>
      </Link>
      <Tmdb />
    </Content>
  </Wrapper>
);

export default Header;
