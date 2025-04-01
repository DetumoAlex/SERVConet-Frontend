import { useState, useEffect } from "react";
import { db, auth } from "@/lib/firebase";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";

const ChatBox = ({ clientId, vendorId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const chatRoomId = [clientId, vendorId].sort().join("_"); // Unique chat ID

  useEffect(() => {
    const q = query(collection(db, "chats", chatRoomId, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [chatRoomId]);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    await addDoc(collection(db, "chats", chatRoomId, "messages"), {
      text: newMessage,
      senderId: auth.currentUser.uid,
      timestamp: new Date(),
    });

    setNewMessage("");
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <div className="h-60 overflow-y-auto">
        {messages.map((msg) => (
          <p key={msg.id} className={`p-2 ${msg.senderId === auth.currentUser?.uid ? "text-right bg-blue-100" : "bg-gray-200"} rounded`}>
            {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className="w-full p-2 border rounded mt-2"
        placeholder="Type a message..."
      />
      <button onClick={sendMessage} className="w-full mt-2 bg-blue-500 text-white p-2 rounded">
        Send
      </button>
    </div>
  );
};

export default ChatBox;
