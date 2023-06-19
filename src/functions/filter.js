import React from "react";

const Filter = () => {
  const names = [
    "Naruto",
    "Hinata",
    "Jiraya",
    "Lee",
    "Saski",
    "Sakura",
    "Sensei"
  ];
  const filtered = names.filter((name) => name.includes("S"));
  return (
    <div>
      {filtered.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
};

export default Filter;
