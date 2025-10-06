"use client";
import React, { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
}

function CSR() {
  const [users, setUsers] = useState<IUser[]>();
  useEffect(() => {
    const fetchTodos = async () => {
      console.time("fetch");
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const resJson = await res.json();
      console.log(res);
      console.log(resJson);
      setUsers(resJson);
      console.timeEnd("fetch")
    };
    fetchTodos();
  }, []);

  return (
    <div className="text-white h-[100vh] flex justify-center items-center flex-col">
      {users?.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}

export default CSR;
