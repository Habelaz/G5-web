'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Nav = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <span>Welcome, {session.user?.name}</span>
          <button onClick={() => {
            signOut({ callbackUrl: '/api/auth/signout' });
          }}>
            Logout
          </button>
        </>
      ) : (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default Nav;
