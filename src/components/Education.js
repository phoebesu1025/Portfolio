import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, location, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col  justify-between md:w-[80%] items-start"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <h5 className="capitalize font-bold text-2l text-dark/75 dark:text-primaryDark">
          {place}
        </h5>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {location}
        </span>
        <p
          className="font-medium w-full md:text-sm"
          dangerouslySetInnerHTML={{ __html: info.replace(/\n/g, "<br>") }}
        ></p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Software Development Accelerator"
            time="Aug 2022 - April 2023"
            place="Mission Ready HQ"
            location="Auckland, NZ"
            info={`<b>NZQA Level 6 Applied Technology Product Solutions (Software)</b>
            A practical, mentored, real-world work experience.\nInterned with Auckland Council - see above for details.\n
            <b>NZQA Level 5 Cloud and DevOps Developer Accelerator</b>\nIntensive course in solving complex enterprise-level problems using Cloud, Artificial Intelligence, and DevOps practices.\nCloud service (Azure, Bing Search, azure deploy), AI (Chat-bot with google dialog flow), DevOps and automated deployment (CI/CD), No-SQL database (MongoDB), Restful API, Unit testing.\n
            <b>NZQA Level 4 Full Stack Developer Accelerator</b>\nDeveloped foundational skills in coding, including building responsive full stack web apps, using HTML, CSS, JavaScript, React.js, Node.js, and MySQL.`}
          />
          <Details
            type="Bachelor of Culinary Arts and Business"
            time="Feb 2017 - Dec 2019"
            place="Le Cordon Bleu NZ"
            location="Wellington, NZ"
            info="Conjoint degree for Culinary Art and Business (Hospitality Management)"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
