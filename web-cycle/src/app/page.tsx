'use client';

import { useState } from 'react';

export default function HomePage() {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [improvedHtml, setImprovedHtml] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setImprovedHtml(null);

    try {
      const response = await fetch('/api/submit-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      console.log('API Response:', data); // デバッグ用

      if (response.ok && data.improvedHtml) {
        setMessage('URLが正常に送信されました。');
        setImprovedHtml(data.improvedHtml);
      } else {
        console.error('Error: API response did not contain improvedHtml:', data);
        setMessage('送信中にエラーが発生しました。');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('サーバーに接続できませんでした。');
    } finally {
      setLoading(false);
    }
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
        <button type="submit" className="bg-blue-500 text-white p-2" disabled={loading}>
          {loading ? '送信中...' : '送信'}
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
      {improvedHtml && (
        <div className="mt-8">
          <h2 className="text-xl mb-4">改善されたページプレビュー</h2>
          <div dangerouslySetInnerHTML={{ __html: improvedHtml }} className="border p-4" />
        </div>
      )}
    </div>
  );
}
