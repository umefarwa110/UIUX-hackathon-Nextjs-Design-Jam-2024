import React from 'react';

export default function Section5() {
    return (
        <div className="flex items-center bg-white px-6">
            {/* Image Section */}
            <div className="w-1/2 flex justify-center" style={{ marginLeft: '50px' }}>
                <img
                    src={"/section5_img.png"} // Replace with the actual image path
                    alt="Happy couple"
                    className=""
                />
            </div>

            {/* Text Section */}
            <div className="w-1/2 pl-[72px]">
                <p className="text-gray-400 uppercase text-sm">Summer 2020</p>
                <h2 className="text-4xl font-bold text-gray-800 mt-6">
                    Part of the Neural <br /> Universe
                </h2>
                <p className="text-gray-600 mt-6">
                    We know how large objects will act, <br /> but things on a small scale.
                </p>
                <div className="mt-6 flex gap-4">
                    <button className="bg-[#2DC071] text-white py-2 px-4 rounded hover:bg-green-600">
                        BUY NOW
                    </button>
                    <button className="border border-[#2DC071] text-[#2DC071] py-2 px-4 rounded bg-transparent hover:bg-gray-100">                        READ MORE
                    </button>
                </div>
            </div>

        </div>
    );
}
