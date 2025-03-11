
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import CricketNav from '@/components/CricketNav';
import Footer from '@/components/Footer';
import CricketChatbot from '@/components/CricketChatbot';
import { CalendarDays, Trophy, Users, BarChart3, Clock } from 'lucide-react';

const WomensCricket = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Women's Cricket - CricketExpress</title>
        <meta name="description" content="Latest news, updates, and coverage of women's cricket events worldwide." />
      </Helmet>
      
      <Navbar />
      <CricketNav />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative bg-gradient-to-r from-pink-600 to-purple-500 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://placehold.co/1920x600/d946ef/ffffff?text=Women's+Cricket" 
              alt="Women's Cricket Banner" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="cricket-container py-16 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Women's Cricket</h1>
              <p className="text-xl text-white/90 mb-6">Celebrating the rising stars and established legends of women's cricket</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🏆</span> World Cup Champions: Australia
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🏏</span> T20 Champions: Australia
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">👑</span> No. 1 Ranked: Australia
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured tournament */}
        <div className="cricket-container py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-purple-100 p-8 flex items-center justify-center">
                <img 
                  src="https://placehold.co/400x400/d946ef/ffffff?text=Women's+World+Cup" 
                  alt="Women's World Cup" 
                  className="max-h-48 object-contain"
                />
              </div>
              <div className="w-full md:w-2/3 p-8">
                <div className="flex items-center mb-3">
                  <Trophy className="h-5 w-5 text-pink-500 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">ICC Women's T20 World Cup 2024</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  The ICC Women's T20 World Cup 2024 is scheduled to be held in Bangladesh, featuring the top 10 women's cricket teams from around the world competing for the prestigious title.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-xs text-gray-500 block">Host</span>
                    <span className="font-medium">Bangladesh</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-xs text-gray-500 block">Dates</span>
                    <span className="font-medium">Oct 1-22, 2024</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-xs text-gray-500 block">Teams</span>
                    <span className="font-medium">10</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-xs text-gray-500 block">Defending Champions</span>
                    <span className="font-medium">Australia</span>
                  </div>
                </div>
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition-colors text-sm font-medium">
                  View Tournament
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content tabs */}
        <div className="cricket-container py-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                <span>Tournaments</span>
              </TabsTrigger>
              <TabsTrigger value="teams" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Teams</span>
              </TabsTrigger>
              <TabsTrigger value="rankings" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span>Rankings</span>
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>History</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="animate-fade-in">
              <h2 className="section-title">Women's Cricket Tournaments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  { 
                    name: "Women's ODI World Cup", 
                    next: "2025 - India", 
                    format: "50-over ODI",
                    teams: "10 teams",
                    champion: "Australia (7 titles)" 
                  },
                  { 
                    name: "Women's T20 World Cup", 
                    next: "2024 - Bangladesh", 
                    format: "Twenty20",
                    teams: "10 teams",
                    champion: "Australia (6 titles)" 
                  },
                  { 
                    name: "Women's Championship", 
                    next: "2022-2025", 
                    format: "ODI League",
                    teams: "10 teams",
                    champion: "Australia (Current leader)" 
                  },
                  { 
                    name: "Commonwealth Games", 
                    next: "2026", 
                    format: "Twenty20",
                    teams: "8 teams",
                    champion: "Australia (2022)" 
                  },
                  { 
                    name: "The Hundred Women's", 
                    next: "2024 - England", 
                    format: "100-ball cricket",
                    teams: "8 teams",
                    champion: "Oval Invincibles (2023)" 
                  },
                  { 
                    name: "Women's Big Bash League", 
                    next: "2024-25 - Australia", 
                    format: "Twenty20",
                    teams: "8 teams",
                    champion: "Brisbane Heat (2023)" 
                  }
                ].map((tournament, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-3">{tournament.name}</h3>
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Next Edition:</span>
                          <span className="font-medium">{tournament.next}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Format:</span>
                          <span>{tournament.format}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Teams:</span>
                          <span>{tournament.teams}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Champion:</span>
                          <span className="font-medium">{tournament.champion}</span>
                        </div>
                      </div>
                      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="teams" className="animate-fade-in">
              <h2 className="section-title">Top Women's Cricket Teams</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { team: "Australia", titles: "7 World Cups, 6 T20 World Cups", players: "Alyssa Healy, Meg Lanning, Ellyse Perry", color: "yellow" },
                  { team: "England", titles: "4 World Cups, 1 T20 World Cup", players: "Heather Knight, Nat Sciver, Sophie Ecclestone", color: "blue" },
                  { team: "India", titles: "0 World Cups, 0 T20 World Cups", players: "Harmanpreet Kaur, Smriti Mandhana, Jemimah Rodrigues", color: "blue" },
                  { team: "New Zealand", titles: "1 World Cup, 0 T20 World Cups", players: "Sophie Devine, Amelia Kerr, Suzie Bates", color: "black" },
                  { team: "South Africa", titles: "0 World Cups, 0 T20 World Cups", players: "Dane van Niekerk, Laura Wolvaardt, Shabnim Ismail", color: "green" },
                  { team: "West Indies", titles: "0 World Cups, 1 T20 World Cup", players: "Stafanie Taylor, Deandra Dottin, Hayley Matthews", color: "maroon" },
                  { team: "Pakistan", titles: "0 World Cups, 0 T20 World Cups", players: "Bismah Maroof, Nida Dar, Diana Baig", color: "green" },
                  { team: "Sri Lanka", titles: "0 World Cups, 0 T20 World Cups", players: "Chamari Athapaththu, Hasini Perera, Kavisha Dilhari", color: "blue" }
                ].map((team, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
                    <div className={`h-3 bg-${team.color === 'blue' ? 'blue-600' : team.color === 'yellow' ? 'yellow-500' : team.color === 'green' ? 'green-600' : team.color === 'black' ? 'gray-800' : team.color === 'maroon' ? 'red-800' : 'purple-600'}`}></div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-lg">{team.team}</h3>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Rank #{index + 1}</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-500 block mb-1">Major Titles:</span>
                          <span>{team.titles}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block mb-1">Key Players:</span>
                          <span>{team.players}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="rankings" className="animate-fade-in">
              <h2 className="section-title">ICC Women's Team Rankings</h2>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 text-pink-700">ODI Rankings</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-3 px-4 text-left border-b">Rank</th>
                          <th className="py-3 px-4 text-left border-b">Team</th>
                          <th className="py-3 px-4 text-left border-b">Matches</th>
                          <th className="py-3 px-4 text-left border-b">Points</th>
                          <th className="py-3 px-4 text-left border-b">Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { rank: 1, team: "Australia", matches: 42, points: 5642, rating: 134 },
                          { rank: 2, team: "England", matches: 37, points: 4332, rating: 117 },
                          { rank: 3, team: "South Africa", matches: 35, points: 3862, rating: 110 },
                          { rank: 4, team: "India", matches: 38, points: 3954, rating: 104 },
                          { rank: 5, team: "New Zealand", matches: 33, points: 3162, rating: 96 }
                        ].map((team, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                            <td className="py-3 px-4 font-medium">{team.rank}</td>
                            <td className="py-3 px-4">{team.team}</td>
                            <td className="py-3 px-4">{team.matches}</td>
                            <td className="py-3 px-4">{team.points}</td>
                            <td className="py-3 px-4 font-bold">{team.rating}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 text-pink-700">T20I Rankings</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-3 px-4 text-left border-b">Rank</th>
                          <th className="py-3 px-4 text-left border-b">Team</th>
                          <th className="py-3 px-4 text-left border-b">Matches</th>
                          <th className="py-3 px-4 text-left border-b">Points</th>
                          <th className="py-3 px-4 text-left border-b">Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { rank: 1, team: "Australia", matches: 52, points: 7012, rating: 135 },
                          { rank: 2, team: "India", matches: 55, points: 6875, rating: 125 },
                          { rank: 3, team: "England", matches: 48, points: 5724, rating: 119 },
                          { rank: 4, team: "New Zealand", matches: 42, points: 4806, rating: 114 },
                          { rank: 5, team: "West Indies", matches: 46, points: 4554, rating: 99 }
                        ].map((team, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                            <td className="py-3 px-4 font-medium">{team.rank}</td>
                            <td className="py-3 px-4">{team.team}</td>
                            <td className="py-3 px-4">{team.matches}</td>
                            <td className="py-3 px-4">{team.points}</td>
                            <td className="py-3 px-4 font-bold">{team.rating}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="animate-fade-in">
              <h2 className="section-title">History of Women's Cricket</h2>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <p className="text-gray-700 mb-4">
                  Women's cricket has come a long way since its origins. The first recorded women's cricket match was played in England in 1745, and the first women's cricket club was formed in 1887 in Yorkshire.
                </p>
                
                <div className="space-y-6 mt-6">
                  <div className="border-l-4 border-pink-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Origins and Early Development</h3>
                    <p className="text-gray-700">
                      The first women's international cricket match was played between England and Australia in 1934, which was the beginning of the Women's Ashes. The International Women's Cricket Council was formed in 1958 to coordinate women's cricket around the world.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">First World Cup</h3>
                    <p className="text-gray-700">
                      The first Women's Cricket World Cup was held in England in 1973, two years before the first men's tournament. England won the inaugural tournament by defeating Australia in the final.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Modern Era</h3>
                    <p className="text-gray-700">
                      In 2005, the International Women's Cricket Council merged with the International Cricket Council (ICC), bringing women's cricket under the same governing body as men's cricket. This led to increased funding, professionalism, and visibility for women's cricket.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">T20 Revolution</h3>
                    <p className="text-gray-700">
                      The introduction of the ICC Women's T20 World Cup in 2009 significantly boosted the popularity of women's cricket. The shorter format has helped attract new audiences and increase media coverage.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4 py-2">
                    <h3 className="font-bold text-lg mb-2">Professional Era</h3>
                    <p className="text-gray-700">
                      The last decade has seen a rapid increase in the professionalization of women's cricket. Many countries now offer central contracts to female cricketers, allowing them to train and play full-time. The Women's Big Bash League in Australia and The Hundred in England have set new standards for women's domestic cricket competitions.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-pink-700">Women's World Cup Winners</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-3 px-4 text-left border-b">Year</th>
                          <th className="py-3 px-4 text-left border-b">Winner</th>
                          <th className="py-3 px-4 text-left border-b">Runner-up</th>
                          <th className="py-3 px-4 text-left border-b">Host</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { year: "2022", winner: "Australia", runnerUp: "England", host: "New Zealand" },
                          { year: "2017", winner: "England", runnerUp: "India", host: "England" },
                          { year: "2013", winner: "Australia", runnerUp: "West Indies", host: "India" },
                          { year: "2009", winner: "England", runnerUp: "New Zealand", host: "Australia" },
                          { year: "2005", winner: "Australia", runnerUp: "India", host: "South Africa" },
                          { year: "2000", winner: "New Zealand", runnerUp: "Australia", host: "New Zealand" },
                          { year: "1997", winner: "Australia", runnerUp: "New Zealand", host: "India" },
                          { year: "1993", winner: "England", runnerUp: "New Zealand", host: "England" }
                        ].map((worldCup, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                            <td className="py-3 px-4">{worldCup.year}</td>
                            <td className="py-3 px-4 font-medium">{worldCup.winner}</td>
                            <td className="py-3 px-4">{worldCup.runnerUp}</td>
                            <td className="py-3 px-4">{worldCup.host}</td>
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

export default WomensCricket;
