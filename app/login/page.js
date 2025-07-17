export default function Login() {
  return (
    <main id="form" className="min-h-screen bg-white flex items-center p-4 rounded">
      
      <section className= "p-8 border border-gray-300 shadow-2xl rounded-xl max-w-xl w-full text-left">
        
        <h1 className="text-3xl font-bold text-blue-500 mb-1">Welcome!</h1>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          Enter your credentials to sign in, or <span className="text-blue-500 underline hover:cursor-pointer ">sign up</span> to get started.
        </p>
          
          <label htmlFor="username" className="text-gray-700">
            Username
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-2 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter your username"/>
          </label>
          
          <label htmlFor="password" className="text-gray-700">
            Password
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-2 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter your username"/>
          </label>

          <div className="grid grid-cols-2 gap-x-4">
            <label htmlFor="remember" className="text-gray-800 text-left">Remember Me<input type="checkbox" className="m-2"></input></label>
            <label htmlFor="forgot" className="text-blue-500 text-right underline hover:cursor-pointer">Forgot password</label>
          </div>

          <button type="submit" className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded">
            Submit
          </button>
      </section>
    </main>
  );
}
