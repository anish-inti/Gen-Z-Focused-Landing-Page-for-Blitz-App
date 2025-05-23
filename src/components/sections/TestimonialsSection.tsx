import React from 'react';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 relative bg-black">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Best Outing Community
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            All the vibes, none of the hassle. Meet your friends and build a community for going out! Join us on WhatsApp and discover the best spots in town together.
          </p>
        </div>
        <div className="mt-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Join Our WhatsApp Group
              </h3>
              <p className="text-gray-400">
                Be part of the best outing community! All the vibes, none of the hassle. Meet friends, build connections, and discover amazing places together.
              </p>
            </div>
            <div className="shrink-0">
              <a href="https://chat.whatsapp.com/L2dWAqd6P009iVqSiG0eaq" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full px-6 py-3 font-medium text-white hover:shadow-lg hover:shadow-green-500/20 transition-all">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Join WhatsApp Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};