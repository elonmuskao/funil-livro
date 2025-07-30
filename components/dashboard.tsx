"use client"

import { useState } from "react"
import { Home, Book, Users, Wallet, Settings, LogOut, Library } from "lucide-react"
import { BookLibrary } from "@/components/book-library"
import { Community } from "@/components/community"
import { Wallet as WalletComponent } from "@/components/wallet"
import { BookReader } from "@/components/book-reader"

interface DashboardProps {
  userData: { name: string; email: string; phone: string }
}

export function Dashboard({ userData }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("home")
  const [currentBook, setCurrentBook] = useState(null)
  const [showLibrary, setShowLibrary] = useState(false)
  const [showCommunity, setShowCommunity] = useState(false)
  const [showWallet, setShowWallet] = useState(false)

  const books = [
    {
      title: "As Sombras de Eldoria",
      author: "Marina Silvestre",
      price: "R$ 30,00",
      status: "completed", // Mudado para completed após avaliação
    },
    {
      title: "Código Vermelho",
      author: "Alexandre Ferreira",
      price: "R$ 75,00",
      status: "available", // Agora disponível
    },
    {
      title: "O Jardim das Memórias Perdidas",
      author: "Clara Monteiro",
      price: "R$ 125,00",
      status: "blocked",
    },
  ]

  const handleReadBook = (book) => {
    setCurrentBook(book)
  }

  const getStatusButton = (book: any) => {
    switch (book.status) {
      case "available":
        return (
          <button
            onClick={() => handleReadBook(book)}
            className="w-full sm:w-auto bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white px-6 py-3 rounded-xl font-bold hover:from-[#7C3AED] hover:to-[#9333EA] transition-all duration-200 shadow-lg"
          >
            Ler e Avaliar
          </button>
        )
      default:
        return (
          <button className="w-full sm:w-auto bg-[#F1F5F9] text-[#94A3B8] px-6 py-3 rounded-xl font-bold cursor-not-allowed border border-[#E2E8F0]">
            Bloqueado
          </button>
        )
      case "completed":
        return (
          <button className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-xl font-bold cursor-default">
            ✅ Concluído
          </button>
        )
    }
  }

  if (showWallet) {
    return (
      <WalletComponent
        onBack={() => {
          setShowWallet(false)
          setActiveTab("home")
        }}
        userData={userData}
      />
    )
  }

  if (showCommunity) {
    return (
      <Community
        onBack={() => {
          setShowCommunity(false)
          setActiveTab("home")
        }}
        userData={userData}
      />
    )
  }

  if (showLibrary) {
    return (
      <BookLibrary
        onBack={() => {
          setShowLibrary(false)
          setActiveTab("home")
        }}
        onReadBook={handleReadBook}
      />
    )
  }

  if (currentBook) {
    return <BookReader book={currentBook} onBack={() => setCurrentBook(null)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] pb-20">
      {/* Header */}
      <header className="flex flex-col items-center justify-center px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/capcash-logo-new.png"
              alt="CapCash"
              className="w-24 h-24 sm:w-36 sm:h-36 max-w-[180px] h-auto mx-auto"
            />
          </div>
          <div className="absolute top-4 right-4 flex items-center gap-3 sm:gap-4">
            <Settings className="w-6 h-6 text-[#64748B] cursor-pointer hover:text-[#8B5CF6] transition-colors" />
            <LogOut className="w-6 h-6 text-[#64748B] cursor-pointer hover:text-[#8B5CF6] transition-colors" />
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6">
          {/* Balance Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 mb-4 sm:mb-4">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E2E8F0]">
              <div className="text-center">
                <div className="text-sm text-[#64748B] mb-2 font-medium">Saldo Disponível</div>
                <div className="text-3xl sm:text-4xl font-bold text-[#10B981] mb-6">R$ 150,00</div>
                <button
                  onClick={() => setShowWallet(true)}
                  className="w-[90%] mx-auto whitespace-nowrap bg-gradient-to-r from-[#10B981] to-[#059669] text-white py-3 sm:py-3 rounded-xl font-bold hover:from-[#059669] hover:to-[#047857] transition-all duration-200 shadow-lg"
                >
                  Toque para sacar
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E2E8F0]">
              <div className="text-center">
                <div className="text-sm text-[#64748B] mb-2 font-medium">Livros Hoje</div>
                <div className="text-3xl sm:text-4xl font-bold text-[#3B82F6] mb-6">1</div>
                <div className="text-sm text-[#64748B]">Avaliações concluídas</div>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-2">Olá, {userData.name}! 👋</h1>
            <p className="text-[#64748B] text-base sm:text-lg">Você avaliou 1 livro hoje. Que tal continuar?</p>
          </div>

          {/* Books Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E2E8F0] mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-6 sm:mb-8">
              📚 Livros Disponíveis para Você
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {books.map((book, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 bg-gradient-to-r from-[#F8FAFC] to-white border border-[#E2E8F0] rounded-xl gap-4 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1E293B] mb-2 text-base sm:text-lg">{book.title}</h3>
                    <p className="text-sm sm:text-base text-[#64748B] mb-3">por {book.author}</p>
                    <div className="text-lg sm:text-xl font-bold text-[#10B981]">{book.price}</div>
                    {book.status === "blocked" && (
                      <p className="text-xs sm:text-sm text-[#F59E0B] mt-2 font-medium">
                        ⏳ Aguarde ser liberado para sua conta
                      </p>
                    )}
                    {book.status === "completed" && (
                      <p className="text-xs sm:text-sm text-green-600 mt-2 font-medium">✅ Avaliação concluída</p>
                    )}
                  </div>
                  <div className="w-full sm:w-auto">{getStatusButton(book)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Quick Actions */}
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            <button
              onClick={() => setShowCommunity(true)}
              className="bg-white rounded-2xl p-6 shadow-xl border border-[#E2E8F0] text-center hover:shadow-2xl transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-[#1E293B] text-sm mb-1">Comunidade</h3>
              <p className="text-xs text-[#64748B]">Rankings e reviews</p>
            </button>

            <button
              onClick={() => setShowLibrary(true)}
              className="bg-white rounded-2xl p-6 shadow-xl border border-[#E2E8F0] text-center hover:shadow-2xl transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#F59E0B] to-[#F97316] rounded-xl flex items-center justify-center mx-auto mb-3">
                <Library className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-[#1E293B] text-sm mb-1">Biblioteca</h3>
              <p className="text-xs text-[#64748B]">Ver todos os livros</p>
            </button>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-80 bg-white border-l border-[#E2E8F0] p-6">
          <div className="space-y-8">
            {/* Community Section */}
            <div className="text-center bg-gradient-to-br from-[#F8FAFC] to-white p-6 rounded-2xl border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#1E293B] mb-2">Comunidade</h3>
              <p className="text-sm text-[#64748B] mb-4">Rankings e reviews</p>
              <button
                onClick={() => setShowCommunity(true)}
                className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white py-3 rounded-xl font-bold hover:from-[#7C3AED] hover:to-[#9333EA] transition-all duration-200"
              >
                Ver Rankings
              </button>
            </div>

            {/* Library Section */}
            <div className="text-center bg-gradient-to-br from-[#F8FAFC] to-white p-6 rounded-2xl border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F59E0B] to-[#F97316] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Library className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#1E293B] mb-2">Biblioteca</h3>
              <p className="text-sm text-[#64748B] mb-4">Ver biblioteca completa</p>
              <button
                onClick={() => setShowLibrary(true)}
                className="w-full bg-gradient-to-r from-[#F59E0B] to-[#F97316] text-white py-3 rounded-xl font-bold hover:from-[#D97706] hover:to-[#EA580C] transition-all duration-200"
              >
                Todos os Livros
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] px-4 sm:px-6 py-4 shadow-2xl">
        <div className="flex justify-around max-w-md mx-auto w-full">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex-1 flex flex-col items-center gap-1 py-2 px-1 rounded-xl transition-all duration-200 ${
              activeTab === "home" ? "text-[#8B5CF6] bg-[#F3F4F6]" : "text-[#64748B]"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("books")
              setShowLibrary(true)
            }}
            className={`flex-1 flex flex-col items-center gap-1 py-2 px-1 rounded-xl transition-all duration-200 ${
              activeTab === "books" ? "text-[#8B5CF6] bg-[#F3F4F6]" : "text-[#64748B]"
            }`}
          >
            <Book className="w-5 h-5" />
            <span className="text-xs font-medium">Livros</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("community")
              setShowCommunity(true)
            }}
            className={`flex-1 flex flex-col items-center gap-1 py-2 px-1 rounded-xl transition-all duration-200 ${
              activeTab === "community" ? "text-[#8B5CF6] bg-[#F3F4F6]" : "text-[#64748B]"
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="text-xs font-medium">Comunidade</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("wallet")
              setShowWallet(true)
            }}
            className={`flex-1 flex flex-col items-center gap-1 py-2 px-1 rounded-xl transition-all duration-200 ${
              activeTab === "wallet" ? "text-[#8B5CF6] bg-[#F3F4F6]" : "text-[#64748B]"
            }`}
          >
            <Wallet className="w-5 h-5" />
            <span className="text-xs font-medium">Saque</span>
          </button>
        </div>
      </div>
    </div>
  )
}
