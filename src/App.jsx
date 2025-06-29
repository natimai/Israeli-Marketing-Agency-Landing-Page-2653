import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './common/SafeIcon';
import FloatingElements from './components/FloatingElements';
import InteractiveCard from './components/InteractiveCard';
import AnimatedCounter from './components/AnimatedCounter';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import WaveAnimation from './components/WaveAnimation';

const { FiTarget, FiTrendingUp, FiUsers, FiAward, FiPlayCircle, FiPhone, FiMail, FiMapPin, FiArrowLeft, FiStar, FiCheckCircle, FiMenu, FiX } = FiIcons;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Loading simulation
    setTimeout(() => setIsLoading(false), 2000);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // WhatsApp integration functions
  const sendWhatsApp = (message, name = '', email = '', phone = '') => {
    const whatsappNumber = '972544445567';
    let whatsappMessage = `שלום! אני מעוניין/ת בשירותי שיווק דיגיטלי.\n\n`;
    
    if (name) whatsappMessage += `שם: ${name}\n`;
    if (email) whatsappMessage += `אימייל: ${email}\n`;
    if (phone) whatsappMessage += `טלפון: ${phone}\n`;
    if (message) whatsappMessage += `הודעה: ${message}\n`;
    
    whatsappMessage += `\nאשמח לקבל יעוץ חינם והצעת מחיר.`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleQuickWhatsApp = (serviceType = 'כללי') => {
    const message = `שלום! אני מעוניין/ת בשירות ${serviceType}. אשמח לקבל יעוץ חינם והצעת מחיר.`;
    sendWhatsApp(message);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendWhatsApp(formData.message, formData.name, formData.email, formData.phone);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      title: "ניהול רשתות חברתיות",
      description: "ניהול מקצועי של דפי הפייסבוק, אינסטגרם, לינקדאין ועוד. יצירת תוכן איכותי ואסטרטגיה מותאמת אישית",
      icon: FiUsers,
      color: "from-pink-500 to-rose-500",
      serviceType: "ניהול רשתות חברתיות"
    },
    {
      title: "פרסום ממומן",
      description: "קמפיינים ממומנים אפקטיביים בגוגל ופייסבוק עם מיטוב מתמיד להשגת ROI מקסימלי",
      icon: FiTarget,
      color: "from-blue-500 to-cyan-500",
      serviceType: "פרסום ממומן"
    },
    {
      title: "קידום אתרים (SEO)",
      description: "קידום אורגני באיכות הגבוהה ביותר להגעה לעמוד הראשון בגוגל ולהגדלת התנועה לאתר",
      icon: FiTrendingUp,
      color: "from-green-500 to-emerald-500",
      serviceType: "קידום אתרים (SEO)"
    },
    {
      title: "בניית אתרים",
      description: "עיצוב ופיתוח אתרים מותאמים לנייד, מהירים ואטרקטיביים עם חווית משתמש מעולה",
      icon: FiPlayCircle,
      color: "from-purple-500 to-violet-500",
      serviceType: "בניית אתרים"
    },
    {
      title: "ייעוץ אסטרטגי",
      description: "ייעוץ מקצועי לבניית אסטרטגיית שיווק דיגיטלי מנצחת המותאמת לתחום הפעילות שלך",
      icon: FiAward,
      color: "from-orange-500 to-amber-500",
      serviceType: "ייעוץ אסטרטגי"
    },
    {
      title: "אנליטיקה ודיווחים",
      description: "מעקב ומדידה מתמידים עם דוחות מפורטים ותובנות עסקיות לשיפור מתמיד של הביצועים",
      icon: FiCheckCircle,
      color: "from-indigo-500 to-blue-500",
      serviceType: "אנליטיקה ודיווחים"
    }
  ];

  const stats = [
    { number: 500, label: "לקוחות מרוצים", icon: FiUsers, suffix: "+" },
    { number: 2.5, label: "הגעה חודשית", icon: FiTrendingUp, suffix: "M+" },
    { number: 95, label: "שביעות רצון", icon: FiStar, suffix: "%" },
    { number: 24, label: "תמיכה מקצועית", icon: FiCheckCircle, suffix: "/7" }
  ];

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center z-50">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div
            className="w-32 h-32 mb-8 mx-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751205630649-Blue%20Waves%20Surfing%20Club%20Logo%20%28100%20x%2050%20%C3%97%C2%A4%C3%97%C2%99%C3%97%C2%A7%C3%97%C2%A1%C3%97%C2%9C%29%20%28%C3%97%C2%91%C3%97%C2%90%C3%97%C2%A0%C3%97%C2%A8%20%C3%97%C2%9C-Youtube%29.png" 
              alt="נתי שיווק ופרסום" 
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </motion.div>
          <motion.h2
            className="text-3xl font-bold text-white mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            נתי שיווק ופרסום
          </motion.h2>
          <p className="text-blue-100">מכינים חוויה דיגיטלית מרהיבה...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden" dir="rtl">
      <ScrollProgress />
      <ParticleBackground />
      
      {/* Custom cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* WhatsApp Floating Button */}
      <motion.button
        onClick={() => handleQuickWhatsApp()}
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300"
        whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)" }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
        </svg>
      </motion.button>

      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 space-x-reverse"
            >
              <motion.div 
                className="w-12 h-12 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751205630649-Blue%20Waves%20Surfing%20Club%20Logo%20%28100%20x%2050%20%C3%97%C2%A4%C3%97%C2%99%C3%97%C2%A7%C3%97%C2%A1%C3%97%C2%9C%29%20%28%C3%97%C2%91%C3%97%C2%90%C3%97%C2%A0%C3%97%C2%A8%20%C3%97%C2%9C-Youtube%29.png" 
                  alt="נתי שיווק ופרסום לוגו" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="text-right">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  נתי שיווק ופרסום
                </h1>
                <p className="text-sm text-gray-600">סוכנות דיגיטל מובילה בישראל</p>
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              {['שירותים', 'אודות', 'פורטפוליו', 'צור קשר'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item === 'שירותים' ? 'services' : item === 'צור קשר' ? 'contact' : item}`}
                  className="relative text-gray-700 hover:text-blue-600 transition-colors"
                  whileHover={{ y: -2 }}
                  onHoverStart={() => {}}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              <motion.button 
                onClick={() => handleQuickWhatsApp()}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full transition-all"
              >
                התחל עכשיו
              </motion.button>
            </nav>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="text-2xl" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-4 space-y-4">
                {['שירותים', 'אודות', 'פורטפוליו', 'צור קשר'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="block text-gray-700 hover:text-blue-600 transition-colors text-right"
                    whileHover={{ x: -10 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button
                  onClick={() => {
                    handleQuickWhatsApp();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full transition-all text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  התחל עכשיו
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <FloatingElements />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-right order-2 lg:order-1"
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                נניח את העסק שלך
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block"
                  animate={{ 
                    backgroundPosition: ['0%', '100%', '0%']
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  על המפה הדיגיטלית
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                אנחנו מובילים עסקים להצלחה דיגיטלית עם אסטרטגיות חדשניות, 
                קמפיינים יעילים ותוצאות מדידות שמניבות ROI מרשים
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button 
                  onClick={() => handleQuickWhatsApp()}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  <span className="relative z-10">קבל הצעת מחיר חינם</span>
                  <SafeIcon icon={FiArrowLeft} className="relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-white opacity-20"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "-100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
                
                <motion.button 
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "#3B82F6",
                    color: "#3B82F6"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <SafeIcon icon={FiPlayCircle} />
                  צפה בסרטון
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <motion.div 
                className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                  alt="Digital Marketing Dashboard" 
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                
                <motion.div 
                  className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <SafeIcon icon={FiTrendingUp} className="text-green-500 text-2xl" />
                  <p className="text-sm font-semibold text-gray-700 mt-1">+247% ROI</p>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <SafeIcon icon={FiUsers} className="text-blue-500 text-2xl" />
                  <p className="text-sm font-semibold text-gray-700 mt-1">1M+ Reach</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <WaveAnimation />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center group"
              >
                <motion.div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <SafeIcon icon={stat.icon} className="text-white text-2xl" />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    duration={2}
                  />
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              השירותים שלנו
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              פתרונות שיווק דיגיטלי מקיפים שמותאמים לצרכים הייחודיים של העסק שלך
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  rotateY: 5
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleQuickWhatsApp(service.serviceType)}
                className="relative bg-white p-8 rounded-3xl shadow-lg cursor-pointer overflow-hidden group"
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <motion.div
                  className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative`}
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <SafeIcon icon={service.icon} className="text-white text-2xl" />
                </motion.div>

                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-4 text-right"
                  whileHover={{
                    color: '#3B82F6'
                  }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 leading-relaxed text-right mb-4"
                  whileHover={{
                    y: -2
                  }}
                >
                  {service.description}
                </motion.p>

                <motion.div
                  className="flex items-center justify-start gap-2 text-blue-600 font-medium opacity-0 group-hover:opacity-100"
                  initial={{ x: -20 }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>שלח הודעה</span>
                  <SafeIcon icon={FiArrowLeft} className="text-sm" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 10px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              מוכנים להעביר את העסק שלכם לשלב הבא?
            </motion.h2>
            <p className="text-xl text-blue-100 mb-8">
              בואו נתחיל בשיחת ייעוץ חינם ונבנה יחד את האסטרטגיה הדיגיטלית המנצחת שלכם
            </p>
            <motion.button 
              onClick={() => handleQuickWhatsApp()}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all inline-flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">קבל הצעת מחיר עכשיו</span>
              <SafeIcon icon={FiArrowLeft} className="relative z-10" />
              <motion.div
                className="absolute inset-0 bg-blue-600 opacity-10"
                initial={{ scale: 0, borderRadius: "100%" }}
                whileHover={{ scale: 1, borderRadius: "0%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-right">בואו נתחיל לעבוד יחד</h2>
              <p className="text-lg text-gray-600 mb-8 text-right">
                צרו קשר עכשיו לקבלת ייעוץ חינם ולגילוי איך נוכל לעזור לכם להשיג את היעדים העסקיים שלכם
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: FiPhone, title: "טלפון", info: "054-444-5567", color: "blue", action: () => window.open('tel:+972544445567') },
                  { icon: FiMail, title: "אימייל", info: "info@nati-marketing.co.il", color: "purple", action: () => window.open('mailto:info@nati-marketing.co.il') },
                  { icon: FiMapPin, title: "כתובת", info: "תל אביב, ישראל", color: "green", action: null }
                ].map((contact, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 group cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: -10 }}
                    onClick={contact.action}
                  >
                    <motion.div 
                      className={`bg-${contact.color}-100 p-3 rounded-xl group-hover:bg-${contact.color}-200 transition-colors`}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <SafeIcon icon={contact.icon} className={`text-${contact.color}-600 text-xl`} />
                    </motion.div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{contact.title}</p>
                      <p className="text-gray-600">{contact.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-50 p-8 rounded-3xl order-1 lg:order-2"
            >
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {[
                  { label: "שם מלא", type: "text", placeholder: "הכנס את שמך המלא", name: "name" },
                  { label: "אימייל", type: "email", placeholder: "הכנס את כתובת האימייל שלך", name: "email" },
                  { label: "טלפון", type: "tel", placeholder: "הכנס את מספר הטלפון שלך", name: "phone" }
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">{field.label}</label>
                    <motion.input 
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-right"
                      placeholder={field.placeholder}
                      whileFocus={{ scale: 1.02 }}
                      required
                    />
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">הודעה</label>
                  <motion.textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-right"
                    placeholder="ספר לנו על הפרויקט שלך..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">שלח הודעה ב-WhatsApp</span>
                  <motion.div
                    className="absolute inset-0 bg-white opacity-20"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "-100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div 
              className="flex items-center justify-center space-x-3 space-x-reverse mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-12 h-12 overflow-hidden"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751205630649-Blue%20Waves%20Surfing%20Club%20Logo%20%28100%20x%2050%20%C3%97%C2%A4%C3%97%C2%99%C3%97%C2%A7%C3%97%C2%A1%C3%97%C2%9C%29%20%28%C3%97%C2%91%C3%97%C2%90%C3%97%C2%A0%C3%97%C2%A8%20%C3%97%C2%9C-Youtube%29.png" 
                  alt="נתי שיווק ופרסום לוגו" 
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </motion.div>
              <h3 className="text-2xl font-bold">נתי שיווק ופרסום</h3>
            </motion.div>
            <p className="text-gray-400 mb-8">סוכנות דיגיטל מובילה בישראל</p>
            <motion.button
              onClick={() => handleQuickWhatsApp()}
              className="mb-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
              </svg>
              צור קשר ב-WhatsApp
            </motion.button>
            <p className="text-gray-500">© 2024 נתי שיווק ופרסום. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;