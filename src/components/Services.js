import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Wrench, Settings, Shield, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Snowflake,
      title: 'Aire Acondicionado',
      description: 'Instalación, mantenimiento y reparación de equipos de climatización residencial y comercial.',
      features: ['Instalación profesional', 'Mantenimiento preventivo', 'Reparaciones urgentes', 'Carga de gas'],
      {/*color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Settings,
      title: 'Cámaras Frigoríficas',
      description: 'Diseño, construcción y mantenimiento de sistemas de refrigeración industrial.',
      features: ['Diseño personalizado', 'Instalación completa', 'Sistemas de control', 'Mantenimiento 24/7'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Wrench,
      title: 'Freezers Comerciales',
      description: 'Servicio técnico especializado para equipos de congelación comercial e industrial.',
      features: ['Diagnóstico preciso', 'Repuestos originales', 'Reparación in-situ', 'Garantía extendida'],
      color: 'from-blue-600 to-indigo-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Garantía Total',
      description: 'Todos nuestros trabajos incluyen garantía completa en mano de obra y repuestos.'
    },
    {
      icon: Clock,
      title: 'Servicio 24/7',
      description: 'Disponibles las 24 horas para emergencias y servicios urgentes.'
    },
    {
      icon: Users,
      title: 'Técnicos Certificados',
      description: 'Equipo de profesionales con certificaciones y años de experiencia.'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en refrigeración y climatización con la más alta calidad y profesionalismo
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button 
                className={w-full mt-8 bg-gradient-to-r ${service.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar Servicio
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              ¿Por qué elegirnos?
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
