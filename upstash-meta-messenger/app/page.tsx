import React from 'react';
import ChatInput from './ChatInput';
import MessageList from './MessageList';

const Page = () => {
  return (
    <main>
      {/*messageList */}
      <MessageList />
      {/*chat input */}
      <ChatInput />
      <h1>Welcome to the meta messenger</h1>
    </main>
  );
};

export default Page;
