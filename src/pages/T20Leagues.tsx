
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import CricketNav from '@/components/CricketNav';
import Footer from '@/components/Footer';
import CricketChatbot from '@/components/CricketChatbot';
import { Trophy, Calendar, Tv, Globe, Users, DollarSign, Star } from 'lucide-react';

const T20Leagues = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>T20 Leagues - CricketExpress</title>
        <meta name="description" content="Coverage of all major T20 cricket leagues around the world including IPL, BBL, CPL, PSL, and more." />
      </Helmet>
      
      <Navbar />
      <CricketNav />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative bg-gradient-to-r from-purple-800 to-purple-500 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://placehold.co/1920x600/6d28d9/ffffff?text=T20+Leagues" 
              alt="T20 Leagues Banner" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="cricket-container py-16 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">T20 Cricket Leagues</h1>
              <p className="text-xl text-white/90 mb-6">Explosive action, international stars, and franchise cricket at its best</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🏆</span> 10+ Major Leagues
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">💰</span> Billion Dollar Industry
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🌍</span> Global Phenomenon
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured tournaments */}
        <div className="cricket-container py-8">
          <h2 className="section-title mb-6">Major T20 Leagues</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Indian Premier League",
                shortName: "IPL",
                teams: 10,
                country: "India",
                period: "Mar-May",
                founded: 2008,
                prizePool: "$6.8 million",
                currentChampion: "Chennai Super Kings",
                color: "blue"
              },
              {
                name: "Big Bash League",
                shortName: "BBL",
                teams: 8,
                country: "Australia",
                period: "Dec-Jan",
                founded: 2011,
                prizePool: "$890,000",
                currentChampion: "Brisbane Heat",
                color: "orange"
              },
              {
                name: "Pakistan Super League",
                shortName: "PSL",
                teams: 6,
                country: "Pakistan",
                period: "Feb-Mar",
                founded: 2015,
                prizePool: "$1 million",
                currentChampion: "Lahore Qalandars",
                color: "green"
              },
              {
                name: "Caribbean Premier League",
                shortName: "CPL",
                teams: 6,
                country: "West Indies",
                period: "Aug-Sep",
                founded: 2013,
                prizePool: "$1.2 million",
                currentChampion: "Trinbago Knight Riders",
                color: "red"
              },
              {
                name: "The Hundred",
                shortName: "Hundred",
                teams: 8,
                country: "England",
                period: "Jul-Aug",
                founded: 2021,
                prizePool: "$780,000",
                currentChampion: "Oval Invincibles",
                color: "indigo"
              },
              {
                name: "SA20",
                shortName: "SA20",
                teams: 6,
                country: "South Africa",
                period: "Jan-Feb",
                founded: 2023,
                prizePool: "$1.5 million",
                currentChampion: "Sunrisers Eastern Cape",
                color: "yellow"
              }
            ].map((league, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className={`h-2 bg-${league.color === 'blue' ? 'blue-600' : league.color === 'orange' ? 'orange-500' : league.color === 'green' ? 'green-600' : league.color === 'red' ? 'red-600' : league.color === 'indigo' ? 'indigo-600' : 'yellow-500'}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1 group-hover:text-purple-600 transition-colors">{league.name}</h3>
                      <p className="text-sm text-gray-500">{league.country} • Est. {league.founded}</p>
                    </div>
                    <div className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center font-bold text-gray-700">
                      {league.shortName}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 text-gray-400 mr-2" />
                      <span><strong>{league.teams}</strong> Teams</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      <span>{league.period}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Trophy className="h-4 w-4 text-gray-400 mr-2" />
                      <span>{league.currentChampion}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 text-gray-400 mr-2" />
                      <span>{league.prizePool}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    League Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tabs content */}
        <div className="cricket-container py-8 bg-gray-50">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full mb-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Global Impact</span>
              </TabsTrigger>
              <TabsTrigger value="players" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>Star Players</span>
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Upcoming Seasons</span>
              </TabsTrigger>
              <TabsTrigger value="broadcast" className="flex items-center gap-2">
                <Tv className="h-4 w-4" />
                <span>Broadcasting</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="animate-fade-in">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-purple-700">The Global Impact of T20 Leagues</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Economic Growth</h3>
                    <p className="text-gray-700 mb-4">
                      T20 leagues have transformed cricket into a multi-billion dollar industry. The IPL alone was valued at $10.9 billion in 2023, with lucrative broadcasting deals and sponsorships driving unprecedented financial growth in the sport.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-medium text-purple-800 mb-2">Economic Impact</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• IPL contributes approximately $11 billion to India's economy annually</li>
                        <li>• Player salaries have increased by over 500% in the last decade</li>
                        <li>• Media rights now account for 70-80% of league revenues</li>
                        <li>• Creates thousands of direct and indirect jobs in host countries</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Cricketing Innovation</h3>
                    <p className="text-gray-700 mb-4">
                      T20 leagues have revolutionized cricket techniques, strategies, and training methods. Players now develop specialized skills, and the format has led to increased scoring rates and athletic fielding standards across all formats of the game.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-medium text-purple-800 mb-2">Game Evolution</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Average T20 scoring rates have increased from 7.5 to 9.0+ runs per over</li>
                        <li>• New shots like the scoop, ramp, and reverse sweep are now standard</li>
                        <li>• Data analytics and specialized coaching have become essential</li>
                        <li>• Boundary sizes, power hitting, and yorker bowling have evolved significantly</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Global Talent Development</h3>
                    <p className="text-gray-700 mb-4">
                      T20 leagues provide platforms for emerging cricketers to showcase their talents alongside established stars. This cross-pollination of skills and knowledge has accelerated player development worldwide.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-medium text-purple-800 mb-2">Success Stories</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Rashid Khan (Afghanistan) became a global star through IPL</li>
                        <li>• Nepal's Sandeep Lamichhane gained international recognition</li>
                        <li>• USA's Ali Khan made history at CPL and other leagues</li>
                        <li>• Associate nation players now regularly secure T20 league contracts</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Cultural Impact</h3>
                    <p className="text-gray-700 mb-4">
                      T20 leagues have made cricket more accessible and entertaining to new audiences. The format's shorter duration, entertainment elements, and star power have expanded cricket's global reach and popularity.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-medium text-purple-800 mb-2">Cultural Shifts</p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Female viewership has increased by over 40% in the last 5 years</li>
                        <li>• Entertainment integration with music, celebrities and performances</li>
                        <li>• Digital engagement through social media and fantasy sports</li>
                        <li>• Growth of cricket in non-traditional markets like USA and Canada</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="players" className="animate-fade-in">
              <h2 className="section-title">Top T20 League Stars</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    name: "Andre Russell", 
                    country: "West Indies", 
                    speciality: "Power Hitter & Bowler",
                    leagues: "IPL, CPL, BBL, PSL, BPL",
                    stats: "Strike Rate: 170+, 6000+ runs, 300+ wickets" 
                  },
                  { 
                    name: "Rashid Khan", 
                    country: "Afghanistan", 
                    speciality: "Leg Spinner",
                    leagues: "IPL, BBL, CPL, PSL, The Hundred",
                    stats: "Economy: 6.30, 500+ wickets, Hat-tricks: 4" 
                  },
                  { 
                    name: "Jos Buttler", 
                    country: "England", 
                    speciality: "Wicketkeeper-Batsman",
                    leagues: "IPL, BBL, SA20, The Hundred",
                    stats: "Average: 35+, Strike Rate: 150+, 7000+ runs" 
                  },
                  { 
                    name: "Sunil Narine", 
                    country: "West Indies", 
                    speciality: "Mystery Spinner & Opener",
                    leagues: "IPL, CPL, BBL, PSL, LPL",
                    stats: "Economy: 6.50, 450+ wickets, Strike Rate: 160+" 
                  },
                  { 
                    name: "Glenn Maxwell", 
                    country: "Australia", 
                    speciality: "All-rounder",
                    leagues: "IPL, BBL, The Hundred, PSL",
                    stats: "Strike Rate: 155+, 5000+ runs, 100+ wickets" 
                  },
                  { 
                    name: "Jasprit Bumrah", 
                    country: "India", 
                    speciality: "Fast Bowler",
                    leagues: "IPL",
                    stats: "Economy: 7.40, 150+ wickets, Yorker specialist" 
                  },
                  { 
                    name: "Faf du Plessis", 
                    country: "South Africa", 
                    speciality: "Batsman & Captain",
                    leagues: "IPL, CPL, PSL, BBL, SA20",
                    stats: "Average: 36+, 8000+ runs, 50+ fifties" 
                  },
                  { 
                    name: "Wanindu Hasaranga", 
                    country: "Sri Lanka", 
                    speciality: "Leg Spinner & Lower Order Bat",
                    leagues: "IPL, BBL, LPL, ILT20",
                    stats: "Economy: 6.90, 250+ wickets, Strike Rate: 140+" 
                  }
                ].map((player, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
                    <div className="h-48 bg-purple-100 relative overflow-hidden">
                      <img 
                        src={`https://placehold.co/400x300/8b5cf6/ffffff?text=${player.name.replace(' ', '+')}`} 
                        alt={player.name} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent w-full p-4">
                        <h3 className="font-bold text-white text-lg">{player.name}</h3>
                        <p className="text-white/80 text-sm">{player.country}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <span className="text-gray-500 min-w-24">Speciality:</span>
                          <span className="text-gray-700 font-medium">{player.speciality}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gray-500 min-w-24">Leagues:</span>
                          <span className="text-gray-700">{player.leagues}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gray-500 min-w-24">Key Stats:</span>
                          <span className="text-gray-700">{player.stats}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="upcoming" className="animate-fade-in">
              <h2 className="section-title">Upcoming T20 League Seasons</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-purple-100 text-purple-800">
                      <th className="py-3 px-4 text-left">League</th>
                      <th className="py-3 px-4 text-left">Country</th>
                      <th className="py-3 px-4 text-left">Season</th>
                      <th className="py-3 px-4 text-left">Dates</th>
                      <th className="py-3 px-4 text-left">Teams</th>
                      <th className="py-3 px-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { league: "Indian Premier League", country: "India", season: "2025", dates: "Mar 22 - May 25, 2025", teams: 10, status: "Confirmed" },
                      { league: "Major League Cricket", country: "USA", season: "2024", dates: "Jul 5 - Jul 28, 2024", teams: 6, status: "Confirmed" },
                      { league: "Caribbean Premier League", country: "West Indies", season: "2024", dates: "Aug 28 - Oct 5, 2024", teams: 6, status: "Confirmed" },
                      { league: "The Hundred", country: "England", season: "2024", dates: "Jul 23 - Aug 18, 2024", teams: 8, status: "Confirmed" },
                      { league: "Big Bash League", country: "Australia", season: "2024-25", dates: "Dec 5, 2024 - Jan 27, 2025", teams: 8, status: "Tentative" },
                      { league: "SA20", country: "South Africa", season: "2025", dates: "Jan 10 - Feb 8, 2025", teams: 6, status: "Tentative" },
                      { league: "Pakistan Super League", country: "Pakistan", season: "2025", dates: "Feb 15 - Mar 15, 2025", teams: 6, status: "Tentative" },
                      { league: "Lanka Premier League", country: "Sri Lanka", season: "2024", dates: "Jul 1 - Jul 21, 2024", teams: 5, status: "Tentative" },
                      { league: "Bangladesh Premier League", country: "Bangladesh", season: "2025", dates: "Jan 5 - Feb 15, 2025", teams: 7, status: "Planning" },
                      { league: "International League T20", country: "UAE", season: "2025", dates: "Jan 13 - Feb 12, 2025", teams: 6, status: "Tentative" }
                    ].map((season, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 font-medium">{season.league}</td>
                        <td className="py-3 px-4">{season.country}</td>
                        <td className="py-3 px-4">{season.season}</td>
                        <td className="py-3 px-4">{season.dates}</td>
                        <td className="py-3 px-4">{season.teams}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            season.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 
                            season.status === 'Tentative' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {season.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="broadcast" className="animate-fade-in">
              <h2 className="section-title">Broadcasting & Streaming</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-6">
                  T20 leagues command some of the most valuable broadcasting rights in sports. The digital revolution has transformed how fans consume cricket content, with streaming platforms playing an increasingly important role alongside traditional television broadcasts.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-purple-700">Broadcast Value</h3>
                    <div className="space-y-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">IPL (2023-2027)</span>
                          <span className="font-bold text-purple-800">$6.2 Billion</span>
                        </div>
                        <p className="text-sm text-gray-600">Split between Star Sports (TV) and Viacom18 (Digital)</p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">The Hundred (2025-2028)</span>
                          <span className="font-bold text-purple-800">$925 Million</span>
                        </div>
                        <p className="text-sm text-gray-600">Sky Sports and BBC share rights</p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">BBL (2025-2031)</span>
                          <span className="font-bold text-purple-800">$850 Million</span>
                        </div>
                        <p className="text-sm text-gray-600">Seven Network and Foxtel</p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">PSL (2024-2026)</span>
                          <span className="font-bold text-purple-800">$190 Million</span>
                        </div>
                        <p className="text-sm text-gray-600">PTV Sports and multiple digital platforms</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-purple-700">Global Viewership</h3>
                    <div className="space-y-4">
                      <div className="flex items-center mb-6">
                        <div className="flex-grow">
                          <h4 className="font-medium mb-1">IPL Viewership</h4>
                          <div className="h-4 bg-gray-200 rounded-full">
                            <div className="h-4 bg-purple-600 rounded-full" style={{ width: '82%' }}></div>
                          </div>
                        </div>
                        <span className="ml-4 font-bold">820M+</span>
                      </div>
                      
                      <div className="flex items-center mb-6">
                        <div className="flex-grow">
                          <h4 className="font-medium mb-1">BBL Viewership</h4>
                          <div className="h-4 bg-gray-200 rounded-full">
                            <div className="h-4 bg-purple-600 rounded-full" style={{ width: '21%' }}></div>
                          </div>
                        </div>
                        <span className="ml-4 font-bold">210M+</span>
                      </div>
                      
                      <div className="flex items-center mb-6">
                        <div className="flex-grow">
                          <h4 className="font-medium mb-1">PSL Viewership</h4>
                          <div className="h-4 bg-gray-200 rounded-full">
                            <div className="h-4 bg-purple-600 rounded-full" style={{ width: '15%' }}></div>
                          </div>
                        </div>
                        <span className="ml-4 font-bold">150M+</span>
                      </div>
                      
                      <div className="flex items-center mb-6">
                        <div className="flex-grow">
                          <h4 className="font-medium mb-1">CPL Viewership</h4>
                          <div className="h-4 bg-gray-200 rounded-full">
                            <div className="h-4 bg-purple-600 rounded-full" style={{ width: '12%' }}></div>
                          </div>
                        </div>
                        <span className="ml-4 font-bold">120M+</span>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="flex-grow">
                          <h4 className="font-medium mb-1">The Hundred Viewership</h4>
                          <div className="h-4 bg-gray-200 rounded-full">
                            <div className="h-4 bg-purple-600 rounded-full" style={{ width: '10%' }}></div>
                          </div>
                        </div>
                        <span className="ml-4 font-bold">100M+</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-purple-700">Major Broadcast Partners</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    "Star Sports", "Sony Sports", "Sky Sports", "Fox Cricket",
                    "Willow TV", "SuperSport", "ESPN+", "Hotstar",
                    "PTV Sports", "FanCode", "DAZN", "Flow Sports"
                  ].map((broadcaster, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
                      <span className="font-medium text-gray-800">{broadcaster}</span>
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

export default T20Leagues;
