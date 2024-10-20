import React, { useContext, useEffect, useRef } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Playground = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const imgRef = useRef(null); // Reference to the image element
  const inputRef = useRef(null); // Reference to the input element

  useEffect(() => {
    // Focus the input when it changes
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [input]); // Focus when input changes

  const handleKeyDown = (event) => {
    // Check if the Enter key is pressed
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior (like form submission)
      onSent();
    }
  };

  return (
    <div className="main flex-1 min-h-screen pb-2.5 relative">
      <div className=" nav flex items-start justify-between text-2xl p-5 text-zinc-700">
        <p>Gemini</p>
        <img className="w-9 rounded-[50%]" src={assets.user_icon} alt="" />
      </div>
      <div className="main-container max-w-4xl m-auto max-md:max-h-[66vh]  overflow-y-scroll no-scrollbar  ">
        {!showResult ? (
          <div className="flex items-center justify-center h-custom-h w-full">
            <div className="greet my-[50px] mx-0 text-[32px] text-zinc-300 font-medium p-5">
              <p>
                <span className="bg-gemini-gradient bg-clip-text text-transparent bg-[length:400%_100%]">
                  Hello, Syed Muneeb
                </span>
              </p>
              {/* <p>How can I help you today?</p> */}
            </div>
            {/* <div className="cards grid grid-cols-auto-fill gap-4 p-5">
              <div className="card h-52 p-4 bg-zinc-50 rounded-xl relative cursor-pointer hover:bg-zinc-200">
                <p className="text-zinc-700 text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus, eum!
                </p>
                <img
                  className="w-9 p-1 absolute rounded-3xl bg-white bottom-3 right-3"
                  src={assets.compass_icon}
                  alt=""
                />
              </div>
              <div className="card h-52 p-4 bg-zinc-50 rounded-xl relative cursor-pointer hover:bg-zinc-200">
                <p className="text-zinc-700 text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus, eum!
                </p>
                <img
                  className="w-9 p-1 absolute rounded-3xl bg-white bottom-3 right-3"
                  src={assets.compass_icon}
                  alt=""
                />
              </div>
              <div className="card h-52 p-4 bg-zinc-50 rounded-xl relative cursor-pointer hover:bg-zinc-200">
                <p className="text-zinc-700 text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus, eum!
                </p>
                <img
                  className="w-9 p-1 absolute rounded-3xl bg-white bottom-3 right-3"
                  src={assets.compass_icon}
                  alt=""
                />
              </div>
              <div className="card h-52 p-4 bg-zinc-50 rounded-xl relative cursor-pointer hover:bg-zinc-200">
                <p className="text-zinc-700 text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus, eum!
                </p>
                <img
                  className="w-9 p-1 absolute rounded-3xl bg-white bottom-3 right-3"
                  src={assets.compass_icon}
                  alt=""
                />
              </div>
            </div> */}
          </div>
        ) : (
          <div className="result py-0 px-[5%]  overflow-y-scroll no-scrollbar">
            <div className="result-title my-10 mx-0 flex items-center gap-5">
              <img
                className="w-10 mr-6 rounded-[50%]"
                src={assets.user_icon}
                alt=""
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-5">
              <img className="w-16" src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="animate-pulse loader w-[100%] flex flex-col gap-3">
                  <hr className="rounded-md border-none bg-[length:800px_50px] h-5 bg-blue-100" />
                  <hr className="rounded-md border-none bg-[length:800px_50px] h-5 bg-blue-100" />
                  <hr className="rounded-md border-none bg-[length:800px_50px] h-5 bg-blue-100" />
                </div>
              ) : (
                <p
                  className="text-lg font-light leading-7"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}
        <div className=" main-bottom absolute bottom-0 w-[100%] max-w-[900px] py-0 px-5 m-auto">
          <div className="max-md:py-2 max-md:px-3 search-box flex items-center justify-between gap-5 bg-[#F0F4F9] py-3 px-5 rounded-[50px]">
            <input
              ref={inputRef} // Attach the ref to the input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="max-md:flex-none max-md:max-w-[190px]  flex-1 bg-transparent border-none outline-none p-2 text-base placeholder:text-zinc-700 placeholder:font-normal "
              type="text"
              placeholder="Ask Gemini"
              onKeyDown={handleKeyDown} // Handle Enter key press
            />
            <div className="max-md:gap-1 flex items-center gap-4">
              <img
                className="max-md:w-5 w-6 cursor-pointer"
                src={assets.gallery_icon}
                alt=""
              />
              <img
                className="max-md:w-5 w-6 cursor-pointer"
                src={assets.mic_icon}
                alt=""
              />
              {input ? (
                <img
                  ref={imgRef} // Attach the ref to the img
                  onClick={() => {
                    onSent(input); // Send input value on click
                    setInput(""); // Clear the input after sending
                  }}
                  className="max-md:w-5 w-6 cursor-pointer"
                  src={assets.send_icon}
                  alt="Send"
                  tabIndex="0" // Make the image focusable
                  role="button" // Optional: for accessibility
                />
              ) : null}
            </div>
          </div>
          <p className="botton-info text-xs my-4 mx-auto text-center font-light ">
            Gemini can make mistakes, so double-check it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Playground;
