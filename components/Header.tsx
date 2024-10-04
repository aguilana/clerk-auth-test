"use client";
import Link from "next/link";
import { SignedIn, SignOutButton, useAuth, UserButton } from "@clerk/nextjs";

export default function Header() {
  const { userId } = useAuth();
  return (
    <header className="bg-gray-600 text-neutral-200 h-16">
      <nav className="h-full">
        <ul className="container mx-auto flex items-center justify-between py-4 h-full">
          <Link href="/">Home Page</Link>
          {userId && (
            <ul className="flex gap-5">
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/dashboard/users">Users</Link>
              </li>
            </ul>
          )}
          <li>
            {userId ? (
              <SignedIn>
                <UserButton />
              </SignedIn>
            ) : (
              <Link href="/auth/sign-in"> Login </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
