import Image from "next/image"
import Link from "next/link"
import React from "react"
import { routes } from "./routes"

const HeaderInner = () => {
  return (
    <header className="top-0 p-y-5">
      <div className="container mx-auto">
        <nav className="navigation flex justify-between items-center">
          <Link href="/">
            <Image src="/img/logo.svg" alt="cloudresume logo" width={90} height={75} />
          </Link>

          <div className="space-x-5">
            {routes.map((route) => (
              <Link href={route.to} key={route.label}>
                <a className="  text-primary  hover:text-secondary transition duration-300 font-bold text-lg  ">
                  {route.label}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export const Header = HeaderInner
