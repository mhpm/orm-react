import { useState } from 'react';
import {
  signUp,
  signInWithPassword,
  signInWithGithub,
  signOut,
} from '../services/auth-supabase';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSignUp = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const { user, error } = await signUp(email, password);
      if (error) throw error;
      setSuccess('Sign-up successful!');
      console.log('Signed-up user:', user);
    } catch (err: any) {
      setError(err.message || 'An error occurred during sign-up.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const { user, error } = await signInWithPassword(email, password);
      if (error) throw error;
      setSuccess('Login successful!');
      console.log('Logged-in user:', user);
    } catch (err: any) {
      setError(err.message || 'An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  const handleGitHubLogin = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const { user, error } = await signInWithGithub();
      if (error) throw error;
      setSuccess('Login with GitHub successful!');
      console.log('GitHub user:', user);
    } catch (err: any) {
      setError(err.message || 'An error occurred during GitHub login.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await signOut();
      setSuccess('Sign-out successful!');
      console.log('User signed out');
    } catch (err: any) {
      setError(err.message || 'An error occurred during sign-out.');
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
