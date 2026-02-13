import React from 'react'

const AuthLayout = ({children}) => {
  return (
    // Updated this div with the warm background color/gradient
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full bg-[#f3e7d9]">
      
      {/* Left Side: Clerk Sign In */}
      <div className="flex items-center justify-center p-8">
        {children}
      </div>

      {/* Right Side: Illustration */}
      {/* Added 'bg-white/20' and 'backdrop-blur' for a soft modern feel on the right */}
      <div className="hidden md:flex flex-col items-center justify-center bg-black/5 backdrop-blur-sm border-l border-black/5">
        <div className="max-w-md p-8 text-center">
          <img 
            src="clean.gif" 
            alt="EasyMaid Illustration" 
            className="w-full h-auto mb-8 rounded-lg"
          />
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Welcome to EasyMaid</h2>
          <p className="text-slate-600 text-lg">
            Professional cleaning services at your fingertips.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout