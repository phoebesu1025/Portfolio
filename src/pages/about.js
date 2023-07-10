import React, { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/me.png";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 }); //type of animation
  const isInView = useInView(ref, { once: true }); //when the element is inView

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Phoebe Su | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4
              md:order-2 md:col-span-8 "
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography - A former Chef turned Software Developer with a
                passion for problem-solving and createive mindset.
              </h2>

              <p className="font-medium">
                I'm always passionate about software development due to its
                limitless possibilities and the satisfaction of bringing ideas
                to life through applications and websites. The ever-changing
                nature of technology keeps me engaged, always seeking new
                challenges and opportunities for growth.
              </p>
              <p className="my-4 font-medium">
                I had finished an internship with Auckland Council, I
                collaborated with a team to develop a cross-platform mobile app.
                Within a stringent 10-week timeframe, I successfully implemented
                new features and refactor the UI style error. Furthermore, I'm
                currently a full-stack development assistant trainer at Mission
                Ready HQ, I have been actively involved in guiding our
                candidates in their learning journey. I have experience in
                preparing training materials, facilitating study groups, and
                providing support and mentoring to students. This role has
                allowed me to leverage my problem-solving skills, attention to
                detail, and passion for helping others. My Experience was mainly
                working on Front-end development with React and TypeScript.
                However, I have still acquired the backend skills and knowledge
                during my course work such as Restful API, Node.js and
                MySQL/MongoDB.
              </p>
              <p className="font-medium">
                As a career changer, my previous work experiences have been
                primarily in the culinary industry, but I have always approached
                my roles with discipline, attention to detail, and a strong need
                for teamwork. These transferable skills, combined with my
                ability to think creatively and deliver under pressure, have
                allowed me to succeed in challenging environments.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark  dark:bg-light" />
              <Image
                src={profilePic}
                alt=""
                className="w-full h-auto rounded-2xl "
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={100} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Passionate
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={100} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Team Player
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={100} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Problem Solving
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
