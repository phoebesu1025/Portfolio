import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/metro-property.png";
import project2 from "../../public/images/projects/level-up.png";
import project3 from "../../public/images/projects/turners-car.png";
import project4 from "../../public/images/projects/mptt.png";
import project5 from "../../public/images/projects/hangman.png";
import project6 from "../../public/images/projects/todo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  stack,
}) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl 
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light 
    lg:flex-col lg:p-8  xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102]% xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm ">
          {summary}
        </p>
        <p className="text-dark/75 dark:text-primaryDark">{stack}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
             dark:bg-light dark:text-dark
             sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github, stack }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-sold border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-56"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
          <p className="text-dark/75 dark:text-primaryDark">{stack}</p>
        </Link>
        <p></p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Phoebe Su | Project Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-0 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Metro Property Management Website"
                img={project1}
                summary="
                This project is part of the final mission in Mission Ready's Advanced Software Development course.

The aim for the project was to enhance the user experience on Metro Property Management website. (https://metronz.co.nz/). Collaborated with 2 UX designers and another developer, we applied Agile methodology with daily stand-up meetings.

Base on the Figma prototype redesigned by my designer partner, we completed most of the frontend feature for the website, and I completed the search filter function with frontend and backend in Property Manager search page, and my project partner Karan Singh had completed the mapping function and search filter function in Property Listing Page
                "
                stack="✨React  ✨Tailwind  ✨Node.js  ✨MongoDB"
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="MPTT Project"
                img={project4}
                summary="
                Collaborated with two other interns, a developer and a UX designer, to develop a cross-platform mobile app aimed at closing the employment gap for Māori and Pacifika students in Auckland.
                "
                link="/"
                github="/"
                type="Featured Project"
                stack="✨React ✨TypeScript ✨Ionic "
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Level Up Education"
                img={project2}
                summary="
                Collaborated with two other interns, a developer and a UX designer, to develop a cross-platform mobile app aimed at closing the employment gap for Māori and Pacifika students in Auckland.
                "
                link="/"
                github="/"
                type="Featured Project"
                stack="✨React ✨Node.js ✨MySQL "
              />
            </div>

            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Hangman"
                img={project5}
                link="/"
                github="/"
                type="Project"
                stack="✨React, ✨TypeScript"
              />
            </div>

            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Todo App"
                img={project6}
                link="/"
                github="/"
                type="Project"
                stack="✨React, ✨TypeScript"
              />
            </div>

            <div className="col-span-4 sm:col-span-12">
              <Project
                title="Turners Car Chatbot"
                img={project3}
                link="/"
                github="/"
                type="Project"
                stack="✨React  ✨GoogleDialogFlow"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
