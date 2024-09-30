import { useRouter } from 'next/navigation';
import { useUserStore } from '@/lib/store/userStore';
import { useEffect } from 'react';

export function withGuest<T extends JSX.IntrinsicAttributes>(WrappedComponent: React.ComponentType<T>) {
  return function WithGuest(props: T) {
    const { isLogin } = useUserStore();
    const router = useRouter();

    useEffect(() => {
      if (isLogin) {
        router.push('/');
      }
    }, [isLogin, router]);

    if (isLogin) {
      return null; // или компонент загрузки
    }

    return <WrappedComponent {...props} />;
  };
}
