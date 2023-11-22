"use client";

import { useEffect, useRef, useState } from "react";

import { DropdownProps } from "./types";

export function Dropdown({ Toggle, Menu }: DropdownProps) {
  const [toggle, setToggle] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(addEventListener, []);

  return (
    <div ref={wrapperRef} className="inline-flex relative">
      <Toggle toggle={toggle} onToggle={handleToggle} />
      {toggle && (
        <Menu
          className="absolute top-full mt-1 right-0 z-10 shadow-xl"
          toggle={toggle}
          onClose={handleClose}
        />
      )}
    </div>
  );

  function addEventListener() {
    document.addEventListener("click", onOutsideClick);

    return function removeEventListener() {
      document.removeEventListener("click", onOutsideClick);
    };

    function onOutsideClick(event: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setToggle(false);
      }
    }
  }

  function handleToggle() {
    setToggle((current) => !current);
  }

  function handleClose() {
    setToggle(false);
  }
}
