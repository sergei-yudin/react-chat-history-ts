export type MessageType = 'response' | 'message' | 'typing';

export interface Message {
  id: string;
  from: { name: string };
  type: MessageType;
  time: string;
  text?: string;
}

interface MessageHistoryProps {
  list?: Message[];
}

const classByType: Record<MessageType, string> = {
  response: 'message-response',
  message: 'message-own',
  typing: 'message-typing',
};

export default function MessageHistory({ list = [] }: MessageHistoryProps) {
  if (list.length === 0) return null;

  return (
    <div className="chat-history">
      {list.map((message) => (
        <div className={`message-item ${classByType[message.type]}`} key={message.id}>
          <div className="message-header"><span className="message-author">{message.from.name}</span><span className="message-time">{message.time}</span></div>
          {message.type === 'typing'
            ? <div className="typing-indicator"><span>печатает...</span><div className="typing-dots"><span /><span /><span /></div></div>
            : <div className="message-bubble">{message.text}</div>}
        </div>
      ))}
    </div>
  );
}
