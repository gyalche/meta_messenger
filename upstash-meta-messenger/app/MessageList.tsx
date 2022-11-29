'use client';
import React, { useEffect } from 'react';
import fetcher from '../utils/fetchMessages';
import useSWR from 'swr';
import { Message } from '../typing';
import MessageComponent from './MessageComponent';
import { clientPusher } from '../pusher';

type Props = {
  initialMessages: Message;
};
const MessageList = ({ initialMessages }: Props) => {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>('/api/getMessages', fetcher);
  console.log(messages);

  useEffect(() => {
    const channel = clientPusher.subscribe('message');
    channel.bind('new-message', async (data: Message) => {
      if (messages?.find((message) => message.id === data.id)) return;
      if (!messages) {
        mutate(fetcher);
      } else {
        mutate(fetcher, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        });
      }
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate, clientPusher]);

  return (
    <div className="space-y-5 px-5 pt-8 pb-32 xl:max-w-4xl mx-auto">
      {(messages || initialMessages)?.map((message) => (
        <div key={message.id}>
          <MessageComponent key={message.id} message={message} />
        </div>
      ))}
    </div>
  );
};

export default MessageList;
