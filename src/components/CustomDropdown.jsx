// components/CustomDropdown.jsx

import React, { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";

export const CustomDropdown = ({
  options = [],
  value = "",
  placeholder = "Select option",
  searchable = true,
  disabled = false,
  className = "",
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const selectedOption = options.find((item) => item.value === value);

  const filteredOptions = options.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        className={`
          flex h-11 w-full items-center justify-between
           border-b border-white/20 bg-transparent
           transition-all duration-200
          
          focus:border-gold
          ${disabled ? "cursor-not-allowed opacity-50" : ""}
        `}
      >
        <span
          className={`truncate ${
            !selectedOption ? "text-white/30" : "text-white"
          }`}
        >
          {selectedOption?.label || placeholder}
        </span>

        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute bg-charcoal left-0 top-full z-50 mt-2 w-full
            overflow-hidden rounded-[20px] border border-gray-500/50
            shadow-xl
          "
        >
          {/* Search */}
          {searchable && (
            <div className="border-b border-gray-500/50 p-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="
                    h-10 w-full rounded-full border border-gray-500
                    bg-transparent pl-9 pr-3 text-sm outline-none
                    
                  "
                />
              </div>
            </div>
          )}

          {/* Options */}
          <div className="max-h-64 overflow-y-auto p-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((item) => {
                const isSelected = item.value === value;

                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => {
                      onChange?.(item.value);
                      setOpen(false);
                      setSearch("");
                    }}
                    className={`
                      flex w-full items-center justify-between
                      rounded-lg px-3 py-2.5 text-sm
                      transition-colors hover:bg-ivory/50
                      ${isSelected ? "bg-ivory hover:bg-ivory text-black font-medium " : ""}
                    `}
                  >
                    <span className="truncate">{item.label}</span>

                    {isSelected && <Check className="h-4 w-4" />}
                  </button>
                );
              })
            ) : (
              <div className="py-6 text-center text-sm text-gray-400">
                No options found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
