"use client"

import { useState } from "react"
import { Search, Star, BookOpen, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

interface Book {
  id: number
  title: string
  author: string
  description: string
  rating: number
  reviews: number
  price: number
  status: "available" | "locked" | "completed"
  category: string
}

const books: Book[] = [
  {
    id: 1,
    title: "As Sombras de Eldoria",
    author: "Marina Silvestre",
    description: "Em um reino onde a magia está desaparecendo, uma jovem escriba descobre um antigo segredo...",
    rating: 4.4,
    reviews: 254,
    price: 30.0,
    status: "available",
    category: "Fantasia",
  },
  {
    id: 2,
    title: "Código Vermelho",
    author: "Alexandre Ferreira",
    description: "Um hacker descobre uma conspiração que pode derrubar o governo...",
    rating: 4.6,
    reviews: 156,
    price: 75.0,
    status: "locked",
    category: "Thriller",
  },
  {
    id: 3,
    title: "O Jardim das Memórias Perdidas",
    author: "Clara Monteiro",
    description: "Uma história tocante sobre amor, perda e a força das memórias...",
    rating: 4.3,
    reviews: 89,
    price: 125.0,
    status: "locked",
    category: "Romance",
  },
  {
    id: 4,
    title: "A Noite Eterna",
    author: "Roberto Silva",
    description: "Uma cidade onde o sol nunca nasce e os pesadelos se tornam realidade...",
    rating: 4.2,
    reviews: 178,
    price: 45.0,
    status: "locked",
    category: "Terror",
  },
  {
    id: 5,
    title: "Estrelas Distantes",
    author: "Ana Lucia",
    description: "Uma jornada épica através das galáxias em busca de um novo lar...",
    rating: 4.7,
    reviews: 234,
    price: 90.0,
    status: "locked",
    category: "Ficção Científica",
  },
  {
    id: 6,
    title: "Os Segredos da Família Morrison",
    author: "Patrícia Lima",
    description: "Três gerações de uma família e os segredos que os vivem e separam...",
    rating: 4.4,
    reviews: 204,
    price: 55.0,
    status: "locked",
    category: "Drama",
  },
]

export function BookLibrary() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const availableBooks = books.filter((book) => book.status === "available").length
  const completedBooks = books.filter((book) => book.status === "completed").length
  const totalValue = books.reduce((sum, book) => sum + book.price, 0)

  const getStatusButton = (book: Book) => {
    switch (book.status) {
      case "available":
        return <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Ler e Avaliar</Button>
      case "completed":
        return <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Concluído</Button>
      case "locked":
        return (
          <Button className="w-full bg-gray-400 text-gray-600 cursor-not-allowed" disabled>
            Bloqueado
          </Button>
        )
    }
  }

  const getStatusText = (book: Book) => {
    switch (book.status) {
      case "available":
        return (
          <div className="flex items-center gap-1 text-sm text-green-600">
            <BookOpen className="w-4 h-4" />
            Disponível para leitura
          </div>
        )
      case "completed":
        return <div className="flex items-center gap-1 text-sm text-green-600">✅ Avaliação concluída</div>
      case "locked":
        return (
          <div className="flex items-center gap-1 text-sm text-orange-600">
            <Lock className="w-4 h-4" />
            Aguarde ser liberado para sua conta
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1E2A78] mb-2">Biblioteca CapCash</h1>
          <p className="text-gray-600">Explore nossa coleção completa de livros disponíveis para monetização</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Buscar por título ou autor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Todos os gêneros" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os gêneros</SelectItem>
              <SelectItem value="Fantasia">Fantasia</SelectItem>
              <SelectItem value="Thriller">Thriller</SelectItem>
              <SelectItem value="Romance">Romance</SelectItem>
              <SelectItem value="Terror">Terror</SelectItem>
              <SelectItem value="Ficção Científica">Ficção Científica</SelectItem>
              <SelectItem value="Drama">Drama</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#1E2A78] mb-2">{availableBooks}</div>
              <div className="text-sm text-gray-600">Disponíveis</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#F4C95D] mb-2">0</div>
              <div className="text-sm text-gray-600">Em Progresso</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#10B981] mb-2">{completedBooks}</div>
              <div className="text-sm text-gray-600">Concluídos</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#1E2A78] mb-2">R$ {totalValue}</div>
              <div className="text-sm text-gray-600">Valor Total</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#1E2A78] mb-2">{book.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">por {book.author}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{book.description}</p>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{book.rating}</span>
                  <span className="text-sm text-gray-500">({book.reviews})</span>
                </div>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-[#10B981] mb-2">
                    R$ {book.price.toFixed(2).replace(".", ",")}
                  </div>
                  {getStatusText(book)}
                </div>

                {getStatusButton(book)}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
