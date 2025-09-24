import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Terminal, Code, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black border-t border-cyan-400/20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2Utb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="text-cyan-400" size={24} />
              <div className="text-2xl font-bold font-mono">
                <span className="text-green-400">[</span>
                <span className="text-cyan-400">ALLAN.SJ</span>
                <span className="text-green-400">]</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed font-mono text-sm">
              <span className="text-cyan-400">// </span>
              Software Engineer specializing in next-generation technologies.
              Building the digital future, one commit at a time.
            </p>

            {/* Terminal-style signature */}
            <div className="mt-4 bg-black/60 border border-green-400/30 p-3 font-mono text-xs">
              <div className="text-green-400 mb-1">
                <span className="text-cyan-400">{'>'}</span> echo $SIGNATURE
              </div>
              <div className="text-gray-400">
                "Code is poetry, bugs are just undocumented features."
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-cyan-400 mb-4 text-sm">
              <span className="text-green-400">{'>'}</span> ls ./navigation/
            </div>
            <ul className="space-y-2 font-mono text-sm">
              {['sys.home', 'usr.about', 'dev.projects', 'net.contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.split('.')[1]}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-green-400 text-xs">└──</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-cyan-400 mb-4 text-sm">
              <span className="text-green-400">{'>'}</span> ./connect.sh
            </div>
            <div className="space-y-3">
              <a
                href="https://github.com"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors duration-300 font-mono text-sm group"
                aria-label="GitHub"
              >
                <Github size={16} />
                <span>github.com/allan</span>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-green-400">
                  <Terminal size={12} />
                </div>
              </a>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 font-mono text-sm group"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
                <span>linkedin.com/in/allan</span>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">
                  <Terminal size={12} />
                </div>
              </a>
              <a
                href="mailto:allan@cyberdomain.dev"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-mono text-sm group"
                aria-label="Email"
              >
                <Mail size={16} />
                <span>allan@cyberdomain.dev</span>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400">
                  <Terminal size={12} />
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* System info bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-black/60 backdrop-blur-sm border border-green-400/30 p-4 mb-6 font-mono"
        >
          <div className="text-green-400 mb-2 text-sm">
            <span className="text-cyan-400">{'>'}</span> system_info --runtime
          </div>
          <div className="grid md:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">BUILD:</span>
              <span className="text-green-400">v2.{currentYear}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">STATUS:</span>
              <span className="text-cyan-400">OPERATIONAL</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">UPTIME:</span>
              <span className="text-green-400">99.9%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">LAST_COMMIT:</span>
              <span className="text-magenta-400">RECENT</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-6 border-t border-cyan-400/20 flex flex-col md:flex-row justify-between items-center font-mono text-sm"
        >
          <p className="text-gray-400 flex items-center gap-2">
            <span className="text-cyan-400">{'>'}</span>
            {/* © {currentYear} Allan Juliani. Crafted with{' '}
            <Code size={14} className="text-green-400" /> and{' '}
            <Heart size={14} className="text-red-500 animate-pulse" /> for Dani */}
            Crafted with{' '}
            <Code size={14} className="text-green-400" /> and{' '}
            <Heart size={14} className="text-red-500 animate-pulse" /> for Dani
          </p>
          <p className="text-gray-400 mt-2 md:mt-0 flex items-center gap-2">
            <span className="text-green-400 text-xs">└──</span>
            All systems operational.
          </p>
        </motion.div>
      </div>

      {/* Terminal cursor in corner */}
      <motion.div
        className="absolute bottom-4 right-4 w-2 h-4 bg-green-400"
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </footer>
  );
}
