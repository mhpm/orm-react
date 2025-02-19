import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ArrowDown } from 'lucide-react';
export default function WelcomePage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-100 to-slate-300 dark:from-slate-900 dark:to-slate-700">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-extrabold text-center text-slate-900 dark:text-slate-50">
            Welcome to Our ORM System
          </h1>
          <p className="text-2xl text-center text-slate-700 dark:text-slate-300">
            Simplify your database interactions with our powerful ORM tool.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {['Easy Setup', 'Powerful Queries', 'Data Validation'].map(
              (feature) => (
                <Card
                  key={feature}
                  className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-slate-900 dark:text-slate-50">
                      {feature}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore.
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            )}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-8">
            <Button onClick={() => setShowMore(!showMore)} variant="link">
              {showMore ? 'Show Less' : 'Show More'}
            </Button>
          </div>

          {/* Additional Content */}
          <div
            className={`mt-8 text-center text-slate-700 dark:text-slate-300 transition-opacity duration-500 ${
              showMore ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {showMore && (
              <>
                <p>Explore more features and benefits of our ORM system.</p>
                <ArrowDown className="mt-4 text-white" />
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-slate-900 dark:text-slate-50">
                        Real-time Sync
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 dark:text-slate-400">
                        Keep your data synchronized across multiple instances
                        with our real-time synchronization features.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-slate-900 dark:text-slate-50">
                        Migration Tools
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 dark:text-slate-400">
                        Seamlessly manage database schema changes with our
                        intuitive migration toolset.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-slate-900 dark:text-slate-50">
                        Performance Monitoring
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 dark:text-slate-400">
                        Track and optimize your database performance with
                        built-in monitoring tools.
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-slate-900 dark:text-slate-50">
                        Security Features
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 dark:text-slate-400">
                        Protect your data with advanced security features
                        including encryption and access controls.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-300 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 ORM System. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0"></div>
        </div>
      </footer>
    </div>
  );
}
