import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { Wrapper, Nav, Link } from "./Layout.styled";

export const Layout = () => {
   return(
    <Wrapper>
      <Nav>
        <Link to="/preview">Preview</Link>
        <Link to="/create">Create</Link>
        <Link to="/list">List</Link>
        <Link to="/page-a">PageA</Link>
        <Link to="/page-b">PageB</Link>
      </Nav>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
      <Toaster />
    </Wrapper>
   )
};