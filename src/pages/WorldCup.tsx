
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import CricketNav from '@/components/CricketNav';
import Footer from '@/components/Footer';
import CricketChatbot from '@/components/CricketChatbot';
import { Globe, Trophy, CalendarDays, UsersRound, MapPin } from 'lucide-react';

const WorldCup = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Cricket World Cup - CricketExpress</title>
        <meta name="description" content="Get the latest updates, schedules, and news about the Cricket World Cup." />
      </Helmet>
      
      <Navbar />
      <CricketNav />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-blue-500 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://placehold.co/1920x600/1e40af/ffffff?text=World+Cup" 
              alt="World Cup Banner" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="cricket-container py-16 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cricket World Cup</h1>
              <p className="text-xl text-white/90 mb-6">The pinnacle of cricket excellence where nations compete for global glory</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🌎</span> 16 Teams
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🏆</span> 48 Matches
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🏏</span> Since 1975
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* World Cup history section */}
        <div className="cricket-container py-8">
          <h2 className="section-title mb-6">World Cup History</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 mb-4">
              The ICC Cricket World Cup is the international championship of One Day International cricket. The event is organized by the International Cricket Council (ICC), with preliminary qualification rounds leading up to a finals tournament.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                { year: '2023', winner: 'Australia', host: 'India', runnerUp: 'India' },
                { year: '2019', winner: 'England', host: 'England & Wales', runnerUp: 'New Zealand' },
                { year: '2015', winner: 'Australia', host: 'Australia & New Zealand', runnerUp: 'New Zealand' },
                { year: '2011', winner: 'India', host: 'India, Sri Lanka & Bangladesh', runnerUp: 'Sri Lanka' },
                { year: '2007', winner: 'Australia', host: 'West Indies', runnerUp: 'Sri Lanka' },
                { year: '2003', winner: 'Australia', host: 'South Africa, Zimbabwe & Kenya', runnerUp: 'India' },
              ].map((worldCup, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                    <h3 className="font-bold">{worldCup.year} World Cup</h3>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-gray-500">Winner:</span> {worldCup.winner}</p>
                    <p><span className="text-gray-500">Runner-up:</span> {worldCup.runnerUp}</p>
                    <p><span className="text-gray-500">Host:</span> {worldCup.host}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Upcoming World Cup */}
        <div className="cricket-container py-8 bg-gray-50">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full mb-6 grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger value="venues" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Venues</span>
              </TabsTrigger>
              <TabsTrigger value="teams" className="flex items-center gap-2">
                <UsersRound className="h-4 w-4" />
                <span>Teams</span>
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>Schedule</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="animate-fade-in">
              <h2 className="section-title">T20 World Cup 2024</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-700">Tournament Overview</h3>
                    <p className="text-gray-700 mb-4">
                      The 2024 ICC Men's T20 World Cup will be the ninth ICC Men's T20 World Cup tournament, scheduled to be hosted by the West Indies and the United States in June 2024.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>The tournament will feature 20 teams, an increase from 16 in the previous edition.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>For the first time, the USA will co-host an ICC tournament.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>The tournament will be played in a new format with four groups of five teams each.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Top two teams from each group will advance to the Super 8 stage.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-gray-100 p-6 rounded-lg w-full max-w-md">
                      <h3 className="text-lg font-bold mb-4 text-center text-blue-700">Key Information</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <CalendarDays className="h-5 w-5 text-blue-600 mr-3" />
                          <div>
                            <p className="font-medium">Dates</p>
                            <p className="text-sm text-gray-600">June 4 - June 30, 2024</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                          <div>
                            <p className="font-medium">Host Nations</p>
                            <p className="text-sm text-gray-600">West Indies & United States</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <UsersRound className="h-5 w-5 text-blue-600 mr-3" />
                          <div>
                            <p className="font-medium">Participating Teams</p>
                            <p className="text-sm text-gray-600">20 teams</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Trophy className="h-5 w-5 text-blue-600 mr-3" />
                          <div>
                            <p className="font-medium">Defending Champion</p>
                            <p className="text-sm text-gray-600">England</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="venues" className="animate-fade-in">
              <h2 className="section-title">Tournament Venues</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Kensington Oval', location: 'Bridgetown, Barbados', capacity: '28,000', matches: 9 },
                  { name: 'Providence Stadium', location: 'Georgetown, Guyana', capacity: '15,000', matches: 7 },
                  { name: 'Sabina Park', location: 'Kingston, Jamaica', capacity: '25,000', matches: 7 },
                  { name: 'Nassau County Stadium', location: 'New York, USA', capacity: '34,000', matches: 8 },
                  { name: 'Central Broward Park', location: 'Florida, USA', capacity: '20,000', matches: 8 },
                  { name: 'Sir Vivian Richards Stadium', location: 'North Sound, Antigua', capacity: '19,000', matches: 7 },
                  { name: 'Queen's Park Oval', location: 'Port of Spain, Trinidad', capacity: '23,000', matches: 8 },
                  { name: 'Dallas Cricket Stadium', location: 'Texas, USA', capacity: '16,000', matches: 7 },
                  { name: 'Brian Lara Stadium', location: 'Tarouba, Trinidad', capacity: '21,000', matches: 7 }
                ].map((venue, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="h-40 bg-blue-100 relative overflow-hidden">
                      <img 
                        src={`https://placehold.co/400x250/1e40af/ffffff?text=${venue.name.replace(' ', '+')}`} 
                        alt={venue.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors">{venue.name}</h3>
                      <p className="text-gray-600 mb-3">{venue.location}</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Capacity: {venue.capacity}</span>
                        <span className="text-gray-500">Matches: {venue.matches}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="teams" className="animate-fade-in">
              <h2 className="section-title">Participating Teams</h2>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700">World Cup 2024 Groups</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { group: 'A', teams: ['India', 'Pakistan', 'Ireland', 'Canada', 'USA'] },
                    { group: 'B', teams: ['England', 'Australia', 'Namibia', 'Scotland', 'Oman'] },
                    { group: 'C', teams: ['New Zealand', 'West Indies', 'Afghanistan', 'Uganda', 'Papua New Guinea'] },
                    { group: 'D', teams: ['South Africa', 'Sri Lanka', 'Bangladesh', 'Netherlands', 'Nepal'] },
                  ].map((group, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                      <div className="bg-blue-600 text-white py-2 px-4">
                        <h4 className="font-bold">Group {group.group}</h4>
                      </div>
                      <ul className="p-4">
                        {group.teams.map((team, idx) => (
                          <li key={idx} className="py-2 border-b border-gray-200 last:border-0 flex items-center">
                            <span className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-800 text-xs font-bold rounded-full mr-3">
                              {idx + 1}
                            </span>
                            {team}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-700">Previous World Cup Winners</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 text-left border-b">Year</th>
                        <th className="py-3 px-4 text-left border-b">Winner</th>
                        <th className="py-3 px-4 text-left border-b">Runner-up</th>
                        <th className="py-3 px-4 text-left border-b">Host</th>
                        <th className="py-3 px-4 text-left border-b">Final Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { year: '2022', winner: 'England', runnerUp: 'Pakistan', host: 'Australia', result: 'England won by 5 wickets' },
                        { year: '2021', winner: 'Australia', runnerUp: 'New Zealand', host: 'UAE & Oman', result: 'Australia won by 8 wickets' },
                        { year: '2016', winner: 'West Indies', runnerUp: 'England', host: 'India', result: 'West Indies won by 4 wickets' },
                        { year: '2014', winner: 'Sri Lanka', runnerUp: 'India', host: 'Bangladesh', result: 'Sri Lanka won by 6 wickets' },
                        { year: '2012', winner: 'West Indies', runnerUp: 'Sri Lanka', host: 'Sri Lanka', result: 'West Indies won by 36 runs' },
                        { year: '2010', winner: 'England', runnerUp: 'Australia', host: 'West Indies', result: 'England won by 7 wickets' },
                        { year: '2009', winner: 'Pakistan', runnerUp: 'Sri Lanka', host: 'England', result: 'Pakistan won by 8 wickets' },
                        { year: '2007', winner: 'India', runnerUp: 'Pakistan', host: 'South Africa', result: 'India won by 5 runs' }
                      ].map((worldCup, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4">{worldCup.year}</td>
                          <td className="py-3 px-4 font-medium">{worldCup.winner}</td>
                          <td className="py-3 px-4">{worldCup.runnerUp}</td>
                          <td className="py-3 px-4">{worldCup.host}</td>
                          <td className="py-3 px-4 text-sm">{worldCup.result}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="schedule" className="animate-fade-in">
              <h2 className="section-title">T20 World Cup 2024 Schedule</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">Group Stage Matches</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-3 px-4 text-left border-b">Date</th>
                          <th className="py-3 px-4 text-left border-b">Match</th>
                          <th className="py-3 px-4 text-left border-b">Venue</th>
                          <th className="py-3 px-4 text-left border-b">Group</th>
                          <th className="py-3 px-4 text-left border-b">Time (Local)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { date: 'June 4, 2024', match: 'USA vs Canada', venue: 'Nassau County, NY', group: 'A', time: '8:30 PM' },
                          { date: 'June 5, 2024', match: 'West Indies vs Papua New Guinea', venue: 'Guyana', group: 'C', time: '7:30 PM' },
                          { date: 'June 5, 2024', match: 'Namibia vs Oman', venue: 'Barbados', group: 'B', time: '1:30 PM' },
                          { date: 'June 6, 2024', match: 'Sri Lanka vs South Africa', venue: 'New York', group: 'D', time: '8:30 PM' },
                          { date: 'June 7, 2024', match: 'Pakistan vs USA', venue: 'Dallas', group: 'A', time: '7:30 PM' },
                          { date: 'June 7, 2024', match: 'India vs Ireland', venue: 'New York', group: 'A', time: '8:30 PM' },
                          { date: 'June 8, 2024', match: 'Australia vs England', venue: 'Barbados', group: 'B', time: '7:30 PM' },
                          { date: 'June 8, 2024', match: 'Netherlands vs Nepal', venue: 'Dallas', group: 'D', time: '1:30 PM' },
                          { date: 'June 9, 2024', match: 'New Zealand vs Afghanistan', venue: 'Guyana', group: 'C', time: '7:30 PM' },
                          { date: 'June 9, 2024', match: 'Bangladesh vs Sri Lanka', venue: 'Dallas', group: 'D', time: '1:30 PM' }
                        ].map((match, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                            <td className="py-3 px-4">{match.date}</td>
                            <td className="py-3 px-4 font-medium">{match.match}</td>
                            <td className="py-3 px-4">{match.venue}</td>
                            <td className="py-3 px-4">{match.group}</td>
                            <td className="py-3 px-4">{match.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-700">Knockout Matches</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-3 px-4 text-left border-b">Date</th>
                          <th className="py-3 px-4 text-left border-b">Match</th>
                          <th className="py-3 px-4 text-left border-b">Venue</th>
                          <th className="py-3 px-4 text-left border-b">Time (Local)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { date: 'June 26, 2024', match: 'Semi-Final 1', venue: 'Trinidad', time: '7:30 PM' },
                          { date: 'June 27, 2024', match: 'Semi-Final 2', venue: 'Guyana', time: '7:30 PM' },
                          { date: 'June 29, 2024', match: 'Final', venue: 'Barbados', time: '7:30 PM' },
                        ].map((match, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                            <td className="py-3 px-4">{match.date}</td>
                            <td className="py-3 px-4 font-bold">{match.match}</td>
                            <td className="py-3 px-4">{match.venue}</td>
                            <td className="py-3 px-4">{match.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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

export default WorldCup;
