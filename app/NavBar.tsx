import React, { lazy } from "react";
import { FcPortraitMode } from "react-icons/fc";

const NavBar = () => {
  const navLabels = [
    { label: "DASHBOARD", href: "/dashboard" },
    { label: "ATTENDANCE", href: "/" },
    { label: "EXAMS", href: "/" },
    { label: "NOTICES", href: "/" },
    { label: "CONTACT", href: "/" },
    { label: "ABOUT", href: "/" },
    { label: "LOGIN", href: "/" },
  ];
  return (
    <div className="flex space-x-4 border-b p-5 items-center bg-black">
      <div className="pr-5">
        <nav>
          <FcPortraitMode />
        </nav>
      </div>
      <div className="">
        <ul className="flex space-x-3 ">
          {navLabels.map((Nlabel, index) => (
            <li
              className="text-white hover:text-slate-500 transition-colors pr-3"
              key={Nlabel.href}
            >
              | {Nlabel.label} |
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
