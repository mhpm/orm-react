import { Button } from '@/components/ui/button';
import { Spinner } from '@/components';
import { ThumbsUp, Trash } from 'lucide-react';
import { Post } from '../types/Post';
import { useTranslation } from 'react-i18next';

interface PostCardProps {
  post: Post;
  likes: number;
  isDeleting: boolean;
  canDelete: boolean;
  onLike: (postId: number) => void;
  onDelete: (postId: number) => void;
}

export const PostCard = ({
  post,
  likes,
  isDeleting,
  canDelete,
  onLike,
  onDelete,
}: PostCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg shadow-md overflow-hidden border-4 border-primary bg-white text-gray-900 dark:bg-dark dark:text-white">
      <div className="relative">
        <div className="pr-2 flex justify-start items-center absolute z-10 bottom-2 right-3 rounded-lg bg-gray-200 dark:bg-dark">
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-400"
            onClick={() => onLike(post.id!)}
          >
            <ThumbsUp />
          </Button>
          <div className="text-sm text-gray-400">
            {likes || 0} {t('posts.likes')}
          </div>
          {canDelete && (
            <Button
              disabled={isDeleting}
              variant="ghost"
              size="icon"
              className="text-red-400 ml-2"
              onClick={() => onDelete(post.id!)}
            >
              {isDeleting ? <Spinner /> : <Trash />}
            </Button>
          )}
        </div>
        <img
          loading="lazy"
          src={`https://picsum.photos/seed/${post.id}/800/600`}
          alt={`${post.user_email}'s post`}
          className="w-full h-48 object-cover rounded-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent dark:from-dark/90 rounded-lg" />
      </div>
      <div className="p-6 text-gray-900 dark:text-white">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-sm mb-4">{post.content}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.user_email}`}
              alt={`${post.user_email}'s avatar`}
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="truncate">
              <p className="text-sm font-medium truncate">{post.user_email}</p>
              <p className="text-xs text-gray-500">
                {new Date(post.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
