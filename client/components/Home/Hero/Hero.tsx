import React from "react"
import Image from "next/image"
import styles from "./hero.module.css"
import { Button } from "@material-ui/core"
import Link from "next/link"

export const Hero = () => {
  return (
    <div className={`h-full ${styles.hero}`}>
      <div className={styles.bgWrap}>
        <Image alt="Cloud Background" src="/img/bg.svg" layout="fill" objectFit="cover" priority quality={100} />
      </div>

      <div className="flex h-full items-center justify-center z-2 relative container mx-auto">
        <div className="flex-1 items-center justify-center">
          <h1 className="uppercase">
            <span className="block">Vytvor si </span>
            <span className="block pl-10 text-secondary"> svoje online</span>
            <span className="block pl-22">resume</span>
          </h1>

          <div className="my-5">
            <Button color="primary" variant="contained">
              <Link href="/create-resume">
                <a>Vytvoriť</a>
              </Link>
            </Button>
          </div>
        </div>
        <div className=" transition-all flex flex-1 items-center justify-center">
          <Image
            className="object-center h-auto "
            src="/img/logo.svg"
            alt="cloudresume logo"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  )
}
