import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "5491112345678"; // Tu número en formato internacional
    const text = `Hola, soy ${formData.name}.
Teléfono de contacto: ${formData.phone}
Email: ${formData.email}
Servicio solicitado: ${formData.service}
Mensaje: ${formData.message}`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+54 11 1234-5678',
      description: 'Disponible 24/7 para emergencias'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@GSTecFrio.com',
      description: 'Respuesta en menos de 24hs'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      info: 'Buenos Aires, Argentina',
      description: 'Cobertura en toda la zona metropolitana'
    },
    {
      icon: Clock,
      title: 'Horarios',
      info: 'Lun - Vie: 8:00 - 18:00',
      description: 'Sáb: 9:00 - 14:00 | Dom: Emergencias'
    }
  ];

  const services = [
    'Aire Acondicionado',
    'Cámaras Frigoríficas',
    'Freezers Comerciales',
    'Mantenimiento Preventivo',
    'Instalación Nueva',
    'Otro'
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              Contáctanos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para cualquier consulta o solicitud de servicio
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Información de Contacto
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Nuestro equipo está listo para atenderte. Ya sea para una consulta, 
                cotización o servicio de emergencia, no dudes en contactarnos.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-blue-600 font-medium mb-1">{item.info}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Banner */}
            <motion.div
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-2">🚨 Servicio de Emergencia</h4>
              <p className="mb-3">¿Problema urgente con tu equipo de refrigeración?</p>
              <button className="bg-white text-red-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Llamar Ahora: +54 11 1234-5678
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Solicitar Cotización
            </h3>

            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">¡Mensaje Enviado a WhatsApp!</h4>
                <p className="text-gray-600">Te contactaremos pronto para brindarte una cotización personalizada.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+54 11 1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Tipo de Servicio</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Describe tu necesidad o problema..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Enviar Solicitud
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
