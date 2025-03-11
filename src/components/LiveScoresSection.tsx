
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LiveScoreCard from './LiveScoreCard';
import { useToast } from '@/hooks/use-toast';

// Cricket API configuration
const CRICKET_API_KEY = "2cf5caf4-c9d7-4479-83db-518b9f6209e9";
const CRICKET_API_BASE_URL = "https://api.cricapi.com/v1";

// We need to define the TeamScore type to satisfy TypeScript
type TeamScore = {
  team: string;
  logoText: string;
  score?: string;
  overs?: string;
};

// Match info type for our component
type MatchInfo = {
  id: string;
  teams: [TeamScore, TeamScore];
  status: 'live' | 'completed' | 'upcoming';
  statusText: string;
  series: string;
  matchType: string;
  venue: string;
  date: string;
  time: string;
};

// API response types
type CricketApiMatch = {
  id: string;
  name: string;
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  teamInfo: {
    name: string;
    shortname: string;
    img: string;
  }[];
  score?: {
    r: number;
    w: number;
    o: number;
    inning: string;
  }[];
  matchType?: string;
  matchStarted?: boolean;
  matchEnded?: boolean;
};

type CricketApiResponse = {
  apikey: string;
  data: CricketApiMatch[];
  status: string;
  info: {
    hitsToday: number;
    hitsLimit: number;
    credits: number;
    server: number;
    offsetRows: number;
    totalRows: number;
    queryTime: number;
  };
};

const LiveScoresSection = () => {
  const [activeTab, setActiveTab] = useState('live');
  const [liveMatches, setLiveMatches] = useState<MatchInfo[]>([]);
  const [recentMatches, setRecentMatches] = useState<MatchInfo[]>([]);
  const [upcomingMatches, setUpcomingMatches] = useState<MatchInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Helper function to convert API data to our MatchInfo format
  const convertToMatchInfo = (match: CricketApiMatch, status: 'live' | 'completed' | 'upcoming'): MatchInfo => {
    // Extract team data
    const teams: [TeamScore, TeamScore] = [
      { 
        team: match.teams[0] || match.teamInfo?.[0]?.name || "Team 1", 
        logoText: match.teamInfo?.[0]?.shortname || match.teams[0]?.substring(0, 3)?.toUpperCase() || "T1",
        score: '', 
        overs: '' 
      },
      { 
        team: match.teams[1] || match.teamInfo?.[1]?.name || "Team 2", 
        logoText: match.teamInfo?.[1]?.shortname || match.teams[1]?.substring(0, 3)?.toUpperCase() || "T2",
        score: '', 
        overs: '' 
      }
    ];

    // Add scores if available
    if (match.score && match.score.length > 0) {
      // Map innings to teams
      match.score.forEach(scoreInfo => {
        const inningTeam = scoreInfo.inning.split(" ")[0];
        const scoreString = `${scoreInfo.r}/${scoreInfo.w}`;
        const oversString = `${scoreInfo.o}`;
        
        if (teams[0].team.includes(inningTeam)) {
          teams[0].score = scoreString;
          teams[0].overs = oversString;
        } else if (teams[1].team.includes(inningTeam)) {
          teams[1].score = scoreString;
          teams[1].overs = oversString;
        }
      });
    }

    // Format match date and time
    const matchDate = new Date(match.dateTimeGMT);
    const formattedDate = matchDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
    const formattedTime = matchDate.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });

    // Create status text based on match state
    let statusText = match.status || '';
    if (status === 'upcoming') {
      statusText = `Match starts ${formattedDate} at ${formattedTime}`;
    }

    return {
      id: match.id,
      teams: teams,
      status: status,
      statusText: statusText,
      series: match.name,
      matchType: match.matchType || 'Unknown',
      venue: match.venue || 'Unknown Venue',
      date: formattedDate,
      time: status === 'live' ? 'Live' : formattedTime
    };
  };

  useEffect(() => {
    const fetchCricketData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Fetch current matches
        const currentMatchesResponse = await fetch(`${CRICKET_API_BASE_URL}/currentMatches?apikey=${CRICKET_API_KEY}&offset=0`);
        
        if (!currentMatchesResponse.ok) {
          throw new Error('Failed to fetch current matches');
        }
        
        const currentMatchesData: CricketApiResponse = await currentMatchesResponse.json();
        
        if (currentMatchesData.status !== 'success') {
          throw new Error(`API Error: ${currentMatchesData.status}`);
        }
        
        // Process matches into our format
        const currentMatches = currentMatchesData.data || [];
        
        const live: MatchInfo[] = [];
        const recent: MatchInfo[] = [];
        const upcoming: MatchInfo[] = [];
        
        currentMatches.forEach(match => {
          if (match.matchStarted && !match.matchEnded) {
            // Live matches
            live.push(convertToMatchInfo(match, 'live'));
          } else if (match.matchEnded) {
            // Recently completed
            recent.push(convertToMatchInfo(match, 'completed'));
          } else {
            // Upcoming
            upcoming.push(convertToMatchInfo(match, 'upcoming'));
          }
        });
        
        setLiveMatches(live.slice(0, 3));
        setRecentMatches(recent.slice(0, 3));
        setUpcomingMatches(upcoming.slice(0, 3));
        
        // Show success toast
        toast({
          title: "Cricket Data Updated",
          description: `Loaded ${live.length} live, ${recent.length} recent, and ${upcoming.length} upcoming matches`,
        });
        
      } catch (err) {
        console.error('Error fetching cricket data:', err);
        setError('Failed to load match data. Using fallback data instead.');
        
        // Use fallback data
        setLiveMatches(mockLiveMatches);
        setRecentMatches(mockRecentMatches);
        setUpcomingMatches(mockUpcomingMatches);
        
        toast({
          title: "Connection Error",
          description: "Using cached match data. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCricketData();
    
    // Set up refresh interval - every 2 minutes
    const intervalId = setInterval(fetchCricketData, 2 * 60 * 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [toast]);

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

        {error && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-md mb-4 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}

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
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-white rounded-lg shadow animate-pulse h-48"></div>
                ))}
              </div>
            ) : liveMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {liveMatches.map(match => (
                  <LiveScoreCard key={match.id} match={match} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No live matches at the moment
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="recent" className="animate-fade-in">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-white rounded-lg shadow animate-pulse h-48"></div>
                ))}
              </div>
            ) : recentMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentMatches.map(match => (
                  <LiveScoreCard key={match.id} match={match} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No recent matches to display
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="upcoming" className="animate-fade-in">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-white rounded-lg shadow animate-pulse h-48"></div>
                ))}
              </div>
            ) : upcomingMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {upcomingMatches.map(match => (
                  <LiveScoreCard key={match.id} match={match} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No upcoming matches scheduled
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

// Fallback mock data in case API fails
const mockLiveMatches = [
  {
    id: 'match1',
    teams: [
      { team: 'India', logoText: 'IND', score: '287/5', overs: '45.2' },
      { team: 'Australia', logoText: 'AUS', score: '', overs: '' }
    ] as [TeamScore, TeamScore],
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
    ] as [TeamScore, TeamScore],
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
    ] as [TeamScore, TeamScore],
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
    ] as [TeamScore, TeamScore],
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
      { team: 'Bangladesh', logoText: 'BAN', score: '', overs: '' },
      { team: 'Zimbabwe', logoText: 'ZIM', score: '', overs: '' }
    ] as [TeamScore, TeamScore],
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
      { team: 'Mumbai Indians', logoText: 'MI', score: '', overs: '' },
      { team: 'Chennai Super Kings', logoText: 'CSK', score: '', overs: '' }
    ] as [TeamScore, TeamScore],
    status: 'upcoming' as const,
    statusText: 'Match starts tomorrow',
    series: 'IPL 2023',
    matchType: 'T20',
    venue: 'Mumbai',
    date: 'Apr 16, 2023',
    time: '7:30 PM'
  },
];

export default LiveScoresSection;
