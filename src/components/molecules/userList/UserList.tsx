import React from "react";

const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface UserListProps {
  number: number;
}

export default function UserList({ number }: UserListProps) {
  return (
    <ul className={`h-full grid grid-rows-[${number}]`}>
      {mock.map((item, index) => {
        return (
          <li
            key={index}
            className={`flex items-center ${index === 0 && "rounded-tr-lg"} ${
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
