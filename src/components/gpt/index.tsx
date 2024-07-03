import { useState } from 'react';
import './App.css';

const apiUrl = 'https://api.openai.com/v1/chat/completions';
const key = '';

type IMessage = {
  role: string;
  content: string;
};

const useGpt = () => {
  const askGPT = (message: string) => {
    const requestBody = {
      model: 'gpt-3.5-turbo-1106',
      messages: [{ role: 'user', content: message }],
    };

    return fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify(requestBody),
    });
  };

  return { askGPT };
};

function App() {
  const { askGPT } = useGpt();
  const [chats, setChats] = useState<IMessage[]>([]);
  const [message, setMessage] = useState('');

  const hadleMessages = (data: IMessage) => {
    const tempChats: IMessage[] = [...chats];
    tempChats.push(data);
    setChats(tempChats);
  };

  const handleChats = async () => {
    hadleMessages({ role: 'michelle', content: message });
    const response = await askGPT(message);
    console.log(response.json());
  };

  return (
    <div className="main h-[100vh]">
      <h2 className="mb-5">CHAT BOX</h2>
      <div className="container">
        <div className="chatbox h-[300px] w-[500px] bg-white rounded-lg overflow-y-auto p-3">
          {chats.map((item: IMessage, index) => (
            <div
              key={index}
              className={`text-gray-600 ${
                item.role === 'michelle' ? 'text-right' : 'text-left'
              }`}
            >
              <div className="font-bold">{item?.role}:</div>
              <p>{item?.content}</p>
            </div>
          ))}
        </div>
        <div className="controlsbox flex justify-center my-3">
          <input
            className="flex-1 rounded-lg pl-5"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="ml-3" onClick={handleChats}>
            send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
