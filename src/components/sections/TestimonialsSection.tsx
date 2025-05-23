import React from 'react';
const testimonials = [{
  quote: 'Finally an app that gets how we vibe!',
  name: 'Alex K.',
  role: 'College Student',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
}, {
  quote: 'My go-to every weekend. Found the coolest rooftop cafe thanks to Blitz!',
  name: 'Priya S.',
  role: 'Designer',
  avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
}, {
  quote: 'Group planning used to be a nightmare. Not anymore!',
  name: 'Marcus T.',
  role: 'Young Professional',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
}];
export const TestimonialsSection = () => {
  return <section id="testimonials" className="py-16 md:py-24 px-4 relative bg-black">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Community Says
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Join thousands of Gen Z users already discovering the best spots in
            town
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800">
              <div className="mb-4">
                {Array(5).fill(0).map((_, i) => <span key={i} className="text-[#FF6EC7]">
                      ★
                    </span>)}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF6EC7]">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Join Our Beta Community
              </h3>
              <p className="text-gray-400">
                Get exclusive early access and help shape the future of social
                outing discovery.
              </p>
            </div>
            <div className="shrink-0">
              <a href="#early-access" className="inline-block bg-gradient-to-r from-[#FF6EC7] to-purple-500 rounded-full px-6 py-3 font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};