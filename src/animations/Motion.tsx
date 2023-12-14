"use client";
import React from "react";
import { motion, useIsPresent } from "framer-motion";

export const Motion = () => {
  const isPresent = useIsPresent();

  return (
    <>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.3, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.3, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.6, ease: "circIn" } }}
        exit={{ scaleX: 1, transition: { duration: 0.6, ease: "circOut" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen2"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 1, ease: "circIn" },
        }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen3"
      />
    </>
  );
};
