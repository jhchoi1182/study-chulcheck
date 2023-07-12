import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StudySync",
  description: "StudySync는 학습자의 동기 부여를 돕는 스터디 출석 체크 및 타이머 서비스입니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <head></head>
        {children}</body>
    </html>
  );
}
