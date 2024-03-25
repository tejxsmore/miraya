"use client";
import { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = { email, pass };

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Failed to submit Form");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  };

  return (
    <div className="bg-dark text-light p-5 flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-b from-pink to-darkpink w-full sm:max-w-sm flex flex-col p-5 rounded-2xl"
      >
        <a href="/" className="text-2xl font-bold">
          Miraya
        </a>
        <p className="pb-2.5">
          {`Don't have an account?`}{" "}
          <span className="font-semibold ml-1">
            <a href="/auth/signup">Signup</a>
          </span>
        </p>
        <div className="flex flex-col py-2.5">
          <label htmlFor="email" className="pb-2.5">
            Email
          </label>
          <input
            required
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-2.5 rounded-lg focus:outline-none bg-pink border border-light text-light font-medium"
          />
        </div>
        <div className="flex flex-col py-2.5 pb-5">
          <label htmlFor="pass" className="pb-2.5">
            Password
          </label>
          <input
            required
            id="pass"
            type="pass"
            minLength={8}
            onChange={(e) => setPass(e.target.value)}
            className="p-2.5 rounded-lg focus:outline-none bg-pink border border-light text-light font-medium"
          />
        </div>
        <button
          type="submit"
          className="bg-dark p-2.5 rounded-lg border border-dark"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
