export function StatsSection() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="text-2xl sm:text-4xl font-bold text-[#92400E] mb-2">R$ 900k+</div>
            <div className="text-[#78350F] font-semibold text-sm sm:text-base">Pagos aos leitores</div>
          </div>
          <div className="text-center bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE] p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="text-2xl sm:text-4xl font-bold text-[#1E40AF] mb-2">3.500+</div>
            <div className="text-[#1E3A8A] font-semibold text-sm sm:text-base">Leitores ativos</div>
          </div>
          <div className="text-center bg-gradient-to-br from-[#E0E7FF] to-[#C7D2FE] p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="text-2xl sm:text-4xl font-bold text-[#5B21B6] mb-2">15.000+</div>
            <div className="text-[#581C87] font-semibold text-sm sm:text-base">Avaliações publicadas</div>
          </div>
          <div className="text-center bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="text-2xl sm:text-4xl font-bold text-[#065F46] mb-2">R$ 50-900</div>
            <div className="text-[#064E3B] font-semibold text-sm sm:text-base">Por avaliação</div>
          </div>
        </div>
      </div>
    </section>
  )
}
