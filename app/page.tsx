"use client"

import { useState } from "react"
import { Instagram, Twitter, Menu, X } from "lucide-react"
import Image from "next/image"

export default function HauruPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-[#00BFFF]/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-semibold tracking-wider">ALL GROUP</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("top")} className="hover:text-[#00BFFF] transition-colors">
              TOP
            </button>
            <button onClick={() => scrollToSection("profile")} className="hover:text-[#00BFFF] transition-colors">
              PROFILE
            </button>
            <button onClick={() => scrollToSection("qa")} className="hover:text-[#00BFFF] transition-colors">
              Q&A
            </button>
            <button onClick={() => scrollToSection("schedule")} className="hover:text-[#00BFFF] transition-colors">
              SCHEDULE
            </button>
            <button onClick={() => scrollToSection("sns")} className="hover:text-[#00BFFF] transition-colors">
              SNS
            </button>
          </nav>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00BFFF] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00BFFF] transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden hover:text-[#00BFFF] transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 hover:text-[#00BFFF] transition-colors"
          >
            <X size={32} />
          </button>
          <nav className="flex flex-col items-center gap-8 text-2xl">
            <button onClick={() => scrollToSection("top")} className="hover:text-[#00BFFF] transition-colors">
              TOP
            </button>
            <button onClick={() => scrollToSection("profile")} className="hover:text-[#00BFFF] transition-colors">
              PROFILE
            </button>
            <button onClick={() => scrollToSection("qa")} className="hover:text-[#00BFFF] transition-colors">
              Q&A
            </button>
            <button onClick={() => scrollToSection("schedule")} className="hover:text-[#00BFFF] transition-colors">
              SCHEDULE
            </button>
            <button onClick={() => scrollToSection("sns")} className="hover:text-[#00BFFF] transition-colors">
              SNS
            </button>
          </nav>
        </div>
      )}

      {/* Top Section */}
      <section id="top" className="h-screen flex items-center justify-center relative">
        <div className="text-center">
          <div className="text-[#00BFFF] text-6xl md:text-8xl font-bold mb-4 transform -rotate-12 font-serif">///</div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-2 tracking-wider">MONSTAR</h1>
          <p className="text-xl md:text-2xl text-gray-400 font-serif tracking-widest">-xeno-</p>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">PROFILE</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src="hauru-main.jpg"
                  alt="Hauru Main Photo"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src="hauru-sub1.jpg"
                    alt="Hauru Photo 1"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src="hauru-sub2.jpg"
                    alt="Hauru Photo 2"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src="hauru-sub3.jpg"
                    alt="Hauru Photo 3"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-1 h-6 bg-[#00BFFF] flex-shrink-0"></div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">NAME</h3>
                  <p className="text-2xl font-serif">はうる</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1 h-6 bg-[#00BFFF] flex-shrink-0"></div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">AFFILIATION</h3>
                  <p className="text-xl">ALL GROUP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1 h-6 bg-[#00BFFF] flex-shrink-0"></div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">BIRTHDAY</h3>
                  <p className="text-xl">8月21日</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1 h-6 bg-[#00BFFF] flex-shrink-0"></div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">BLOOD TYPE</h3>
                  <p className="text-xl">B型</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1 h-6 bg-[#00BFFF] flex-shrink-0"></div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">HOBBIES</h3>
                  <p className="text-xl">映画鑑賞 / 筋トレ / 音楽鑑賞</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1 h-6 bg-[#00BFFF] flex-shrink-0"></div>
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">CHARM POINT</h3>
                  <p className="text-xl">笑顔と話しやすさ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section id="qa" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Q&A</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-[#00BFFF] pl-6 py-2">
              <p className="text-[#00BFFF] font-bold text-lg mb-2">Q. 好きな食べ物は？</p>
              <p className="text-gray-300">A. お寿司とラーメンが大好きです！特に海鮮系は何でも好きですね。</p>
            </div>

            <div className="border-l-4 border-[#00BFFF] pl-6 py-2">
              <p className="text-[#00BFFF] font-bold text-lg mb-2">Q. 休日の過ごし方は？</p>
              <p className="text-gray-300">
                A. ジムで体を鍛えたり、映画を観てリラックスしています。友達とカフェ巡りも好きです。
              </p>
            </div>

            <div className="border-l-4 border-[#00BFFF] pl-6 py-2">
              <p className="text-[#00BFFF] font-bold text-lg mb-2">Q. どんなお客様が好きですか？</p>
              <p className="text-gray-300">
                A. 一緒に楽しい時間を過ごせる方なら誰でも大歓迎です！初めての方も気軽に声をかけてください。
              </p>
            </div>

            <div className="border-l-4 border-[#00BFFF] pl-6 py-2">
              <p className="text-[#00BFFF] font-bold text-lg mb-2">Q. 座右の銘は？</p>
              <p className="text-gray-300">A. 「一期一会」です。出会いを大切に、毎日を全力で楽しんでいます。</p>
            </div>

            <div className="border-l-4 border-[#00BFFF] pl-6 py-2">
              <p className="text-[#00BFFF] font-bold text-lg mb-2">Q. 最近ハマっていることは？</p>
              <p className="text-gray-300">
                A. 最近は料理にハマっています。お店で出せるくらいのクオリティを目指して練習中です！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">SCHEDULE</h2>
          <div className="bg-gray-900 rounded-lg border-2 border-dashed border-[#00BFFF]/30 overflow-hidden">
+             <Image
+               src="/hauru-shift.jpg" // ここにアップロードしたファイル名を指定
+               alt="はうるくんの月間スケジュール"
+               width={1000} // 画像のオリジナルの幅に応じて調整（後述）
+               height={1500} // 画像のオリジナルの高さに応じて調整（後述）
+               className="w-full h-auto object-contain" // はみ出さずに全体表示するスタイル
+               priority // ページの表示時に優先的に読み込む設定
+             />
          </div>
        </div>
      </section>

      {/* SNS Section */}
      <section id="sns" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">SNS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#00BFFF] rounded-lg p-8 flex flex-col items-center justify-center gap-4 hover:bg-[#00BFFF]/10 transition-colors min-h-[200px]"
            >
              <Instagram size={48} className="text-[#00BFFF]" />
              <span className="text-xl font-semibold">Instagram</span>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#00BFFF] rounded-lg p-8 flex flex-col items-center justify-center gap-4 hover:bg-[#00BFFF]/10 transition-colors min-h-[200px]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#00BFFF]">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span className="text-xl font-semibold">TikTok</span>
            </a>

            {/* LINE */}
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#00BFFF] rounded-lg p-8 flex flex-col items-center justify-center gap-4 hover:bg-[#00BFFF]/10 transition-colors min-h-[200px]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#00BFFF]">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              <span className="text-xl font-semibold">LINE</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold mb-6">STORE INFORMATION</h3>
          <p className="text-xl font-semibold">ALL GROUP</p>
          <p className="text-gray-400">〒06-6575-7097 大阪府大阪市中央区東心斎橋 2-6-13 日宝ナイトビル 4F</p>
          <p className="text-gray-400">TEL: 03-0000-0000</p>
          <p className="text-gray-400">営業時間: 20:00 - 5:00</p>
          <div className="pt-8 mt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">© 2025 Hauru Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
