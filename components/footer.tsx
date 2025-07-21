import { Shield, Clock, Award } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1E293B] to-[#334155] text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <div className="flex items-center gap-5 mb-6">
              <img src="/capcash-logo-new.png" alt="CapCash" className="w-20 h-20 sm:w-28 sm:h-28" />
              <span className="text-3xl sm:text-5xl font-bold">CapCash</span>
            </div>
            <p className="text-[#CBD5E1] leading-relaxed text-sm sm:text-base">
              A maior plataforma de monetização de leitura do Brasil. Transforme sua paixão por livros em renda extra de
              forma segura e confiável com CapCash.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-[#CBD5E1] text-sm sm:text-base font-medium">Pagamentos Seguros</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="text-[#CBD5E1] text-sm sm:text-base font-medium">Suporte 24/7</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#F59E0B] to-[#F97316] rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-[#CBD5E1] text-sm sm:text-base font-medium">Certificado de Qualidade</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#475569] mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-[#94A3B8] text-xs sm:text-sm">© 2024 CapCash. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
