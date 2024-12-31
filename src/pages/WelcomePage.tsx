import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center text-slate-900 dark:text-slate-50">
            Welcome to Our ORM System
          </h1>
          <p className="text-xl text-center text-slate-700 dark:text-slate-300">
            Simplify your database interactions with our powerful ORM tool.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {['Easy Setup', 'Powerful Queries', 'Data Validation'].map(
              (feature) => (
                <Card key={feature} className="bg-white dark:bg-slate-800">
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
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-300 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 ORM System. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0"></div>
        </div>
      </footer>
    </div>
  );
}
