"use client";

import { useChat } from "ai/react";
import Navbar from "@/components/Navbar";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <>
      <Navbar />
      <div className="bg-dark flex justify-center h-screen">
        <div className="flex flex-col w-full sm:max-w-xl px-5">
          {messages.length != 0 ? (
            <div className="text-light mt-10 h-2/3 overflow-y-auto">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`${
                    m.role === "user"
                      ? "text-2xl font-bold pb-5 mb-5 border-b-[3px] border-pink"
                      : "text-md font-normal pb-5"
                  }`}
                >
                  {m.role === "user" ? "User: " : "AI: "}
                  {m.content}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-5 bg-gradient-to-b from-pink to-darkpink  text-light mt-10 flex flex-col space-y-5 rounded-lg overflow-y-auto">
              <h3 className="text-2xl font-bold">MIRAYA AI</h3>
              <p className="text-md font-normal">
                Miraya is an advanced AI chatbot designed to provide intelligent
                and personalized assistance to users across various domains.
                With its cutting-edge natural language processing capabilities,
                Miraya offers a seamless and engaging conversational experience.
              </p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="">
            <input
              className={`bg-dark text-light text-md font-normal border-[3px] border-pink fixed bottom-0 p-5 mb-10 rounded-full shadow-xl focus:outline-none w-[350px] sm:w-[539px]`}
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>
    </>
  );
}
