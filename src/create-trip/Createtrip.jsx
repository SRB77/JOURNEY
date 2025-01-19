/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "@/components/ui/input";

const Createtrip = () => {
  const [place, setPlace] = useState();
  return (
    <>
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
        <h2 className="font-bold text-3xl">
          Tell us your travel preferences 🏕️🌴
        </h2>
        <p className="mt-3 text-gray-500 text-xl">
          Just provide some basic information about your travel preferences, and
          we&apos;ll create a personalized itinerary for you.
        </p>
        <div className="mt-20 flex flex-col gap-10">
          <div className="">
            <h2 className="text-xl mt-3 font-medium">
              What is destination of choice?
            </h2>
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                value: place,
                onChange: (v) => {
                  setPlace(v);
                  console.log(v);
                },
              }}
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl mt-16 font-medium ">
            How many days are you planning your trip?
          </h2>
          <Input placeholder={"Ex.3"} type="number" />
        </div>
        <div>
          <h2 className="text-xl mt-16 font-medium ">What is Your Budget?</h2>
        </div>
      </div>
    </>
  );
};

export default Createtrip;
