import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema } from '../schemas/authSchema';
import { useAuth } from '../hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { z } from 'zod';

type AuthFormValues = z.infer<typeof authSchema>;

const AuthComponent = () => {
  const {
    loading,
    error,
    success,
    handleSignUp,
    handleLogin,
    handleGitHubLogin,
    handleSignOut,
  } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
  });

  const onSubmitLogin = (data: AuthFormValues) => {
    handleLogin(data.email, data.password);
  };

  const onSubmitSignUp = (data: AuthFormValues) => {
    handleSignUp(data.email, data.password);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Tabs defaultValue="login">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="github">GitHub Login</TabsTrigger>
        </TabsList>

        {/* Login with Email/Password */}
        <TabsContent value="login">
          <form onSubmit={handleSubmit(onSubmitLogin)} className="space-y-4">
            <Input placeholder="Email" {...register('email')} />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <Input
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <Button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </TabsContent>

        {/* Sign Up with Email/Password */}
        <TabsContent value="signup">
          <form onSubmit={handleSubmit(onSubmitSignUp)} className="space-y-4">
            <Input placeholder="Email" {...register('email')} />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <Input
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <Button type="submit" disabled={loading}>
              {loading ? 'Signing up...' : 'Sign Up'}
            </Button>
          </form>
        </TabsContent>

        {/* GitHub Login */}
        <TabsContent value="github">
          <Button
            onClick={handleGitHubLogin}
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Redirecting...' : 'Login with GitHub'}
          </Button>
        </TabsContent>
      </Tabs>

      {/* Sign-Out Button */}
      <div className="mt-4">
        <Button
          onClick={handleSignOut}
          disabled={loading}
          variant="outline"
          className="w-full"
        >
          {loading ? 'Signing out...' : 'Sign Out'}
        </Button>
      </div>

      {/* Error and Success Messages */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
    </div>
  );
};

export default AuthComponent;
