import "./globals.css";
import { Electrolize, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const electrolize = Electrolize({ subsets: ["latin"], weight: "400" });

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "StudySync",
  description: "StudySync는 학습자의 동기 부여를 돕도록 스터디 모임 출석 체크 및 타이머를 제공하는 서비스입니다.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-midnight`}>
        {children}
        <div id="portal" />
      </body>
    </html>
  );
}
