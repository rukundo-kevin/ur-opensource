import React from 'react';

const Card = ({name}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 ">
      <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative pb-8 overflow-hidden">
        </div>
        <div className="p-4">
          <h2 className="mt-2 mb-2  font-bold">Name</h2>
          <span className="inline-block mx-1 px-2 py-1 leading-none bg-blue-400 text-white rounded-full font-semibold uppercase tracking-wide text-md">
           Name
          </span>
          <p className="text-sm">name</p>
        </div>
        <div className="p-4 flex items-center text-sm text-gray-600">
            <button
              className="w-full  text-center text-[#DD8D0B]  border border-solid border-[#FAB33F] rounded py-2.5 px-5 hover:bg-[#FAB33F] hover:text-white transition-colors duration-200"
              type="button"
            >
              Get in touch
            </button>
        </div>
      </div>
    </div>
  );
};

export default Card;