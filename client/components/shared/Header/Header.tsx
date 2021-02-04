import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Container from "@material-ui/core/Container";

export interface HeaderProps {
  className?: string;
}

const HeaderInner = (props: HeaderProps) => {
  return (
    <header className={props.className}>
      <Container className="container">
        <nav className="navigation">
          <p>logo</p>
          <div>
            <Link href="/">
              <a>Back to home</a>
            </Link>

            <Link href="/resume">
              <a>Resume</a>
            </Link>

            <Link href="/dog/1">
              <a>dog1?</a>
            </Link>

            <Link href="/create-cv">
              <a>Form</a>
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export const Header = styled(HeaderInner)`
  height: 80px;

  .container {
    height: 100%;
  }
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    a {
      margin: 0 8px;
    }
  }
`;
