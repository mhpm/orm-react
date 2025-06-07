import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema } from '../schemas/authSchema';
import { useAuth } from '../hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { z } from 'zod';
import { useNavigate } from 'react-router';
import { Separator } from '@/components/ui/separator';
import { FaGithub } from 'react-icons/fa6';

type AuthFormValues = z.infer<typeof authSchema>;

const AuthComponent = () => {
  const navigate = useNavigate();
  const {
    loading,
    error,
    success,
    handleSignUp,
    handleLogin,
    handleGitHubLogin,
  } = useAuth();
  console.log('loading: ', loading);

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
    <div className="mt-10 w-full">
      <Tabs defaultValue="login">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

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
            <div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </div>
          </form>
        </TabsContent>

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

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Signing up...' : 'Sign Up'}
            </Button>
          </form>
        </TabsContent>
        <br />
        <Separator />

        <Button
          onClick={handleGitHubLogin}
          isLoading={loading}
          className="w-full mt-4"
        >
          <FaGithub />
          {success ? 'Redirecting...' : 'Login with GitHub'}
        </Button>
      </Tabs>

      <div className="mt-4">
        <Button
          onClick={() => navigate('/')}
          disabled={loading}
          variant="ghost"
          className="w-full"
        >
          Cancel
        </Button>
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default AuthComponent;
