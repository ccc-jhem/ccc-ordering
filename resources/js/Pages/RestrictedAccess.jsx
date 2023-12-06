// resources/js/components/RestrictedAccess.js

import React from 'react';


const RestrictedAccess = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <div className="text-red-600 text-4xl mb-4">
                    <i className="fas fa-exclamation-triangle"></i>
                </div>
                <p className="text-xl font-semibold text-gray-800 mb-4">
                    Restricted Access
                </p>
                <p className="text-gray-600 mb-8">
                    You are not authorized to access this page.
                </p>
                <a href="/" className="text-blue-500 hover:underline">
                    Go back to the home page
                </a>
            </div>
        </div>
    );
};

export default RestrictedAccess;