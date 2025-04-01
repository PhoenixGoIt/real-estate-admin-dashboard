"use client";
import { useState } from "react";
import Search from "../ui/Search";
import { IoSend } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

// Interfaces for type safety
interface IUser {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  lastSeen?: string;
}

interface IMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
}

interface IChat {
  id: string;
  participants: IUser[];
  lastMessage?: IMessage;
  unreadCount?: number;
}

// Mock data - replace with API data later
const mockCurrentUser: IUser = {
  id: "current-user",
  name: "You",
  avatar: "/Ava/UserAva.jpg",
  isOnline: true,
};

const mockUsers: IUser[] = [
  {
    id: "user1",
    name: "John Anderson",
    avatar: "/Ava/User1Ava.jpg",
    isOnline: true,
  },
  {
    id: "user2",
    name: "Sarah Wilson",
    avatar: "/Ava/User2Ava.jpg",
    isOnline: false,
    lastSeen: "2024-01-20T15:31:00",
  },
  {
    id: "user3",
    name: "Michael Brown",
    avatar: "/Ava/User3Ava.jpg",
    isOnline: true,
  },
];

const mockMessages: IMessage[] = [
  {
    id: "msg1",
    senderId: "user1",
    receiverId: "current-user",
    content:
      "Hi! I'm interested in the property at 123 Main Street. Is it still available?",
    timestamp: "2024-01-20T14:30:00",
  },
  {
    id: "msg2",
    senderId: "current-user",
    receiverId: "user1",
    content: "Yes, it's still available! Would you like to schedule a viewing?",
    timestamp: "2024-01-20T14:32:00",
  },
  {
    id: "msg3",
    senderId: "user1",
    receiverId: "current-user",
    content: "That would be great! What times are available this week?",
    timestamp: "2024-01-20T14:33:00",
  },
  {
    id: "msg4",
    senderId: "user2",
    receiverId: "current-user",
    content:
      "Hello, I saw your listing for the apartment downtown. Do you have any similar properties?",
    timestamp: "2024-01-20T15:30:00",
  },
];

const mockChats: IChat[] = [
  {
    id: "chat1",
    participants: [mockUsers[0], mockCurrentUser],
    lastMessage: mockMessages[2],
    unreadCount: 2,
  },
  {
    id: "chat2",
    participants: [mockUsers[1], mockCurrentUser],
    lastMessage: mockMessages[3],
    unreadCount: 1,
  },
  {
    id: "chat3",
    participants: [mockUsers[2], mockCurrentUser],
    lastMessage: {
      id: "msg5",
      senderId: "user3",
      receiverId: "current-user",
      content: "Thanks for the information about the property!",
      timestamp: "2024-01-20T13:45:00",
    },
  },
];

const Message = () => {
  // State management
  const [chats, setChats] = useState<IChat[]>(mockChats);
  const [messages, setMessages] = useState<IMessage[]>(mockMessages);
  const [selectedChat, setSelectedChat] = useState<IChat | null>(null);
  const [newMessage, setNewMessage] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");

  // Handler functions
  // const handleSearch = (query: string) => {
  //     setSearchQuery(query);
  //     // Implement search logic when API is ready
  // };

  const handleChatSelect = (chat: IChat) => {
    setSelectedChat(chat);
    // In real implementation, fetch messages for selected chat from API
    const chatMessages = mockMessages.filter(
      (msg) =>
        (msg.senderId === chat.participants[0].id &&
          msg.receiverId === mockCurrentUser.id) ||
        (msg.senderId === mockCurrentUser.id &&
          msg.receiverId === chat.participants[0].id),
    );
    setMessages(chatMessages);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    const newMsg: IMessage = {
      id: Date.now().toString(),
      senderId: mockCurrentUser.id,
      receiverId:
        selectedChat.participants.find((p) => p.id !== mockCurrentUser.id)
          ?.id || "",
      content: newMessage,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, newMsg]);

    // Update last message in chat list
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === selectedChat.id ? { ...chat, lastMessage: newMsg } : chat,
      ),
    );

    setNewMessage("");
    // Send message to API when implemented
  };

  return (
    <div className='bg-white w-full h-full rounded-lg mb-6 pr-6 pl-6 flex'>
      {/* Chat List Section */}
      <div className='p-3 h-full mb-3 w-[29%] border-r border-gray-300'>
        <div className='mb-3'>
          <Search
            title='Search'
            className='w-full pl-10 pr-4 py-2 rounded-lg outline-none bg-gray-100 transition-all hover:ring-2 hover:ring-blue-500'
            // onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className='overflow-y-auto h-[calc(100%-60px)]'>
          {chats.map((chat) => {
            const otherParticipant = chat.participants.find(
              (p) => p.id !== mockCurrentUser.id,
            );
            const isSelected = selectedChat?.id === chat.id;

            return (
              <div
                key={chat.id}
                onClick={() => handleChatSelect(chat)}
                className={`p-3 flex items-center h-[75px] rounded-lg transition-all duration-200 mb-2 cursor-pointer
                                    ${
                                      isSelected
                                        ? "bg-primary_color text-white"
                                        : "hover:bg-primary_color hover:text-white"
                                    }`}
              >
                <div className='bg-gray-200 w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                  <img
                    src={otherParticipant?.avatar}
                    alt={otherParticipant?.name}
                    className='w-[full] h-full rounded-full object-cover'
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-md mb-1 font-medium'>
                    {otherParticipant?.name}
                  </div>
                  <div className='text-xs'>{chat.lastMessage?.content}</div>
                </div>
                {chat.unreadCount && (
                  <div className='ml-auto'>
                    <span className='bg-primary_color text-white px-2 py-1 rounded-full text-xs'>
                      {chat.unreadCount}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Chat Area Section */}
      <div className='w-[71%] h-full p-4 flex flex-col'>
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className='flex items-center pb-2 border-b border-gray-200'>
              <div className='bg-gray-200 w-[45px] h-[45px] rounded-full flex items-center justify-center'>
                <img
                  src={selectedChat.participants[0].avatar}
                  alt={selectedChat.participants[0].name}
                  className='w-full h-full rounded-full object-cover'
                />
              </div>
              <div className='ml-3'>
                <div className='text-lg font-medium'>
                  {selectedChat.participants[0].name}
                </div>
                <div
                  className={`text-md ${
                    selectedChat.participants[0].isOnline
                      ? "text-green"
                      : "text-gray-500"
                  } `}
                >
                  {selectedChat.participants[0].isOnline ? "Online" : "Offline"}
                </div>
              </div>
              <div className='ml-auto '>
                <Link href={"/"}>
                  <Image
                    src={"/logo.svg"}
                    alt='logo'
                    width={40}
                    height={43}
                    className='hidden lg:flex'
                  />
                </Link>
              </div>
            </div>

            {/* Messages Area */}
            <div className='flex-1 overflow-y-auto py-4 space-y-4 animate-message'>
              {messages.map((message) => {
                const isCurrentUser = message.senderId === mockCurrentUser.id;
                return (
                  <div
                    key={message.id}
                    className={`flex items-start gap-2.5 ${
                      isCurrentUser ? "flex-row-reverse" : ""
                    }`}
                  >
                    <img
                      className='w-12 h-12 rounded-full'
                      src={
                        isCurrentUser
                          ? mockCurrentUser.avatar
                          : selectedChat.participants[0].avatar
                      }
                      alt='user'
                    />
                    <div className='flex flex-col gap-1 '>
                      <div
                        className={`flex items-center space-x-2 ${
                          isCurrentUser ? "flex-row-reverse" : ""
                        }`}
                      >
                        <span className='ml-2 text-sm font-semibold'>
                          {isCurrentUser
                            ? "You"
                            : selectedChat.participants[0].name}
                        </span>
                        <span className='text-sm text-gray-500'>
                          {new Date(message.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <div
                        className={`flex flex-col leading-1.5 p-3 ${
                          isCurrentUser
                            ? "bg-primary_color text-white rounded-md"
                            : "bg-gray-100 rounded-md"
                        }`}
                      >
                        <p className='text-sm'>{message.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Message Input */}
            <div className='pt-4 border-t border-gray-200'>
              <div className='flex items-center gap-2'>
                <input
                  type='text'
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder='Type a message...'
                  className='flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary_color'
                />
                <button
                  onClick={handleSendMessage}
                  className='p-3 bg-primary_color text-white rounded-lg hover:bg-opacity-90 transition-all'
                >
                  <IoSend size={20} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className='flex items-center justify-center h-full text-gray-500'>
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
