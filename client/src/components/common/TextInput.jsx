import React from 'react';

const TextInput = (props) => (
  <input
    type="text"
    id={props.id}
    name={props.name}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    required
    className="mt-3 p-2 block w-full bg-white border rounded-md shadow-sm focus:outline-none focus:ring-[#66279a] focus:border-[#66279a] sm:text-sm"
    style={props.style}
  />
);

export default TextInput;
