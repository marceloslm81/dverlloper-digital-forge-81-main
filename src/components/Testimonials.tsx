
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Thiago Mendes",
      role: "Dono da Padaria São João",
      text: "Cara, o Marcelo salvou minha vida! Minha padaria tava precisando de um site pra vender pães online durante a pandemia. Ele fez tudo rapidinho e agora vendo até pros vizinhos. O cara é muito bom mesmo!"
    },
    {
      name: "Amanda Costa",
      role: "Fisioterapeuta",
      text: "Sempre tive dificuldade com tecnologia, mas o Marcelo foi super paciente. Fez meu site de fisioterapia do jeito que eu queria, bem simples e bonito. Agora meus pacientes conseguem marcar consulta online sem eu precisar ficar no telefone o dia todo."
    },
    {
      name: "Roberto Silva",
      role: "Mecânico",
      text: "O site que o Marcelo fez pra minha oficina tá dando muito certo. Os clientes conseguem ver os serviços, preços e até agendar horário. Antes eu perdia muito tempo no telefone, agora é tudo mais organizado."
    },
    {
      name: "Carla Santos",
      role: "Professora de Inglês",
      text: "Precisava de um site pra dar aulas online e o Marcelo entendeu exatamente o que eu queria. Fez tudo bem rápido e agora consigo dar minhas aulas particulares sem sair de casa. Super recomendo!"
    },
    {
      name: "Diego Oliveira",
      role: "Personal Trainer",
      text: "O Marcelo fez um site incrível pra mim! Agora meus alunos conseguem ver meus treinos, marcar horários e até comprar planos online. O cara é muito competente e entrega tudo no prazo."
    },
    {
      name: "Mariana Lima",
      role: "Dentista",
      text: "Meu consultório precisava de uma presença digital e o Marcelo fez exatamente o que eu precisava. O site ficou lindo, profissional e agora meus pacientes conseguem agendar consultas online. Muito obrigada!"
    },
    {
      name: "Lucas Ferreira",
      role: "Advogado",
      text: "Como advogado, precisava de um site sério e profissional. O Marcelo entendeu isso perfeitamente e fez um site que passa credibilidade. Agora consigo captar mais clientes pela internet."
    },
    {
      name: "Fernanda Rocha",
      role: "Designer de Unhas",
      text: "O Marcelo fez um site lindo pra mim! Agora minhas clientes conseguem ver meus trabalhos, preços e marcar horário online. O site ficou exatamente como eu queria, bem feminino e elegante."
    },
    {
      name: "Gabriel Alves",
      role: "Barbeiro",
      text: "Meu barbeiro precisava de um site pra mostrar os cortes e agendar horários. O Marcelo fez tudo certinho e agora consigo organizar melhor minha agenda. O cara é muito bom no que faz!"
    },
    {
      name: "Patrícia Costa",
      role: "Consultora de Beleza",
      text: "O Marcelo fez um site maravilhoso pra minha consultoria de beleza! Agora minhas clientes conseguem ver meus serviços, preços e marcar consultas online. O site ficou lindo e profissional."
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
