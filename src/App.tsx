import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const accentColor = '#FF6B35';

  const posts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400x300',
      title: 'Control de Inventario Inteligente',
      content: 'Jarvis Easy Stock te permite controlar tus inventarios de manera eficiente y precisa con nuestra tecnología de escaneo IA y fotos móviles.',
      date: '22 de Febrero de 2024',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/400x300',
      title: 'Optimiza tus Procesos de Inventario',
      content: 'Nuestra plataforma de SaaS te permite automatizar y optimizar tus procesos de inventario, reduciendo costos y aumentando la productividad.',
      date: '15 de Marzo de 2024',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/400x300',
      title: 'Soluciones de Inventario para Pequeños y Grandes Negocios',
      content: 'En Jarvis Easy Stock, ofrecemos soluciones de inventario personalizadas para pequeños y grandes negocios, adaptadas a tus necesidades específicas.',
      date: '01 de Abril de 2024',
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado:', { nombre, email, mensaje });
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
          <h2 className="text-3xl font-black uppercase tracking-tighter italic">Jarvis Easy <span style={{ color: accentColor }}>Stock</span></h2>
          <p className="text-lg font-bold text-gray-600">La solución de inventario más inteligente y fácil de usar</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">¿Qué podemos hacer por ti?</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full p-2 mb-4 rounded-lg border border-white/10"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-4 rounded-lg border border-white/10"
              />
              <textarea
                placeholder="Mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full p-2 mb-4 rounded-lg border border-white/10"
              />
              <button
                type="submit"
                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity"
                style={{ color: accentColor }}
              >
                Enviar 
              </button>
            </form>
          </div>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all"
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">Actualización de Inventario</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.content}</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{post.date}</span>
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
                  Leer Más 
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity"
            style={{ color: accentColor }}
          >
            Descubre más sobre Jarvis Easy Stock 
          </button>
        </div>
      </section>
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="container mx-auto px-6 text-center text-white/40 text-sm">
          &copy; 2026 Jarvis Easy Stock | Powered by Neural Nexus
        </div>
      </footer>
    </div>
  );
}

export default App;