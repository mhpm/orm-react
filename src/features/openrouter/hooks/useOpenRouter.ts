import { useMutation } from '@tanstack/react-query';
import { chatWithIA } from '@/features/openrouter/services/openRouterService';

export interface ChatCompletionMessage {
  content: string;
}

export const useOpenRouter = () => {
   const createChatMutation = useMutation({
      mutationFn: (message: string) => chatWithIA(message),
    });

  return {
    createChatMutation
  };
};