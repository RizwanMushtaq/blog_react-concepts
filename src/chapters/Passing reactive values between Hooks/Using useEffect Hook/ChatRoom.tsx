import React, { useEffect, useState } from "react";
import { showNotification } from "./notifications.ts";

const ChatRoom: React.FC<{ roomId: string }> = ({ roomId }) => {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    showNotification("New message Number: " + Math.random());
  }, [roomId, serverUrl]);

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
