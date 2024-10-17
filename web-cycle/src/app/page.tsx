// src/app/page.tsx
'use client';
import { useState } from 'react';

export default function HomePage() {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/submit-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    const result = await res.json();
    setMessage(result.message);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">改善したいWebページのURLを入力してください</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          送信
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
