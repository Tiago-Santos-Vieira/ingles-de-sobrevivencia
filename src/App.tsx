import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Zap,
  ArrowUp
} from 'lucide-react';

export default function App() {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const courseName = "Guia do Viajante";

  const ctaText = "SIM! QUERO VIAJAR SEM PERRENGUE";

  const painPoints = [
    "O pavor de ser interrogado e barrado na imigração por não entender o oficial.",
    "O constrangimento de apontar para o cardápio e torcer para a comida vir certa.",
    "A frustração de depender do Google Tradutor ou de parentes para tudo.",
    "O medo de uma emergência médica e não saber explicar o que está sentindo."
  ];

  const modules = [
    {
      title: "1. Imigração e Aeroporto Blindados",
      description: "Passe pela alfândega com confiança, responda às perguntas certas e encontre suas malas sem suar frio.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-700" />
    },
    {
      title: "2. Hospedagem Nível VIP",
      description: "Faça check-in, exija seus direitos, peça serviço de quarto e resolva qualquer problema na recepção.",
      icon: <Hotel className="w-6 h-6 text-blue-700" />
    },
    {
      title: "3. Gastronomia Sem Surpresas",
      description: "Entenda cardápios complexos, faça pedidos específicos, peça a conta e lide com alergias alimentares com segurança.",
      icon: <Utensils className="w-6 h-6 text-blue-700" />
    },
    {
      title: "4. Compras, Transporte e Socorro",
      description: "Negocie preços, pegue o transporte correto e saiba exatamente o que dizer em emergências médicas ou policiais.",
      icon: <CreditCard className="w-6 h-6 text-blue-700" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-red-200 selection:text-red-900">
      {/* Navbar / Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-950 rounded-xl shadow-md">
              <Plane className="w-6 h-6 text-white transform rotate-12" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                <Zap className="w-3 h-3 text-white" fill="currentColor" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm leading-none tracking-tight text-blue-950 uppercase">Guia do</span>
              <span className="font-heading font-black text-lg leading-none tracking-tight text-red-600 uppercase">Viajante</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#metodo" className="hover:text-red-600 transition-colors">O Método</a>
            <a href="#modulos" className="hover:text-red-600 transition-colors">Módulos</a>
            <a href="#sobre" className="hover:text-red-600 transition-colors">Sobre a Teacher</a>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-heading font-bold uppercase tracking-wide transition-all shadow-sm hover:shadow-md flex items-center gap-2">
            Garantir Vaga
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-white">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=60" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.03] mix-blend-multiply pointer-events-none"
          fetchPriority="high"
          decoding="async"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-semibold text-sm mb-6"
          >
            <Globe className="w-4 h-4" />
            <span>O passaporte para a sua independência</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-blue-950 mb-6 leading-[1.1]"
          >
            Viaje para o exterior sem o <span className="text-red-600">medo de travar</span> no inglês na frente dos outros
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            O único manual prático que te ensina a passar pela imigração, fazer pedidos e resolver perrengues. <strong className="text-blue-950">Sem gramática inútil, 100% focado na vida real.</strong>
          </motion.p>

          {/* VSL Placeholder / Facade */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full max-w-3xl mx-auto aspect-video bg-blue-950 rounded-2xl shadow-2xl overflow-hidden mb-8 group cursor-pointer ring-4 ring-white"
            onClick={() => setIsVideoLoaded(true)}
          >
            {!isVideoLoaded ? (
              <>
                <img 
                  src="https://img.youtube.com/vi/HtSGNBiCTqw/maxresdefault.jpg" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity" 
                  referrerPolicy="no-referrer" 
                  fetchPriority="high"
                  decoding="async" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-red-600/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-10 h-10 text-white ml-2" fill="currentColor" />
                  </div>
                </div>
              </>
            ) : (
              <iframe 
                className="w-full h-full absolute top-0 left-0"
                src="https://www.youtube.com/embed/HtSGNBiCTqw?rel=0&autoplay=1" 
                title="Apresentação Guia do Viajante" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            )}
          </motion.div>

          <p className="text-sm font-semibold text-slate-500 mb-8 uppercase tracking-wider">
            Assista ao vídeo e descubra o método
          </p>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-heading font-black uppercase tracking-wide py-5 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] hover:shadow-[0_0_60px_-15px_rgba(220,38,38,0.7)] transition-all flex items-center justify-center gap-3 mx-auto w-full sm:w-auto"
          >
            {ctaText}
            <ArrowRight className="w-6 h-6" />
          </motion.button>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-600 font-semibold">
            <ShieldCheck className="w-5 h-5 text-blue-700" />
            <span>Garantia incondicional de 7 dias • Acesso Imediato</span>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="metodo" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-blue-950 mb-8 leading-tight">
                Você vai deixar o idioma <span className="text-red-600">estragar a viagem</span> dos seus sonhos?
              </h2>
              <div className="space-y-6">
                {painPoints.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                      </div>
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-700 rounded-[2rem] transform translate-x-4 translate-y-4 opacity-10"></div>
              <img 
                src="https://i.postimg.cc/QC8ytGcY/Gemini-Generated-Image-4dzpr74dzpr74dzp.png" 
                alt="Viajante confuso" 
                className="relative rounded-[2rem] shadow-2xl object-cover w-full h-[550px] border-4 border-white"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modulos" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-blue-950 mb-6">
              O seu roteiro exato para a <span className="text-blue-700">independência</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Um método direto ao ponto, dividido em 4 módulos práticos com tudo que você precisa para dominar as situações reais do exterior.
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
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-blue-700">
                  {React.cloneElement(mod.icon, { className: "w-7 h-7 text-blue-700 group-hover:text-white transition-colors" })}
                </div>
                <h3 className="text-xl font-heading font-bold text-blue-950 mb-3">{mod.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{mod.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section id="sobre" className="py-24 bg-blue-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-red-900 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600 rounded-[2rem] transform -translate-x-4 translate-y-4 opacity-20"></div>
                <img 
                  src="https://i.postimg.cc/7h6K4Pn9/Gemini-Generated-Image-rs4s2grs4s2grs4s-(1).png" 
                  alt="Teacher Hannah" 
                  className="relative rounded-[2rem] shadow-2xl object-cover w-full aspect-[3/4] border-4 border-blue-900"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-800 text-blue-300 font-semibold text-sm mb-6 uppercase tracking-wider">
                Sua co-piloto nesta jornada
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-black mb-6 leading-tight">
                Muito prazer, eu sou a <span className="text-red-400">Teacher Hannah!</span>
              </h2>
              <p className="text-lg text-blue-100/90 mb-6 leading-relaxed font-medium">
                Com anos de experiência ensinando inglês para adultos, percebi que a maioria dos cursos foca em regras gramaticais que você <strong className="text-white">nunca vai usar na vida real.</strong>
              </p>
              <p className="text-lg text-blue-100/90 mb-10 leading-relaxed font-medium">
                Minha missão é te dar a chave para explorar o mundo com independência. Eu criei um método direto ao ponto, acolhedor e focado 100% na prática, para que você sinta segurança desde o momento em que pisar no avião.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-blue-900/40 p-6 rounded-2xl border border-blue-800/50">
                <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=60" alt="Aluno" className="w-14 h-14 rounded-full border-2 border-blue-950 object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=60" alt="Aluno" className="w-14 h-14 rounded-full border-2 border-blue-950 object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=60" alt="Aluno" className="w-14 h-14 rounded-full border-2 border-blue-950 object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=60" alt="Aluno" className="w-14 h-14 rounded-full border-2 border-blue-950 object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
                <p className="text-base font-medium text-blue-200 leading-snug">
                  Junte-se a mais de <br/><strong className="text-white text-lg">2.000 alunos</strong><br/> que já viajaram sem medo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl border border-slate-100">
            <ShieldCheck className="w-12 h-12 text-blue-700" />
          </div>
          <h2 className="text-4xl font-heading font-black text-blue-950 mb-6">Risco Absolutamente Zero</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            Se você entrar no curso e achar que a metodologia não é para você, basta enviar um único e-mail em até 7 dias e devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia. <strong className="text-blue-950">O risco é todo meu.</strong>
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-red-600 hover:bg-red-700 text-white text-xl font-heading font-black uppercase tracking-wide py-5 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] hover:shadow-[0_0_60px_-15px_rgba(220,38,38,0.7)] transition-all flex items-center justify-center gap-3 mx-auto w-full sm:w-auto"
          >
            {ctaText}
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200 py-12 text-center text-sm border-t border-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-xl shadow-md">
              <Plane className="w-6 h-6 text-blue-700 transform rotate-12" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center border-2 border-blue-950 shadow-sm">
                <Zap className="w-3 h-3 text-white" fill="currentColor" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-extrabold text-sm leading-none tracking-tight text-white uppercase">Guia do</span>
              <span className="font-heading font-black text-lg leading-none tracking-tight text-red-400 uppercase">Viajante</span>
            </div>
          </div>
          <p className="mb-6 font-medium">© {new Date().getFullYear()} Teacher Hannah. Todos os direitos reservados.</p>
          <div className="flex gap-6 font-semibold">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-3 md:p-4 bg-blue-950 text-white rounded-full shadow-[0_0_20px_rgba(220,38,38,0.3)] border-2 border-red-600 hover:bg-blue-900 transition-colors group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
