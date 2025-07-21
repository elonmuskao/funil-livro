"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Clock } from "lucide-react"
import { BookEvaluationQuiz } from "./book-evaluation-quiz" // Import the new component

interface BookReaderProps {
  book: {
    title: string
    author: string
    price: string
  }
  onBack: () => void
}

export function BookReader({ book, onBack }: BookReaderProps) {
  const [readingTime, setReadingTime] = useState(0)
  const [showEvaluationQuiz, setShowEvaluationQuiz] = useState(false) // New state for the quiz modal

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setReadingTime((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  // Full book content concatenated
  const fullBookContent = `
O vento sussurrava segredos antigos através das torres de cristal de Eldoria, carregando consigo o aroma
de pergaminhos envelhecidos e a promessa de tempestades distantes. Lyra ajustou seus óculos de leitura e
mergulhou mais fundo na penumbra da Grande Biblioteca, onde as sombras dançavam entre estantes que se
perdiam nas alturas nebulosas do teto abobadado.

Havia três dias que ela não dormia adequadamente, consumida pela descoberta que fizera nos arquivos
proibidos. O manuscrito que agora repousava diante dela, escrito em runas que pulsavam com uma luz fraca e
dourada, continha revelações que poderiam abalar os próprios alicerces do reino. As palavras pareciam se
mover na página, reorganizando-se conforme ela lia, como se a própria magia estivesse viva dentro do
pergaminho.

'Os Últimos Dias da Era Dourada', lia o título em caracteres que mudavam de cor conforme a luz
incidente. O texto falava de um tempo em que dragões e humanos viviam em harmonia, quando a magia fluía
livremente pelas veias da terra como rios de luz líquida. Mas algo havia acontecido, algo terrível que forçara os
dragões a um sono profundo e fizera a magia definhar como flores no inverno.

Lyra virou a página com dedos trêmulos. Ali estava o que ela mais temia encontrar: a Profecia da
Escolha Final. Segundo o texto, quando a magia estivesse quase extinta, um Escriba Escolhido
emergiria para despertar os dragões adormecidos. Mas o despertar viria com um preço - o Escrihido
deveria sacrificar sua própria essência mágica para restaurar o equilíbrio, ou assistir ao mundo
mergulhar em uma era de trevas eternas.

O som de passos ecoando pelos corredores de mármore fez Lyra erguer a cabeça bruscamente. Ela
reconheceu imediatamente o caminhar pesado e determinado do Grão-Mestre Aldric, o guardião dos
segredos mais profundos da biblioteca. Rapidamente, ela fechou o manuscrito e o escondeu entre
outros tomos menos controversos, fingindo estudar um tratado sobre herbologia élfica.

'Trabalhando até tarde novamente, jovem Lyra?' A voz grave de Aldric ecoou entre as estantes,
carregando uma nota de preocupação paternal. Ele emergiu das sombras como um fantasma
benevolente, sua barba prateada brilhando sob a luz mágica das velas flutuantes.

'Os estudos sobre as antigas línguas requerem dedicação, Mestre', respondeu ela, tentando manter
a voz firme. 'Há tanto conhecimento perdido esperando para ser redescoberto.'

Aldric aproximou-se, seus olhos azuis penetrantes parecendo ver através da fachada que ela tentava
manter. 'Conhecimento perdido pode ser perigoso, criança. Alguns segredos foram enterrados por
boas razões.' Ele fez uma pausa, observando-a com atenção. 'Você tem sentido... mudanças
ultimamente? Sonhos estranhos? Visões?'

O coração de Lyra acelerou. Como ele poderia saber sobre os sonhos? Sobre as imagens de dragões
dourados que visitavam seu sono, sussurrando palavras em línguas que ela não deveria compreender,
mas compreendia? Sobre a sensação crescente de que algo antigo e poderoso estava despertando
dentro dela?

'Eu... não sei do que está falando, Mestre', mentiu ela, mas sua voz traiu sua incerteza.

Aldric suspirou profundamente, como se carregasse o peso de séculos em seus ombros. 'A magia está
morrendo, Lyra. Você deve ter notado - os cristais de luz estão perdendo seu brilho, as poções dos
curandeiros estão falhando, até mesmo os pergaminhos auto-escreventes estão ficando mudos.' Ele
se aproximou mais, baixando a voz para um sussurro conspiratório. 'Mas há sinais de que algo está
mudando. Energias antigas estão se movendo nas profundezas da terra.'

Lyra sentiu um arrepio percorrer sua espinha. 'O que isso significa?'

'Significa que o tempo das escolhas difíceis está chegando', respondeu Aldric, seus olhos fixos nos
dela. 'E que alguns de nós podem ser chamados a fazer sacrifícios que nunca imaginamos.'

Naquela noite, sozinha em seus aposentos na torre dos escribas, Lyra não conseguiu afastar os
pensamentos sobre a conversa com Aldric. Ela sabia que ele suspeitava de algo, talvez até soubesse
sobre sua descoberta do manuscrito proibido. Mas havia algo mais em seus olhos, uma mistura de
medo e esperança que a deixava inquieta.

Quando finalmente conseguiu adormecer, os sonhos vieram com mais intensidade do que nunca. Ela
se viu voando sobre paisagens que não existiam mais, montada nas costas de um dragão dourado
cujas escamas brilhavam como sol líquido. Abaixo deles, florestas de árvores cristalinas se estendiam
até o horizonte, e rios de luz pura serpenteavam pela terra como veias de prata.

'O tempo está chegando, Escriba', disse o dragão, sua voz ressoando diretamente em sua mente. 'A
escolha que definirá o destino de todos nós está próxima. Você está preparada para pagar o preço da
salvação?'

Lyra acordou com lágrimas nos olhos e uma certeza terrível no coração. Ela era a Escriba Escolhida
da profecia, e em breve teria que decidir entre salvar o mundo que amava ou preservar sua própria vida.
A magia de Eldoria dependia de sua escolha, e o tempo estava se esgotando.
  `

  const handleFinishReading = () => {
    setShowEvaluationQuiz(true) // Show the quiz modal
  }

  const handleCompleteEvaluation = (totalPoints: number, totalEarnings: number) => {
    setShowEvaluationQuiz(false)
    onBack() // Go back to dashboard or a success page
    // Here you might want to update user's balance or show a success message
    console.log(`Avaliação concluída! Pontos: ${totalPoints}, Ganhos: R$ ${totalEarnings}`)
  }

  if (showEvaluationQuiz) {
    return (
      <BookEvaluationQuiz
        bookTitle={book.title}
        readingTime={formatTime(readingTime)}
        onClose={() => setShowEvaluationQuiz(false)}
        onCompleteEvaluation={handleCompleteEvaluation}
      />
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f1eb] p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span className="font-mono">{formatTime(readingTime)}</span>
        </div>
      </div>

      {/* Book Information and Content */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Title and Author */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-[#1E2A78] mb-2">{book.title}</h1>
          <p className="text-gray-600 text-lg">por {book.author}</p>
        </div>

        {/* Synopsis */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-[#1E2A78] mb-4">Sinopse</h2>
          <p className="text-gray-700 leading-relaxed">
            Em um reino onde a magia está desaparecendo, uma jovem escriba descobre um antigo segredo que pode salvar ou
            destruir tudo o que conhece. Entre dragões adormecidos e profecias esquecidas, Lyra deve escolher entre o
            poder e a sabedoria.
          </p>
        </div>

        {/* Book Content */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-[#1E2A78] mb-4">Conteúdo do Livro</h2>
          <div className="text-gray-800 leading-relaxed whitespace-pre-line">{fullBookContent}</div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleFinishReading}
            className="px-8 py-3 bg-[#F4C95D] text-white rounded-lg font-semibold hover:bg-[#E6B84D] transition-colors text-base sm:text-lg"
          >
            Finalizar Leitura e Avaliar
          </button>
        </div>
      </div>
    </div>
  )
}
