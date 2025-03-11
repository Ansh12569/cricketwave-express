
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import CricketNav from '@/components/CricketNav';
import Footer from '@/components/Footer';
import CricketChatbot from '@/components/CricketChatbot';
import { Globe, Trophy, CalendarDays, UsersRound, MapPin, Clock } from 'lucide-react';

const ChampionsTrophy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Champions Trophy - CricketExpress</title>
        <meta name="description" content="Get the latest updates, schedules, and news about the ICC Champions Trophy." />
      </Helmet>
      
      <Navbar />
      <CricketNav />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://placehold.co/1920x600/0284c7/ffffff?text=Champions+Trophy" 
              alt="Champions Trophy Banner" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="cricket-container py-16 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">ICC Champions Trophy</h1>
              <p className="text-xl text-white/90 mb-6">The prestigious tournament featuring the top 8 ODI teams in world cricket</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🏆</span> Next Edition: 2025
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🇵🇰</span> Defending Champion: Pakistan
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🏏</span> Format: ODI
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Champions Trophy history section */}
        <div className="cricket-container py-8">
          <h2 className="section-title mb-6">Champions Trophy History</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 mb-4">
              The ICC Champions Trophy is a One Day International (ODI) cricket tournament organized by the International Cricket Council (ICC). Originally known as the ICC Knock Out Tournament, it was later renamed as the Champions Trophy in 2002.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                { year: '2017', winner: 'Pakistan', host: 'England & Wales', runnerUp: 'India' },
                { year: '2013', winner: 'India', host: 'England & Wales', runnerUp: 'England' },
                { year: '2009', winner: 'Australia', host: 'South Africa', runnerUp: 'New Zealand' },
                { year: '2006', winner: 'Australia', host: 'India', runnerUp: 'West Indies' },
                { year: '2004', winner: 'West Indies', host: 'England', runnerUp: 'England' },
                { year: '2002', winner: 'India', host: 'Sri Lanka', runnerUp: 'Sri Lanka' },
              ].map((tournament, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-2">
                    <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                    <h3 className="font-bold">{tournament.year} Champions Trophy</h3>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-gray-500">Winner:</span> {tournament.winner}</p>
                    <p><span className="text-gray-500">Runner-up:</span> {tournament.runnerUp}</p>
                    <p><span className="text-gray-500">Host:</span> {tournament.host}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* 2025 Champions Trophy */}
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
              <h2 className="section-title">Champions Trophy 2025</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-700">Tournament Overview</h3>
                    <p className="text-gray-700 mb-4">
                      The ICC Champions Trophy 2025 is set to take place in Pakistan, marking the return of the tournament after an eight-year hiatus. This will be the first major ICC tournament hosted exclusively by Pakistan since the 1996 Cricket World Cup.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>The tournament will feature the top 8 ODI teams in the ICC rankings.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>The format consists of two groups of four teams each, followed by semifinals and a final.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Pakistan, as the host nation, receives automatic qualification.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>The tournament aims to showcase Pakistan's cricketing infrastructure and hospitality.</span>
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
                            <p className="text-sm text-gray-600">February - March 2025</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                          <div>
                            <p className="font-medium">Host Nation</p>
                            <p className="text-sm text-gray-600">Pakistan</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <UsersRound className="h-5 w-5 text-blue-600 mr-3" />
                          <div>
                            <p className="font-medium">Participating Teams</p>
                            <p className="text-sm text-gray-600">8 teams</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-blue-600 mr-3" />
                          <div>
                            <p className="font-medium">Match Format</p>
                            <p className="text-sm text-gray-600">50-over ODI</p>
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
                  { name: 'Gaddafi Stadium', location: 'Lahore, Pakistan', capacity: '27,000', matches: 5 },
                  { name: 'National Stadium', location: 'Karachi, Pakistan', capacity: '34,000', matches: 6 },
                  { name: 'Rawalpindi Cricket Stadium', location: 'Rawalpindi, Pakistan', capacity: '25,000', matches: 4 },
                  { name: 'Multan Cricket Stadium', location: 'Multan, Pakistan', capacity: '30,000', matches: 4 },
                  { name: 'Arbab Niaz Stadium', location: 'Peshawar, Pakistan', capacity: '20,000', matches: 3 },
                  { name: 'Iqbal Stadium', location: 'Faisalabad, Pakistan', capacity: '18,000', matches: 3 }
                ].map((venue, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="h-40 bg-blue-100 relative overflow-hidden">
                      <img 
                        src={`https://placehold.co/400x250/0284c7/ffffff?text=${venue.name.replace(' ', '+')}`} 
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
              <h2 className="section-title">Likely Participating Teams</h2>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <p className="mb-4 text-gray-700">
                  The final lineup for the Champions Trophy 2025 will be determined based on the ICC ODI rankings. Below are the teams most likely to qualify based on current rankings.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  {[
                    { team: 'Pakistan', status: 'Host' },
                    { team: 'India', status: 'Qualified' },
                    { team: 'Australia', status: 'Qualified' },
                    { team: 'England', status: 'Qualified' },
                    { team: 'South Africa', status: 'Qualified' },
                    { team: 'New Zealand', status: 'Qualified' },
                    { team: 'Bangladesh', status: 'Likely' },
                    { team: 'Sri Lanka', status: 'Likely' }
                  ].map((team, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                      <div className="h-32 bg-blue-50 flex items-center justify-center">
                        <img 
                          src={`https://placehold.co/200x150/0284c7/ffffff?text=${team.team}`} 
                          alt={team.team} 
                          className="h-24 object-contain" 
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-bold text-gray-800">{team.team}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                          team.status === 'Host' ? 'bg-purple-100 text-purple-800' : 
                          team.status === 'Qualified' ? 'bg-green-100 text-green-800' : 
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {team.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="schedule" className="animate-fade-in">
              <h2 className="section-title">Tentative Schedule</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-6">
                  The official schedule for the Champions Trophy 2025 is yet to be announced. Below is a tentative format of how the tournament might be structured.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">Group Stage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                      <h4 className="font-bold text-lg mb-3 text-center">Group A</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center p-2 border-b border-gray-200">
                          <span className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3">1</span>
                          <span>Pakistan (Host)</span>
                        </li>
                        <li className="flex items-center p-2 border-b border-gray-200">
                          <span className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3">2</span>
                          <span>Australia</span>
                        </li>
                        <li className="flex items-center p-2 border-b border-gray-200">
                          <span className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3">3</span>
                          <span>New Zealand</span>
                        </li>
                        <li className="flex items-center p-2">
                          <span className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3">4</span>
                          <span>Bangladesh</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                      <h4 className="font-bold text-lg mb-3 text-center">Group B</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center p-2 border-b border-gray-200">
                          <span className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3">1</span>
                          <span>India</span>
                        </li>
                        <li className="flex items-center p-2 border-b border-gray-200">
                          <span className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3">2</span>
                          <span>England</span>
                        </li>
                        <li className="flex items-center p-2 border-b border-gray-200">
                          <span className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3">3</span>
                          <span>South Africa</span>
                        </li>
                        <li className="flex items-center p-2">
                          <span className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mr-3">4</span>
                          <span>Sri Lanka</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-700">Knockout Stage</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-3 px-4 text-left border-b">Stage</th>
                          <th className="py-3 px-4 text-left border-b">Tentative Date</th>
                          <th className="py-3 px-4 text-left border-b">Matchup</th>
                          <th className="py-3 px-4 text-left border-b">Venue</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-medium">Semi-Final 1</td>
                          <td className="py-3 px-4">March 5, 2025</td>
                          <td className="py-3 px-4">Group A Winner vs Group B Runner-up</td>
                          <td className="py-3 px-4">Lahore</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-medium">Semi-Final 2</td>
                          <td className="py-3 px-4">March 7, 2025</td>
                          <td className="py-3 px-4">Group B Winner vs Group A Runner-up</td>
                          <td className="py-3 px-4">Karachi</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-bold">Final</td>
                          <td className="py-3 px-4">March 10, 2025</td>
                          <td className="py-3 px-4">Winner SF1 vs Winner SF2</td>
                          <td className="py-3 px-4">Lahore</td>
                        </tr>
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

export default ChampionsTrophy;
