import React from "react";

export default function InputField({ type, placeholder, value, required }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      required={required}
    />
  );
}
