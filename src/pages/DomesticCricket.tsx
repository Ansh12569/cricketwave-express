
import { Card } from "@/components/ui/card";
import { CricketNav } from "@/components";
import { Trophy } from "lucide-react";

const DomesticCricket = () => {
  return (
    <div className="min-h-screen bg-background">
      <CricketNav />
      <main className="cricket-container py-8">
        <h1 className="section-title">
          <Trophy className="w-6 h-6 mr-2" />
          Domestic Cricket
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Ranji Trophy</h2>
            <p className="text-muted-foreground">
              India's premier domestic cricket competition featuring state teams competing in the multi-day format.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">County Championship</h2>
            <p className="text-muted-foreground">
              England's historic domestic first-class cricket competition between counties.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Sheffield Shield</h2>
            <p className="text-muted-foreground">
              Australia's domestic first-class cricket competition between state/territory teams.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DomesticCricket;
