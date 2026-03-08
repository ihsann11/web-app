'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Toaster } from 'sonner';
import { Music, PartyPopper, Sparkles, Ticket, Users } from 'lucide-react';
import RegistrationForm from '@/components/RegistrationForm';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FDFCF6] text-zinc-900 overflow-x-hidden">
      <Toaster position="top-center" richColors />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-1/2 -right-20 w-80 h-80 bg-orange-400 rounded-full blur-3xl" 
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold tracking-wide uppercase"
            >
              <PartyPopper className="w-4 h-4" />
              Festival Terbesar Tahun Ini
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.9] text-zinc-900"
            >
              GEMBIRA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">FEST</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 font-medium"
            >
              Rayakan kreativitas, kuliner, dan komunitas dalam satu panggung kegembiraan. 
              Jadilah bagian dari perjalanan kami sebagai tenant resmi!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 pt-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                  <Music className="w-5 h-5 text-zinc-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-zinc-400 uppercase">Live Music</p>
                  <p className="font-bold text-zinc-800">Local Heroes</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-zinc-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-zinc-400 uppercase">Target</p>
                  <p className="font-bold text-zinc-800">10,000+ Visitors</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                  <Ticket className="w-5 h-5 text-zinc-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-zinc-400 uppercase">Venue</p>
                  <p className="font-bold text-zinc-800">City Center Park</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 sticky top-32">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                  Ayo Bergabung <br />
                  Sebagai <span className="italic text-yellow-600">Tenant!</span>
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Kami mencari UMKM kreatif dan inovatif untuk memeriahkan GEMBIRA FEST. 
                  Dapatkan eksposur maksimal ke ribuan pengunjung dan tingkatkan penjualan brand Anda.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: 'Fasilitas Lengkap', desc: 'Tenda sarnafil, listrik, dan meja kursi disediakan.', icon: Sparkles },
                  { title: 'Promosi Digital', desc: 'Brand Anda akan dipromosikan di seluruh kanal media sosial kami.', icon: PartyPopper },
                  { title: 'Lokasi Strategis', desc: 'Penempatan tenant di area dengan traffic pengunjung tertinggi.', icon: Ticket },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-zinc-100"
                  >
                    <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-zinc-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900">{item.title}</h3>
                      <p className="text-zinc-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <RegistrationForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-black tracking-tighter">GEMBIRA FEST</h3>
            <p className="text-zinc-500 text-sm mt-1">© 2026 Gembira Festival. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm font-bold text-zinc-400 uppercase tracking-widest">
            <a href="#" className="hover:text-zinc-900 transition-colors">Instagram</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">TikTok</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
