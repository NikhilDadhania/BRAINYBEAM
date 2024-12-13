import React from 'react';

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="/img.jpg" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Nikhil Dadhania, Brainbeam TASK
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5"></div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
                </div>
            </div>
        </div>
    );
}
