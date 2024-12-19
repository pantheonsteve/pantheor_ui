import React from "react";

const NavItem = (props) => {
  return (
    <li className="nav-item">
        <a href={props.href} className="nav-link active text-white">
            <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#home" />
            </svg>
            {props.label}
        </a>
    </li>
  );
};

export default NavItem;