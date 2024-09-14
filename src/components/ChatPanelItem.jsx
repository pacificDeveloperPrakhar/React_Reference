import React from 'react';
import { motion } from 'framer-motion';

const ChatPanelItem = ({ avatar, name, lastMessage, time }) => {
  return (
    <motion.div
      className="flex items-center p-4 bg-white text-gray-800 mb-2 rounded-lg shadow hover:bg-gray-200 relative transition-all"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white mr-4">
        {avatar}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <span className="font-semibold">{name}</span>
          <span className="text-xs text-gray-400">{time}</span>
        </div>
        <span className="block text-sm text-gray-600 overflow-hidden text-ellipsis">
          {lastMessage}
        </span>
      </div>
    </motion.div>
  );
};

export default ChatPanelItem;
