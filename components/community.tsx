"use client"

import { useState } from "react"
import { Star, Trophy, MessageCircle, Award, Book, Zap, Target, User } from "lucide-react"

interface CommunityProps {
  onBack: () => void
  userData: { name: string }
}

export function Community({ onBack, userData }: CommunityProps) {
  const [activeTab, setActiveTab] = useState("rankings")

  const topReaders = [
    {
      id: 1,
      name: "Ana Silva",
      avatar: "A",
      avatarColor: "bg-orange-500",
      books: 47,
      earnings: "R$ 2241",
      rating: 4.9,
      position: 1,
    },
    {
      id: 2,
      name: "Carlos Mendes",
      avatar: "C",
      avatarColor: "bg-blue-500",
      books: 42,
      earnings: "R$ 2180",
      rating: 4.8,
      position: 2,
    },
    {
      id: 3,
      name: "Marina Costa",
      avatar: "M",
      avatarColor: "bg-purple-500",
      books: 38,
      earnings: "R$ 1951",
      rating: 4.7,
      position: 3,
    },
    {
      id: 4,
      name: "Pedro Santos",
      avatar: "P",
      avatarColor: "bg-blue-600",
      books: 35,
      earnings: "R$ 1820",
      rating: 4.6,
      position: 4,
    },
    {
      id: 5,
      name: "Julia Oliveira",
      avatar: "J",
      avatarColor: "bg-blue-400",
      books: 32,
      earnings: "R$ 1650",
      rating: 4.5,
      position: 5,
    },
    {
      id: 6,
      name: "Madson Araujo",
      avatar: "M",
      avatarColor: "bg-blue-500",
      books: 0,
      earnings: "R$ 150",
      rating: 0.0,
      position: 6,
      isCurrentUser: true,
    },
  ]

  const recentReviews = [
    {
      id: 1,
      user: "Ana Silva",
      avatar: "A",
      avatarColor: "bg-blue-500",
      book: "As Sombras de Eldoria",
      review:
        "Uma obra-prima da fantasia brasileira! A construção do mundo é impecável e os personagens são cativantes...",
      rating: 5,
      timeAgo: "2 horas atrás",
      helpful: 73,
    },
    {
      id: 2,
      user: "Carlos Mendes",
      avatar: "C",
      avatarColor: "bg-blue-600",
      book: "Código Vermelho",
      review:
        "Thriller bem construído com reviravoltas surpreendentes. O autor conseguiu manter a tensão do início ao fim...",
      rating: 4,
      timeAgo: "5 horas atrás",
      helpful: 48,
    },
    {
      id: 3,
      user: "Marina Costa",
      avatar: "M",
      avatarColor: "bg-blue-500",
      book: "O Jardim das Memórias Perdidas",
      review: "Chorei do início ao fim. Uma história tocante sobre amor, perda e a importância das memórias...",
      rating: 5,
      timeAgo: "1 dia atrás",
      helpful: 91,
    },
    {
      id: 4,
      user: "Pedro Santos",
      avatar: "P",
      avatarColor: "bg-blue-600",
      book: "A Noite Eterna",
      review: "Terror psicológico bem executado. O autor consegue criar uma atmosfera opressiva que te prende...",
      rating: 4,
      timeAgo: "2 dias atrás",
      helpful: 35,
    },
  ]

  const achievements = [
    {
      id: 1,
      title: "Primeira Avaliação",
      description: "Complete sua primeira avaliação de livro",
      icon: Book,
      completed: true,
      progress: 100,
    },
    {
      id: 2,
      title: "Leitor Dedicado",
      description: "Avalie 10 livros",
      icon: User,
      completed: false,
      progress: 10,
    },
    {
      id: 3,
      title: "Crítico Experiente",
      description: "Receba 100 curtidas em suas avaliações",
      icon: Award,
      completed: false,
      progress: 0,
    },
    {
      id: 4,
      title: "Velocidade da Luz",
      description: "Complete uma avaliação em menos de 2 minutos",
      icon: Zap,
      completed: true,
      progress: 100,
    },
    {
      id: 5,
      title: "Perfeccionista",
      description: "Mantenha uma média de 4.5 estrelas (mín. 3 avaliações)",
      icon: Target,
      completed: false,
      progress: 33,
    },
  ]

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    )
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
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#1E2A78] mb-2">Comunidade CapCash</h1>
          <p className="text-gray-600">Conecte-se com outros leitores, veja rankings e conquiste achievements</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("rankings")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === "rankings" ? "bg-white text-[#F4C95D] shadow-sm" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Trophy className="w-4 h-4" />
              Rankings
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === "reviews" ? "bg-white text-[#F4C95D] shadow-sm" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              Reviews
            </button>
            <button
              onClick={() => setActiveTab("conquistas")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === "conquistas" ? "bg-white text-[#F4C95D] shadow-sm" : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Award className="w-4 h-4" />
              Conquistas
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "rankings" && (
            <div>
              <h2 className="text-xl font-semibold text-[#1E2A78] mb-6">Top Leitores do Mês</h2>
              <div className="space-y-4">
                {topReaders.map((reader) => (
                  <div
                    key={reader.id}
                    className={`bg-white rounded-lg p-4 shadow-sm flex items-center justify-between ${
                      reader.isCurrentUser ? "border-2 border-[#F4C95D]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-lg font-bold text-gray-400 w-6">{reader.position}</div>
                      <div className={`w-12 h-12 ${reader.avatarColor} rounded-full flex items-center justify-center`}>
                        <span className="text-white font-bold">{reader.avatar}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1E2A78]">{reader.name}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-8 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-gray-800">{reader.books}</div>
                        <div className="text-gray-600">Livros</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-green-600">{reader.earnings}</div>
                        <div className="text-gray-600">Ganhos</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-yellow-600">{reader.rating}</div>
                        <div className="text-gray-600">Média</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <h2 className="text-xl font-semibold text-[#1E2A78] mb-6">Reviews Recentes da Comunidade</h2>
              <div className="space-y-6">
                {recentReviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${review.avatarColor} rounded-full flex items-center justify-center`}>
                        <span className="text-white font-bold">{review.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-[#1E2A78]">{review.user}</h3>
                            <p className="text-sm text-gray-600">Avaliou "{review.book}"</p>
                          </div>
                          <div className="text-right">
                            {renderStars(review.rating)}
                            <p className="text-xs text-gray-500 mt-1">{review.timeAgo}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{review.review}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>👍 {review.helpful} pessoas acharam útil</span>
                          </div>
                          <button className="text-[#F4C95D] text-sm hover:underline">Responder</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "conquistas" && (
            <div>
              <h2 className="text-xl font-semibold text-[#1E2A78] mb-6">Suas Conquistas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement) => {
                  const IconComponent = achievement.icon
                  return (
                    <div
                      key={achievement.id}
                      className={`rounded-lg p-6 shadow-sm ${
                        achievement.completed ? "bg-green-50 border border-green-200" : "bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            achievement.completed ? "bg-green-500" : "bg-gray-300"
                          }`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#1E2A78] mb-1">{achievement.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Progresso</span>
                            <span className="text-xs text-gray-500">{achievement.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div
                              className={`h-2 rounded-full ${achievement.completed ? "bg-green-500" : "bg-gray-400"}`}
                              style={{ width: `${achievement.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-6 py-4">
        <div className="flex justify-around max-w-md mx-auto w-full">
          <button onClick={onBack} className="flex-1 flex flex-col items-center gap-1 text-gray-600 py-2 px-1">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex-1 flex flex-col items-center gap-1 text-gray-600 py-2 px-1">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            <span className="text-xs font-medium">Livros</span>
          </button>
          <button className="flex-1 flex flex-col items-center gap-1 text-[#F4C95D] py-2 px-1">
            <div className="w-5 h-5 bg-[#F4C95D] rounded"></div>
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
