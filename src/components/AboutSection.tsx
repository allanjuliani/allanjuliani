import { motion } from 'motion/react';
import { Code, Shield, Cpu, Database, Zap, Network } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "FULL_STACK_DEV",
      description: "Advanced proficiency in React, Node.js, Python, and modern web architectures",
      color: "cyan"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "CYBERSECURITY",
      description: "Implementing secure coding practices and penetration testing methodologies",
      color: "red"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI_INTEGRATION",
      description: "Machine learning implementations and neural network optimization",
      color: "green"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "DATA_ARCHITECT",
      description: "Designing scalable database systems and distributed computing solutions",
      color: "magenta"
    }
  ];

  const techStack = [
    'JavaScript', 'TypeScript', 'Python', 'Go', 'Rust',
    'React', 'Node.js', 'Docker', 'Kubernetes', 'AWS'
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-black">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1721378466934-68c57d15a6c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBtYXRyaXglMjBjb2RlJTIwdGVybWluYWx8ZW58MXx8fHwxNzU4NjY3Njc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Matrix code background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-green-900/20 to-black/90"></div>
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2Utb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJtMCAwaDQwdjQwSDB6Ii8+PC9nPjwvc3ZnPg==')] opacity-30"
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-green-400 mb-4">
            <span className="text-cyan-400">{'>'}</span> cat /usr/local/bin/about.md
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text mb-6 font-mono">
            SYSTEM_INFO
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            <span className="text-cyan-400">// </span>
            Senior Software Engineer with 7+ years optimizing digital infrastructures
            and building next-generation applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-black/60 backdrop-blur-sm border border-cyan-400/30 rounded-none p-6">
              <div className="font-mono text-green-400 mb-4">
                <span className="text-cyan-400">{'>'}</span> ./biography.sh --verbose
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 font-mono text-sm">
                Specialized in architecting scalable microservices, implementing AI-driven solutions,
                and securing digital environments. Currently focusing on blockchain integration
                and quantum-resistant cryptography.
              </p>
              <p className="text-gray-300 leading-relaxed font-mono text-sm">
                When not pushing commits, I contribute to open-source projects, research emerging
                technologies, and mentor junior developers in the art of clean code.
              </p>

              {/* Terminal output style */}
              <div className="mt-6 bg-black/80 border border-green-400/30 p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">CURRENT_STATUS:</div>
                <div className="text-cyan-400">├── Location: São Paulo, Brazil</div>
                <div className="text-cyan-400">├── Role: Senior Software Engineer</div>
                <div className="text-cyan-400">├── Focus: Full-Stack + AI/ML</div>
                <div className="text-cyan-400">└── Availability: Open for projects</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-green-500/30 rounded-none blur-xl"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-cyan-400/30 p-6 font-mono">
                <div className="text-green-400 mb-4">
                  <span className="text-cyan-400">{'>'}</span> ls -la ./skills/
                </div>

                <div className="space-y-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-cyan-400">{tech}</span>
                      <div className="flex-1 border-b border-green-400/20"></div>
                      <span className="text-green-400">✓</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const colorClasses = {
              cyan: {
                border: 'border-cyan-400/30 hover:border-cyan-400/60',
                text: 'text-cyan-400',
                bg: 'group-hover:bg-cyan-400/5'
              },
              red: {
                border: 'border-red-400/30 hover:border-red-400/60',
                text: 'text-red-400',
                bg: 'group-hover:bg-red-400/5'
              },
              green: {
                border: 'border-green-400/30 hover:border-green-400/60',
                text: 'text-green-400',
                bg: 'group-hover:bg-green-400/5'
              },
              magenta: {
                border: 'border-magenta-400/30 hover:border-magenta-400/60',
                text: 'text-magenta-400',
                bg: 'group-hover:bg-magenta-400/5'
              }
            };

            const colors = colorClasses[skill.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-black/60 backdrop-blur-sm border ${colors.border} rounded-none p-6 transition-all duration-300 ${colors.bg}`}>
                  <div className={`${colors.text} mb-4 flex items-center justify-between`}>
                    {skill.icon}
                    <Zap className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${colors.text}`} />
                  </div>
                  <h3 className={`${colors.text} font-semibold mb-3 font-mono text-sm`}>
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 font-mono text-xs leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Performance metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-black/60 backdrop-blur-sm border border-green-400/30 rounded-none p-6 font-mono"
        >
          <div className="text-green-400 mb-4">
            <span className="text-cyan-400">{'>'}</span> system_metrics --performance
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-1">150+</div>
              <div className="text-gray-400 text-sm">COMMITS_THIS_MONTH</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">UPTIME_RATE</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-magenta-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">DEBUG_MODE</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">∞</div>
              <div className="text-gray-400 text-sm">LEARNING_LOOP</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
