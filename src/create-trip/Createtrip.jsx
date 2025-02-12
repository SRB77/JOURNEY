/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelsList,
} from "@/constants/Option";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import { chatSession } from "@/service/AImodal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";

const Createtrip = () => {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [openDialouge, setOpenDialouge] = useState(false);
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const Login = useGoogleLogin({
    onSuccess: (codeResp) => console.log(codeResp),
    onError: (error) => console.log(error),
  });
  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialouge(true);
      return;
    }

    if (formData?.noOfDays > 5) {
      toast.error("Maximum allowed trip duration is 5 days! 🗓️", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    } else if (
      !formData?.budget ||
      !formData?.location ||
      !formData?.traveler
    ) {
      toast.error("Please fill all details", {
        position: "bottom-right",
        autoClose: 1000,
      });
      return;
    }
    // Add your trip generation logic here
    toast.success("Generating your perfect trip! 🌍✈️");
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location.label
    )
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);
    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response?.text());
  };
  return (
    <>
      <ToastContainer />
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
          <h2 className="text-xl mt-16 font-medium "> What is Your Budget? </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg hover:shadow-lg      ${
                  formData?.budget == item.title && "shadow-lg border-black"
                }`}
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
                className={`p-4 border rounded-lg hover:shadow-lg      ${
                  formData?.traveler == item.people && "shadow-lg border-black"
                }`}
                onClick={() => handleInputChange("traveler", item.people)}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <h2 className="text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="my-20 flex justify-end">
          <Button onClick={OnGenerateTrip}> Generate Trip </Button>
        </div>
        <Dialog open={openDialouge}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                <img src="/logosum.svg" alt="logo" />
                <h2 className="font-bold text-lg text-black mt-7 ">
                  Sign In With Google
                </h2>
                <p>Sign In to the App with Google Authentication securely </p>
                <Button
                  className="w-full mt-5 flex gap-4 items-center"
                  onClick={Login}
                >
                  <FcGoogle className="h-7 w-7" />
                  Sign In With Google{" "}
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
export default Createtrip;
