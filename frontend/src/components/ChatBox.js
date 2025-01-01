import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Message from './Message';

const ChatBox = () => {
    const [messages, setMessages] = useState([{ sender: 'bot', text: 'Share me something for diagnosis and treatment decisions.' }]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (!input.trim()) return;
        const newMessages = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);
        setInput('');

        try {
            const response = await axios.post('http://localhost:5000/api/chat', { message: input });
            setMessages([...newMessages, { sender: 'bot', text: response.data.reply }]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div style={{ width: '400px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', overflow: 'hidden' }}>
            <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '10px' }}>
                {messages.map((msg, idx) => <Message key={idx} sender={msg.sender} text={msg.text} />)}
            </div>
            <div style={{ display: 'flex', padding: '10px', borderTop: '1px solid #ddd' }}>
                <input
                    style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button
                    style={{ marginLeft: '10px', padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
