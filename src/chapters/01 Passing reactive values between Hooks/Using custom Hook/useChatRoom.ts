import { useEffect } from "react";
import { showNotification } from "./notifications.ts";

export function useChatRoom({
  serverUrl,
  roomId,
}: {
  serverUrl: string;
  roomId: string;
}): void {
  useEffect(() => {
    showNotification("New message Number: " + Math.random());
  }, [roomId, serverUrl]);
}
