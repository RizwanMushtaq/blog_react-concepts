import React, { useState } from "react";
import { useChatRoom } from "./useChatRoom.ts";

const ChatRoom: React.FC<{ roomId: string }> = ({ roomId }) => {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useChatRoom({
    serverUrl,
    roomId,
  });

  return (
    <>
      <label>
        Server URL:
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
};

export default ChatRoom;
