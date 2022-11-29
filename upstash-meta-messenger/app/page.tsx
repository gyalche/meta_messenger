import React from 'react';
import { Message } from '../typing';
import ChatInput from './ChatInput';
import MessageList from './MessageList';

const Page = async () => {
  const data = await fetch(
    `${process.env.VERCEL_URL || 'http://localhost:3000'}/api/getMessages`
  ).then((res) => res.json());

  const messages: Message = data.messages;
  return (
    <main>
      {/*messageList */}
      <MessageList initialMessages={messages} />
      {/*chat input */}
      <ChatInput />
      <h1>Welcome to the meta messenger</h1>
    </main>
  );
};

export default Page;
