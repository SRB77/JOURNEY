/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import Createtrip from '@/create-trip/Createtrip';

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center mx-56 gap-9">
        <h1 className="font-extrabold text-[50px] text-center mt-16">
          <span className="text-[#f56551]">
            Discover Your Next Adventure with AI:
          </span>{" "}
          <br />
          Personalized Itineraries at Your Fingertips
        </h1>
        <p className="text-xl text-gray-500 text-center">
          Your personal trip planner and travel curator, creating custom
          itineraries tailored to your interests and budget.
        </p>
        <Link to="/create-trip">
          <Button>Get Started,it&apos;s free</Button>
        </Link>
      </div>
    </>
  );
}

export default Hero