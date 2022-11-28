import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher({
  appId: '1514882',
  key: 'f5e441d8f790434e5c03',
  secret: '63c60d61bccd04bfe705',
  cluster: 'ap2',
  useTLS: true,
});

export const clientPusher = new ClientPusher('f5e441d8f790434e5c03', {
  cluster: 'ap2',
  forceTLS: true,
});
