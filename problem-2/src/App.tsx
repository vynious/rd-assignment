import { useState, useEffect } from 'react';
import { UserTicket } from './constants/userTicket';
import ParentComponent from './components/Parent';

function App() {
  const [users, setUsers] = useState<UserTicket[]>();

  // Fetch data from users.json with a delay before setting it
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/data/users.json');
        const data = await response.json();
        if (data.users) {
          setTimeout(() => {
            setUsers(data.users);
          }, 2000); // 5000ms = 5 seconds
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className='font-sans w-full h-screen overflow-hidden relative flex flex-col justify-center bg-[#1F1F1F] py-6 sm:py-12 sm:rounded-lg'>
      <ParentComponent data={users} />
    </div>
  );
}

export default App;




