import ReactMarkdown from 'react-markdown';
import { useState, useEffect, useRef } from 'react';
import { useOpenRouter } from '@/features/openrouter/hooks/useOpenRouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const OpenRouterPage = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([]);
  const { createChatMutation } = useOpenRouter();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    setChatHistory((prev) => [...prev, { sender: 'user', text: message }]);

    const prompt = `You are a Bible Experte assistant, 
      Give me the verse of the day from the Bible NKJV, 
      thats all I want, no other text, just the verse.`;

    createChatMutation.mutate(prompt);
    setMessage('');
  };

  useEffect(() => {
    if (createChatMutation.data) {
      setChatHistory((prev) => [
        ...prev,
        { sender: 'ai', text: createChatMutation.data.content ?? '' }
      ]);
    }
  }, [createChatMutation.data]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  return (
   <div className='p-4 flex flex-col flex-1'>
    <Card className="p-4 flex flex-col flex-1">
      <div className="flex flex-col flex-1">
        <div
          className="flex-1 overflow-y-auto space-y-2 pb-4 pr-2 custom-scrollbar"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#38bff891 #181a2052', // tailwind sky-400 and dark bg
          }}
        >
          {chatHistory.map((chat, index) => (
            <div key={index} className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-3 rounded-lg max-w-[80%] break-words ${chat.sender === 'user' ? 'bg-primary text-gray-700' : 'bg-secondary'}`}>
                {chat.sender === 'ai' ? (
                  <ReactMarkdown>{chat.text}</ReactMarkdown>
                ) : (
                  chat.text
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
          {createChatMutation.isPending && <div className="text-center text-muted-foreground">Thinking...</div>}
          {createChatMutation.error && <div className="text-center text-destructive">Error: {createChatMutation.error.message}</div>}
        </div>
        <div className="flex space-x-2 mt-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
            onKeyDown={e => { if (e.key === 'Enter') handleSendMessage(); }}
          />
          <Button onClick={handleSendMessage} disabled={createChatMutation.isPending}>
            Send
          </Button>
        </div>
      </div>
      {/* Custom scrollbar styles */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #38bdf8;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #181a20;
          }
        `}
      </style>
    </Card>
   </div>
  );
};

export default OpenRouterPage;