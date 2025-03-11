import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import MushroomCharacter from './MushroomCharacter';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // 這個URL會在後端設置完成後替換
  const API_ENDPOINT = 'https://885empg6f8.execute-api.us-west-2.amazonaws.com/prod/chat'; 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setIsLoading(true);
    try {
      const result = await axios.post(API_ENDPOINT, {
        prompt: input
      });
      
      // 處理嵌套響應格式
      if (result.data && result.data.body) {
        // API返回嵌套格式
        try {
          const parsedBody = JSON.parse(result.data.body);
          setResponse(parsedBody.message);
        } catch (e) {
          console.error('Error parsing body:', e);
          setResponse('無法解析回應內容');
        }
      } else if (result.data && result.data.message) {
        // 直接格式
        setResponse(result.data.message);
      } else {
        console.log('Unexpected response format:', result.data);
        setResponse('收到未知格式的回應');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse('發生錯誤，請稍後再試。');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="App mushroom-bg">
      <header className="App-header">
        <h1>ChatGPT Web App</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="輸入您的問題..."
            rows="4"
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? '處理中...' : '提交'}
          </button>
        </form>
        
        {response && (
          <div className="response">
            <h2>回應：</h2>
            <p>{response}</p>
          </div>
        )}
      </main>
      
      {/* 添加擬人化蘑菇角色 */}
      <MushroomCharacter />
    </div>
  );
}

export default App;