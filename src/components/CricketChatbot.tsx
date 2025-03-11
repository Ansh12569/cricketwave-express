
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';

type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
};

const CricketChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm the Cricket Assistant. Ask me anything about cricket and I'll do my best to help!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen, isMinimized]);

  const mockResponses: Record<string, string> = {
    ipl: "The Indian Premier League (IPL) is a professional Twenty20 cricket league in India. It is one of the most popular and lucrative cricket leagues in the world.",
    worldcup: "The ICC Cricket World Cup is the international championship of One Day International cricket. The event is organized by the International Cricket Council (ICC).",
    dhoni: "Mahendra Singh Dhoni is a former Indian cricketer and captain of the Indian national team. Under his captaincy, India won the 2007 ICC World Twenty20, the 2011 Cricket World Cup, and the 2013 ICC Champions Trophy.",
    kohli: "Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. He is considered one of the best batsmen of his era.",
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Check if the message is cricket-related (simplified check)
    const input = inputValue.toLowerCase();
    const cricketKeywords = ['cricket', 'ipl', 'world cup', 'test match', 't20', 'odi', 'bowler', 'batsman', 'wicket', 'run', 'score', 'match', 'player', 'team', 'dhoni', 'kohli', 'sachin', 'rohit'];
    
    const isCricketRelated = cricketKeywords.some(keyword => input.includes(keyword));
    
    // Simulate API response delay
    setTimeout(() => {
      let responseContent = '';
      
      if (isCricketRelated) {
        // Find matching keywords in our mock database
        const matchingKeyword = Object.keys(mockResponses).find(key => input.includes(key));
        
        if (matchingKeyword) {
          responseContent = mockResponses[matchingKeyword];
        } else {
          responseContent = "That's a great cricket question! In a real implementation, I would connect to the Gemini API to provide a detailed response about cricket.";
        }
      } else {
        responseContent = "I'm sorry, I can only answer questions related to cricket. Please ask me something about cricket matches, players, teams, or tournaments.";
      }
      
      const botMessage: Message = {
        id: Date.now().toString(),
        content: responseContent,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button 
        onClick={toggleChat} 
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-cricket-600 hover:bg-cricket-700 text-white shadow-lg"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div 
      className={`fixed bottom-6 right-6 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 transition-all duration-300 ease-in-out
      ${isMinimized ? 'w-72 h-14' : 'w-80 sm:w-96 h-[500px]'}`}
    >
      {/* Chat header */}
      <div className="bg-cricket-600 text-white p-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-5 w-5" />
          <span className="font-medium">Cricket Assistant</span>
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-cricket-700" onClick={toggleMinimize}>
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-cricket-700" onClick={toggleChat}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Chat messages */}
          <ScrollArea className="h-[400px] p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[85%] animate-fade-in
                      ${message.isUser 
                        ? 'bg-cricket-100 text-cricket-900' 
                        : 'bg-gray-100 text-gray-800'
                      }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[85%]">
                    <div className="flex space-x-1 items-center">
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef}></div>
            </div>
          </ScrollArea>

          {/* Chat input */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about cricket..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={isLoading || !inputValue.trim()} 
                className="bg-cricket-600 hover:bg-cricket-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Cricket-related questions only. Powered by Gemini AI.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CricketChatbot;
