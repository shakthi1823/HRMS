import React, { useState } from 'react';
import ChatBox, { exampleConversations } from './components/chatbox';

const chatList = [
  { name: 'Lois Griffin', icon: '👤', lastMessage: 'Hi Maria! Can you help me with my leave application?' },
  { name: 'Meg Griffin', icon: '👤', lastMessage: 'Hey Eric, have you collaborated with Fred yet?' },
  { name: 'Stewie Griffin', icon: '👤', lastMessage: 'Maria, can you approve my overtime?' },
  { name: 'Joe Swanson', icon: '👤', lastMessage: 'Hi Maria, I need help with my payroll.' },
];

export default function ChatPage() {
  const [activeChat, setActiveChat] = useState('Lois Griffin');
  const user = { name: 'Maria' };

  // Get messages for the selected chat, fallback to HRBot
  const messages = exampleConversations[activeChat] || [
    { sender: 'HRBot', text: 'Hello! How can I assist you today?' }
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      {/* Chat List */}
      <aside style={{ width: 260, background: '#222', color: '#fff', padding: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontWeight: 'bold', fontSize: 22, padding: '24px 0 0 32px' }}>Messages</div>
        <div style={{ flex: 1, overflowY: 'auto', marginTop: 24 }}>
          {chatList.map(chat => (
            <div
              key={chat.name}
              onClick={() => setActiveChat(chat.name)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '16px 32px',
                background: activeChat === chat.name ? '#5b6bc0' : '#222',
                color: '#fff',
                borderRadius: 12,
                cursor: 'pointer',
                margin: '0 16px 8px 16px',
                fontWeight: activeChat === chat.name ? 'bold' : 'normal',
                boxShadow: activeChat === chat.name ? '0 2px 8px rgba(91,107,192,0.15)' : undefined,
              }}
            >
              <span style={{ fontSize: 24 }}>{chat.icon}</span>
              <div>
                <div style={{ fontSize: 16 }}>{chat.name}</div>
                <div style={{ fontSize: 13, color: '#bbb' }}>{chat.lastMessage}</div>
              </div>
            </div>
          ))}
        </div>
      </aside>
      {/* ChatBox */}
      <main style={{ flex: 1, background: '#f7f8fa', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <ChatBox user={user} messages={messages} />
      </main>
    </div>
  );
}
