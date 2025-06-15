import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { useModalStore } from '@/components/modal/useModalStore';
import { signOut } from '@/features/auth/services/auth-supabase';

export default function ConfirmLogoutModal() {
  const closeModal = useModalStore((state) => state.closeModal);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    closeModal();
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p>Are you sure you want to logout?</p>
      <Button variant="destructive" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
