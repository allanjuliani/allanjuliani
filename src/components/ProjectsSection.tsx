import { motion } from 'motion/react';
import { ExternalLink, Github, Terminal, Zap, Shield, Brain } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const projects = [
    {
      title: "NEURAL_TRADING_BOT",
      description: "Advanced cryptocurrency trading algorithm powered by machine learning. Features real-time market analysis, risk management protocols, and automated portfolio optimization.",
      image: "https://images.unsplash.com/photo-1748609664795-11546ad62000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY3J5cHRvY3VycmVuY3klMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4NjY3NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Python", "TensorFlow", "WebSocket", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      status: "ACTIVE",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "QUANTUM_SECURE_CHAT",
      description: "End-to-end encrypted messaging platform using quantum-resistant cryptography. Implements post-quantum algorithms for future-proof security.",
      image: "https://images.unsplash.com/photo-1752253604157-65fb42c30816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwaG9sb2dyYXBoaWMlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4NjY3NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["React", "WebRTC", "Rust", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      status: "BETA",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "CYBERPUNK_DASHBOARD",
      description: "Real-time system monitoring dashboard with holographic UI elements. Tracks server performance, security metrics, and network analytics.",
      image: "https://images.unsplash.com/photo-1578070581071-d9b52bf80993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODY2NzcyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Vue.js", "D3.js", "Socket.io", "GraphQL"],
      liveUrl: "#",
      githubUrl: "#",
      status: "PRODUCTION",
      icon: <Terminal className="w-5 h-5" />
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'green';
      case 'BETA': return 'yellow';
      case 'PRODUCTION': return 'cyan';
      default: return 'gray';
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTEwMCAwSDB2MTAwIi8+PC9nPjwvc3ZnPg==')] opacity-20"
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating neon elements */}
      <motion.div
        className="absolute top-20 right-20 w-1 h-16 bg-cyan-400 blur-sm"
        animate={{
          opacity: [0.3, 1, 0.3],
          scaleY: [1, 2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-1 h-20 bg-green-400 blur-sm"
        animate={{
          opacity: [1, 0.3, 1],
          scaleY: [2, 1, 2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-green-400 mb-4">
            <span className="text-cyan-400">{'>'}</span> ls -la ./projects/ --featured
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text mb-6 font-mono">
            ACTIVE_PROJECTS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            <span className="text-cyan-400">// </span>
            Cutting-edge applications built with next-generation technologies
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-green-500/30 rounded-none blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    {/* Project status indicator */}
                    <div className={`absolute top-4 right-4 bg-black/80 border px-3 py-1 font-mono text-xs ${
                      project.status === 'ACTIVE' ? 'border-green-400/60' :
                      project.status === 'BETA' ? 'border-yellow-400/60' :
                      project.status === 'PRODUCTION' ? 'border-cyan-400/60' :
                      'border-gray-400/60'
                    }`}>
                      <div className={`flex items-center gap-2 ${
                        project.status === 'ACTIVE' ? 'text-green-400' :
                        project.status === 'BETA' ? 'text-yellow-400' :
                        project.status === 'PRODUCTION' ? 'text-cyan-400' :
                        'text-gray-400'
                      }`}>
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          project.status === 'ACTIVE' ? 'bg-green-400' :
                          project.status === 'BETA' ? 'bg-yellow-400' :
                          project.status === 'PRODUCTION' ? 'bg-cyan-400' :
                          'bg-gray-400'
                        }`}></div>
                        {project.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-black/60 backdrop-blur-sm border border-cyan-400/30 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-cyan-400">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 font-mono">
                      {project.title}
                    </h3>
                  </div>

                  <div className="font-mono text-green-400 mb-3 text-sm">
                    <span className="text-cyan-400">{'>'}</span> cat ./README.md
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 font-mono text-sm">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="font-mono text-green-400 mb-3 text-sm">
                      <span className="text-cyan-400">{'>'}</span> cat ./package.json | grep dependencies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-black/80 border border-green-400/30 text-green-400 font-mono text-xs hover:border-green-400/60 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-mono flex items-center gap-2 rounded-none border border-cyan-400"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        EXEC_DEMO
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-green-400 text-green-400 hover:bg-green-400/10 font-mono flex items-center gap-2 rounded-none"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        SOURCE_CODE
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal-style project stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-black/60 backdrop-blur-sm border border-green-400/30 p-6 font-mono"
        >
          <div className="text-green-400 mb-4">
            <span className="text-cyan-400">{'>'}</span> git log --oneline --graph --all
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-1">50+</div>
              <div className="text-gray-400 text-sm">REPOSITORIES</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">10k+</div>
              <div className="text-gray-400 text-sm">COMMITS</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-magenta-400 mb-1">25+</div>
              <div className="text-gray-400 text-sm">LANGUAGES</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">100+</div>
              <div className="text-gray-400 text-sm">STARS_EARNED</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
