import React from 'react';
import ChatBox from './components/chatbox';
import { exampleChats } from './components/java';

function App() {
  const user = { name: 'Maria' };

  // Requests data
  const requests = [
    { name: 'Lois Griffin', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Joe Swanson', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Stewie Griffin', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  ];

  // Example chat list data
  const chatList = [
    {
      type: 'single',
      name: 'Lois Griffin',
      icon: '👤',
      message: 'Sent you a message',
      time: '34m',
      unread: true,
    },
    {
      type: 'group',
      name: 'The Boyz',
      icon: '👥',
      message: 'joe68: sent a message',
      time: '34m',
      unread: true,
    },
    {
      type: 'single',
      name: 'Stewie Griffin',
      icon: '👤',
      message: 'Sent you a message',
      time: '17h',
      unread: true,
    },
    {
      type: 'single',
      name: 'Joe Swanson',
      icon: '👤',
      message: 'Sent you a message',
      time: '20h',
      unread: true,
    },
    {
      type: 'single',
      name: 'Glenn Quagmire',
      icon: '👤',
      message: 'The silence lmao',
      time: '20h',
      unread: false,
    },
    {
      type: 'single',
      name: 'Herbert',
      icon: '👤',
      message: 'Active 6m ago',
      time: '',
      unread: false,
    },
    {
      type: 'single',
      name: 'Adam West',
      icon: '👤',
      message: 'Active today',
      time: '',
      unread: false,
    },
    {
      type: 'group',
      name: 'Philip J. Fry',
      icon: '👥',
      message: 'I feel like I was frozen for 1000...',
      time: '20h',
      unread: false,
      selected: true,
    },
    {
      type: 'single',
      name: 'Cleveland Brown',
      icon: '👤',
      message: 'Active 5h ago',
      time: '',
      unread: false,
    },
    {
      type: 'single',
      name: 'Chris Griffin',
      icon: '👤',
      message: 'Active today',
      time: '',
      unread: false,
    },
    {
      type: 'single',
      name: 'Bonnie Swanson',
      icon: '👤',
      message: '',
      time: '',
      unread: false,
    },
  ];

  const [activeChat, setActiveChat] = React.useState(null);
  const [messages, setMessages] = React.useState([]);
  const [chatListState, setChatListState] = React.useState(chatList);

  // Helper to mark chat as read and update message status
  const markChatAsRead = (chatName) => {
    setChatListState(prev => prev.map(chat =>
      chat.name === chatName
        ? { ...chat, unread: false, message: 'Seen just now', time: '' }
        : chat
    ));
  };

  return (
    <div className="hrms-app-layout" style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
    <aside
      style={{
        width: '220px',
        background: '#6c7ae0',
        color: '#fff',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Ensures bottom alignment
        minHeight: '100vh'
      }}
    >
      <div style={{ width: '100%' }}>
        <div style={{ width: '100%', background: '#6c7ae0', padding: '24px 0 16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: 32, fontWeight: 'bold', color: '#ffd600', marginBottom: 4 }}>HRMS</div>
          <div style={{ fontSize: 12, color: '#0f0f0fff' }}>Human Resource Management System</div>
        </div>
        <div style={{ width: '100%', height: '2px', background: '#6c7ae0' }}></div>
        <div style={{ textAlign: 'center', margin: '32px 0 16px 0' }}>
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Maria" style={{ borderRadius: '50%', width: 64, height: 64, border: '3px solid #fff' }} />
          <div style={{ marginTop: 8, fontWeight: 'bold', fontSize: 16 }}>Maria</div>
          <div style={{ fontSize: 12, color: '#e0e0e0' }}>HR Manager</div>
        </div>
        <nav style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4, marginTop: 8 }}>
          {[
            { label: 'Dashboard', icon: '🏠', active: false },
            { label: 'Chat', icon: '💼', active: true },
            { label: 'Employees', icon: '🧑‍💼', active: false },
            { label: 'Feed', icon: '📰', active: false },
            { label: 'Recognition', icon: '🏆', active: false },
            { label: 'Event', icon: '📅', active: false },
            { label: 'Profile', icon: '👤', active: false },
          ].map((item, idx) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 32px',
                background: item.active ? '#e6e8fa' : 'transparent',
                color: item.active ? '#6c7ae0' : '#fff',
                fontWeight: item.active ? 'bold' : 'normal',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: 16,
                margin: '2px 12px',
                justifyContent: 'flex-start',
              }}
            >
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </aside>
      {/* Main Content */}
      <main style={{ flex: 1, background: '#f7f8fa', display: 'flex' }}>
        {/* Chat List */}
        <section style={{ width: '300px', background: '#fff', borderRight: '1px solid #eee', padding: '32px 0 0 0', display: 'flex', flexDirection: 'column', height: '100vh', boxSizing: 'border-box' }}>
          <div style={{ fontWeight: 'bold', fontSize: 20 ,textAlign:'start',marginLeft:'10px', color:'#000000'}}>Messages <span style={{ color: '#5b6bc0', fontSize: 14 }}>●</span></div>
          <div style={{ margin: '24px 32px 0 32px', background: '#f3f3fd', borderRadius: 12, padding: '12px 16px', fontSize: 14 }}>
            <span style={{ fontWeight: 'bold',color:'#000000' }}>Requests</span><br />
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              {requests.map((req, idx) => (
                <img key={idx} src={req.avatar} alt={req.name} style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid #fff' }} />
              ))}
            </div>
            <span style={{ fontSize: 12, color: '#888', marginTop: 8, display: 'block' }}>{requests.length} requests</span>
          </div>
          <div style={{ marginTop: 24, marginLeft: 32, marginRight: 32, flex: 1, overflowY: 'auto' }}>
            {chatListState.map((chat, idx) => (
              <div
                key={idx}
                className="chat-list-item"
                style={{
                  background: chat.selected ? '#222' : undefined,
                  cursor: ['Lois Griffin', 'Chris Griffin'].includes(chat.name) ? 'pointer' : 'default',
                }}
                onClick={() => {
                  if (['Lois Griffin', 'The Boyz'].includes(chat.name)) {
                    setActiveChat(chat.name);
                    setMessages(exampleChats[chat.name] || []);
                    markChatAsRead(chat.name);
                  } else if (chat.name === 'Chris Griffin') {
                    setActiveChat('Chris Griffin');
                    setMessages(exampleChats['Chris Griffin'] || []);
                  }
                }}
              >
                <span style={{ fontSize: 24, marginRight: 12 }}>{chat.icon}</span>
                <div style={{ flex: 1 }}>
                  <span className="chat-list-name">{chat.name}</span>
                  <div className="chat-list-message">{chat.message}{chat.time && ` · ${chat.time}`}</div>
                </div>
                {chat.unread && (
                  <span style={{ width: 10, height: 10, background: '#3b82f6', borderRadius: '50%', display: 'inline-block', marginLeft: 8 }}></span>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* Chat Conversation */}
        <section style={{ flex: 1, padding: '32px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          {/* You can replace this with a more advanced chat UI if needed */}
          <ChatBox user={user} messages={messages} />
        </section>
      </main>
    </div>
  );
}

export default App;
