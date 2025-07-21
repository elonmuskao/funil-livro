"use client"

import { useState } from "react"
import { Hand, DollarSign } from "lucide-react"

interface OnboardingModalProps {
  userName: string
  onComplete: () => void
}

export function OnboardingModal({ userName, onComplete }: OnboardingModalProps) {
  const [step, setStep] = useState(1)
  const [commitment, setCommitment] = useState("")
  const [income, setIncome] = useState("")

  const handleStep1Continue = () => {
    if (commitment) {
      setStep(2)
    }
  }

  const handleStep2Complete = () => {
    if (income) {
      onComplete()
    }
  }

  const handleBack = () => {
    setStep(1)
  }

  if (step === 1) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center">
          <div className="w-16 h-16 bg-[#F4C95D] rounded-full flex items-center justify-center mx-auto mb-6">
            <Hand className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-2xl font-bold text-[#1E2A78] mb-2">Bem-vindo à CapCash, {userName}!</h2>
          <p className="text-gray-600">Vamos configurar seu perfil na plataforma</p>

          <div className="text-left mb-6">
            <h3 className="font-semibold text-[#1E2A78] mb-4">
              Sua intenção é se comprometer e realmente trabalhar com a CapCash?
            </h3>
            <p className="text-sm text-gray-600 mb-4">Queremos entender seu nível de dedicação</p>

            <div className="space-y-3">
              <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="commitment"
                  value="committed"
                  checked={commitment === "committed"}
                  onChange={(e) => setCommitment(e.target.value)}
                  className="mt-1"
                />
                <div>
                  <div className="font-medium text-[#1E2A78]">Sim, estou comprometido(a)</div>
                  <div className="text-sm text-gray-600">Quero trabalhar seriamente como beta reader</div>
                </div>
              </label>

              <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="commitment"
                  value="curious"
                  checked={commitment === "curious"}
                  onChange={(e) => setCommitment(e.target.value)}
                  className="mt-1"
                />
                <div>
                  <div className="font-medium text-[#1E2A78]">Não, apenas curiosidade</div>
                  <div className="text-sm text-gray-600">Quero explorar a plataforma primeiro</div>
                </div>
              </label>
            </div>
          </div>

          <button
            onClick={handleStep1Continue}
            disabled={!commitment}
            className="w-full bg-[#F4C95D] text-white py-3 rounded-lg font-semibold hover:bg-[#E6B84D] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center">
        <div className="w-16 h-16 bg-[#F4C95D] rounded-full flex items-center justify-center mx-auto mb-6">
          <DollarSign className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-2xl font-bold text-[#1E2A78] mb-2">Bem-vindo à CapCash, {userName}!</h2>
        <p className="text-gray-600">Vamos configurar seu perfil na plataforma</p>

        <div className="text-left mb-6">
          <h3 className="font-semibold text-[#1E2A78] mb-4">Qual sua faixa de renda mensal?</h3>
          <p className="text-sm text-gray-600 mb-4">Isso nos ajuda a personalizar sua experiência</p>

          <div className="space-y-3">
            {[
              { value: "1000-10000", label: "R$ 1.000 - R$ 10.000" },
              { value: "10000-50000", label: "R$ 10.000 - R$ 50.000" },
              { value: "100000+", label: "R$ 100.000+" },
              { value: "unemployed", label: "Desempregado(a)" },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="radio"
                  name="income"
                  value={option.value}
                  checked={income === option.value}
                  onChange={(e) => setIncome(e.target.value)}
                />
                <span className="font-medium text-[#1E2A78]">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleBack}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Voltar
          </button>
          <button
            onClick={handleStep2Complete}
            disabled={!income}
            className="flex-1 bg-[#F4C95D] text-white py-3 rounded-lg font-semibold hover:bg-[#E6B84D] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Finalizar
          </button>
        </div>
      </div>
    </div>
  )
}
