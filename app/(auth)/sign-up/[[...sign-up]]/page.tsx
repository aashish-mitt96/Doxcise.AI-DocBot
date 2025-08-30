import React from "react"
import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {

  return (

    <div className="h-screen bg-[#0f172a] bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-black flex items-center justify-center px-4 py-4 overflow-hidden">
      <div className="w-full max-w-5xl h-full max-h-[calc(100vh-2rem)] grid grid-cols-1 lg:grid-cols-2 bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden">

        {/* 🚀 Left Side - Information Section */}

        <div className="hidden lg:flex flex-col justify-between p-8 bg-gradient-to-br from-cyan-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="mb-4">
              <div className="inline-flex items-center px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-300 text-xs font-medium mb-4 border border-cyan-400/30">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                AI-Powered Platform
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-4 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                Join <span className="text-cyan-300">Doxcise.AI</span>
              </h1>

              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                Supercharge your content creation with AI-powered templates.
                Write faster, smarter, and better than ever before.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300 text-sm">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                <span>20+ AI-powered templates</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                <span>Lightning-fast content generation</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                <span>Gemini AI support</span>
              </div>
            </div>
          </div>

          <div className="mt-auto text-sm text-gray-400 relative z-10">
            © {new Date().getFullYear()} Doxcise. All rights reserved.
          </div>
        </div>

        {/* Right Side - SignUp Form */}

        <div className="p-6 sm:p-8 bg-black/40 text-white flex flex-col justify-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-cyan-900/10"></div>

          <div className="relative z-10">

            {/* Enhanced form container */}
            <div className="bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 backdrop-blur-md hover:bg-white/[0.12] transition-all duration-300">
              <SignUp
                appearance={{
                  elements: {
                    card: "bg-transparent shadow-none",
                    formButtonPrimary:
                      "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold mt-6 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]",
                    formFieldInput:
                      "bg-white/10 text-white border border-cyan-400/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 rounded-lg py-3 px-4 transition-all duration-200 hover:bg-white/15",
                    headerTitle: "text-white text-2xl font-bold mb-2",
                    headerSubtitle: "text-gray-300 text-sm mb-6",
                    footerActionText: "text-gray-400 text-sm",
                    footerActionLink:
                      "text-cyan-400 hover:text-cyan-300 underline font-medium transition-colors duration-200",
                    formFieldLabel: "text-gray-300 font-medium mb-2",
                    formFieldInputShowPasswordButton: "text-gray-400 hover:text-white transition-colors duration-200",
                    identityPreviewText: "text-gray-300",
                    identityPreviewEditButton: "text-cyan-400 hover:text-cyan-300 transition-colors duration-200",
                    formResendCodeLink: "text-cyan-400 hover:text-cyan-300 transition-colors duration-200",
                    otpCodeFieldInput: "bg-white/10 text-white border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg",
                  },
                }}
                path="/sign-up"
                routing="path"
                signInUrl="/sign-in"
                afterSignInUrl="/dashboard"
              />
            </div>

            {/* Trust indicators */}
            <div className="mt-4 text-center">
              <div className="flex items-center justify-center space-x-4 text-gray-400 text-xs">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                  <span>Secure & Encrypted</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                  <span>No Credit Card</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}