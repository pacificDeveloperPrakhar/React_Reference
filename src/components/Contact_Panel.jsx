// ChatPanel.jsx
import React, { useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const ChatPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [conversations, setConversations] = useState([
    { id: 1, name: 'Alice', lastMessage: 'Hey, what’s up?', time: '12:30 PM' },
    { id: 2, name: 'Bob', lastMessage: 'Can we talk later?', time: '1:00 PM' },
    { id: 3, name: 'Carol', lastMessage: 'See you soon!', time: '1:30 PM' },
    { id: 4, name: 'Dave', lastMessage: 'Meeting at 3?', time: '2:00 PM' },
    { id: 5, name: 'Eve', lastMessage: 'Lunch tomorrow?', time: '2:30 PM' },
    { id: 6, name: 'Frank', lastMessage: 'Got the files?', time: '3:00 PM' },
    { id: 7, name: 'Grace', lastMessage: 'Call me later!', time: '3:30 PM' },
    { id: 8, name: 'Hank', lastMessage: 'Project update', time: '4:00 PM' },
  ]);

  // Shuffle function to randomize the order of conversations
  const shuffleConversations = () => {
    const shuffled = [...conversations].sort(() => Math.random() - 0.5);
    setConversations(shuffled);
  };

  // Filter conversations based on the search term
  const filteredConversations = conversations.filter(convo =>
    convo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    convo.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col bg-gray-100 text-gray-900" style={{ width: '350px', height: '100vh' }}>
      {/* Archive Bar */}
      <div className="flex items-center justify-center p-4 h-16 bg-blue-100 text-blue-500 text-lg font-semibold transition-all ease-in hover:bg-blue-200 shadow-lg">
        <RiInboxArchiveLine className="text-2xl mr-4" />
        <span className="text-lg font-semibold">This archived message</span>
      </div>

      {/* Search Input */}
      <div className="flex items-center p-4 border-b border-gray-300 bg-white">
        <input
          type="text"
          placeholder="Search chats"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border-none outline-none p-2 text-gray-800"
        />
      </div>

      {/* Shuffle Control */}
      <div className="flex items-center justify-center p-2 bg-white border-b border-gray-300">
        <AiOutlineReload
          className="text-blue-500 text-xl cursor-pointer transition-transform transform hover:rotate-180"
          onClick={shuffleConversations}
          title="Shuffle Conversations"
        />
      </div>

      {/* Conversations List */}
      <ul className="flex flex-col overflow-y-auto">
        <AnimatePresence>
          {filteredConversations.map((convo) => (
            <motion.li
              key={convo.id}
              layout // Ensures layout animations are enabled
              initial={{ opacity: 0, y: -20 }} // Starting state when the item enters
              animate={{ opacity: 1, y: 0 }} // Animates to this state when the list updates
              exit={{ x: 200, opacity: 0 }} // Animation when item is removed
              transition={{ duration: 0.4 }} // Adjusting the animation duration
              className="flex items-center p-4 bg-white text-gray-800 mb-2 rounded-lg shadow hover:bg-gray-200 relative"
            >
              <span className="absolute top-2 right-4 text-xs text-gray-400">{convo.time}</span>
              <div className="bg-gray-200 text-gray-800 rounded-lg p-2 max-w-3/4 mb-2">
                <span className="text-sm overflow-hidden text-ellipsis">
                  <strong>{convo.name}:</strong> {convo.lastMessage}
                </span>
              </div>
              <div className="w-8 h-8 ml-2 rounded-full bg-gray-400 flex items-center justify-center text-white">
                <span className="text-xs">{convo.name.charAt(0)}</span>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default ChatPanel;
