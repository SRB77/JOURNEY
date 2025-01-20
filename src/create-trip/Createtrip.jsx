/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelsList } from "@/constants/Option";
import { Button } from "@/components/ui/button";

const Createtrip = () => {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
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
                  handleInputChange("location", v);
                },
              }}
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl mt-16 font-medium ">
            How many days are you planning your trip?
          </h2>
          <Input
            placeholder={"Ex.3"}
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
        <div>
          <h2 className="text-xl mt-16 font-medium ">What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:shadow-lg"
                onClick={() => handleInputChange("budget", item.title)}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <h2 className="text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl mt-16 font-medium ">
            Who do you plan on traveling with on your next adventure?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelsList.map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:shadow-lg"
                onClick={() => handleInputChange("people", item.people)}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <h2 className="text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="my-20 flex justify-end">
          <Button> Generate Trip </Button>
        </div>
      </div>
    </>
  );
};

export default Createtrip;
