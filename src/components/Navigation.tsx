import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'sys.home', href: '#home' },
    { name: 'usr.about', href: '#about' },
    { name: 'dev.projects', href: '#projects' },
    { name: 'net.contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-cyan-400/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-mono"
          >
            <Terminal className="text-cyan-400" size={24} />
            <span className="text-xl font-bold">
              <span className="text-green-400">[</span>
              <span className="text-cyan-400">AJ</span>
              <span className="text-green-400">]</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group font-mono text-sm"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-green-400">./</span>{item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <Button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-mono px-6 py-2 rounded-none border border-green-400 transition-all duration-300 transform hover:scale-105">
              EXEC_HIRE
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <motion.button
            className="md:hidden text-cyan-400 border border-cyan-400/30 p-2 rounded-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md border border-cyan-400/20 rounded-none mt-2"
        >
          <div className="py-4 space-y-4 font-mono">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-6 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-green-400">./</span>{item.name}
              </a>
            ))}
            <div className="px-6">
              <Button className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-black font-mono py-2 rounded-none border border-green-400">
                EXEC_HIRE
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
