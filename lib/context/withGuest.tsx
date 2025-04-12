import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/store/userStore";
import { useLayoutEffect } from "react";

export function withGuest<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>,
) {
  return function WithGuest(props: T) {
    const { isLogin } = useUserStore();
    const router = useRouter();

    useLayoutEffect(() => {
      if (isLogin) {
        router.replace("/");
      }
    }, [isLogin, router]);

    if (isLogin) {
      return null; // или компонент загрузки
    }

    return <WrappedComponent {...props} />;
  };
}
