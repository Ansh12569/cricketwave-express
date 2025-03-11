
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LiveScoreCard from './LiveScoreCard';

// Mock data for scores
const mockLiveMatches = [
  {
    id: 'match1',
    teams: [
      { team: 'India', logoText: 'IND', score: '287/5', overs: '45.2' },
      { team: 'Australia', logoText: 'AUS', score: '', overs: '' }
    ],
    status: 'live' as const,
    statusText: 'India won the toss and elected to bat',
    series: 'India vs Australia 2024',
    matchType: 'ODI',
    venue: 'Sydney Cricket Ground',
    date: '2023-04-15',
    time: 'Live'
  },
  {
    id: 'match2',
    teams: [
      { team: 'England', logoText: 'ENG', score: '325/8', overs: '50.0' },
      { team: 'South Africa', logoText: 'SA', score: '210/4', overs: '32.1' }
    ],
    status: 'live' as const,
    statusText: 'South Africa need 116 runs from 107 balls',
    series: 'England Tour of South Africa',
    matchType: 'ODI',
    venue: 'Johannesburg',
    date: '2023-04-15',
    time: 'Live'
  },
];

const mockRecentMatches = [
  {
    id: 'match3',
    teams: [
      { team: 'Pakistan', logoText: 'PAK', score: '200/8', overs: '20.0' },
      { team: 'New Zealand', logoText: 'NZ', score: '202/4', overs: '19.2' }
    ],
    status: 'completed' as const,
    statusText: 'New Zealand won by 6 wickets',
    series: 'T20I Tri-Series',
    matchType: 'T20I',
    venue: 'Auckland',
    date: '2023-04-14',
    time: 'Completed'
  },
  {
    id: 'match4',
    teams: [
      { team: 'West Indies', logoText: 'WI', score: '267/10', overs: '48.3' },
      { team: 'Sri Lanka', logoText: 'SL', score: '268/7', overs: '47.1' }
    ],
    status: 'completed' as const,
    statusText: 'Sri Lanka won by 3 wickets',
    series: 'West Indies vs Sri Lanka',
    matchType: 'ODI',
    venue: 'Bridgetown',
    date: '2023-04-13',
    time: 'Completed'
  },
];

const mockUpcomingMatches = [
  {
    id: 'match5',
    teams: [
      { team: 'Bangladesh', logoText: 'BAN' },
      { team: 'Zimbabwe', logoText: 'ZIM' }
    ],
    status: 'upcoming' as const,
    statusText: 'Match starts in 2 days',
    series: 'Zimbabwe tour of Bangladesh',
    matchType: 'Test',
    venue: 'Dhaka',
    date: 'Apr 18, 2023',
    time: '10:00 AM'
  },
  {
    id: 'match6',
    teams: [
      { team: 'Mumbai Indians', logoText: 'MI' },
      { team: 'Chennai Super Kings', logoText: 'CSK' }
    ],
    status: 'upcoming' as const,
    statusText: 'Match starts tomorrow',
    series: 'IPL 2023',
    matchType: 'T20',
    venue: 'Mumbai',
    date: 'Apr 16, 2023',
    time: '7:30 PM'
  },
];

const LiveScoresSection = () => {
  const [activeTab, setActiveTab] = useState('live');

  return (
    <section className="py-8">
      <div className="cricket-container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title flex items-center">
            <Trophy className="mr-2 h-5 w-5 text-cricket-500" />
            Matches
          </h2>
          <Link to="/matches" className="text-cricket-600 hover:text-cricket-700 text-sm font-medium flex items-center">
            All Matches <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <Tabs defaultValue="live" onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="bg-gray-100 p-1">
            <TabsTrigger 
              value="live" 
              className={`${activeTab === 'live' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'} flex-1 rounded-md`}
            >
              <span className="flex items-center justify-center">
                <span className={`${activeTab === 'live' ? 'bg-red-500' : 'bg-gray-400'} h-2 w-2 rounded-full mr-2`}></span>
                Live
              </span>
            </TabsTrigger>
            <TabsTrigger 
              value="recent" 
              className={`${activeTab === 'recent' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'} flex-1 rounded-md`}
            >
              Recent
            </TabsTrigger>
            <TabsTrigger 
              value="upcoming" 
              className={`${activeTab === 'upcoming' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'} flex-1 rounded-md`}
            >
              Upcoming
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="live" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockLiveMatches.map(match => (
                <LiveScoreCard key={match.id} match={match} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recent" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockRecentMatches.map(match => (
                <LiveScoreCard key={match.id} match={match} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockUpcomingMatches.map(match => (
                <LiveScoreCard key={match.id} match={match} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LiveScoresSection;
