import React from 'react';
import '../App.css';

const ChatBox = ({ user = { name: 'You' }, messages = [] }) => {
  const [input, setInput] = React.useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    // Optionally, you can add sending logic here
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chatbox-container" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #eee', padding: 0 }}>
      <div className="chatbox-messages" style={{ flex: 1, overflowY: 'auto', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {messages.map((msg, i) => {
          if (msg.type === 'poll') {
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <div style={{ background: '#6c7ae0', color: '#fff', borderRadius: 16, padding: '10px 18px', fontWeight: 500, marginRight: 8, maxWidth: '70%' }}>{msg.text}</div>
                <div>
                  {msg.options && msg.options.map(opt => (
                    <button key={opt} style={{ background: '#6c7ae0', color: '#fff', border: 'none', borderRadius: 16, padding: '6px 16px', marginLeft: 4, cursor: 'pointer' }}>{opt}</button>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <div
              key={i}
              className={`message-bubble ${msg.sender === user.name ? 'user' : 'bot'}`}
              style={{
                alignSelf: msg.sender === user.name || msg.type === 'sent' ? 'flex-end' : 'flex-start',
                background: msg.sender === user.name || msg.type === 'sent' ? '#6c7ae0' : '#f3f3fd',
                color: msg.sender === user.name || msg.type === 'sent' ? '#fff' : '#333',
                borderRadius: 16,
                padding: '12px 20px',
                maxWidth: '60%',
                boxShadow: '0 1px 4px #eee',
                fontSize: 15,
                marginBottom: 0,
              }}
            >
              <div style={{ fontWeight: 'bold', fontSize: 13, marginBottom: 4 }}>
                {msg.sender}
              </div>
              <div>{msg.text || msg.message}</div>
              {msg.time && <div style={{ fontSize: 10, color: '#eee', marginTop: 2 }}>{msg.time}</div>}
            </div>
          );
        })}
      </div>
      <div className="chatbox-input" style={{ display: 'flex', alignItems: 'center', padding: '24px 32px', borderTop: '1px solid #f0f0f0', background: '#f7f8fa', borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '12px 16px', borderRadius: 8, border: '1px solid #ddd', fontSize: 15, marginRight: 16 }}
        />
        <button
          onClick={handleSend}
          style={{ background: '#5b6bc0', color: '#fff', border: 'none', borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, cursor: 'pointer' }}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
