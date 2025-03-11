
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

// Gemini API configuration
const GEMINI_API_KEY = "AIzaSyAmDYh4zv0J3S8h1zo5c-4FEVfrrKsC7ng";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

const CricketChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm the Cricket Assistant powered by Gemini AI. Ask me anything about cricket stats, players, matches, or news!",
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

  const generateGeminiPrompt = (userQuestion: string) => {
    return {
      contents: [
        {
          parts: [
            {
              text: `You are CricketGPT, a specialized cricket assistant that only answers questions related to cricket. 
              
              Rules:
              1. Only answer questions related to cricket (players, matches, statistics, tournaments, history, rules, etc.)
              2. If a question is not about cricket, politely decline to answer and explain you can only discuss cricket topics.
              3. Provide accurate, up-to-date information about cricket whenever possible.
              4. Keep answers concise but informative.
              5. Be conversational and friendly in tone.
              6. If you're unsure about a specific recent match or statistic, mention that you might not have the latest information.
              
              User question: ${userQuestion}`
            }
          ]
        }
      ]
    };
  };

  const callGeminiAPI = async (userQuestion: string) => {
    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(generateGeminiPrompt(userQuestion)),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from Gemini');
      }

      const data = await response.json();
      
      // Extract the response text from the Gemini API response
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('Invalid response format from Gemini API');
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return "I'm having trouble connecting to my cricket knowledge database right now. Please try again later or ask another cricket question!";
    }
  };

  // Fallback responses if API call fails
  const cricketFallbackResponses = [
    "I'm sorry, I couldn't retrieve the latest cricket information. Please try asking another cricket question!",
    "As a cricket assistant, I should know this! Let me check with my team and get back to you on this cricket query.",
    "That's a great cricket question! Unfortunately, I'm having trouble accessing my database right now. Please try again shortly.",
    "I'm still learning about all aspects of cricket. Could you try rephrasing your question or ask about something else in cricket?",
    "My cricket statistics database needs a quick refreshment. Please ask me something else about cricket while it updates!"
  ];

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
    
    try {
      let responseContent = '';
      
      if (isCricketRelated) {
        // Call Gemini API for cricket-related queries
        responseContent = await callGeminiAPI(input);
      } else {
        // Polite refusal for non-cricket questions
        responseContent = "I'm sorry, I can only answer questions related to cricket. Please ask me something about cricket matches, players, teams, or tournaments!";
      }
      
      const botMessage: Message = {
        id: Date.now().toString(),
        content: responseContent,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error in chat response:', error);
      // Use a random fallback response
      const fallbackResponse = cricketFallbackResponses[Math.floor(Math.random() * cricketFallbackResponses.length)];
      
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: fallbackResponse,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
      
      toast({
        title: "Connection Issue",
        description: "Couldn't connect to the cricket knowledge base. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
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
