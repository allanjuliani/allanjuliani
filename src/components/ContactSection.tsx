import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Terminal, Wifi } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "EMAIL_ADDR",
      content: "allan@cyberdomain.dev",
      href: "mailto:allan@cyberdomain.dev",
      color: "cyan"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "COMM_LINE",
      content: "+55 (11) 9999-9999",
      href: "tel:+5511999999999",
      color: "green"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "LOCATION",
      content: "São Paulo, Brazil",
      href: "#",
      color: "magenta"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-black">
      {/* Animated background matrix */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmZmYiIHN0cm9rZS13aWR0aD0iMC4zIiBzdHJva2Utb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L3N2Zz4=')] opacity-30"
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating connection indicators */}
      <motion.div
        className="absolute top-10 right-10 flex items-center gap-2 text-green-400 font-mono text-sm"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Wifi className="w-4 h-4" />
        <span>ONLINE</span>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 w-1 h-24 bg-green-400 blur-sm"
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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono text-green-400 mb-4">
            <span className="text-cyan-400">{'>'}</span> ./establish_connection.sh --secure
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text mb-6 font-mono">
            INIT_CONNECTION
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            <span className="text-cyan-400">// </span>
            Ready to collaborate on your next breakthrough project? Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/60 backdrop-blur-sm border border-cyan-400/30 p-6">
              <div className="font-mono text-green-400 mb-4">
                <span className="text-cyan-400">{'>'}</span> cat ./contact_info.json
              </div>
              <div className="text-gray-300 leading-relaxed mb-6 font-mono text-sm">
                Currently accepting new projects and collaborations. Specialized in
                full-stack development, AI/ML integration, and cybersecurity solutions.
                Response time: &lt;24h guaranteed.
              </div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const colorClasses = {
                  cyan: {
                    border: 'border-cyan-400/30 hover:border-cyan-400/60',
                    text: 'text-cyan-400',
                    icon: 'text-cyan-400'
                  },
                  green: {
                    border: 'border-green-400/30 hover:border-green-400/60',
                    text: 'text-green-400',
                    icon: 'text-green-400'
                  },
                  magenta: {
                    border: 'border-magenta-400/30 hover:border-magenta-400/60',
                    text: 'text-magenta-400',
                    icon: 'text-magenta-400'
                  }
                };

                const colors = colorClasses[info.color as keyof typeof colorClasses];

                return (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-4 p-4 bg-black/60 backdrop-blur-sm border ${colors.border} transition-all duration-300 group font-mono`}
                  >
                    <div className={`${colors.icon} group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className={`${colors.text} font-medium text-sm`}>{info.title}</p>
                      <p className="text-gray-300 text-sm">{info.content}</p>
                    </div>
                    <div className={`ml-auto ${colors.icon} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      <Terminal className="w-4 h-4" />
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* System status */}
            <div className="bg-black/60 backdrop-blur-sm border border-green-400/30 p-4 font-mono">
              <div className="text-green-400 mb-3 text-sm">
                <span className="text-cyan-400">{'>'}</span> system_status --availability
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">STATUS:</span>
                  <span className="text-green-400">AVAILABLE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">TIMEZONE:</span>
                  <span className="text-cyan-400">UTC-3 (São Paulo)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">RESPONSE_TIME:</span>
                  <span className="text-green-400">&lt;24h</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/60 backdrop-blur-sm border border-cyan-400/30 p-6"
          >
            <div className="font-mono text-green-400 mb-6">
              <span className="text-cyan-400">{'>'}</span> ./send_message.sh --encrypted
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cyan-400 mb-2 font-mono text-sm">FIRST_NAME:</label>
                  <Input
                    type="text"
                    placeholder="Enter your first name"
                    className="bg-black/80 border-cyan-400/30 text-green-400 placeholder:text-gray-500 focus:border-cyan-400 font-mono rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-cyan-400 mb-2 font-mono text-sm">LAST_NAME:</label>
                  <Input
                    type="text"
                    placeholder="Enter your last name"
                    className="bg-black/80 border-cyan-400/30 text-green-400 placeholder:text-gray-500 focus:border-cyan-400 font-mono rounded-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-cyan-400 mb-2 font-mono text-sm">EMAIL_ADDR:</label>
                <Input
                  type="email"
                  placeholder="your.email@domain.com"
                  className="bg-black/80 border-cyan-400/30 text-green-400 placeholder:text-gray-500 focus:border-cyan-400 font-mono rounded-none"
                />
              </div>

              <div>
                <label className="block text-cyan-400 mb-2 font-mono text-sm">PROJECT_TYPE:</label>
                <Input
                  type="text"
                  placeholder="Full-stack development, AI/ML, Security..."
                  className="bg-black/80 border-cyan-400/30 text-green-400 placeholder:text-gray-500 focus:border-cyan-400 font-mono rounded-none"
                />
              </div>

              <div>
                <label className="block text-cyan-400 mb-2 font-mono text-sm">MESSAGE_BODY:</label>
                <Textarea
                  placeholder="Describe your project requirements..."
                  rows={5}
                  className="bg-black/80 border-cyan-400/30 text-green-400 placeholder:text-gray-500 focus:border-cyan-400 font-mono resize-none rounded-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-mono py-3 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 rounded-none border border-green-400"
              >
                <Send size={18} />
                TRANSMIT_MESSAGE
              </Button>
            </form>

            {/* Encryption indicator */}
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 text-green-400 font-mono text-xs">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>END_TO_END_ENCRYPTED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
