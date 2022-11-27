'use client';
import React, { useState } from 'react';

const ChatInput = () => {
  const [input, setInput] = useState('');
  return (
    <form className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-gray-100">
      <input
        type="text"
        className="flex-1 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-trasparent px-2 py-3 disabled:opacity-50 disbled:cursor-not-allowed"
        placeholder="Enter a message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed">
        send
      </button>
    </form>
  );
};

export default ChatInput;
