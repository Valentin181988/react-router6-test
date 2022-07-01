import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  padding: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
    &.active {
        color: red;
    }
`