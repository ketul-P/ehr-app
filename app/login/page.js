export default function Login() {
  return (
    <main id="form" className="min-h-screen bg-white flex items-center p-4 rounded">
      
      <section className= "p-8 border border-gray-300 shadow-md rounded-xl max-w-xl w-full text-left">
        
        <h1 className="text-3xl font-bold text-blue-600 mb-1">Welcome!</h1>
        
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

          

          <button type="submit" className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Submit
          </button>
      </section>
    </main>
  );
}
