import React from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
}


async function SSR() {
    console.time("fetch")
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const resJson = await res.json();
  console.timeEnd("fetch")
  return (
    <div className="text-white h-[100vh] flex justify-center items-center flex-col">
      {resJson.map((user: IUser) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}

export default SSR;
