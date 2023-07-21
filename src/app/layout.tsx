import "./globals.css";
import { Electrolize, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const electrolize = Electrolize({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "StudySync",
  description: "StudySync는 학습자의 동기 부여를 돕는 스터디 출석 체크 및 타이머 서비스입니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-midnight`}>{children}</body>
    </html>
  );
}
