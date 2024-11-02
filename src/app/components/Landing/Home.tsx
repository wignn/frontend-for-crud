"use client";
import { useState, useEffect } from "react";
import Loading from "../comp/Loading";
import { useSession } from "next-auth/react";
import { API } from "@/lib/Api";
import { GetAllUser } from "@/lib/action";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  const fetchUserData = async () => {
    try {
      const response = await GetAllUser();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [API]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  console.log("User state:", users);

  return (
    <div className="">
      <h1 className="text-white">Hallo</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Session ID: {session?.user?.id}</p>
        </div>
      ))}
      <div className="text-white"></div>
    </div>
  );
}
