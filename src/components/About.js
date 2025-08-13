import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Wrench } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Clientes Satisfechos' },
    { icon: Clock, number: '10+', label: 'Años de Experiencia' },
    { icon: Wrench, number: '1000+', label: 'Servicios Realizados' },
    { icon: Award, number: '100%', label: 'Garantía de Calidad' }
  ];

  const values = [
    {
      title: 'Profesionalismo',
      description: 'Trabajamos con los más altos estándares de calidad y profesionalismo en cada servicio.'
    },
    {
      title: 'Confiabilidad',
      description: 'Cumplimos con nuestros compromisos y horarios, brindando un servicio confiable y puntual.'
    },
    {
      title: 'Experiencia',
      description: 'Más de 10 años de experiencia nos respaldan en el sector de refrigeración y climatización.'
    },
    {
      title: 'Innovación',
      description: 'Utilizamos las últimas tecnologías y técnicas para ofrecer soluciones eficientes y modernas.'
    }
  ];

  const handleWhatsApp = () => {
    const phoneNumber = "5491131750620"; // Tu número de WhatsApp
    const message = "Hola, me gustaría solicitar una cotización para sus servicios.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Sobre Nosotros
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una empresa especializada en servicios técnicos de refrigeración y climatización, 
            comprometidos con la excelencia y la satisfacción de nuestros clientes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Tu Socio de Confianza en Refrigeración
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              En GSTecFrio, nos especializamos en brindar soluciones integrales para todos tus 
              equipos de refrigeración y climatización. Desde aires acondicionados residenciales 
              hasta complejas cámaras frigoríficas industriales.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Nuestro equipo de técnicos certificados cuenta con años de experiencia y se mantiene 
              actualizado con las últimas tecnologías del sector para garantizar un servicio de 
              primera calidad.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Nuestros Valores:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h5 className="font-semibold text-blue-600 mb-2">{value.title}</h5>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Nuestros Números
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">¿Necesitas nuestros servicios?</h3>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos hoy mismo y obtén una cotización gratuita para tu proyecto
          </p>
          <motion.button 
            onClick={handleWhatsApp}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Cotización
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
