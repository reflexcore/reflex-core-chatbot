import { useState } from 'react';

export default function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [metadata, setMetadata] = useState({
    role: 'Kế toán',
    industry: 'Thuế',
    level: 'Expert'
  });

  const sendMessage = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input, metadata })
    });
    const data = await res.json();
    setMessages([...messages, { user: input, bot: data.response }]);
    setInput('');
  };

  return (
    <div>
      <h1>Reflex Core Chatbot</h1>
      <div>
        {messages.map((msg, i) => (
          <div key={i}>
            <b>Bạn:</b> {msg.user}<br />
            <b>Reflex:</b> {msg.bot}
          </div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Gửi</button>
    </div>
  );
}