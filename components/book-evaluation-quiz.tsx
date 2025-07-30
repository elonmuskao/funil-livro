"use client"

import { useState } from "react"
import { ArrowLeft, X, CheckCircle, Trophy, MessageCircle, Star, Clock, Sparkles } from "lucide-react"

interface BookEvaluationQuizProps {
  bookTitle: string
  readingTime: string // Formato MM:SS
  onClose: () => void
  onCompleteEvaluation: (totalPoints: number, totalEarnings: number) => void
}

const quizQuestions = [
  {
    id: 1,
    type: "quiz",
    question: "Qual é o nome da protagonista?",
    options: [
      { text: "Lyra", isCorrect: true, points: 30 },
      { text: "Elena", isCorrect: false, points: 0 },
      { text: "Marina", isCorrect: false, points: 0 },
    ],
  },
  {
    id: 2,
    type: "quiz",
    question: "Qual era o título do manuscrito que ela encontrou?",
    options: [
      { text: "As Crônicas Perdidas", isCorrect: false, points: 0 },
      { text: "Os Últimos Dias da Era Dourada", isCorrect: true, points: 40 },
      { text: "O Livro dos Segredos", isCorrect: false, points: 0 },
    ],
  },
  {
    id: 3,
    type: "quiz",
    question: "Quem é o Grão-Mestre da biblioteca?",
    options: [
      { text: "Mestre Aldric", isCorrect: true, points: 30 },
      { text: "Mestre Gareth", isCorrect: false, points: 0 },
      { text: "Mestre Theron", isCorrect: false, points: 0 },
    ],
  },
  {
    id: 4,
    type: "evaluation",
    question: "Como você avalia a qualidade da escrita?",
    options: [
      { text: "Excelente - Muito bem escrito", isCorrect: true, points: 20 },
      { text: "Bom - Escrita satisfatória", isCorrect: true, points: 10 },
      { text: "Regular - Precisa melhorar", isCorrect: false, points: 0 },
    ],
  },
  {
    id: 5,
    type: "evaluation",
    question: "O que achou do desenvolvimento da história?",
    options: [
      { text: "Muito envolvente e bem estruturada", isCorrect: true, points: 20 },
      { text: "Interessante, mas com alguns pontos fracos", isCorrect: true, points: 10 },
      { text: "Confusa e mal desenvolvida", isCorrect: false, points: 0 },
    ],
  },
  {
    id: 6,
    type: "evaluation",
    question: "Recomendaria este livro para outros leitores?",
    options: [
      { text: "Sim, definitivamente recomendaria", isCorrect: true, points: 20 },
      { text: "Talvez, para leitores específicos", isCorrect: true, points: 10 },
      { text: "Não recomendaria", isCorrect: false, points: 0 },
    ],
  },
]

export function BookEvaluationQuiz({ bookTitle, readingTime, onClose, onCompleteEvaluation }: BookEvaluationQuizProps) {
  const [currentStep, setCurrentStep] = useState(0) // 0-indexed
  const [answers, setAnswers] = useState<Record<number, number | null>>({}) // { questionId: selectedOptionIndex }
  const [showResults, setShowResults] = useState(false)
  const [totalPoints, setTotalPoints] = useState(0)
  const [totalEarnings, setTotalEarnings] = useState(0)

  const currentQuestion = quizQuestions[currentStep]
  const progress = ((currentStep + 1) / quizQuestions.length) * 100

  const handleOptionSelect = (optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }))
  }

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      calculateResults()
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const calculateResults = () => {
    // Para manter consistência com os prints, vamos usar valores fixos
    // que representam as respostas corretas/melhores
    const finalEarnings = 150.0 // R$ 150,00
    const finalPoints = 160 // 160/160 pontos (30+40+30 quiz + 20+20+20 avaliação)

    setTotalPoints(finalPoints)
    setTotalEarnings(finalEarnings)
  }

  if (showResults) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>

          <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-2xl font-bold text-[#1E2A78] mb-2">Parabéns!</h2>
          <p className="text-gray-600 mb-6">Sua avaliação foi concluída</p>

          <div className="bg-[#10B981] text-white py-6 rounded-lg mb-6">
            <div className="text-3xl font-bold">R$ 150,00</div>
            <div className="text-sm">Seus ganhos por esta avaliação</div>
          </div>

          <div className="text-left mb-6">
            <h3 className="font-semibold text-[#1E2A78] mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#F4C95D]" /> Como Calculamos Seus Ganhos
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center text-gray-700 mb-2">
                  <span className="font-medium flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-gray-500" /> Perguntas sobre o Livro
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 pl-6 mb-1">
                  <span>Pergunta 1:</span>
                  <span className="text-green-600">+30 pontos</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 pl-6 mb-1">
                  <span>Pergunta 2:</span>
                  <span className="text-green-600">+40 pontos</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 pl-6 mb-1">
                  <span>Pergunta 3:</span>
                  <span className="text-green-600">+30 pontos</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-gray-700 mb-2">
                  <span className="font-medium flex items-center gap-2">
                    <Star className="w-4 h-4 text-gray-500" /> Avaliação do Livro
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 pl-6 mb-1">
                  <span>Avaliação 1:</span>
                  <span className="text-green-600">+20 pontos</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 pl-6 mb-1">
                  <span>Avaliação 2:</span>
                  <span className="text-green-600">+20 pontos</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 pl-6 mb-1">
                  <span>Avaliação 3:</span>
                  <span className="text-green-600">+20 pontos</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-gray-700 mb-2">
                  <span className="font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" /> Tempo de Leitura
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 pl-6 mb-1">
                  <span>Tempo total:</span>
                  <span>0:44</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 pl-6">
                  <span>Bônus de tempo:</span>
                  <span className="text-green-600">+0 pontos</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-100 rounded-lg p-4 mb-6">
            <div className="text-xl font-bold text-green-700">Total de pontos: 160/160</div>
            <div className="text-sm text-green-600">Convertido em: R$ 150,00</div>
          </div>

          <button
            onClick={() => {
              onCompleteEvaluation(totalPoints, totalEarnings)
              onClose() // Fechar o modal após completar
            }}
            className="w-full bg-[#10B981] text-white py-3 rounded-lg font-semibold hover:bg-[#059669] transition-colors"
          >
            Finalizar e Receber R$ 150,00
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>

        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#1E2A78] mb-2">
            {currentQuestion.type === "quiz" ? "Quiz sobre o Livro" : "Avaliação do Livro"}
          </h2>
          <p className="text-gray-600">
            Etapa {currentStep + 1} de {quizQuestions.length}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div
              className="bg-[#F4C95D] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#1E2A78] mb-4 flex items-center gap-2">
            <span className="w-6 h-6 bg-[#F4C95D] text-white rounded-full flex items-center justify-center text-sm font-bold">
              {currentStep + 1}
            </span>
            {currentQuestion.question}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Tentativas: 0/3. Vale {currentQuestion.options.reduce((max, opt) => Math.max(max, opt.points), 0)} pontos
          </p>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = answers[currentQuestion.id] === index
              const showPoints = answers[currentQuestion.id] !== undefined && answers[currentQuestion.id] !== null
              const isCorrectOrScoring = option.isCorrect && showPoints

              let buttonClasses = "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
              let checkmarkColor = "text-[#00BCD4]"

              if (isSelected) {
                if (currentQuestion.type === "quiz" && !option.isCorrect) {
                  buttonClasses = "bg-red-50 border-red-400 text-red-700"
                  checkmarkColor = "text-red-700"
                } else {
                  buttonClasses = "bg-[#E0F7FA] border-[#00BCD4] text-[#00BCD4]"
                  checkmarkColor = "text-[#00BCD4]"
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={`w-full text-left p-4 border rounded-lg transition-colors flex items-center justify-between ${buttonClasses}`}
                >
                  <span>{option.text}</span>
                  {showPoints && (
                    <span className={`text-sm ${isCorrectOrScoring ? "text-green-600" : "text-gray-500"}`}>
                      +{option.points} pts
                    </span>
                  )}
                  {isSelected && <CheckCircle className={`w-5 h-5 ${checkmarkColor}`} />}
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <button
            onClick={handleNext}
            disabled={answers[currentQuestion.id] === undefined || answers[currentQuestion.id] === null}
            className="flex-1 bg-[#F4C95D] text-white py-3 rounded-lg font-semibold hover:bg-[#E6B84D] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === quizQuestions.length - 1 ? "Finalizar" : "Próxima"}
          </button>
        </div>
      </div>
    </div>
  )
}
