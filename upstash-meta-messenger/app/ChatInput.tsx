'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import { v4 as uuid } from 'uuid';
import { Message } from '../typing';
import fetcher from '../utils/fetchMessages';
const ChatInput = () => {
  const [input, setInput] = useState('');
  const { data: messages, error, mutate } = useSWR('/api/getMessages', fetcher);
  console.log(messages);

  const addMessage = async (e: any) => {
    e.preventDefault();
    if (!input) return;
    const messageToSend = input;
    setInput(' ');

    const id = uuid();
    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: 'dawa',
      profilePic: 'https://www.mypic.com/profile',
      email: 'dawa@gmail.com',
    };

    const uploadMessageToUpstash = async () => {
      const data = await fetch('/api/addMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      }).then((res) => res.json());

      return [data.message, ...messages!];
    };
    await mutate(uploadMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };
  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-gray-100 bg-white">
      <input
        type="text"
        className="flex-1 rounded border-t border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-trasparent px-2 py-3 disabled:opacity-50 disbled:cursor-not-allowed"
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
