'user client';

const LogoutButton = () => {
  return (
    <div>
      <button
        // onClick={() => console.log('Signed out')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
        Sign Out
      </button>
    </div>
  );
};

export default LogoutButton;
