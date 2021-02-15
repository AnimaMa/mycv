import React from "react"
import Image from "next/image"
import styles from "./hero.module.css"
import { Button } from "@material-ui/core"
import Link from "next/link"

export const Hero = () => {
  return (
    <div className={`h-screen ${styles.hero} -mt-32`}>
      <div className={styles.bgWrap}>
        <Image alt="Cloud Background" src="/img/bg.svg" layout="fill" objectFit="cover" priority quality={100} />
      </div>

      <div className="flex h-full md:flex-row flex-col items-center justify-center z-2 relative container mx-auto px-4 pt-12">
        <div className="md:flex-1 items-center justify-center">
          <h1
            className={`${styles.heading} uppercase md:text-7xl text-4xl md:text-left text-center font-black leading-10 space-y-4`}
          >
            <span className="block">Vytvor si </span>
            <span className="block md:pl-10 text-secondary"> svoje online</span>
            <span className="block md:pl-22">resume</span>
          </h1>

          <div className="my-5 flex justify-center md:justify-start md:mt-16">
            <div
              color="primary"
              className="rounded-md shadow-lg bg-secondary text-white py-3 px-8 cursor-pointer hover:shadow-xl hover:bg-primary duration-300"
            >
              <Link href="/create-resume">
                <a className="text-xl tracking-wide font-bold">Vytvoriť</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="transition-all flex md:flex-1 items-center justify-center w-2/3">
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
