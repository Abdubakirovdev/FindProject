import React from 'react';
import img from "./../../../../../Imgs/adminLogin.png"
const InboxPage = () => {
    return (
        <div>
            <div className="flex items-center justify-between border-b-2 border-gray-300">
                <h2 className="text-xl font-bold">Eleanor Pane</h2>
                <p className="text-lg">It’s an awesome home with a great view to...</p>
                <div className="flex flex-col items-start">
                    <h3 className="text-sm">Sat 17 June </h3>
                    <h4 className="text-sm text-gray-400">12:00 PM </h4>
                </div>
            </div>
        </div>
    );
};

export default InboxPage;