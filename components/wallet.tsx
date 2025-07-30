"use client"

import React from "react"

import { useState } from "react"
import { ArrowLeft, DollarSign, Book, Info } from "lucide-react"

interface WalletProps {
  onBack: () => void
  userData: { name: string }
}

export function Wallet({ onBack, userData }: WalletProps) {
  const [showWithdrawForm, setShowWithdrawForm] = useState(false)
  const [showSpecialOffer, setShowSpecialOffer] = useState(false)
  const [withdrawAmount, setWithdrawAmount] = useState("150")
  const [pixKey, setPixKey] = useState("")
  const [countdown, setCountdown] = useState({ minutes: 4, seconds: 52 })

  // Countdown effect for special offer
  React.useEffect(() => {
    if (showSpecialOffer) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev.seconds > 0) {
            return { ...prev, seconds: prev.seconds - 1 }
          } else if (prev.minutes > 0) {
            return { minutes: prev.minutes - 1, seconds: 59 }
          }
          return prev
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [showSpecialOffer])

  const handleWithdraw = () => {
    // Handle withdrawal logic here
    alert("Saque solicitado com sucesso!")
    setShowWithdrawForm(false)
  }

  if (showSpecialOffer) {
    return (
      <div className="min-h-screen bg-[#F5F5F7]">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => setShowSpecialOffer(false)} className="flex items-center gap-2 text-gray-600">
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </button>
            <div className="flex items-center gap-2">
              <img src="/capcash-logo.png" alt="CapCash" className="w-18 h-18 sm:w-24 sm:h-24" />
              <span className="text-[#1E2A78] font-semibold text-2xl sm:text-3xl">CapCash</span>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Balance Display */}
          <div className="bg-white rounded-lg p-4 mb-6 text-center">
            <div className="text-sm text-gray-600 mb-1">Saldo Disponível</div>
            <div className="text-2xl font-bold text-green-600">R$ 150,00</div>
          </div>

          {/* Special Offer */}
          <div className="bg-red-500 rounded-lg p-6 text-white text-center mb-6">
            <div className="text-sm mb-2">⚠️ AGUARDANDO ATIVAÇÃO - 04:52</div>

            <h2 className="text-2xl font-bold mb-4">OFERTA ESPECIAL</h2>
            <p className="text-lg mb-4">Ative sua conta com 50% de desconto</p>

            <div className="bg-black bg-opacity-20 rounded-lg p-4 mb-4">
              <div className="text-sm mb-1">Oferta expira em:</div>
              <div className="text-3xl font-bold">
                {String(countdown.minutes).padStart(2, "0")}:{String(countdown.seconds).padStart(2, "0")}
              </div>
              <div className="text-xs">Não perca esta oportunidade</div>
            </div>

            <div className="text-left mb-4">
              <h3 className="font-bold mb-2">Por que ativar sua conta?</h3>
              <p className="text-sm">
                Desbloqueie acesso a livros premium, aumente seus ganhos por avaliação e tenha prioridade na seleção de
                títulos exclusivos.
              </p>
            </div>

            <div className="text-left mb-4">
              <h3 className="font-bold mb-2">Vantagens exclusivas:</h3>
              <ul className="text-sm space-y-1">
                <li>• Ganhos até 3x maiores por avaliação</li>
                <li>• Acesso prioritário a lançamentos</li>
                <li>• Suporte premium 24/7</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-lg line-through opacity-75">R$ 79,00</span>
                <span className="text-3xl font-bold">R$ 19,99</span>
                <span className="bg-yellow-400 text-black px-2 py-1 rounded text-sm font-bold">50% OFF</span>
              </div>
              <div className="text-xs">⚠️ Você economiza R$ 59,01</div>
            </div>

            <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold text-lg mb-4 hover:bg-yellow-500 transition-colors">
              ATIVAR CONTA - R$ 19,99
            </button>

            <div className="text-xs">⚠️ Esta oferta é válida apenas uma vez e expira em alguns minutos</div>
          </div>

          {/* Investment Return */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="font-bold text-center mb-4 text-gray-800">📊 Retorno do Investimento</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-red-500">R$ 19,99</div>
                <div className="text-xs text-gray-600">Investimento único</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-500">R$ 150+</div>
                <div className="text-xs text-gray-600">Retorno esperado</div>
              </div>
              <div>
                <div className="text-lg font-bold text-blue-500">650%</div>
                <div className="text-xs text-gray-600">Retorno</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-3 gap-4">
            <button className="flex flex-col items-center p-4 bg-white rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full mb-2"></div>
              <span className="text-xs">Mais Ganhos</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-white rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full mb-2"></div>
              <span className="text-xs">Suporte</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-white rounded-lg">
              <div className="w-8 h-8 bg-purple-500 rounded-full mb-2"></div>
              <span className="text-xs">Benefícios</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (showWithdrawForm) {
    return (
      <div className="min-h-screen bg-[#F5F5F7]">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => setShowWithdrawForm(false)} className="flex items-center gap-2 text-gray-600">
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </button>
            <div className="flex items-center gap-2">
              <img src="/capcash-logo.png" alt="CapCash" className="w-18 h-18 sm:w-24 sm:h-24" />
              <span className="text-[#1E2A78] font-semibold text-2xl sm:text-3xl">CapCash</span>
              <span className="text-sm text-gray-600">Olá, {userData.name}</span>
            </div>
          </div>
        </header>

        <div className="p-6">
          <div className="max-w-md mx-auto">
            {/* Page Title */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-[#1E2A78] mb-2">Carteira CapCash</h1>
              <p className="text-gray-600">Gerencie seus ganhos e realize saques via PIX</p>
            </div>

            {/* Balance Card */}
            <div className="bg-white rounded-lg p-6 text-center mb-6">
              <div className="text-sm text-gray-600 mb-2">Saldo Disponível</div>
              <div className="text-3xl font-bold text-green-600 mb-4">R$ 150,00</div>
            </div>

            {/* Withdraw Form */}
            <div className="bg-white rounded-lg p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Valor do Saque <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: 25,00"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Valor mínimo R$ 10,00</p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chave PIX <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="CPF, CNPJ, telefone ou chave aleatória"
                  value={pixKey}
                  onChange={(e) => setPixKey(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Insira sua chave PIX para receber o pagamento</p>
              </div>

              {/* Withdrawal Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-800 mb-2">Informações do Saque</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Processamento em até 24 horas úteis</li>
                      <li>• Sem taxas para saques via PIX</li>
                      <li>• Valor mínimo: R$ 10,00</li>
                      <li>• Máximo por dia: R$ 1.000,00</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWithdraw}
                disabled={!withdrawAmount || !pixKey}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirmar Saque via PIX
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">Preencha todos os campos obrigatórios</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Header */}
      <header className="flex flex-col items-center justify-center px-4 sm:px-6 py-4 sm:py-6 bg-white shadow-sm border-b">
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
        <div className="max-w-md mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#1E2A78] mb-2">Carteira CapCash</h1>
            <p className="text-gray-600">Gerencie seus ganhos e realize saques via PIX</p>
          </div>

          {/* Main Balance Card */}
          <div className="bg-green-500 rounded-xl p-8 text-white text-center mb-6">
            <div className="text-sm mb-2">Saldo Disponível</div>
            <div className="text-4xl font-bold mb-6">R$ 150,00</div>
            <div className="flex flex-col items-center">
              <button
                onClick={() => setShowWithdrawForm(true)}
                className="w-[90%] mx-auto whitespace-nowrap bg-white bg-opacity-20 text-white py-3 px-4 rounded-lg hover:bg-opacity-30 transition-colors mb-2"
              >
                Sacar via PIX
              </button>
              <button
                onClick={() => setShowSpecialOffer(true)}
                className="w-[90%] mx-auto whitespace-nowrap bg-white bg-opacity-20 text-white py-3 px-4 rounded-lg hover:bg-opacity-30 transition-colors"
              >
                Ler Mais Livros
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-1">R$ 150,00</div>
              <div className="text-sm text-gray-600">Total de Ganhos</div>
              <div className="text-xs text-gray-500 mt-1">Valor total ganho avaliando livros</div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-1">1</div>
              <div className="text-sm text-gray-600">Livros Avaliados</div>
              <div className="text-xs text-gray-500 mt-1">Número total de livros que você avaliou</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-6 py-4">
        <div className="flex justify-around max-w-md mx-auto w-full">
          <button onClick={onBack} className="flex-1 flex flex-col items-center py-2 px-1 gap-1 text-gray-600">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-2 px-1 gap-1 text-gray-600">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            <span className="text-xs font-medium">Livros</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-2 px-1 gap-1 text-gray-600">
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            <span className="text-xs font-medium">Comunidade</span>
          </button>
          <button className="flex-1 flex flex-col items-center py-2 px-1 gap-1 text-[#F4C95D]">
            <div className="w-5 h-5 bg-[#F4C95D] rounded"></div>
            <span className="text-xs font-medium">Saque</span>
          </button>
        </div>
      </div>
    </div>
  )
}
