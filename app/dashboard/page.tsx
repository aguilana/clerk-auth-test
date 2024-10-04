"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Dashboard() {
  const { user, isSignedIn } = useUser();
  if (!isSignedIn) {
    return null;
  }
  return (
    <div>
      <h1>User Dashboard</h1>
      <div>
        <Link href="/dashboard/users">Users</Link>
      </div>
      <div>
        <h2>Information</h2>
        <ul>
          <label htmlFor="name"></label>
          <li id="name">{user?.fullName}</li>
        </ul>
      </div>
    </div>
  );
}
