'use client';

import { useState } from 'react';
import { useSignInMutation } from '@/app/features/api'; // Adjust the import path as needed
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [signIn, { isLoading, isError }] = useSignInMutation();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await signIn({ email, password }).unwrap();
      // Redirect to the home page upon successful login
      router.push('/api/auth/components/Landingpage');
    } catch (error: any) {
      console.error('Failed to login:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container relative">
      <div className="fixed top-[150px] right-[120px]">
      <h1 className='text-3xl  text-[#202430] font-bold'>Welcome back</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-8">
          <label htmlFor="email">Email</label>
          <input
            className='border block rounded w-[280px] p-1'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className='border block rounded w-[280px] p-1'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button className='w-[280px] bg-[#4640DE] text-center mt-4 rounded h-7 text-white' type="submit" disabled={isLoading}>Login</button>
        <p>Don't have an account ? <Link  className="text-[#4640DE]" href="/api/auth/signup">Signup</Link></p>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
