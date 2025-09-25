import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });

      const botMsg = { role: "bot", content: res.data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: "bot", content: "❌ Error!" }]);
    } finally {
      setLoading(false);
    }
  };

  // Enter key submit
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  // Auto-scroll
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="ml-64 p-6 max-w-3xl">
      <h2 className="text-2xl font-bold mb-4">Ask AmarSchool AI (Gemini)</h2>

      <div
        ref={chatRef}
        className="bg-white h-[400px] overflow-y-auto rounded p-4 shadow mb-4 space-y-3"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded ${
              msg.role === "user"
                ? "bg-blue-100 text-right"
                : "bg-gray-100 text-left"
            }`}
          >
            <span className="text-sm whitespace-pre-wrap">{msg.content}</span>
          </div>
        ))}
        {loading && <p className="text-gray-400 italic">Thinking...</p>}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask something..."
          className="flex-1 p-2 border rounded"
          disabled={loading}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
