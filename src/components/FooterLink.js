'use client'
import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({title, data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div ref={dropdownRef} style={{ width: "100%", position: "relative", display: "inline-block" }}>
      {/* Button */}
      <button
        onClick={toggleDropdown}
        style={{
            outline: "none",
            display: "flex",
            width: "100%",
            alignItems: "center",
            backgroundColor: "transparent",
            border: "1px solid #fff",
            borderRadius: "4px",
            padding: "8px 12px",
            cursor: "pointer",
            color: "#fff",
            justifyContent: "space-between",
        }}
      >
        <span style={{ marginRight: "8px" }}>
          {title}
        </span>
        {/* Icon */}
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              strokeLinejoin="round"
              d="M6 6l12 12m0-12L6 18"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        )}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div
          style={{
            width: "100%",
            position: "absolute",
            bottom: "125%",
            left: "0",
            backgroundColor: "#fff",
            opacity: "0.9",
            borderRadius: "4px",
            marginTop: "8px",
            zIndex: "1000",
            padding: "14px 14px",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, width: "100%" }}>
            {data.map((item, index) => (
              <li key={index} style={{ marginBottom: "0px" }}>
              <a target="_blank" href={item.url} style={{ outline: "none", textDecoration: "none", color: "black" }}>
                {item.name}
              </a>
            </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
