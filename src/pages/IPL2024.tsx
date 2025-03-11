
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import CricketNav from '@/components/CricketNav';
import Footer from '@/components/Footer';
import CricketChatbot from '@/components/CricketChatbot';
import { Trophy, Calendar, UsersRound, TrendingUp, CircleDollarSign } from 'lucide-react';

const IPL2024 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>IPL 2024 - CricketExpress</title>
        <meta name="description" content="Get the latest updates, schedules, and news about IPL 2024." />
      </Helmet>
      
      <Navbar />
      <CricketNav />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative bg-gradient-to-r from-cricket-700 to-cricket-500 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://placehold.co/1920x600/3d9c40/ffffff?text=IPL+2024" 
              alt="IPL 2024 Banner" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="cricket-container py-16 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">IPL 2024</h1>
              <p className="text-xl text-white/90 mb-6">The biggest T20 cricket league returns with more excitement, drama and cricketing action</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🏆</span> 10 Teams
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🗓️</span> March - May 2024
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🏏</span> 74 Matches
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs section */}
        <div className="cricket-container py-8">
          <Tabs defaultValue="teams" className="w-full">
            <TabsList className="w-full mb-6 grid grid-cols-2 md:grid-cols-5 gap-2">
              <TabsTrigger value="teams" className="flex items-center gap-2">
                <UsersRound className="h-4 w-4" />
                <span className="hidden sm:inline">Teams</span>
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Schedule</span>
              </TabsTrigger>
              <TabsTrigger value="standings" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span className="hidden sm:inline">Standings</span>
              </TabsTrigger>
              <TabsTrigger value="stats" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                <span className="hidden sm:inline">Stats</span>
              </TabsTrigger>
              <TabsTrigger value="fantasy" className="flex items-center gap-2">
                <CircleDollarSign className="h-4 w-4" />
                <span className="hidden sm:inline">Fantasy</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="teams" className="animate-fade-in">
              <h2 className="section-title">IPL 2024 Teams</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { name: 'Mumbai Indians', abbr: 'MI', color: 'blue-600' },
                  { name: 'Chennai Super Kings', abbr: 'CSK', color: 'yellow-500' },
                  { name: 'Royal Challengers Bangalore', abbr: 'RCB', color: 'red-600' },
                  { name: 'Kolkata Knight Riders', abbr: 'KKR', color: 'purple-600' },
                  { name: 'Delhi Capitals', abbr: 'DC', color: 'blue-500' },
                  { name: 'Punjab Kings', abbr: 'PBKS', color: 'red-500' },
                  { name: 'Rajasthan Royals', abbr: 'RR', color: 'pink-500' },
                  { name: 'Sunrisers Hyderabad', abbr: 'SRH', color: 'orange-500' },
                  { name: 'Gujarat Titans', abbr: 'GT', color: 'blue-400' },
                  { name: 'Lucknow Super Giants', abbr: 'LSG', color: 'sky-500' }
                ].map((team, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                  >
                    <div className={`bg-${team.color} h-32 flex items-center justify-center`}>
                      <span className="text-white text-5xl font-bold">{team.abbr}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 group-hover:text-cricket-600 transition-colors">{team.name}</h3>
                      <div className="flex justify-between mt-2 text-sm">
                        <span className="text-gray-500">Players: 25</span>
                        <span className="text-gray-500">Titles: {index % 3 === 0 ? 5 : (index % 2 === 0 ? 2 : 1)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="schedule" className="animate-fade-in">
              <h2 className="section-title">IPL 2024 Schedule</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left border-b">Date</th>
                      <th className="py-3 px-4 text-left border-b">Match</th>
                      <th className="py-3 px-4 text-left border-b">Venue</th>
                      <th className="py-3 px-4 text-left border-b">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: 'Mar 22, 2024', match: 'CSK vs RCB', venue: 'Chennai', time: '7:30 PM' },
                      { date: 'Mar 23, 2024', match: 'PBKS vs DC', venue: 'Mohali', time: '3:30 PM' },
                      { date: 'Mar 23, 2024', match: 'KKR vs SRH', venue: 'Kolkata', time: '7:30 PM' },
                      { date: 'Mar 24, 2024', match: 'RR vs LSG', venue: 'Jaipur', time: '3:30 PM' },
                      { date: 'Mar 24, 2024', match: 'GT vs MI', venue: 'Ahmedabad', time: '7:30 PM' },
                      { date: 'Mar 25, 2024', match: 'RCB vs PBKS', venue: 'Bengaluru', time: '7:30 PM' },
                      { date: 'Mar 26, 2024', match: 'CSK vs GT', venue: 'Chennai', time: '7:30 PM' },
                      { date: 'Mar 27, 2024', match: 'SRH vs MI', venue: 'Hyderabad', time: '7:30 PM' }
                    ].map((match, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{match.date}</td>
                        <td className="py-3 px-4 font-medium">{match.match}</td>
                        <td className="py-3 px-4">{match.venue}</td>
                        <td className="py-3 px-4">{match.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="standings" className="animate-fade-in">
              <h2 className="section-title">IPL 2024 Standings</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left border-b">Pos</th>
                      <th className="py-3 px-4 text-left border-b">Team</th>
                      <th className="py-3 px-4 text-center border-b">P</th>
                      <th className="py-3 px-4 text-center border-b">W</th>
                      <th className="py-3 px-4 text-center border-b">L</th>
                      <th className="py-3 px-4 text-center border-b">NR</th>
                      <th className="py-3 px-4 text-center border-b">Pts</th>
                      <th className="py-3 px-4 text-center border-b">NRR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { pos: 1, team: 'CSK', played: 4, won: 3, lost: 1, nr: 0, pts: 6, nrr: '+1.20' },
                      { pos: 2, team: 'GT', played: 4, won: 3, lost: 1, nr: 0, pts: 6, nrr: '+0.85' },
                      { pos: 3, team: 'RR', played: 4, won: 3, lost: 1, nr: 0, pts: 6, nrr: '+0.80' },
                      { pos: 4, team: 'KKR', played: 3, won: 2, lost: 1, nr: 0, pts: 4, nrr: '+1.35' },
                      { pos: 5, team: 'LSG', played: 3, won: 2, lost: 1, nr: 0, pts: 4, nrr: '+0.25' },
                      { pos: 6, team: 'MI', played: 4, won: 1, lost: 3, nr: 0, pts: 2, nrr: '-0.25' },
                      { pos: 7, team: 'RCB', played: 4, won: 1, lost: 3, nr: 0, pts: 2, nrr: '-0.40' },
                      { pos: 8, team: 'DC', played: 4, won: 1, lost: 3, nr: 0, pts: 2, nrr: '-0.70' },
                      { pos: 9, team: 'PBKS', played: 4, won: 1, lost: 3, nr: 0, pts: 2, nrr: '-0.90' },
                      { pos: 10, team: 'SRH', played: 4, won: 1, lost: 3, nr: 0, pts: 2, nrr: '-1.20' }
                    ].map((team) => (
                      <tr key={team.pos} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4">{team.pos}</td>
                        <td className="py-3 px-4 font-semibold">{team.team}</td>
                        <td className="py-3 px-4 text-center">{team.played}</td>
                        <td className="py-3 px-4 text-center">{team.won}</td>
                        <td className="py-3 px-4 text-center">{team.lost}</td>
                        <td className="py-3 px-4 text-center">{team.nr}</td>
                        <td className="py-3 px-4 text-center font-bold">{team.pts}</td>
                        <td className="py-3 px-4 text-center">{team.nrr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="stats" className="animate-fade-in">
              <h2 className="section-title">IPL 2024 Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-4 text-cricket-700">Top Run Scorers</h3>
                  <div className="space-y-4">
                    {[
                      { player: 'Virat Kohli', team: 'RCB', runs: 285, sr: 150.79 },
                      { player: 'Shubman Gill', team: 'GT', runs: 248, sr: 143.35 },
                      { player: 'Jos Buttler', team: 'RR', runs: 235, sr: 158.78 },
                      { player: 'KL Rahul', team: 'LSG', runs: 230, sr: 136.09 },
                      { player: 'Rohit Sharma', team: 'MI', runs: 220, sr: 145.70 }
                    ].map((player, index) => (
                      <div key={index} className="flex items-center border-b border-gray-100 pb-3">
                        <div className="text-gray-500 mr-4">{index + 1}</div>
                        <div className="flex-grow">
                          <div className="font-medium">{player.player}</div>
                          <div className="text-xs text-gray-500">{player.team}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">{player.runs}</div>
                          <div className="text-xs text-gray-500">SR: {player.sr}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-4 text-cricket-700">Top Wicket Takers</h3>
                  <div className="space-y-4">
                    {[
                      { player: 'Jasprit Bumrah', team: 'MI', wickets: 11, economy: 6.92 },
                      { player: 'Yuzvendra Chahal', team: 'RR', wickets: 10, economy: 7.85 },
                      { player: 'Rashid Khan', team: 'GT', wickets: 9, economy: 6.75 },
                      { player: 'Mohammed Shami', team: 'GT', wickets: 9, economy: 8.10 },
                      { player: 'Trent Boult', team: 'RR', wickets: 8, economy: 7.95 }
                    ].map((player, index) => (
                      <div key={index} className="flex items-center border-b border-gray-100 pb-3">
                        <div className="text-gray-500 mr-4">{index + 1}</div>
                        <div className="flex-grow">
                          <div className="font-medium">{player.player}</div>
                          <div className="text-xs text-gray-500">{player.team}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">{player.wickets}</div>
                          <div className="text-xs text-gray-500">Eco: {player.economy}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="fantasy" className="animate-fade-in">
              <h2 className="section-title">IPL 2024 Fantasy League</h2>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Create Your Dream Team</h3>
                <p className="text-gray-600 mb-4">Join millions of cricket fans and create your fantasy IPL team. Pick players, score points based on their real-life performances, and compete with friends in private leagues.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
                    <div className="bg-cricket-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <UsersRound className="h-8 w-8 text-cricket-600" />
                    </div>
                    <h4 className="font-bold mb-2">Pick Your Players</h4>
                    <p className="text-sm text-gray-600">Select 11 players within the 100 credit cap</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
                    <div className="bg-cricket-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trophy className="h-8 w-8 text-cricket-600" />
                    </div>
                    <h4 className="font-bold mb-2">Score Points</h4>
                    <p className="text-sm text-gray-600">Earn points based on player performances</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
                    <div className="bg-cricket-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="h-8 w-8 text-cricket-600" />
                    </div>
                    <h4 className="font-bold mb-2">Win Prizes</h4>
                    <p className="text-sm text-gray-600">Top performers win exciting prizes</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Fantasy Tips for Upcoming Matches</h3>
                
                <div className="space-y-4">
                  {[
                    { match: 'CSK vs RCB', date: 'Apr 15, 2024', captain: 'MS Dhoni', viceCaptain: 'Virat Kohli', topPicks: ['Faf du Plessis', 'Ravindra Jadeja', 'Glenn Maxwell'] },
                    { match: 'MI vs KKR', date: 'Apr 16, 2024', captain: 'Rohit Sharma', viceCaptain: 'Andre Russell', topPicks: ['Jasprit Bumrah', 'Suryakumar Yadav', 'Venkatesh Iyer'] },
                    { match: 'RR vs LSG', date: 'Apr 17, 2024', captain: 'Sanju Samson', viceCaptain: 'KL Rahul', topPicks: ['Jos Buttler', 'Yuzvendra Chahal', 'Ravi Bishnoi'] }
                  ].map((tip, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold">{tip.match}</h4>
                        <span className="text-sm text-gray-500">{tip.date}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-3">
                        <div>
                          <p className="text-sm text-gray-600">Captain Pick</p>
                          <p className="font-medium">{tip.captain}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Vice Captain</p>
                          <p className="font-medium">{tip.viceCaptain}</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm text-gray-600">Top Picks</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {tip.topPicks.map((player, idx) => (
                            <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs">{player}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
      <CricketChatbot />
    </div>
  );
};

export default IPL2024;
