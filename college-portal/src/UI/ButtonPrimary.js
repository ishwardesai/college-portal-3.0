import React from 'react';

const ButtonPrimary = ({ name, clickHandler }) => {
  return (
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
      onClick={clickHandler}
    >
      {name}
    </button>
  );
};

export default ButtonPrimary;
