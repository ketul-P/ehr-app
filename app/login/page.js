"use client";

import { useState } from "react"
  import { InputBasicRequired } from "app/components/InputFields";
import { InputBasic } from "app/components/InputFields";
import { PrimaryButton } from "app/components/CustomButtons";

export default function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
      e.preventDefault(); // prevent page reload

      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }), 
      });

      const data = await res.json();
      console.log("API response:", data);
    }

    return (
      <main id="form" className="min-h-screen bg-white flex justify-center font-mono">
        <div id="login-form" className = "flex items-center">
          <section className= "p-10 grid grid-rows-[auto_auto_auto_auto_auto] gap-2 bg-emerald-50 max-w-md text-left rounded-2xl border border-emerald-100 shadow-xl">
          
            <div>
              {/* Title */}
              <h1 className="text-4xl text-emerald-500 mb-1">Welcome!</h1>
              {/* Disclaimer */}
              <p className="text-gray-400 leading-relaxed text-xs mb-12">
                Enter your credentials to sign in, or <span className="text-emerald-700 underline hover:cursor-pointer ">sign up</span> to get started.
              </p>
            </div>
            
            <div className="w-full border">
                <InputBasicRequired
                  name="username"
                  type="text"
                  placeHolder="Username"
                  focusOutline="emerald-400"
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                />
            </div>

            <div>
                <InputBasicRequired
                  name="password"
                  type="text"
                  placeHolder="Password"
                  focusOutline="emerald-400"
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                />
            </div>
            
            <div className="grid grid-cols-2 text-0.5rem gap-x-4 mt-2">
              <label htmlFor="remember" className="text-gray-500 text-left pr-4">
                Remember Me

                <InputBasic
                  name="rememberUser"
                  type="checkbox"
                  placeHolder=""
                  focusOutline="emerald-400"

                />
              </label>                
              
              <label htmlFor="forgot" className="text-indigo-500 text-right underline hover:cursor-pointer">Forgot password</label>
            </div>

            <div className="mt-4">
              <PrimaryButton
                value="Submit"
              />
            </div>

  
          </section>
        </div>
      </main>
    );
}
