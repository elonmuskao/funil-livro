"use client"

interface HeroSectionProps {
  onSignupClick: () => void
}

export function HeroSection({ onSignupClick }: HeroSectionProps) {
  return (
    <section className="text-center py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9]">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          100% Segura e Confiável
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1E293B] mb-6 leading-tight">
          Transforme sua
          <br />
          <span className="bg-gradient-to-r from-[#F59E0B] to-[#F97316] bg-clip-text text-transparent">
            leitura em dinheiro
          </span>
          <br />
          com CapCash
        </h1>

        <p className="text-lg sm:text-xl text-[#64748B] mb-10 max-w-3xl mx-auto leading-relaxed">
          Seja pago para ler e avaliar livros incríveis. Mais de{" "}
          <span className="font-bold text-[#F59E0B]">R$ 900.000</span> já foram pagos aos nossos leitores. Junte-se à
          maior plataforma de monetização de leitura do Brasil.
        </p>

        <button
          onClick={onSignupClick}
          className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white px-8 py-4 sm:px-12 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold hover:from-[#7C3AED] hover:to-[#9333EA] transition-all duration-300 shadow-2xl transform hover:scale-105 w-full sm:w-auto max-w-md mx-auto block"
        >
          Começar Agora - É Grátis
        </button>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm sm:text-base text-[#64748B] font-medium mt-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
            Sem taxas de inscrição
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
            3.500+ leitores ativos
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
            4.9/5 avaliação
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
            100% seguro
          </div>
        </div>
      </div>
    </section>
  )
}
