import { useState } from 'react';

const items = ['りんご','バナナ','ぶどう','みかん','すいか','メロン',];

function App() {
  const [query, setQuery] = useState('');

  const filtered = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <h1></h1>
      <input
        type="text"
        placeholder="キーワードを入力"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
