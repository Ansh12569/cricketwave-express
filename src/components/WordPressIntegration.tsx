
import { Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const WordPressIntegration = () => {
  return (
    <div className="cricket-container py-4">
      <Alert className="bg-cricket-50 border-cricket-200">
        <Info className="h-4 w-4 text-cricket-600" />
        <AlertTitle className="text-cricket-700">WordPress Integration</AlertTitle>
        <AlertDescription className="text-cricket-600">
          This website is fully compatible with WordPress for content management. Admin panel coming soon at /wp-admin. 
          You'll be able to log in and manage all cricket content through the WordPress dashboard.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default WordPressIntegration;
