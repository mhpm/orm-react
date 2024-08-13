import { supabaseClient } from './supabaseClient';
import { axiosClient } from './axiosClient';

const useSupabase = false;

export const apiClient = useSupabase ? supabaseClient : axiosClient;
