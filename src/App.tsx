import React from 'react';
import { motion } from 'motion/react';
import { 
  Plane, 
  ShieldCheck, 
  MapPin, 
  Coffee, 
  ShoppingBag, 
  CheckCircle, 
  Play, 
  ArrowRight,
  Globe,
  AlertTriangle,
  Hotel,
  Utensils,
  CreditCard,
  HeartPulse,
  Zap
} from 'lucide-react';

export default function App() {
  const courseName = "Guia do Viajante";

  const headline = "O manual prático para você aprender a se virar em inglês antes do seu próximo embarque. Sem gramática chata, 100% focado na vida real";

  const ctaText = "Destravar meu inglês agora";

  const painPoints = [
    "O pavor de ser barrado na imigração por não entender as perguntas do oficial.",
    "O medo de pedir uma comida no restaurante e receber algo completamente diferente (ou pagar mais caro por engano).",
    "A insegurança de se perder na rua e não conseguir pedir informações básicas para voltar ao hotel.",
    "A frustração de depender de tradutores no celular ou de outras pessoas o tempo todo."
  ];

  const modules = [
    {
      title: "Módulo 1: A Chegada e Imigração",
      description: "Passo a passo para responder ao oficial com confiança, pegar as malas e sair do aeroporto sem estresse.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-700" />
    },
    {
      title: "Módulo 2: Hospedagem sem Estresse",
      description: "Como fazer check-in, check-out, pedir toalhas extras e resolver problemas no quarto do hotel.",
      icon: <Hotel className="w-6 h-6 text-blue-700" />
    },
    {
      title: "Módulo 3: Alimentação e Restaurantes",
      description: "Como pedir sua comida, entender o cardápio, pedir a conta e lidar com alergias.",
      icon: <Utensils className="w-6 h-6 text-blue-700" />
    },
    {
      title: "Módulo 4: Compras, Transporte e Emergências",
      description: "Como pechinchar, usar o metrô/táxi e pedir ajuda médica ou policial se precisar.",
      icon: <CreditCard className="w-6 h-6 text-blue-700" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      {/* Navbar / Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl shadow-md">
              <Plane className="w-6 h-6 text-white transform rotate-12" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                <Zap className="w-3 h-3 text-white" fill="currentColor" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm leading-none tracking-tight text-slate-900 uppercase">Guia do</span>
              <span className="font-black text-lg leading-none tracking-tight text-blue-700 uppercase">Viajante</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-600">
            <a href="#metodo" className="hover:text-blue-700 transition-colors">O Método</a>
            <a href="#modulos" className="hover:text-blue-700 transition-colors">Módulos</a>
            <a href="#sobre" className="hover:text-blue-700 transition-colors">Sobre a Teacher</a>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md flex items-center gap-2">
            {ctaText}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=60')] bg-cover bg-center opacity-10 mix-blend-multiply pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
          >
            {headline}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Esqueça a gramática chata e os anos de cursinho. Aprenda apenas o vocabulário prático e as frases exatas para se virar em aeroportos, hotéis e restaurantes.
          </motion.p>

          {/* VSL Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-full max-w-3xl mx-auto aspect-video bg-slate-900 rounded-2xl shadow-2xl overflow-hidden mb-8"
          >
            <iframe 
              className="w-full h-full absolute top-0 left-0"
              src="https://www.youtube.com/embed/HtSGNBiCTqw?rel=0" 
              title="Apresentação Guia do Viajante" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </motion.div>

          <p className="text-sm font-medium text-slate-500 mb-8">
            Assista ao vídeo acima e descubra o método exato que a Teacher Hannah criou para destravar o seu inglês antes do embarque.
          </p>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 mx-auto w-full sm:w-auto"
          >
            {ctaText}
            <ArrowRight className="w-6 h-6" />
          </motion.button>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>Garantia incondicional de 7 dias</span>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="metodo" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Você se identifica com alguma destas situações?
              </h2>
              <div className="space-y-6">
                {painPoints.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://i.postimg.cc/QC8ytGcY/Gemini-Generated-Image-4dzpr74dzpr74dzp.png" 
                alt="Viajante confuso" 
                className="relative rounded-3xl shadow-lg object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modulos" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              O que você vai aprender no <span className="text-blue-700">{courseName}</span>
            </h2>
            <p className="text-lg text-slate-600">
              Um método direto ao ponto, dividido em 4 módulos práticos com tudo que você precisa para sobreviver no exterior.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((mod, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {mod.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{mod.title}</h3>
                <p className="text-slate-600 leading-relaxed">{mod.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section id="sobre" className="py-20 bg-blue-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <img 
                src="https://i.postimg.cc/7h6K4Pn9/Gemini-Generated-Image-rs4s2grs4s2grs4s-(1).png" 
                alt="Teacher Hannah" 
                className="rounded-2xl shadow-2xl object-cover w-full aspect-[3/4]"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Muito prazer, eu sou a Teacher Hannah!</h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Com anos de experiência ensinando inglês para adultos, percebi que a maioria dos cursos foca em regras gramaticais que você nunca vai usar na vida real.
              </p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Minha missão é te dar a chave para explorar o mundo com independência. Eu criei um método direto ao ponto, acolhedor e focado 100% na prática, para que você sinta segurança desde o momento em que pisar no avião.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=60" alt="Aluno" className="w-12 h-12 rounded-full border-2 border-blue-900 object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=60" alt="Aluno" className="w-12 h-12 rounded-full border-2 border-blue-900 object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=60" alt="Aluno" className="w-12 h-12 rounded-full border-2 border-blue-900 object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=60" alt="Aluno" className="w-12 h-12 rounded-full border-2 border-blue-900 object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
                <p className="text-sm font-medium text-blue-200">
                  Junte-se a mais de <strong className="text-white">2.000 alunos</strong> que já viajaram sem medo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="w-10 h-10 text-blue-700" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Garantia Incondicional de 7 Dias</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Se você entrar no curso e achar que a metodologia não é para você, basta enviar um único e-mail e devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia. <strong className="text-slate-900">O risco é todo meu.</strong>
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 mx-auto w-full sm:w-auto"
          >
            {ctaText}
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-md">
              <Plane className="w-6 h-6 text-white transform rotate-12" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center border-2 border-slate-900 shadow-sm">
                <Zap className="w-3 h-3 text-white" fill="currentColor" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-sm leading-none tracking-tight text-slate-300 uppercase">Guia do</span>
              <span className="font-black text-lg leading-none tracking-tight text-white uppercase">Viajante</span>
            </div>
          </div>
          <p className="mb-4">© {new Date().getFullYear()} Teacher Hannah. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
