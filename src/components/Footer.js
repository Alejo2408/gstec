import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    'Aire Acondicionado',
    'Cámaras Frigoríficas',
    'Freezers Comerciales',
    'Mantenimiento Preventivo',
    'Instalaciones Nuevas',
    'Servicio de Emergencia'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">TF</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">TechFrio</h3>
                <p className="text-blue-300 text-sm">Servicio Técnico Especializado</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Especialistas en refrigeración y climatización con más de 10 años de experiencia. 
              Tu socio de confianza para mantener tus equipos funcionando perfectamente.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-blue-800/50 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Información de Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium">+54 11 1234-5678</p>
                  <p className="text-gray-400 text-sm">Disponible 24/7</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium">info@techfrio.com</p>
                  <p className="text-gray-400 text-sm">Respuesta rápida</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium">Buenos Aires, Argentina</p>
                  <p className="text-gray-400 text-sm">Zona metropolitana</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium">Lun - Vie: 8:00 - 18:00</p>
                  <p className="text-gray-400 text-sm">Sáb: 9:00 - 14:00</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <motion.div 
              className="mt-6 p-4 bg-red-600/20 border border-red-500/30 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <h5 className="text-red-300 font-semibold mb-2">🚨 Emergencias</h5>
              <p className="text-white font-bold">+54 11 1234-5678</p>
              <p className="text-red-200 text-sm">Disponible 24 horas</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-center md:text-left">
            © 2025 TechFrio. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-300">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Garantías</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;