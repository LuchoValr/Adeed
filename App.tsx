
import React from 'react';
import Button from './components/Button';
import DemoTool from './components/DemoTool';

const App: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
  };

  const openMail = () => {
    window.location.href = 'mailto:contacto@adeed.com?subject=Interés en Adeed - Demo&body=Hola equipo de Adeed, me gustaría agendar una demo.';
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-2xl font-bold text-blue-600 tracking-tight">Adeed</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#problema" onClick={(e) => handleNavClick(e, 'problema')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Problema</a>
              <a href="#solucion" onClick={(e) => handleNavClick(e, 'solucion')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Solución</a>
              <a href="#funcionamiento" onClick={(e) => handleNavClick(e, 'funcionamiento')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Cómo funciona</a>
            </div>
            <div>
              <Button size="sm" onClick={openMail}>Agenda una demo</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-40 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              Entiende qué está pasando en tu empresa y <span className="text-blue-600">qué deberías estar haciendo mejor</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
              Adeed es una plataforma de analítica de datos inteligente que analiza tu empresa como un médico analiza a un paciente: detecta fallas, riesgos y oportunidades antes de que se conviertan en problemas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" onClick={openMail}>Agenda una demo</Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('solucion')}>Conocer más</Button>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-5 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-300 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* 2. PROBLEMA */}
        <section id="problema" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">El desafío de dirigir sin visibilidad clara</h2>
              <p className="text-lg text-slate-600">
                La mayoría de las empresas toman decisiones basadas en intuición, reportes aislados o información incompleta.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Eficiencia Perdida", desc: "No sabes exactamente dónde se fugan los recursos operativos." },
                { title: "Riesgos Invisibles", desc: "Riesgos operativos que crecen en silencio hasta que es tarde." },
                { title: "Ceguera de Mercado", desc: "No tienes una referencia clara de cómo te comparas con el sector." },
                { title: "Ventaja de la Competencia", desc: "Otros están usando datos para superarte y no sabes por qué." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SOLUCIÓN (ADEED) */}
        <section id="solucion" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-600">¿Qué es Adeed?</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Adeed es una solución de analítica de datos inteligente que combina datos internos de tu empresa con datos del mercado para darte un diagnóstico claro y accionable.
                </p>
                <ul className="space-y-4">
                  {[
                    "Análisis operativo profundo",
                    "Análisis comercial estratégico",
                    "Análisis de productividad real",
                    "Comparación contra empresas similares del mercado",
                    "Identificación de riesgos operativos y cuellos de botella"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700 font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-100 rounded-3xl p-4 lg:p-8">
                <div className="aspect-video bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-200 overflow-hidden">
                   <img src="https://picsum.photos/800/600?business=1" alt="Dashboard Preview" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CÓMO FUNCIONA */}
        <section id="funcionamiento" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-16">Cómo funciona Adeed</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { n: 1, t: "Conectamos", d: "Enlazamos los datos clave de tu empresa de forma segura." },
                { n: 2, t: "Comparamos", d: "Tus métricas frente a referencias reales del mercado." },
                { n: 3, t: "Detectamos", d: "Fallas, riesgos ocultos y oportunidades de mejora." },
                { n: 4, t: "Entregamos", d: "Un dashboard claro y un diagnóstico 100% accionable." }
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {step.n}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.t}</h3>
                  <p className="text-slate-600 leading-snug">{step.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 inline-block bg-blue-50 px-8 py-4 rounded-2xl border border-blue-100">
              <p className="text-blue-800 font-semibold italic">“Información compleja, explicada de forma simple para tomar mejores decisiones.”</p>
            </div>
          </div>
        </section>

        {/* 5. QUÉ ENTREGAMOS */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Qué obtienes con Adeed</h2>
              <p className="text-slate-400">Todo lo que necesitas para tener el control total de tu operación.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Dashboard ejecutivo fácil de entender",
                "Diagnóstico operativo y comercial",
                "Indicadores clave de desempeño (KPIs)",
                "Comparación con el mercado",
                "Recomendaciones accionables",
                "Seguimiento periódico (opcional)"
              ].map((text, i) => (
                <div key={i} className="flex items-center p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">
                  <svg className="w-5 h-5 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PARA QUIÉN ES */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">¿Para quién es Adeed?</h2>
              <p className="text-slate-600 text-lg">Diseñado para líderes que no se conforman con reportes estáticos.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Dueños de empresas",
                "Gerentes generales",
                "Empresas de venta de productos o servicios",
                "Empresas que ya operan pero quieren mejorar",
                "Empresas que sienten que “podrían estar funcionando mejor”"
              ].map((text, i) => (
                <div key={i} className="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-blue-300 transition-colors">
                  <p className="text-slate-800 font-bold text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. DIFERENCIADOR */}
        <section className="py-24 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">No somos contabilidad. No somos solo dashboards.</h2>
            <div className="space-y-6 text-xl text-blue-100 font-medium">
              <p>Adeed no solo muestra datos. Adeed interpreta, compara y diagnostica.</p>
              <p className="text-2xl text-white font-bold">Funcionamos como un chequeo de salud empresarial continuo.</p>
            </div>
          </div>
        </section>

        {/* 8. CTA FINAL */}
        <section id="cta-final" className="py-32 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Toma mejores decisiones con datos claros</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Agenda una demo y descubre qué está funcionando, qué no y qué podrías estar haciendo mejor hoy mismo.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Button variant="secondary" size="lg" className="px-12 py-5 text-xl shadow-xl hover:scale-105 transform" onClick={openMail}>
                Agenda una demo ahora
              </Button>
              <div className="mt-10">
                <p className="text-slate-500 font-medium mb-2">¿Prefieres contactarnos directamente?</p>
                <a href="mailto:contacto@adeed.com" className="text-blue-600 font-bold text-lg hover:underline">
                  contacto@adeed.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold text-slate-900 mr-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Adeed</span>
              <span>© 2026 Adeed Latam. Todos los derechos reservados.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-slate-600 transition-colors">Términos</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
