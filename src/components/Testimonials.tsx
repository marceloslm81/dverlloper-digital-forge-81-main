
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, TechStart",
      text: "A Dvelloper transformou completamente nossa presença digital. O resultado superou todas as expectativas!"
    },
    {
      name: "João Santos",
      role: "Diretor, InnovaCorp",
      text: "Profissionalismo excepcional e entrega no prazo. Recomendo a Dvelloper para qualquer projeto digital."
    },
    {
      name: "Ana Costa",
      role: "Fundadora, DigitalPlus",
      text: "O sistema desenvolvido revolucionou nossos processos internos. Qualidade e inovação em cada detalhe."
    },
    {
      name: "Carlos Mendes",
      role: "CTO, StartupBR",
      text: "Desenvolvimento ágil e soluções criativas. A Dvelloper superou nossas expectativas em todos os aspectos."
    },
    {
      name: "Fernanda Lima",
      role: "Gerente de Marketing, FastGrow",
      text: "Nossa landing page converteu 300% mais depois do trabalho da Dvelloper. Resultados impressionantes!"
    },
    {
      name: "Roberto Alves",
      role: "Proprietário, ComercioOnline",
      text: "O e-commerce desenvolvido aumentou nossas vendas em 250%. Investimento que valeu cada centavo."
    },
    {
      name: "Juliana Rocha",
      role: "Diretora, SaúdeTech",
      text: "Sistema personalizado que otimizou todos nossos processos. Equipe competente e dedicada."
    },
    {
      name: "Pedro Oliveira",
      role: "CEO, LogisticaPro",
      text: "Solução sob medida que resolveu problemas complexos do nosso negócio. Recomendo sem hesitar."
    },
    {
      name: "Camila Torres",
      role: "Fundadora, EduOnline",
      text: "Plataforma educacional desenvolvida com excelência. Nossos alunos adoraram a nova experiência."
    },
    {
      name: "Ricardo Nunes",
      role: "Diretor Comercial, VendaMais",
      text: "CRM personalizado que triplicou nossa produtividade. Parceria que trouxe resultados reais."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            O que nossos <span className="text-blue-500">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/50 p-8 md:p-12 rounded-2xl border border-gray-800 text-center">
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-300 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <h4 className="text-white font-semibold text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-blue-500">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
