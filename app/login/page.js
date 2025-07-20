export default function Login() {
  return (
    <main id="form" className="min-h-screen bg-white flex justify-center">
      <div id="login-form" className = "flex items-center">
        <section className= "p-8 bg-white max-w-md text-left">
        
        <h1 className="text-4xl font-bold text-indigo-500 mb-1">Welcome!</h1>
        
        <p className="text-gray-400 leading-relaxed mb-12">
          Enter your credentials to sign in, or <span className="text-indigo-500 underline hover:cursor-pointer ">sign up</span> to get started.
        </p>
          
          <label htmlFor="username">
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-2 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-indigo-400 mb-4"
              placeholder="Enter your username"/>
          </label>
          
          <label htmlFor="password">
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-2 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-indigo-400 mb-4"
              placeholder="Enter your username"/>
          </label>

          <div className="grid grid-cols-2 gap-x-4">
            <label htmlFor="remember" className="text-gray-500 text-left">Remember Me<input type="checkbox" className="m-2"></input></label>
            <label htmlFor="forgot" className="text-indigo-500 text-right underline hover:cursor-pointer">Forgot password</label>
          </div>

          <button type="submit" className="w-full mt-12 bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded">
            Submit
          </button>
        </section>
      </div>
    </main>
  );
}
