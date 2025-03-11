
import { Card } from "@/components/ui/card";
import { CricketNav } from "@/components";
import { Medal } from "lucide-react";

const ICCRankings = () => {
  const rankings = {
    tests: [
      { rank: 1, team: "Australia", rating: 128 },
      { rank: 2, team: "India", rating: 121 },
      { rank: 3, team: "England", rating: 111 },
    ],
    odi: [
      { rank: 1, team: "India", rating: 121 },
      { rank: 2, team: "Australia", rating: 118 },
      { rank: 3, team: "South Africa", rating: 110 },
    ],
    t20: [
      { rank: 1, team: "England", rating: 272 },
      { rank: 2, team: "India", rating: 266 },
      { rank: 3, team: "Pakistan", rating: 261 },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <CricketNav />
      <main className="cricket-container py-8">
        <h1 className="section-title">
          <Medal className="w-6 h-6 mr-2" />
          ICC Rankings
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Test Rankings</h2>
            <div className="space-y-4">
              {rankings.tests.map((team) => (
                <div key={team.team} className="flex justify-between items-center">
                  <span>
                    <strong>{team.rank}.</strong> {team.team}
                  </span>
                  <span className="font-semibold">{team.rating}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">ODI Rankings</h2>
            <div className="space-y-4">
              {rankings.odi.map((team) => (
                <div key={team.team} className="flex justify-between items-center">
                  <span>
                    <strong>{team.rank}.</strong> {team.team}
                  </span>
                  <span className="font-semibold">{team.rating}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">T20I Rankings</h2>
            <div className="space-y-4">
              {rankings.t20.map((team) => (
                <div key={team.team} className="flex justify-between items-center">
                  <span>
                    <strong>{team.rank}.</strong> {team.team}
                  </span>
                  <span className="font-semibold">{team.rating}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ICCRankings;
