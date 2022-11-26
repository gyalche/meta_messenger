import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoutButton from './LogoutButton';

const Header = () => {
  const session = true;
  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <img
            src="https://links.papareact.com/jne"
            alt="profile"
            className="rounded-full mx-2 object-contain"
            height={10}
            width={50}
          />
          <div>
            <p className="text-blue-400">Logged is as:</p>
            <p className="font-bold text-lg">Dawa gyalchen</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );
  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <img
            src="https://links.papareact.com/jne"
            alt=""
            height={10}
            width={50}
          />
          <p className="text-blue-400">Welcome to Meta Messenger</p>
        </div>
        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
          Sign in
        </Link>
      </div>
    </header>
  );
};

export default Header;
