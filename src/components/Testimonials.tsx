
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import type { RefCallback } from 'react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const Testimonials = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    text: ''
  });

  const handleEnviarDepoimento = () => {
    if (!newTestimonial.text.trim() || !newTestimonial.name.trim()) {
      return;
    }
    
    // Adicionar o novo depoimento à lista
    setTestimonials([
      ...testimonials,
      {
        name: newTestimonial.name,
        role: newTestimonial.role || "Cliente",
        text: newTestimonial.text,
        image: "/placeholder.svg"
      }
    ]);

    // Atualizar o índice para mostrar o novo depoimento
    setCurrentTestimonial(testimonials.length);
    
    // Fechar o modal e limpar o formulário
    setIsOpen(false);
    setNewTestimonial({ name: '', role: '', text: '' });
  };
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [testimonialsRef, isTestimonialsVisible] = useScrollAnimation();
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const [testimonials, setTestimonials] = useState([
    {
      name: "Thiago Mendes",
      role: "Barbeiro",
      text: "Meu barbeiro precisava de um site pra mostrar os cortes e agendar horários. O Marcelo fez tudo certinho e agora consigo organizar melhor minha agenda. O cara é muito bom no que faz!",
      image: "/placeholder.svg"
    },
    {
      name: "Amanda Costa",
      role: "Fisioterapeuta",
      text: "Sempre tive dificuldade com tecnologia, mas o Marcelo foi super paciente. Fez meu site de fisioterapia do jeito que eu queria, bem simples e bonito. Agora meus pacientes conseguem marcar consulta online sem eu precisar ficar no telefone o dia todo.",
      image: "/placeholder.svg"
    },
    {
      name: "Roberto Silva",
      role: "Mecânico",
      text: "O site que o Marcelo fez pra minha oficina tá dando muito certo. Os clientes conseguem ver os serviços, preços e até agendar horário. Antes eu perdia muito tempo no telefone, agora é tudo mais organizado.",
      image: "/placeholder.svg"
    },
    /*{
      name: "Carla Santos",
      role: "Professora de Inglês",
      text: "Precisava de um site pra dar aulas online e o Marcelo entendeu exatamente o que eu queria. Fez tudo bem rápido e agora consigo dar minhas aulas particulares sem sair de casa. Super recomendo!",
      image: "/placeholder.svg"
    },*/
    {
      name: "Luxe Noir",
      role: "Campanha 2025 — Moda Premium",
      text: "Estou extremamente satisfeita com o trabalho realizado pela Dvelloper e pelo desenvolvedor Marcelo. A página da campanha ‘O Futuro da Moda Premium’ traduz exatamente a estética de luxo e tecnologia que buscamos, com tipografia marcante, efeitos de neon e CTAs elegantes. Atendimento ágil, entrega no prazo e resultado acima do esperado.",
      image: "/placeholder.svg"
    },
    /*{
      name: "Diego Oliveira",
      role: "Personal Trainer",
      text: "O Marcelo fez um site incrível pra mim! Agora meus alunos conseguem ver meus treinos, marcar horários e até comprar planos online. O cara é muito competente e entrega tudo no prazo.",
      image: "/placeholder.svg"
    },*/
    {
      name: "Mariana Lima",
      role: "Dentista",
      text: "Meu consultório precisava de uma presença digital e o Marcelo fez exatamente o que eu precisava. O site ficou lindo, profissional e agora meus pacientes conseguem agendar consultas online. Muito obrigada!",
      image: "/placeholder.svg"
    },
    {
      name: "Lucas Ferreira",
      role: "Advogado", 
      text: "Como advogado, precisava de um site sério e profissional. O Marcelo entendeu isso perfeitamente e fez um site que passa credibilidade. Agora consigo captar mais clientes pela internet.",
      image: "/placeholder.svg"
    },
    /*{
      name: "Fernanda Rocha",
      role: "Designer de Unhas",
      text: "O Marcelo fez um site lindo pra mim! Agora minhas clientes conseguem ver meus trabalhos, preços e marcar horário online. O site ficou exatamente como eu queria, bem feminino e elegante.",
      image: "/placeholder.svg"
    },
    {
      name: "Gabriel Alves", 
      role: "Barbeiro",
      text: "Meu barbeiro precisava de um site pra mostrar os cortes e agendar horários. O Marcelo fez tudo certinho e agora consigo organizar melhor minha agenda. O cara é muito bom no que faz!",
      image: "/placeholder.svg"
    },
    {
      name: "Patrícia Costa",
      role: "Consultora de Beleza",
      text: "O Marcelo fez um site maravilhoso pra minha consultoria de beleza! Agora minhas clientes conseguem ver meus serviços, preços e marcar consultas online. O site ficou lindo e profissional.",
      image: "/placeholder.svg"
    }*/
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(59,130,246,0.2),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_60%,rgba(147,51,234,0.15),transparent)]"></div>

      <div className="container mx-auto px-4 relative">
        <div 
          ref={titleRef as RefCallback<HTMLDivElement>}
          className={`text-center mb-20 ${
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            O que nossos{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient-x">
                clientes
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50 animate-pulse"></span>
            </span>
            {" "}dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
        </div>

        <div 
          ref={testimonialsRef as RefCallback<HTMLDivElement>}
          className={`max-w-5xl mx-auto relative ${
            isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000`}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-white transition-colors"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-3 rounded-full hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-white transition-colors"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-3 rounded-full hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Testimonial Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-gray-900/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-800/50">
              <div className="flex flex-col items-center gap-6">
                <div className="flex-1 text-center">
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-blue-500/50 mb-4 mx-auto" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-2.2 0-4 1.8-4 4v12h8V12h-4c0-2.2 1.8-4 4-4V8zm14 0c-2.2 0-4 1.8-4 4v12h8V12h-4c0-2.2 1.8-4 4-4V8z"/>
                    </svg>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                      {testimonials[currentTestimonial].text}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Botão para clientes enviarem depoimentos */}
          <div className="mt-12 text-center">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              {/* Botão com o mesmo estilo do CTA de Automations */}
              <div className="relative inline-block group/button">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover/button:opacity-100 transition duration-1000 group-hover/button:duration-200 animate-pulse"></div>
                <DialogTrigger asChild>
                  <Button className="relative inline-flex items-center px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all duration-300">
                    <span className="relative bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Deixe seu depoimento
                    </span>
                    <svg className="w-5 h-5 ml-2 text-blue-400 group-hover/button:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </DialogTrigger>
              </div>
              {/* Conteúdo do Dialog permanece igual */}
              <DialogContent className="bg-gray-900 border border-gray-800 text-white">
                <DialogHeader>
                  <DialogTitle>Enviar Depoimento</DialogTitle>
                  <DialogDescription className="text-gray-300">
                    Conte sua experiência para ajudar outros clientes.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="testimonial-name" className="text-gray-200">Nome</Label>
                    <Input
                      id="testimonial-name"
                      placeholder="Seu nome"
                      value={newTestimonial.name}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="testimonial-role" className="text-gray-200">Profissão/Empresa</Label>
                    <Input
                      id="testimonial-role"
                      placeholder="Seu cargo ou empresa"
                      value={newTestimonial.role}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, role: e.target.value })}
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="testimonial-text" className="text-gray-200">Depoimento</Label>
                    <Textarea
                      id="testimonial-text"
                      placeholder="Escreva seu depoimento..."
                      value={newTestimonial.text}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, text: e.target.value })}
                      className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsOpen(false)}
                      className="border-gray-700 text-gray-200"
                    >
                      Cancelar
                    </Button>
                    <Button
                      onClick={handleEnviarDepoimento}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Adicionar Depoimento
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
