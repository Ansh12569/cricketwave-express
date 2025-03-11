
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Sample news data
const featuredNews = [
  {
    id: '1',
    title: 'India clinches thrilling victory against Australia in final over drama',
    excerpt: 'Virat Kohli's masterful century guides India to a memorable win as the series concludes with high tension...',
    category: 'International',
    image: 'https://placehold.co/800x450/3d9c40/ffffff?text=Cricket+Match',
    date: '2 hours ago',
    author: 'Rahul Sharma',
  },
  {
    id: '2',
    title: 'IPL 2024: Complete team analysis and predictions ahead of the tournament',
    excerpt: 'With the auction completed and teams finalized, our experts analyze each squad's strengths and weaknesses...',
    category: 'IPL',
    image: 'https://placehold.co/800x450/3d9c40/ffffff?text=IPL+2024',
    date: '5 hours ago',
    author: 'Priya Patel',
  },
  {
    id: '3',
    title: "Women's World Cup: England advances to semifinals with dominant performance",
    excerpt: 'England's bowling attack dismantles South Africa as they secure their place in the final four of the tournament...',
    category: "Women's Cricket",
    image: 'https://placehold.co/800x450/3d9c40/ffffff?text=Womens+Cricket',
    date: '1 day ago',
    author: 'Sarah Wilson',
  },
];

const FeaturedNews = () => {
  return (
    <section className="py-8">
      <div className="cricket-container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title">Featured News</h2>
          <Link to="/news" className="text-cricket-600 hover:text-cricket-700 text-sm font-medium flex items-center">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredNews.map((news, index) => (
            <div 
              key={news.id} 
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300
                ${index === 0 ? 'md:col-span-3 lg:col-span-2' : ''}`}
            >
              <div className={`${index === 0 ? 'md:flex' : ''}`}>
                <div className={`${index === 0 ? 'md:w-1/2' : ''}`}>
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-48 object-cover" 
                  />
                </div>
                <div className={`p-4 ${index === 0 ? 'md:w-1/2' : ''}`}>
                  <span className="inline-block px-2 py-1 bg-cricket-100 text-cricket-700 text-xs font-medium rounded mb-2">
                    {news.category}
                  </span>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-cricket-600 transition-colors">
                    <Link to={`/news/${news.id}`}>
                      {news.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                    {news.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{news.author}</span>
                    <span>{news.date}</span>
                  </div>
                  {index === 0 && (
                    <Button 
                      variant="outline" 
                      className="mt-4 border-cricket-500 text-cricket-600 hover:bg-cricket-50"
                      asChild
                    >
                      <Link to={`/news/${news.id}`}>Read Full Story</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
