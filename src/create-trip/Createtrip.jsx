/* eslint-disable no-unused-vars */
import { Import } from "lucide-react";
import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Createtrip = () => {
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
        <div className="mt-20">
          <div className="">
            <h2 className="text-xl my-3 font-medium">
              What is destination of choice?
            </h2>
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Createtrip;
