// 예: components/Signin.tsx
import { signIn } from "next-auth/react";

export default function Signin() {
  return (
    <div>
      <button onClick={() => signIn("kakao")}>카카오 로그인</button>
      <button onClick={() => signIn("naver")}>네이버 로그인</button>
    </div>
  );
}
