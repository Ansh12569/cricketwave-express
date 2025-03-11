
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WorldCup from "./pages/WorldCup";
import IPL2024 from "./pages/IPL2024";
import ChampionsTrophy from "./pages/ChampionsTrophy";
import WomensCricket from "./pages/WomensCricket";
import T20Leagues from "./pages/T20Leagues";
import DomesticCricket from "./pages/DomesticCricket";
import ICCRankings from "./pages/ICCRankings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/world-cup" element={<WorldCup />} />
          <Route path="/ipl-2024" element={<IPL2024 />} />
          <Route path="/champions-trophy" element={<ChampionsTrophy />} />
          <Route path="/womens-cricket" element={<WomensCricket />} />
          <Route path="/t20-leagues" element={<T20Leagues />} />
          <Route path="/domestic-cricket" element={<DomesticCricket />} />
          <Route path="/icc-rankings" element={<ICCRankings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
