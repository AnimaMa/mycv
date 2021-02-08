import Container from "@material-ui/core/Container"
import Link from "next/link"
import React from "react"

export interface HeaderProps {
  className?: string
}

const HeaderInner = (props: HeaderProps) => {
  return (
    <header className={props.className}>
      <Container className="custom-container">
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
  )
}

export const Header = HeaderInner

/* height: 80px;

  .custom-container {
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
` */
