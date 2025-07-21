export function HowItWorksSection() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1E293B] mb-4">Como funciona? É simples!</h2>
          <p className="text-lg sm:text-xl text-[#64748B] font-medium max-w-2xl mx-auto">
            Processo transparente e direto para você começar a ganhar dinheiro hoje mesmo
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl mb-6 mx-auto shadow-xl">
                01
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-4">Cadastre-se Grátis</h3>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Crie sua conta em menos de 2 minutos. Sem taxas, sem pegadinhas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#F59E0B] to-[#F97316] rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl mb-6 mx-auto shadow-xl">
                02
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-4">Escolha um Livro</h3>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Navegue por nossa biblioteca com mais de 500 títulos de qualidade.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl mb-6 mx-auto shadow-xl">
                03
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-4">Leia e Avalie</h3>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Escreva uma resenha honesta e detalhada. Mínimo de 300 caracteres.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#EF4444] to-[#DC2626] rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl mb-6 mx-auto shadow-xl">
                04
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-4">Receba o Pagamento</h3>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Ganhe R$ X por avaliação. Saque via PIX instantâneo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
