import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown, Terminal, Code, Cpu } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1748737349508-fc1f3f3b762d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwY2l0eSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4NTUxNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cyberpunk cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-cyan-900/30 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNNDAgMEgwdjQwIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      {/* Floating neon elements */}
      <motion.div
        className="absolute top-20 left-20 w-2 h-20 bg-cyan-400 blur-sm"
        animate={{
          opacity: [0.3, 1, 0.3],
          scaleY: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-32 w-2 h-32 bg-magenta-400 blur-sm"
        animate={{
          opacity: [1, 0.3, 1],
          scaleY: [1.5, 1, 1.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glitch effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
        animate={{
          x: [-1000, 1000],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal-style header */}
          <motion.div
            className="mb-8 font-mono text-green-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <span className="text-cyan-400">{'>'}</span> whoami
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-mono">
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-green-400 to-magenta-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              ALLAN.SJ
            </motion.span>
          </h1>

          <motion.div
            className="text-2xl md:text-3xl text-cyan-300 mb-8 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-green-400">{'['}</span>
            SOFTWARE_ENGINEER
            <span className="text-green-400">{']'}</span>
          </motion.div>

          <motion.p
            className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-cyan-400">// </span>
            Architecting digital realities through code. Specializing in full-stack development,
            AI integration, and cybersecurity solutions.
          </motion.p>

          {/* System stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 font-mono">
              <div className="flex items-center gap-2 text-cyan-400 mb-2">
                <Code size={16} />
                <span className="text-sm">LANG_STACK</span>
              </div>
              <div className="text-green-400 text-lg">15+</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-magenta-400/30 rounded-lg p-4 font-mono">
              <div className="flex items-center gap-2 text-magenta-400 mb-2">
                <Terminal size={16} />
                <span className="text-sm">PROJECTS</span>
              </div>
              <div className="text-green-400 text-lg">50+</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 font-mono">
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <Cpu size={16} />
                <span className="text-sm">UPTIME</span>
              </div>
              <div className="text-green-400 text-lg">24/7</div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-mono px-8 py-3 rounded-none border border-cyan-400 shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105"
            >
              ./view_projects.sh
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-400 text-green-400 hover:bg-green-400/10 font-mono px-8 py-3 rounded-none transition-all duration-300"
            >
              make contact
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.a
              href="https://github.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: -360 }}
              transition={{ duration: 0.3 }}
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="mailto:contact@allanjuliani.com"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Mail size={28} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400"
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.div>

      {/* Terminal cursor effect */}
      <motion.div
        className="absolute bottom-16 right-8 w-3 h-6 bg-green-400"
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
