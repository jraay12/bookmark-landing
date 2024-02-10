import Button from "../Components/Button";
import Logo from "../image/logo-bookmark.svg";
import Hero from "../image/illustration-hero.svg";
import first from "../image/illustration-features-tab-1.svg";
import second from "../image/illustration-features-tab-2.svg";
import third from "../image/illustration-features-tab-3.svg";
import chrome from "../image/logo-chrome.svg";
import firefox from "../image/logo-firefox.svg";
import opera from "../image/logo-opera.svg";
import doted from "../image/bg-dots.svg";
import arrow from "../image/icon-arrow.svg";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
  const [openStates, setOpenStates] = useState(Array(4).fill(false)); // Initialize open states for 4 FAQ items

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleOpen = (index) => {
    const newOpenStates = [...openStates]; // Create a copy of the open states array
    newOpenStates[index] = !newOpenStates[index]; // Toggle the state of the clicked FAQ item
    setOpenStates(newOpenStates); // Update the open states array
    console.log(newOpenStates); // Log the updated open states array
  };
  const data = [
    {
      image: first,
      text: "Simple Bookmarking",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      image: second,
      text: "Intelligent search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks",
    },
    {
      image: third,
      text: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];
  let currentIndex = 0;

  const changeImage = () => {
    const value = data[currentIndex];
    document.getElementById("picture").src = value.image;
    document.getElementById("head").textContent = value.text;
    document.getElementById("description").textContent = value.description;
  };

  const speadyReady = () => {
    currentIndex = 1;
    changeImage();
  };

  const bookmarking = () => {
    currentIndex = 0;
    changeImage();
  };

  const sharing = () => {
    currentIndex = 2;
    changeImage();
  };
  return (
    <main className="container min-h-screen mx-auto relative select-none overflow-x-hidden ">
      <header className="flex items-center justify-between  px-10 py-5">
        <img src={Logo} />
        <ul className="hidden sm:flex space-x-10 text-black font-medium text-[15px]">
          <li className="inline-block hover:text-SoftRed hover:cursor-pointer">
            FEATURES
          </li>
          <li className="inline-block hover:text-SoftRed hover:cursor-pointer">
            PRICING
          </li>
          <li className="inline-block hover:text-SoftRed hover:cursor-pointer">
            CONTACT
          </li>
          <button className="bg-SoftRed px-5 py-1 rounded-md text-white hover:bg-white hover:text-SoftRed hover:border-SoftRed border duration-300 ease-in">
            Login
          </button>
        </ul>
      </header>
      <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
        <div className="flex flex-col max-w-lg  mt-10 sm:p-16 gap-10">
          <h1 className=" text-3xl text-center sm:text-start sm:text-4xl font-bold ">
            A Simple Bookmark <br></br> Manager
          </h1>
          <p className="text-[18px] text-GrayishBlue sm:text-start text-center px-8 sm:px-0">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex gap-4 justify-center sm:justify-start">
            <button className="bg-SoftBlue font-semibold text-white px-4 py-2 rounded-lg hover:bg-white hover:text-SoftBlue hover:border-SoftBlue border duration-300 ease-linear">
              Get it on Chrome
            </button>
            <button className="text-black font-semibold px-4 py-2  shadow-lg rounded-lg hover:border-black border ">
              Get it on Firefox
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center  ">
          <img src={Hero} className="max-w-4/5" />
        </div>
      </div>
      <section
        className="flex flex-col justify-center items-center text-center mt-40 sm:mt-10 w-full "
        data-aos="fade-right"
      >
        <div className="max-w-lg">
          <h1 className="text-2xl font-bold" id="title">
            Features
          </h1>
          <p className="text-[18px] text-GrayishBlue mt-10 px-10">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>
      <section
        className="flex justify-center items-center mt-20  "
        data-aos="fade-left"
      >
        <div className="flex flex-col justify-center sm:flex-row sm:gap-20 mb-20 leading-10 w-full px-20 ">
          <button
            className="border-b-2 p-2 focus:border-SoftRed active:border-SoftRed font-medium hover:text-SoftRed"
            onClick={bookmarking}
          >
            Simple Bookmarking
          </button>
          <button
            className="border-b-2 p-2 focus:border-SoftRed font-medium hover:text-SoftRed"
            onClick={speadyReady}
          >
            Speady Searching
          </button>
          <button
            className="border-b-2 p-2 focus:border-SoftRed font-medium hover:text-SoftRed"
            onClick={sharing}
          >
            Easy Sharing
          </button>
        </div>
      </section>
      <section
        className="flex flex-col sm:flex-row mx-16 h-max sm:h-96 items-start sm:justify-center gap-20 "
        data-aos="zoom-in"
      >
        <div className="sm:w-2/6">
          <img src={first} className="w-full" id="picture" />
        </div>
        <div className="text-[18px] text-GrayishBlue max-w-md space-y-10">
          <h1
            className="text-2xl text-black font-medium text-center sm:text-start"
            id="head"
          >
            Bookmark in one click
          </h1>
          <p id="description" className="text-center sm:text-start">
            {" "}
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.,
          </p>
        </div>
      </section>
      <section
        className="flex flex-col w-2/3  mx-auto mt-10 space-y-5 mb-40"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1 className="text-center text-2xl font-semibold">
          Download the extension
        </h1>
        <p className="text-GrayishBlue text-[18px] text-center">
          We’ve got more browsers in the pipeline. Please do let us know if
          <br></br>
          you’ve got a favourite you’d like us to prioritize.
        </p>
        <section className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col  gap-9 justify-center items-center sm:w-1/2 h-80  drop-shadow-xl shadow-2xl rounded-xl hover:scale-110 duration-200 ease-linear transition-all">
            <img src={chrome} className="w-1/4" />
            <div>
              <h1 className="text-2xl font-bold">Add to chrome</h1>
              <p className="text-[18px] text-GrayishBlue">Minimum verison 62</p>
            </div>
            <img src={doted} />
            <button className="text-white bg-SoftBlue rounded-md px-6 py-2 hover:bg-white hover:text-SoftBlue hover:border-SoftBlue border duration-300 ease-in">
              Add & Install Extension
            </button>
          </div>
          <div className="flex flex-col  gap-9 justify-center items-center sm:w-1/2 h-80 drop-shadow-xl shadow-2xl rounded-xl translate-y-10 hover:scale-110 duration-200 ease-linear transition-all">
            <img src={firefox} className="w-1/4" />
            <div>
              <h1 className="text-2xl font-bold">Add to Firefox</h1>
              <p className="text-[18px] text-GrayishBlue">Minimum verison 55</p>
            </div>
            <img src={doted} />
            <button className="text-white bg-SoftBlue rounded-md px-6 py-2 hover:bg-white hover:text-SoftBlue hover:border-SoftBlue border duration-300 ease-in">
              Add & Install Extension
            </button>
          </div>
          <div className="flex flex-col  gap-9 justify-center items-center sm:w-1/2 h-80 drop-shadow-xl shadow-2xl rounded-xl translate-y-20 hover:scale-110 duration-200 ease-linear transition-all">
            <img src={opera} className="w-1/4" />
            <div>
              <h1 className="text-2xl font-bold">Add to Opera</h1>
              <p className="text-[18px] text-GrayishBlue">Minimum verison 46</p>
            </div>
            <img src={doted} />
            <button className="text-white bg-SoftBlue rounded-md px-6 py-2 hover:bg-white hover:text-SoftBlue hover:border-SoftBlue border duration-300 ease-in">
              Add & Install Extension
            </button>
          </div>
        </section>
      </section>
      <section
        className="sm:w-[35rem] mx-auto space-y-5 mb-20 p-5"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h1 className="text-2xl font-bold text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-[18px] text-GrayishBlue text-center">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
        <div className="w-full ">
          <div className="relative">
            <button
              className="flex justify-between items-center hover:text-SoftRed  text-[18px] text-start font-medium py-2 border-y-2 w-full"
              onClick={() => handleOpen(0)}
            >
              What is Bookmark?
              <span>
                <img
                  src={arrow}
                  className={`inline-block ${!openStates[0] && "rotate-180"}`}
                />
              </span>
            </button>

            <div
              className={`${
                openStates[0]
                  ? "max-h-[1000px] duration-1000 ease-in overflow-hidden"
                  : "max-h-0 duration-300 ease-out overflow-hidden"
              } text-[18px] font-normal`}
            >
              <p className="text-[18px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis.{" "}
              </p>
            </div>
          </div>
          <div>
            <button
              className="flex justify-between items-center hover:text-SoftRed  text-[18px] text-start py-2 border-b-2 w-full font-medium"
              onClick={() => handleOpen(1)}
            >
              How can I request a new browser?
              <span>
                <img
                  src={arrow}
                  className={`inline-block ${!openStates[1] && "rotate-180"}`}
                />
              </span>
            </button>
            <div
              className={`${
                openStates[1]
                  ? "max-h-[1000px] duration-1000 ease-in overflow-hidden"
                  : "max-h-0 duration-300 ease-out  overflow-hidden"
              } text-[18px] font-normal`}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis.
              </p>
            </div>
          </div>
          <div>
            <button
              className="flex justify-between hover:text-SoftRed  items-center text-[18px] text-start py-2 border-b-2 w-full font-medium "
              onClick={() => handleOpen(2)}
            >
              is there a mobile app?{" "}
              <span>
                <img
                  src={arrow}
                  className={`inline-block ${!openStates[2] && "rotate-180"}`}
                />
              </span>
            </button>

            <div
              className={`${
                openStates[2]
                  ? "max-h-[1000px] duration-1000 ease-in overflow-hidden"
                  : "max-h-0 duration-300 ease-out  overflow-hidden"
              } text-[18px] font-normal`}
            >
              <p className="text-[18px] font-normal">
                Sed consectetur quam id neque fermentum accumsan. Praesent
                luctus vestibulum dolor, ut condimentum urna vulputate eget.
                Cras in ligula quis est pharetra mattis sit amet pharetra purus.
                Sed sollicitudin ex et ultricies bibendum.{" "}
              </p>
            </div>
          </div>
          <div>
            <button
              className="flex justify-between items-center hover:text-SoftRed text-[18px] text-start py-2 border-b-2 w-full font-medium"
              onClick={() => handleOpen(3)}
            >
              what about other Chromium browsers?
              <span>
                <img
                  src={arrow}
                  className={`inline-block ${!openStates[3] && "rotate-180"}`}
                />
              </span>
            </button>

            <div
              className={`${
                openStates[3]
                  ? "max-h-[1000px] duration-1000 ease-in overflow-hidden"
                  : "max-h-0 duration-300 ease-linear overflow-hidden"
              } text-[18px] font-normal`}
            >
              <p className="text-[18px] font-normal">
                Integer condimentum ipsum id imperdiet finibus. Vivamus in
                placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                gravida pellentesque non ut velit.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center  w-full">
          <button className="bg-SoftBlue text-white px-5 py-2 rounded-lg ">
            More info
          </button>
        </div>
      </section>
      <footer className="flex flex-col justify-center items-center w-full h-60 bg-SoftBlue gap-4">
        <p className="text-[14px] text-white ">35,000+ ALREADY JOINED</p>
        <h1 className="text-xl text-white font-medium text-center">
          Stay up-to-date with what <br></br>we’re doing
        </h1>
        <div className="space-x-4">
          <input
            placeholder="Enter your email address"
            type="email"
            className=" outline-none px-2 h-10 inline-block rounded-md placeholder:text-[.7rem] invalid:border-SoftRed border"
          />
          <button className="text-white bg-SoftRed px-5  rounded-md py-2 inline-block">
            Contact Us
          </button>
        </div>
      </footer>
    </main>
  );
}
