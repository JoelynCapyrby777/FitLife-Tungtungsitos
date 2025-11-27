import React, { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';
import { Footer, Header } from '../../components/layout';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });

  const [focusedField, setFocusedField] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <Footer/>
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Necesitas ayuda
          </h1>
          <p className="text-base text-gray-600">
            Estamos aquí para responder tus preguntas y ayudarte en tu camino fitness
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="space-y-6">
            {/* Email Card */}
            <div
              onMouseEnter={() => setHoveredCard('email')}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300"
              style={{
                transform: hoveredCard === 'email' ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredCard === 'email' ? '0 8px 24px rgba(0, 0, 0, 0.08)' : '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    backgroundColor: hoveredCard === 'email' ? '#58C758' : '#f3f4f6',
                    transform: hoveredCard === 'email' ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <Mail 
                    className="w-6 h-6 transition-colors duration-300" 
                    style={{ color: hoveredCard === 'email' ? 'white' : '#58C758' }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a 
                  href="mailto:soporte@fitlife.com" 
                  className="text-base mb-1 transition-colors duration-200"
                  style={{ color: '#58C758' }}
                  onMouseEnter={(e) => e.target.style.color = '#469F46'}
                  onMouseLeave={(e) => e.target.style.color = '#58C758'}
                >
                  soporte@fitlife.com
                </a>
                <p className="text-sm text-gray-500">Respondemos en 24 horas</p>
              </div>
            </div>

            {/* Location Card */}
            <div
              onMouseEnter={() => setHoveredCard('location')}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300"
              style={{
                transform: hoveredCard === 'location' ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredCard === 'location' ? '0 8px 24px rgba(0, 0, 0, 0.08)' : '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    backgroundColor: hoveredCard === 'location' ? '#58C758' : '#f3f4f6',
                    transform: hoveredCard === 'location' ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <MapPin 
                    className="w-6 h-6 transition-colors duration-300" 
                    style={{ color: hoveredCard === 'location' ? 'white' : '#58C758' }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ubicación</h3>
                <p className="text-base text-gray-700 mb-1">Cancún, Quintana Roo</p>
                <p className="text-sm text-gray-500">Oficina Presencial</p>
              </div>
            </div>

            {/* Schedule Card */}
            <div
              onMouseEnter={() => setHoveredCard('schedule')}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300"
              style={{
                transform: hoveredCard === 'schedule' ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredCard === 'schedule' ? '0 8px 24px rgba(0, 0, 0, 0.08)' : '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    backgroundColor: hoveredCard === 'schedule' ? '#58C758' : '#f3f4f6',
                    transform: hoveredCard === 'schedule' ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <Clock 
                    className="w-6 h-6 transition-colors duration-300" 
                    style={{ color: hoveredCard === 'schedule' ? 'white' : '#58C758' }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Horario de Atención</h3>
                <p className="text-sm text-gray-700 mb-1">Lun - Vie: 9:00 AM - 6:00 PM</p>
                <p className="text-sm text-gray-700 mb-1">Sáb: 10:00 AM - 2:00 PM</p>
                <p className="text-sm text-gray-500">Dom: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="bg-white rounded-2xl p-8 border border-gray-100"
            style={{
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
            }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Envíanos un mensaje
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Completa el formulario y nos pondremos en contacto contigo pronto
            </p>

            <div className="space-y-4">
              {/* Name and Lastname Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('nombre')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border rounded-lg text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none"
                    style={{
                      borderColor: focusedField === 'nombre' ? '#58C758' : '#e5e7eb',
                      boxShadow: focusedField === 'nombre' ? '0 0 0 3px rgba(88, 199, 88, 0.1)' : 'none'
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('apellido')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border rounded-lg text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none"
                    style={{
                      borderColor: focusedField === 'apellido' ? '#58C758' : '#e5e7eb',
                      boxShadow: focusedField === 'apellido' ? '0 0 0 3px rgba(88, 199, 88, 0.1)' : 'none'
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo"
                  value={formData.correo}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('correo')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 border rounded-lg text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none"
                  style={{
                    borderColor: focusedField === 'correo' ? '#58C758' : '#e5e7eb',
                    boxShadow: focusedField === 'correo' ? '0 0 0 3px rgba(88, 199, 88, 0.1)' : 'none'
                  }}
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="asunto"
                  placeholder="Asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('asunto')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 border rounded-lg text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none"
                  style={{
                    borderColor: focusedField === 'asunto' ? '#58C758' : '#e5e7eb',
                    boxShadow: focusedField === 'asunto' ? '0 0 0 3px rgba(88, 199, 88, 0.1)' : 'none'
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Mensaje:
                </label>
                <textarea
                  name="mensaje"
                  placeholder="Escribe tu mensaje aquí..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('mensaje')}
                  onBlur={() => setFocusedField(null)}
                  rows="5"
                  className="w-full px-4 py-3 border rounded-lg text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 outline-none resize-none"
                  style={{
                    borderColor: focusedField === 'mensaje' ? '#58C758' : '#e5e7eb',
                    boxShadow: focusedField === 'mensaje' ? '0 0 0 3px rgba(88, 199, 88, 0.1)' : 'none'
                  }}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 text-white text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: '#58C758'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#469F46';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#58C758';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header/>
    </div>
  );
};

export default ContactPage;