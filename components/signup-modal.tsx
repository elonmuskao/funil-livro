"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, X } from "lucide-react"

interface SignupModalProps {
  onClose: () => void
  onComplete: (data: { name: string; email: string; phone: string }) => void
}

export function SignupModal({ onClose, onComplete }: SignupModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onComplete({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>

        <button onClick={onClose} className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#1E2A78] mb-2">Criar Conta CapCash</h2>
          <p className="text-gray-600">Junte-se à comunidade CapCash de leitores</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nome:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-[#F4C95D] focus:bg-white transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-[#F4C95D] focus:bg-white transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefone:</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-[#F4C95D] focus:bg-white transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Senha:</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border-2 border-[#F4C95D] focus:ring-2 focus:ring-[#F4C95D] focus:bg-white transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F4C95D] text-white py-3 rounded-lg font-semibold hover:bg-[#E6B84D] transition-colors"
          >
            Criar Conta
          </button>
        </form>

        <div className="text-center mt-6">
          <span className="text-gray-600">Já tem uma conta? </span>
          <button className="text-[#F4C95D] hover:underline font-medium">Fazer login</button>
        </div>
      </div>
    </div>
  )
}
