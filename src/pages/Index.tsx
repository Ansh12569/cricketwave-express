
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import CricketNav from '@/components/CricketNav';
import LiveScoresSection from '@/components/LiveScoresSection';
import FeaturedNews from '@/components/FeaturedNews';
import CricketChatbot from '@/components/CricketChatbot';
import Footer from '@/components/Footer';
import WordPressIntegration from '@/components/WordPressIntegration';

// Import mock components for the homepage sections
const SeriesHighlights = () => (
  <section className="py-8 bg-gray-50">
    <div className="cricket-container">
      <h2 className="section-title">Featured Series</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* IPL Series */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg p-4 shadow-md overflow-hidden relative group">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">IPL 2024</h3>
            <p className="text-sm text-white/80 mb-4">The biggest T20 league returns with more excitement</p>
            <a href="/series/ipl-2024" className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-all">
              View Series
            </a>
          </div>
          <div className="absolute bottom-0 right-0 opacity-20 group-hover:opacity-30 transition-opacity">
            <img src="https://placehold.co/200x200/3d9c40/ffffff?text=IPL" alt="IPL" className="w-32 h-32" />
          </div>
        </div>

        {/* World Cup Series */}
        <div className="bg-gradient-to-r from-blue-500 to-sky-600 text-white rounded-lg p-4 shadow-md overflow-hidden relative group">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">T20 World Cup</h3>
            <p className="text-sm text-white/80 mb-4">Follow the journey of teams competing for global glory</p>
            <a href="/series/t20-world-cup" className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-all">
              View Series
            </a>
          </div>
          <div className="absolute bottom-0 right-0 opacity-20 group-hover:opacity-30 transition-opacity">
            <img src="https://placehold.co/200x200/3d9c40/ffffff?text=T20+WC" alt="T20 World Cup" className="w-32 h-32" />
          </div>
        </div>

        {/* Women's Cricket Series */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg p-4 shadow-md overflow-hidden relative group">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Women's Championship</h3>
            <p className="text-sm text-white/80 mb-4">Celebrating women's cricket at the highest level</p>
            <a href="/series/womens-championship" className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-all">
              View Series
            </a>
          </div>
          <div className="absolute bottom-0 right-0 opacity-20 group-hover:opacity-30 transition-opacity">
            <img src="https://placehold.co/200x200/3d9c40/ffffff?text=Women's" alt="Women's Cricket" className="w-32 h-32" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const VideoHighlights = () => (
  <section className="py-8">
    <div className="cricket-container">
      <h2 className="section-title">Video Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-video bg-gray-200">
              <img 
                src={`https://placehold.co/400x225/3d9c40/ffffff?text=Highlight+${index + 1}`} 
                alt={`Cricket Highlight ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-6 border-b-6 border-l-10 border-transparent border-l-cricket-600 ml-1"></div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm line-clamp-2 mb-1">Match Highlights: India vs Australia - 3rd ODI 2024</h3>
              <p className="text-xs text-gray-500">2.5M views • 3 days ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>CricketExpress - Your Ultimate Cricket Destination</title>
        <meta name="description" content="Get the latest cricket news, live scores, match updates and in-depth coverage of IPL, World Cup, and all international cricket." />
      </Helmet>
      
      <Navbar />
      <CricketNav />
      <WordPressIntegration />
      
      <main className="flex-grow">
        <LiveScoresSection />
        <SeriesHighlights />
        <FeaturedNews />
        <VideoHighlights />
      </main>
      
      <Footer />
      <CricketChatbot />
    </div>
  );
};

export default Index;
