import './App.css'

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-72 bg-white p-6 shadow-lg flex flex-col border-r border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-purple-700">Chats</h2>
        <ul className="flex-1 overflow-auto space-y-2">
          <li className="p-3 rounded-lg bg-purple-600 text-white cursor-pointer transition hover:bg-purple-700">
            Chat 1
          </li>
          <li className="p-3 rounded-lg bg-gray-100 cursor-pointer transition hover:bg-gray-200">
            Chat 2
          </li>
          <li className="p-3 rounded-lg bg-gray-100 cursor-pointer transition hover:bg-gray-200">
            Chat 3
          </li>
        </ul>
        <button className="btn bg-purple-600 text-white mt-6 w-full hover:bg-purple-700 transition">
          + New Chat
        </button>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col pl-30 pr-30 pt-10 pb-10 rounded-lg shadow-lg border border-gray-200">
        <div className="flex-1 overflow-auto rounded-lg space-y-4">
          {/* Example messages */}
          <div className="chat chat-start">
            <div className="chat-bubble ext-gray-800 text-lg p-4 shadow-sm">
              Hello! How can I assist you today?
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble bg-purple-600 text-white text-lg p-4 shadow-sm">
              I need help with Tailwind CSS.
            </div>
          </div>
        </div>
        {/* Input Box */}
        <div className="flex items-center">
        <textarea
          placeholder="Type a message..."
          className="bg-transparent h-12 flex-1 text-lg p-3 rounded-[25px] text-gray-500  focus:outline-none resize-none overflow-hidden"
          rows={1}
          onInput={(e) => {
            e.target.style.height = "auto"; // Reset height
            e.target.style.height = `${e.target.scrollHeight}px`; // Set height based on content
          }}
        />
        <button className="w-32 h-12 rounded-[45px] text-center bg-[linear-gradient(15.46deg,#4A25E1_26.3%,#7B5AFF_86.4%)]">
          Send
        </button>
        </div>
      </main>
    </div>
  );
}
export default App
