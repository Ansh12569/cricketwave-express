
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type TeamScore = {
  team: string;
  logoText: string;
  score?: string;
  overs?: string;
};

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

interface LiveScoreCardProps {
  match: MatchInfo;
}

const LiveScoreCard = ({ match }: LiveScoreCardProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Simulate score updates for live matches
  useEffect(() => {
    if (match.status === 'live') {
      const interval = setInterval(() => {
        // Random chance to update score (30% chance)
        if (Math.random() < 0.3) {
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), 2000);
        }
      }, 10000);
      
      return () => clearInterval(interval);
    }
  }, [match.status]);

  const getStatusBadge = () => {
    switch (match.status) {
      case 'live':
        return <Badge variant="destructive" className="live-indicator">LIVE</Badge>;
      case 'completed':
        return <Badge variant="outline" className="bg-gray-100">COMPLETED</Badge>;
      case 'upcoming':
        return <Badge variant="secondary" className="bg-gray-50">UPCOMING</Badge>;
      default:
        return null;
    }
  };

  return (
    <Link to={`/match/${match.id}`} className={`score-card group block ${isAnimating ? 'animate-score-update' : ''}`}>
      <div className="p-3 sm:p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            {getStatusBadge()}
            <span className="text-xs text-gray-500 ml-2">{match.series}</span>
          </div>
          <div className="text-xs text-gray-500 flex items-center">
            <span className="hidden sm:inline mr-2">{match.matchType}</span>
            <span className="flex items-center">
              {match.status === 'upcoming' ? (
                <Calendar className="h-3 w-3 mr-1" />
              ) : (
                <Clock className="h-3 w-3 mr-1" />
              )}
              {match.status === 'upcoming' ? match.date : match.time}
            </span>
          </div>
        </div>
        
        {/* Team 1 */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="team-logo bg-cricket-50 text-cricket-700 mr-2">
              {match.teams[0].logoText}
            </div>
            <span className="font-medium">{match.teams[0].team}</span>
          </div>
          <div className="text-sm font-semibold">
            {match.teams[0].score && (
              <span>
                {match.teams[0].score} 
                <span className="text-xs text-gray-500 ml-1">
                  {match.teams[0].overs && `(${match.teams[0].overs})`}
                </span>
              </span>
            )}
          </div>
        </div>
        
        {/* Team 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="team-logo bg-cricket-50 text-cricket-700 mr-2">
              {match.teams[1].logoText}
            </div>
            <span className="font-medium">{match.teams[1].team}</span>
          </div>
          <div className="text-sm font-semibold">
            {match.teams[1].score && (
              <span>
                {match.teams[1].score} 
                <span className="text-xs text-gray-500 ml-1">
                  {match.teams[1].overs && `(${match.teams[1].overs})`}
                </span>
              </span>
            )}
          </div>
        </div>

        {/* Status text */}
        <div className="mt-3 text-xs">
          <p className={`${match.status === 'live' ? 'text-cricket-600 font-medium' : 'text-gray-600'}`}>
            {match.statusText}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LiveScoreCard;
