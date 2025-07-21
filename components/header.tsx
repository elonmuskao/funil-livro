"use client"

import Link from "next/link"

interface HeaderProps {
  onSignupClick: () => void
}

export function Header({ onSignupClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 sm:gap-4">
        <img src="/capcash-logo-new.png" alt="CapCash" className="w-16 h-16 sm:w-24 sm:h-24" />
        <span className="text-[#4A5568] font-bold text-xl sm:text-3xl">CapCash</span>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <Link
          href="/entrar"
          className="text-[#4A5568] hover:text-[#8B5CF6] transition-colors font-medium text-xs sm:text-base px-2 py-1 sm:px-3 sm:py-2"
        >
          Entrar
        </Link>
        <button
          onClick={onSignupClick}
          className="bg-gradient-to-r from-[#F59E0B] to-[#F97316] text-white px-3 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl hover:from-[#D97706] hover:to-[#EA580C] transition-all duration-200 font-semibold shadow-lg text-xs sm:text-base"
        >
          Cadastrar
        </button>
      </div>
    </header>
  )
}
