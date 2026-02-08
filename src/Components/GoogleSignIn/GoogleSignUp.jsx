import React from 'react'

const GoogleSignUp = () => {
    return (
        <div>
            <button className="flex items-center justify-center gap-3 bg-white border border-slate-300 text-gray-700 font-medium py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all w-full hover:border-primary duration-300">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                <span>Sign in with Google</span>
            </button>
        </div>
    )
}

export default GoogleSignUp