'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { Check, Loader2, Send } from 'lucide-react';

const formSchema = z.object({
  tenantCategory: z.string().min(1, 'Silakan pilih kategori tenant'),
  storeName: z.string().min(2, 'Nama store minimal 2 karakter'),
  picName: z.string().min(3, 'Nama penanggung jawab minimal 3 karakter'),
  whatsapp: z.string().min(10, 'Nomor WhatsApp tidak valid'),
  email: z.string().email('Email tidak valid'),
  socialMedia: z.string().min(2, 'Media sosial wajib diisi'),
});

type FormValues = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form Data:', data);
    setIsSubmitting(false);
    toast.success('Pendaftaran Berhasil!', {
      description: 'Tim kami akan segera menghubungi Anda melalui WhatsApp.',
    });
    reset();
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-10 bg-white rounded-3xl shadow-2xl border border-black/5">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-display font-bold text-zinc-900 mb-2">Formulir Pendaftaran</h2>
        <p className="text-zinc-500">Isi data di bawah ini untuk bergabung dengan kemeriahan GEMBIRA FEST!</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Kategori Tenant */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-zinc-700 uppercase tracking-wider">Kategori Tenant</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {['Food & Beverages', 'Merchandise & Apparel', 'Lifestyle/Experience'].map((category) => (
              <label
                key={category}
                className={`
                  relative flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all
                  ${errors.tenantCategory ? 'border-red-200' : 'border-zinc-100'}
                  hover:border-yellow-400 hover:bg-yellow-50/50
                  has-[:checked]:border-yellow-500 has-[:checked]:bg-yellow-50
                `}
              >
                <input
                  type="radio"
                  value={category}
                  {...register('tenantCategory')}
                  className="sr-only"
                />
                <span className="text-sm font-medium text-center leading-tight">
                  {category === 'Food & Beverages' && 'Food & Beverages (Makanan & Minuman)'}
                  {category === 'Merchandise & Apparel' && 'Merchandise & Apparel'}
                  {category === 'Lifestyle/Experience' && 'Lifestyle/Experience (Games, Face Painting, dll)'}
                </span>
              </label>
            ))}
          </div>
          {errors.tenantCategory && (
            <p className="text-xs text-red-500 font-medium">{errors.tenantCategory.message}</p>
          )}
        </div>

        {/* Nama Store */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-700 uppercase tracking-wider">Nama Store / Brand</label>
          <input
            {...register('storeName')}
            placeholder="Masukkan nama store Anda"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all"
          />
          {errors.storeName && <p className="text-xs text-red-500 font-medium">{errors.storeName.message}</p>}
        </div>

        {/* Nama Penanggung Jawab */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-700 uppercase tracking-wider">Nama Penanggung Jawab</label>
          <input
            {...register('picName')}
            placeholder="Masukkan nama lengkap"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all"
          />
          {errors.picName && <p className="text-xs text-red-500 font-medium">{errors.picName.message}</p>}
        </div>

        {/* WhatsApp & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-700 uppercase tracking-wider">Nomor WhatsApp</label>
            <input
              {...register('whatsapp')}
              placeholder="0812xxxx"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all"
            />
            {errors.whatsapp && <p className="text-xs text-red-500 font-medium">{errors.whatsapp.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-700 uppercase tracking-wider">Email</label>
            <input
              {...register('email')}
              placeholder="nama@email.com"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all"
            />
            {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
          </div>
        </div>

        {/* Media Sosial */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-700 uppercase tracking-wider">Media Sosial (Instagram/TikTok)</label>
          <input
            {...register('socialMedia')}
            placeholder="@username"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all"
          />
          {errors.socialMedia && <p className="text-xs text-red-500 font-medium">{errors.socialMedia.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Daftar Sekarang
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      {/* Pricing Info */}
      <div className="mt-10 p-6 bg-yellow-50 rounded-2xl border border-yellow-200 flex flex-col md:flex-row items-center gap-4">
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
          <Check className="w-6 h-6 text-zinc-900" />
        </div>
        <div>
          <h4 className="font-display font-bold text-zinc-900 text-lg">Informasi Biaya Tenant</h4>
          <p className="text-zinc-700 text-sm leading-relaxed">
            Biaya pendaftaran tenant adalah <span className="font-bold text-zinc-900">Rp 1.000.000</span>. 
            Pembayaran wajib diselesaikan paling lambat <span className="font-bold text-zinc-900">H-5</span> sebelum acara dimulai.
          </p>
        </div>
      </div>
    </div>
  );
}
