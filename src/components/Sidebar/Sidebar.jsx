import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { newChat, onSent, previousPrompts, setRecentPrompt } =
    useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div>
      <div className="max-lg:hidden sidebar min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-6 px-3.5">
        <div className="top">
          <img
            onClick={() => setExtended((prev) => !prev)}
            className="menu w-5 block ml-2.5 cursor-pointer"
            src={assets.menu_icon}
            alt=""
          />
          <div
            onClick={() => newChat()}
            className="new-chat ml-1 mt-[50px] inline-flex items-center gap-2.5 py-2.5 px-3.5 bg-[#e6eaf1] rounded-[50px] text-sm text-gray-500 cursor-pointer"
          >
            <img className="w-5" src={assets.plus_icon} alt="" />
            {extended ? <p>New Chat</p> : null}
          </div>
          {extended ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="recent flex flex-col"
            >
              <p className="recent-title ml-2.5 mt-7 mb-5">Recent</p>
              {Array.isArray(previousPrompts) && previousPrompts.length > 0 ? (
                previousPrompts.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => loadPrompt(item)}
                      className="recent-entry flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-gray-800 cursor-pointer hover:bg-zinc-200"
                    >
                      <img className="w-5" src={assets.message_icon} alt="" />
                      <p>{item.slice(0, 18)} ...</p>
                    </div>
                  );
                })
              ) : (
                <p className="p-2.5 pr-10 text-gray-500">No recent chats</p>
              )}
            </motion.div>
          ) : null}
        </div>
        <div className="bottom flex flex-col">
          <div className="bottom-item recent-entry flex items-start gap-2.5 p-2.5  rounded-[50px] text-gray-800 cursor-pointer hover:bg-zinc-200">
            <img className="w-5" src={assets.question_icon} alt="" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item  recent-entry flex items-start gap-2.5 p-2.5 rounded-[50px] text-gray-800 cursor-pointer hover:bg-zinc-200">
            <img className="w-5" src={assets.history_icon} alt="" />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item  recent-entry flex items-start gap-2.5 p-2.5  rounded-[50px] text-gray-800 cursor-pointer hover:bg-zinc-200">
            <img className="w-5" src={assets.setting_icon} alt="" />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
