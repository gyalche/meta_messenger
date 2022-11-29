export type Message = {
  map(arg0: (message: any) => JSX.Element): import("react").ReactNode;
  id: string;
  message: string;
  created_at: number;
  username: string;
  profilePic: string;
  email: string;
};
