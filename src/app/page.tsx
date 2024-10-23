"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const handleKakaoSignIn = async () => {
    const result = await signIn("kakao", { redirect: false });
  };
  const handleNaverSignIn = async () => {
    const result = await signIn("naver", { redirect: false });
  };

  return (
    <div>
      {session ? (
        <>
          <p>Signed in as {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <div>
          <button onClick={handleKakaoSignIn}>카카오 로그인</button>
          <button onClick={handleNaverSignIn}>네이버 로그인</button>
        </div>
      )}
    </div>
  );
}
