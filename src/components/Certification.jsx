import React from "react";
import { motion } from "framer-motion";

const Certification = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duartion: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Certifications
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center">
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=34BBE9452E9B802F73845ECA308E6F1D870551FC9323BF6DA20CC1C541D45E3D"
          target="_blank"
          rel="noopener"
          className="border-b"
        >
          Oracle Certified Associate, Java SE 8 Programmer
        </motion.a>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-4">
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          href="https://www.credly.com/badges/785e57ae-fee0-4056-83d3-61f2680db556/public_url"
          target="_blank"
          rel="noopener"
          className="border-b"
        >
          AWS Certified Cloud Practitioner
        </motion.a>
      </div>
    </div>
  );
};

export default Certification;
