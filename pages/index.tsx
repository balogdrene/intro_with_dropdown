import type { NextPage } from "next"
import Head from "next/head"

import { useState } from "react"

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  return (
    <div className="">
      <Head>
        <title>Intro section with dropdown menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-between p-5">
        <div className="lg:flex lg:items-start lg:justify-start">
          <img src="logo.svg" alt="" className="lg:mr-5" />
          <nav className={`navbar ${isMenuOpen ? "open" : ""} `}>
            <div>
              <button
                onClick={() => setIsFeaturesOpen((prevState) => !prevState)}
                className="flex items-center justify-start gap-2 text-sm place-items-center"
              >
                Features{" "}
                {!isFeaturesOpen ? (
                  <img src="icon-arrow-down.svg" alt="" />
                ) : (
                  <img src="icon-arrow-up.svg" alt="" />
                )}
              </button>
              <ul
                className={`mt-2 ml-3 ${
                  isFeaturesOpen ? "block" : "hidden"
                } lg:ml-0 lg:p-3 lg:shadow`}
              >
                <li className="flex items-center justify-start gap-2 mb-2 text-sm place-items-center">
                  <img src="icon-todo.svg" alt="" />
                  Todo List
                </li>
                <li className="flex items-center justify-start gap-2 mb-2 text-sm place-items-center">
                  <img src="icon-calendar.svg" alt="" />
                  Calendar
                </li>
                <li className="flex items-center justify-start gap-2 mb-2 text-sm place-items-center">
                  <img src="icon-reminders.svg" alt="" />
                  Reminder
                </li>
                <li className="flex items-center justify-start gap-2 mb-2 text-sm place-items-center">
                  <img src="icon-planning.svg" alt="" />
                  Planning
                </li>
              </ul>
            </div>
            <div>
              <button
                onClick={() => setIsCompanyOpen((prevState) => !prevState)}
                className="flex items-center justify-start gap-2 mb-2 text-sm place-items-center"
              >
                Company{" "}
                {!isCompanyOpen ? (
                  <img src="icon-arrow-down.svg" alt="" />
                ) : (
                  <img src="icon-arrow-up.svg" alt="" />
                )}
              </button>
              <ul
                className={`mt-2 ml-3 ${
                  isCompanyOpen ? "block" : "hidden"
                } lg:ml-0 lg:p-3 lg:shadow`}
              >
                <li className="flex items-center justify-start gap-2 mb-2 text-sm place-items-center">
                  History
                </li>
                <li className="flex items-center justify-start gap-2 mb-2 text-sm place-items-center">
                  Our Team
                </li>
                <li className="flex items-center justify-start gap-2 mb-2 text-sm place-items-center">
                  Blog
                </li>
              </ul>
            </div>
            <div className="mb-2 lg:mb-0">
              <button>Careers</button>
            </div>
            <div>
              <button>About</button>
            </div>
          </nav>
        </div>
        <div>
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
          >
            {!isMenuOpen ? (
              <img src="icon-menu.svg" alt="" />
            ) : (
              <img src="icon-close-menu.svg" alt="" />
            )}
          </button>
        </div>

        <div className="hidden lg:block">
          <button className="mr-10 opacity-75">Login</button>
          <button className="px-6 py-2 border-2 border-black opacity-75 rounded-2xl">
            Register
          </button>
        </div>
      </header>
      <section className="flex flex-col-reverse max-w-4xl py-20 md:gap-10 md:grid md:grid-cols-2 md:place-items-center lg:max-w-5xl md:mx-auto">
        <article className="px-5 mt-10 text-center md:text-left xl:px-0 md:mt-0">
          <h1 className="mb-5 text-4xl font-bold lg:text-6xl xl:text-7xl">
            Make remote work
          </h1>
          <p className="mb-5">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="px-6 py-2 font-bold text-white transition-all duration-150 bg-black rounded-lg shadow hover:opacity-75">
            Learn more
          </button>
          <ul className="flex items-center justify-center gap-5 mt-10 place-items-center md:place-items-start">
            <li>
              <img src="client-databiz.svg" alt="" className="w-16 md:w-24" />
            </li>
            <li>
              <img
                src="client-audiophile.svg"
                alt=""
                className="w-16 md:w-24"
              />
            </li>
            <li>
              <img src="client-meet.svg" alt="" className="w-16 md:w-24" />
            </li>
            <li>
              <img src="client-maker.svg" alt="" className="w-16 md:w-24" />
            </li>
          </ul>
        </article>
        <article>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="image-hero-desktop.png"
            />
            <img src="image-hero-mobile.png" alt="" className="w-full" />
          </picture>
        </article>
      </section>
    </div>
  )
}

export default Home
