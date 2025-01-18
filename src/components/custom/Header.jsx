/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <>
      <div className="p-3 shadow-sm flex justify-between items-center px-5">
        <img src="/logosum.svg" alt="logo" />
        <div >
           <Button>SIGNIN</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
