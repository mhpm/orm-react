import { useState } from 'react';
import {
  signUp,
  signInWithPassword,
  signInWithGithub,
  signOut,
} from '../services/auth-supabase';
import { useNavigate } from 'react-router';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignUp = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { user, error } = await signUp(email, password);
      if (error) throw error;
      setSuccess(true);
      console.log('Signed-up user:', user);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'An error occurred during sign-up.');
      } else {
        setError('An error occurred during sign-up.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { user, error } = await signInWithPassword(email, password);
      if (error) throw error;
      setSuccess(true);
      console.log('Logged-in user:', user);
      navigate('/posts');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'An error occurred during login.');
      } else {
        setError('An error occurred during login.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGitHubLogin = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { user, error } = await signInWithGithub();
      if (error) throw error;
      setSuccess(true);
      console.log('GitHub user:', user);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'An error occurred during GitHub login.');
      } else {
        setError('An error occurred during GitHub login.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await signOut();
      setSuccess(true);
      console.log('User signed out');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'An error occurred during sign-out.');
      } else {
        setError('An error occurred during sign-out.');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    handleSignUp,
    handleLogin,
    handleGitHubLogin,
    handleSignOut,
  };
};
