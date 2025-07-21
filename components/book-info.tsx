"use client"

import { ArrowLeft, Clock } from "lucide-react"

interface BookInfoProps {
  book: {
    title: string
    author: string
    price: string
  }
  onBack: () => void
  readingTime: string
}

export function BookInfo({ book, onBack, readingTime }: BookInfoProps) {
  return (
    <div className="min-h-screen bg-[#f5f1eb] p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span className="font-mono">{readingTime}</span>
        </div>
      </div>

      {/* Book Information Summary (simplified) */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-xl p-8 shadow-sm text-center">
          <h1 className="text-3xl font-bold text-[#1E2A78] mb-2">{book.title}</h1>
          <p className="text-gray-600 text-lg">por {book.author}</p>
          <p className="text-gray-700 mt-4">Você finalizou a leitura! Agora, que tal compartilhar sua opinião?</p>
        </div>

        {/* Action Button */}
        <div className="text-center mt-8">
          <button className="bg-[#F4C95D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E6B84D] transition-colors text-base sm:text-lg">
            Escrever Avaliação
          </button>
        </div>
      </div>
    </div>
  )
}
