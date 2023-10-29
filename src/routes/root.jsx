import { Link, Outlet } from "react-router-dom";

import "./../router.css";

export default function Root() {
  let menu = [
    {
      name: "Dashboard",
      href: "/home/dashboard",
    },
    {
      name: "Employees",
      href: "/home/employees",
    },
    {
      name: "Rooms",
      href: "/home/rooms",
    },
    {
      name: "Room Allocations",
      href: "/home/room-allocations",
    },
  ];

  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            {menu.map((item, ind) => (
              <li key={ind}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
