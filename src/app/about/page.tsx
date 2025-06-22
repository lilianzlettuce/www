import Link from 'next/link';

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma", "Postman", "Jest"] },
    { category: "Other", items: ["AWS", "CI/CD", "Agile", "UI/UX Design", "Performance Optimization"] }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      year: "2018",
      description: "Focused on software engineering and web development"
    }
  ];

  const contactInfo = [
    { label: "Email", value: "hello@yourname.com", link: "mailto:hello@yourname.com" },
    { label: "LinkedIn", value: "linkedin.com/in/yourname", link: "https://linkedin.com/in/yourname" },
    { label: "GitHub", value: "github.com/yourname", link: "https://github.com/yourname" },
    { label: "Twitter", value: "@yourname", link: "https://twitter.com/yourname" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            I'm a passionate developer who loves creating meaningful digital experiences.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Photo and Contact */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Your Photo</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Your Name</h3>
                <p className="text-gray-600 text-center mb-6">
                  Full Stack Developer & Designer
                </p>

                <div className="space-y-3">
                  {contactInfo.map((contact) => (
                    <div key={contact.label} className="flex items-center space-x-3">
                      <span className="text-gray-500 text-sm w-16">{contact.label}:</span>
                      <a 
                        href={contact.link} 
                        className="text-blue-600 hover:text-blue-700 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Story */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Story</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    I'm a passionate developer with over 5 years of experience building web applications 
                    and digital experiences. My journey in tech started when I built my first website 
                    in high school, and I've been hooked ever since.
                  </p>
                  <p className="text-gray-600 mb-4">
                    I believe in creating software that not only works well but also provides a 
                    delightful user experience. Whether it's a simple landing page or a complex 
                    web application, I approach every project with the same level of care and attention to detail.
                  </p>
                  <p className="text-gray-600">
                    When I'm not coding, you can find me reading tech blogs, experimenting with new 
                    technologies, or exploring the outdoors for inspiration.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{skillGroup.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium">{edu.school}</p>
                      <p className="text-gray-500 text-sm mb-2">{edu.year}</p>
                      <p className="text-gray-600">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Values */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What I Value</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Quality</h3>
                      <p className="text-gray-600 text-sm">Writing clean, maintainable code that stands the test of time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Performance</h3>
                      <p className="text-gray-600 text-sm">Building fast, efficient applications that users love.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Learning</h3>
                      <p className="text-gray-600 text-sm">Continuously improving and staying up-to-date with new technologies.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Collaboration</h3>
                      <p className="text-gray-600 text-sm">Working effectively with teams to deliver exceptional results.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-blue-100 mb-6">
                  I'm always interested in new opportunities and exciting projects. 
                  Let's discuss how we can bring your ideas to life.
                </p>
                <Link 
                  href="mailto:hello@yourname.com" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 