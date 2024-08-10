import React, { useState } from 'react';
import axios from 'axios';
import './ChatBot.css';
import Navbar from '../Navbar/Navbar';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.trim() === '') return;

    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);
    setInput('');

    const options = {
      method: 'POST',
      url: 'https://chatgpt-42.p.rapidapi.com/gpt4',
      headers: {
        'x-rapidapi-key': 'c1163433c0msh53fbf0a871e886ap1519ddjsndca375b9ea7c',
        'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        messages: [
          {
            role: 'user',
            content: input
          }
        ],
        web_access: false
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data); // Log the response data for debugging

      if (response.data && response.data.result) {
        const botMessage = {
          sender: 'bot',
          text: response.data.result.trim()
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        console.error('Unexpected response structure:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data from the RapidAPI ChatGPT 4 API:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      }
    }
  };

  const handleExport = () => {
    const chatContent = messages.map(msg => `${msg.sender}: ${msg.text}`).join('\n');
    const blob = new Blob([chatContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'chat.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="chtBody"> 
    {/* Added this wrapper for centering */}
    <Navbar/>
      <div className="chtContainer">
        <div className="chtBox">
          {messages.map((msg, index) => (
            <div key={index} className={`chtMessage ${msg.sender === 'user' ? 'chtMessageUser' : 'chtMessageBot'}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="chtForm">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="chtInput"
          />
          <button type="submit" className="chtSendButton">Send</button>
        </form>
        <button onClick={handleExport} className="chtExportButton">Export Chat</button>
      </div>
    </div>
  );
}

export default ChatBot;
