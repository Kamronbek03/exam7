import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

function CustomNavLink({ url, children, title }) {
  return (
    <RouterNavLink
      className={`py-[10px] relative active:active flex items-center  text-gray-400 gap-[18px]`}
      to={url}
    >
      {children}
      <span className="font-semibold text-[18px] leading-[22.77px]">
        {title}
      </span>
    </RouterNavLink>
  );
}

export default CustomNavLink;
