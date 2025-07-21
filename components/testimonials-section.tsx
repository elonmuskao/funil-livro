export function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1E293B] mb-4">O que nossos leitores dizem</h2>
          <p className="text-lg sm:text-xl text-[#64748B] font-medium max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram sua paixão por livros em renda extra
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-[#F8FAFC] to-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#E2E8F0]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                A
              </div>
              <div>
                <h4 className="font-bold text-[#1E293B] text-base sm:text-lg">Alana Assis</h4>
                <p className="text-sm text-[#64748B]">Beta Reader</p>
              </div>
            </div>
            <p className="text-[#475569] mb-6 text-sm sm:text-base leading-relaxed">
              "Já ganhei mais de R$ 800 lendo livros que eu realmente amo. A plataforma é confiável e os pagamentos são
              pontuais. Recomendo!"
            </p>
            <div className="text-[#10B981] font-bold text-sm sm:text-base">Total ganho: R$ 847</div>
          </div>

          <div className="bg-gradient-to-br from-[#F8FAFC] to-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#E2E8F0]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#F59E0B] to-[#F97316] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                L
              </div>
              <div>
                <h4 className="font-bold text-[#1E293B] text-base sm:text-lg">Leonardo Sucegan</h4>
                <p className="text-sm text-[#64748B]">Leitor Experiente</p>
              </div>
            </div>
            <p className="text-[#475569] mb-6 text-sm sm:text-base leading-relaxed">
              "Como estudante, essa renda extra faz toda diferença. Consigo pagar meus livros universitários lendo
              outros livros. Genial!"
            </p>
            <div className="text-[#10B981] font-bold text-sm sm:text-base">Total ganho: R$ 623</div>
          </div>

          <div className="bg-gradient-to-br from-[#F8FAFC] to-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#E2E8F0] sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                M
              </div>
              <div>
                <h4 className="font-bold text-[#1E293B] text-base sm:text-lg">Michele Senhoreli</h4>
                <p className="text-sm text-[#64748B]">Avaliadora Expert</p>
              </div>
            </div>
            <p className="text-[#475569] mb-6 text-sm sm:text-base leading-relaxed">
              "Descobri uma nova paixão e ainda ganho dinheiro com isso. Os livros são de qualidade e o processo é muito
              simples."
            </p>
            <div className="text-[#10B981] font-bold text-sm sm:text-base">Total ganho: R$ 1.234</div>
          </div>
        </div>
      </div>
    </section>
  )
}
