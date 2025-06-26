import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-muted via-background to-accent">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Hi, I'm <span className="text-primary">Lilian Zhao</span>
          </h1>
          <p className="text-xl md:text-2xl text-mutedForeground mb-8 max-w-2xl mx-auto">
            I create digital experiences that matter. From web applications to creative projects, 
            I bring ideas to life through code and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/work" 
              className="bg-primary text-primaryForeground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View My Work
            </Link>
            <Link 
              href="/about" 
              className="border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cardForeground mb-4">
              What I Do
            </h2>
            <p className="text-xl text-mutedForeground max-w-2xl mx-auto">
              I specialize in building modern web applications and creating engaging digital experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-muted hover:bg-accent transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cardForeground mb-2">Web Development</h3>
              <p className="text-mutedForeground">
                Building responsive, performant web applications with modern technologies.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted hover:bg-accent transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cardForeground mb-2">UI/UX Design</h3>
              <p className="text-mutedForeground">
                Creating intuitive and beautiful user interfaces that enhance user experience.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted hover:bg-accent transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-cardForeground mb-2">Performance</h3>
              <p className="text-mutedForeground">
                Optimizing applications for speed, accessibility, and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to work together?
          </h2>
          <p className="text-xl text-mutedForeground mb-8">
            Let's discuss your next project and bring your vision to life.
          </p>
          <Link 
            href="/about" 
            className="bg-primary text-primaryForeground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
