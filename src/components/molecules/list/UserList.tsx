import React from "react";

const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function UserList() {
  return (
    <ul>
      {mock.map((item, index) => {
        return (
          <li
            key={index}
            className={`flex items-center h-[76px] ${index === 0 && "rounded-tr-lg"} ${
              index % 2 === 0 && "bg-slate-300"
            }`}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}
