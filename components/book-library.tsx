"use client"

import { useState } from "react"
import { Search, Star } from "lucide-react"

interface BookLibraryProps {
  onBack: () => void
  onReadBook: (book: any) => void
}

export function BookLibrary({ onBack, onReadBook }: BookLibraryProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")

  const books = [
    {
      id: 1,
      title: "As Sombras de Eldoria",
      author: "Marina Silvestre",
      description: "Em um reino onde a magia está desaparecendo, uma jovem escriba descobre um antigo segredo...",
      rating: 4.4,
      reviews: 204,
      price: "R$ 30,00",
      status: "available",
      genre: "fantasia",
    },
    {
      id: 2,
      title: "Código Vermelho",
      author: "Alexandre Ferreira",
      description: "Um hacker descobre uma conspiração que pode derrubar o governo...",
      rating: 4.6,
      reviews: 156,
      price: "R$ 75,00",
      status: "blocked",
      genre: "thriller",
    },
    {
      id: 3,
      title: "O Jardim das Memórias Perdidas",
      author: "Clara Monteiro",
      description: "Uma história tocante sobre amor, perda e a força da memória...",
      rating: 4.3,
      reviews: 89,
      price: "R$ 125,00",
      status: "blocked",
      genre: "drama",
    },
    {
      id: 4,
      title: "A Noite Eterna",
      author: "Roberto Silva",
      description: "Uma cidade onde o sol nunca nasce e os pesadelos se tornam realidade...",
      rating: 4.2,
      reviews: 178,
      price: "R$ 45,00",
      status: "blocked",
      genre: "terror",
    },
    {
      id: 5,
      title: "Estrelas Distantes",
      author: "Ana Lúcia",
      description: "Uma jornada épica através dos galáxias em busca de um novo lar...",
      rating: 4.7,
      reviews: 234,
      price: "R$ 90,00",
      status: "blocked",
      genre: "ficção científica",
    },
    {
      id: 6,
      title: "Os Segredos da Família Morrison",
      author: "Patricia Lima",
      description: "Três gerações de uma família e os segredos que os unem e separam...",
      rating: 4.4,
      reviews: 167,
      price: "R$ 55,00",
      status: "blocked",
      genre: "drama",
    },
  ]

  const stats = {
    available: books.filter((book) => book.status === "available").length,
    inProgress: 1,
    completed: 1,
    totalValue: 420,
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : star <= rating
                  ? "fill-yellow-200 text-yellow-400"
                  : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating}</span>
        <span className="text-sm text-gray-500">({books.find((b) => b.rating === rating)?.reviews || 0})</span>
      </div>
    )
  }

  const getStatusButton = (book: any) => {
    switch (book.status) {
      case "available":
        return (
          <button
            onClick={() => onReadBook(book)}
            className="w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
          >
            Concluído
          </button>
        )
      case "completed":
        return (
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium">Avaliação concluída</button>
        )
      default:
        return (
          <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-medium cursor-not-allowed">
            Bloqueado
          </button>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Header */}
      <header className="flex flex-col items-center justify-center px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/capcash-logo.png"
              alt="CapCash"
              className="w-24 h-24 sm:w-36 sm:h-36 max-w-[180px] h-auto mx-auto"
            />
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1E2A78] mb-2">Biblioteca CapCash</h1>
          <p className="text-gray-600">Explore nossa coleção completa de livros disponíveis para monetização</p>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar por título ou autor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4C95D] focus:border-transparent"
            />
          </div>
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F4C95D] focus:border-transparent"
          >
            <option value="all">Todos os gêneros</option>
            <option value="fantasia">Fantasia</option>
            <option value="thriller">Thriller</option>
            <option value="drama">Drama</option>
            <option value="terror">Terror</option>
            <option value="ficção científica">Ficção Científica</option>
          </select>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-1">{stats.available}</div>
            <div className="text-sm text-gray-600">Disponíveis</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-orange-600 mb-1">{stats.inProgress}</div>
            <div className="text-sm text-gray-600">Disponíveis</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-1">{stats.completed}</div>
            <div className="text-sm text-gray-600">Concluídos</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-[#F4C95D] mb-1">R$ {stats.totalValue}</div>
            <div className="text-sm text-gray-600">Valor Total</div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-[#1E2A78] mb-1">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-3">por {book.author}</p>

              <p className="text-sm text-gray-700 mb-4 line-clamp-3">{book.description}</p>

              <div className="mb-4">{renderStars(book.rating)}</div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-green-600">{book.price}</span>
              </div>

              <div className="text-xs text-gray-500 mb-3">
                {book.status === "blocked" ? "⏳ Aguarde ser liberado" : "✅ Avaliação concluída"}
              </div>

              {getStatusButton(book)}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-6 py-4">
        <div className="flex justify-around max-w-md mx-auto w-full">
          <button onClick={onBack} className="flex-1 flex flex-col items-center gap-1 text-gray-600 py-2 px-1">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex-1 flex flex-col items-center gap-1 text-[#F4C95D] py-2 px-1">
            <div className="w-5 h-5 bg-[#F4C95D] rounded"></div>
            <span className="text-xs font-medium">Livros</span>
          </button>
          <button className="flex-1 flex flex-col items-center gap-1 text-gray-600 py-2 px-1">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            <span className="text-xs font-medium">Comunidade</span>
          </button>
          <button className="flex-1 flex flex-col items-center gap-1 text-gray-600 py-2 px-1">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            <span className="text-xs font-medium">Saque</span>
          </button>
        </div>
      </div>
    </div>
  )
}
