export default function Stuff() {
  const personalProjects = [
    {
      id: 1,
      title: "Personal Blog",
      description: "A minimalist blog built with Next.js and MDX, featuring dark mode and custom typography.",
      link: "#",
      github: "#",
      tags: ["Next.js", "MDX", "Blog"]
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with real-time data and interactive charts.",
      link: "#",
      github: "#",
      tags: ["React", "Chart.js", "Weather API"]
    },
    {
      id: 3,
      title: "Recipe Manager",
      description: "A personal recipe collection app with search, categories, and meal planning features.",
      link: "#",
      github: "#",
      tags: ["Vue.js", "LocalStorage", "PWA"]
    }
  ];

  const hobbies = [
    {
      title: "Photography",
      description: "Capturing moments through the lens, specializing in street and landscape photography.",
      icon: "📸"
    },
    {
      title: "Reading",
      description: "Currently reading 'The Pragmatic Programmer' and exploring science fiction novels.",
      icon: "📚"
    },
    {
      title: "Hiking",
      description: "Exploring trails and mountains, finding inspiration in nature's beauty.",
      icon: "🏔️"
    },
    {
      title: "Cooking",
      description: "Experimenting with new recipes and techniques in the kitchen.",
      icon: "👨‍🍳"
    }
  ];

  const resources = [
    {
      title: "My Reading List",
      description: "Books that have influenced my thinking and career.",
      link: "#"
    },
    {
      title: "Design Inspiration",
      description: "A curated collection of websites and designs that inspire me.",
      link: "#"
    },
    {
      title: "Development Tools",
      description: "My favorite tools and extensions for web development.",
      link: "#"
    },
    {
      title: "Learning Resources",
      description: "Courses, tutorials, and resources I recommend for developers.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stuff
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Personal projects, hobbies, and things I find interesting. This is where I share the fun stuff.
          </p>
        </div>
      </section>

      {/* Personal Projects */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Personal Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.link} 
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View Live →
                  </a>
                  <a 
                    href={project.github} 
                    className="text-gray-600 hover:text-gray-700 text-sm font-medium"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies & Interests */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Hobbies & Interests</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {hobbies.map((hobby, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl">{hobby.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{hobby.title}</h3>
                  <p className="text-gray-600">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Resources & Links</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a 
                  href={resource.link} 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Working On */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Currently Working On</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Learning Rust</h3>
                <p className="text-gray-600 mb-4">
                  Exploring systems programming with Rust. Building small CLI tools and learning about memory safety and performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Rust</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">CLI Tools</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Systems Programming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Fun Facts</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">42</div>
              <p className="text-gray-600">Projects completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">156</div>
              <p className="text-gray-600">Books read this year</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">∞</div>
              <p className="text-gray-600">Cups of coffee consumed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 