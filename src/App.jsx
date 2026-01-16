import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi,
  Waves,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Home,
  Users,
  Utensils,
  ChefHat,
  Moon,
  Sun,
  ChevronRight,
  Star,
  ArrowRight,
  Building2,
  Coffee,
  Milk,
  Cookie,
  FlaskConical,
  ShoppingBag,
  Car,
  Shield,
  Zap,
  Droplets,
  Tv,
  Wind,
  Quote,
  MessageCircle,
  HelpCircle,
  GraduationCap,
  Stethoscope,
  Dumbbell,
  ShoppingCart,
  Bus,
  ArrowUp,
  User,
  CheckCircle,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send,
  Calendar,
  ExternalLink,
} from "lucide-react";
import "./App.css";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

// Navbar Component
const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-top-bar">
        <div className="nav-top-container">
          <div className="nav-contact-info">
            <a href="tel:9623975463" className="nav-phone">
              <Phone size={14} />
              <span>+91 96239 75463</span>
            </a>
            <a href="mailto:nageshchintham4@gmail.com" className="nav-email">
              <Mail size={14} />
              <span>nageshchintham4@gmail.com</span>
            </a>
          </div>
          <div className="nav-top-actions">
            <a href="#contact" className="nav-cta-small">
              Book Now
            </a>
          </div>
        </div>
      </div>

      <div className="nav-container">
        <motion.a href="#home" className="logo" whileHover={{ scale: 1.1 }}>
          <Building2 size={32} />
          <span>Nagesh PG</span>
        </motion.a>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "PG Rooms", href: "#rooms" },
            { name: "Amenities", href: "#amenities" },
            { name: "Testimonials", href: "#testimonials" },
            { name: "FAQ", href: "#faq" },
            { name: "Nearby", href: "#nearby-amenities" },
            { name: "Location", href: "#location" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.1, color: "#ff6b6b" }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="nav-right-section">
          <motion.a
            href="#contact"
            className="nav-book-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Book Now</span>
            <ArrowRight size={18} />
          </motion.a>

          <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              className="hamburger"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            />
            <motion.div
              className="hamburger"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.div
              className="hamburger"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <motion.div
        className="hero-content"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="hero-badge">
          <Star size={16} />
          <span>Premium Accommodation in Magarpatta</span>
        </motion.div>

        <motion.h1 variants={fadeInUp}>
          Welcome to <span className="highlight">Nagesh PG</span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="hero-subtitle">
          Your home away from home with premium amenities, delicious meals, and
          comfortable living spaces for both boys and girls.
        </motion.p>

        <motion.div variants={fadeInUp} className="hero-buttons">
          <motion.a
            href="#rooms"
            className="btn btn-primary"
            whileHover={scaleOnHover}
          >
            Explore Rooms
            <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={scaleOnHover}
          >
            Contact Now
          </motion.a>
        </motion.div>

        <motion.div variants={fadeInUp} className="hero-stats">
          {[
            { icon: Users, label: "Happy Residents", value: "500+" },
            { icon: Home, label: "Well Furnished", value: "50+" },
            { icon: Star, label: "Rating", value: "4.8" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              whileHover={{ y: -5 }}
            >
              <stat.icon size={28} />
              <div>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span>Scroll to explore</span>
        <motion.div className="scroll-arrow" />
      </motion.div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="section-container"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <span className="section-tag">About Us</span>
          <h2>
            Why Choose <span className="highlight">Nagesh PG</span>?
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-image" variants={fadeInUp}>
            <div className="image-card">
              <div className="image-placeholder">
                <Home size={80} />
                <span>Nagesh PG Building</span>
              </div>
              <motion.div
                className="experience-badge"
                whileHover={{ scale: 1.1 }}
              >
                <span>5+</span>
                <span>Years Experience</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="about-text" variants={fadeInUp}>
            <p>
              Nagesh PG offers premium accommodation facilities for both boys
              and girls in the heart of Magarpatta. We provide a perfect blend
              of comfort, convenience, and affordability for students and
              working professionals.
            </p>

            <div className="about-features">
              {[
                {
                  icon: Users,
                  title: "Separate Accommodation",
                  desc: "Dedicated PG for boys and girls",
                },
                {
                  icon: Utensils,
                  title: "Healthy Meals",
                  desc: "Nutritious food with variety",
                },
                {
                  icon: Sparkles,
                  title: "Clean & Hygienic",
                  desc: "Daily cleaning services",
                },
                {
                  icon: Wifi,
                  title: "High-Speed WiFi",
                  desc: "Unlimited connectivity",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="about-feature"
                  whileHover={{ x: 10 }}
                >
                  <div className="feature-icon">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2>{title}</h2>
            <motion.button
              className="modal-close"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
          </div>
          <div className="modal-body">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Room Card Component
const RoomCard = ({ room, onViewDetails }) => {
  return (
    <motion.div
      className={`room-card ${room.type}`}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
    >
      <div className="room-image">
        <div className="room-placeholder">
          <Users size={48} />
          <span>{room.sharing} Sharing</span>
        </div>
        <div className="room-overlay">
          <motion.button
            className="view-details-btn"
            whileHover={{ scale: 1.05 }}
            onClick={() => onViewDetails(room)}
          >
            View Details
          </motion.button>
        </div>
      </div>
      <div className="room-info">
        <div className="room-type-badge">{room.type}</div>
        <h3>
          {room.sharing} Sharing {room.type === "boys" ? "Boys" : "Girls"} PG
        </h3>
        <div className="room-price">
          <span className="price">₹{room.price.toLocaleString()}</span>
          <span className="per-month">/month</span>
        </div>
        <div className="room-features">
          {room.features.map((feature, index) => (
            <span key={index} className="feature-tag">
              <Sparkles size={12} />
              {feature}
            </span>
          ))}
        </div>
        <div className="room-deposit">
          <span>Deposit: ₹3,000 (One-time)</span>
        </div>
        <motion.button
          className="book-now-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onViewDetails(room)}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

// Room Details Modal Content
const RoomDetailsModal = ({ room, onClose }) => {
  const roomDetails = {
    4: {
      description:
        "Spacious 4-sharing PG room perfect for friends looking to stay together. Each bed comes with personal storage and charging points.",
      amenities: [
        "High-Speed WiFi",
        "Air Conditioning",
        "Attached Bathroom",
        "Hot Water",
        "LED TV",
        "Washing Machine",
        "Fridge",
        "Water Purifier",
        "Daily Cleaning",
        "Bed with Mattress",
        "Pillow & Bedsheet",
        "Study Table & Chair",
        "Wardrobe",
      ],
      pricing: { monthly: room.price, deposit: 3000, maintenance: 0 },
      rules: [
        "No smoking",
        "No alcohol",
        "Quiet hours 10PM-6AM",
        "Guests allowed in common area only",
        "Vegetarian food available",
      ],
    },
    3: {
      description:
        "Comfortable 3-sharing PG room with ample space for personal belongings. Ideal for those who want a balance of privacy and company.",
      amenities: [
        "High-Speed WiFi",
        "Air Conditioning",
        "Attached Bathroom",
        "Hot Water",
        "LED TV",
        "Washing Machine",
        "Fridge",
        "Water Purifier",
        "Daily Cleaning",
        "Bed with Mattress",
        "Pillow & Bedsheet",
        "Study Table & Chair",
        "Wardrobe",
      ],
      pricing: { monthly: room.price, deposit: 3000, maintenance: 0 },
      rules: [
        "No smoking",
        "No alcohol",
        "Quiet hours 10PM-6AM",
        "Guests allowed in common area only",
        "Vegetarian food available",
      ],
    },
    2: {
      description:
        "Premium 2-sharing PG room offering more privacy while maintaining a social environment. Perfect for working professionals.",
      amenities: [
        "High-Speed WiFi",
        "Air Conditioning",
        "Attached Bathroom",
        "Hot Water",
        "LED TV",
        "Washing Machine",
        "Fridge",
        "Water Purifier",
        "Daily Cleaning",
        "Bed with Mattress",
        "Pillow & Bedsheet",
        "Study Table & Chair",
        "Wardrobe",
        "Mini Refrigerator",
      ],
      pricing: { monthly: room.price, deposit: 3000, maintenance: 0 },
      rules: [
        "No smoking",
        "No alcohol",
        "Quiet hours 10PM-6AM",
        "Guests allowed in room with prior notice",
        "Vegetarian food available",
      ],
    },
    1: {
      description:
        "Luxury single occupancy PG room with complete privacy. Includes all premium amenities for comfortable living.",
      amenities: [
        "High-Speed WiFi",
        "Air Conditioning",
        "Attached Bathroom",
        "Hot Water",
        "LED TV",
        "Washing Machine",
        "Fridge",
        "Water Purifier",
        "Daily Cleaning",
        "Bed with Mattress",
        "Pillow & Bedsheet",
        "Study Table & Chair",
        "Wardrobe",
        "Mini Refrigerator",
        "Study Lamp",
        "Bookshelf",
      ],
      pricing: { monthly: room.price, deposit: 3000, maintenance: 0 },
      rules: [
        "No smoking",
        "No alcohol",
        "Quiet hours 10PM-6AM",
        "Guests allowed in room with prior notice",
        "Vegetarian food available",
      ],
    },
  };

  const details = roomDetails[room.sharing] || roomDetails["4"];

  return (
    <div className="room-details-content">
      <div className="room-details-header">
        <span className={`room-badge ${room.type}`}>
          {room.type === "boys" ? "Boys PG" : "Girls PG"}
        </span>
        <h3>{room.sharing} Sharing Room</h3>
        <div className="room-details-price">
          <span className="price">₹{room.price.toLocaleString()}</span>
          <span className="per-month">/month</span>
        </div>
      </div>

      <div className="room-details-section">
        <h4>Description</h4>
        <p>{details.description}</p>
      </div>

      <div className="room-details-section">
        <h4>Room Amenities</h4>
        <div className="amenities-grid-modal">
          {details.amenities.map((amenity, index) => (
            <span key={index} className="amenity-tag">
              <Sparkles size={14} />
              {amenity}
            </span>
          ))}
        </div>
      </div>

      <div className="room-details-section">
        <h4>Pricing Details</h4>
        <div className="pricing-details">
          <div className="pricing-item">
            <span>Monthly Rent</span>
            <span>₹{details.pricing.monthly.toLocaleString()}</span>
          </div>
          <div className="pricing-item">
            <span>Security Deposit</span>
            <span>₹{details.pricing.deposit.toLocaleString()}</span>
          </div>
          <div className="pricing-item highlight">
            <span>Total Initial Payment</span>
            <span>
              ₹
              {(
                details.pricing.monthly + details.pricing.deposit
              ).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="room-details-section">
        <h4>PG Rules</h4>
        <ul className="rules-list">
          {details.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>

      <motion.button
        className="enquire-btn"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => (window.location.href = "#contact")}
      >
        Enquire Now
        <ArrowRight size={20} />
      </motion.button>
    </div>
  );
};

// Rooms Section
const Rooms = () => {
  const rooms = [
    {
      type: "boys",
      sharing: "4",
      price: 6000,
      features: ["WiFi", "Meals", "AC", "Laundry"],
    },
    {
      type: "boys",
      sharing: "3",
      price: 6500,
      features: ["WiFi", "Meals", "AC", "Laundry"],
    },
    {
      type: "boys",
      sharing: "2",
      price: 7000,
      features: ["WiFi", "Meals", "AC", "Laundry"],
    },
    {
      type: "boys",
      sharing: "1",
      price: 8000,
      features: ["WiFi", "Meals", "AC", "Laundry"],
    },
    {
      type: "girls",
      sharing: "4",
      price: 6000,
      features: ["WiFi", "Meals", "AC", "Laundry"],
    },
    {
      type: "girls",
      sharing: "3",
      price: 6500,
      features: ["WiFi", "Meals", "AC", "Laundry"],
    },
    {
      type: "girls",
      sharing: "2",
      price: 7000,
      features: ["WiFi", "Meals", "AC", "Laundry"],
    },
    {
      type: "girls",
      sharing: "1",
      price: 8000,
      features: ["WiFi", "Meals", "AC", "Laundry"],
    },
  ];

  const [activeTab, setActiveTab] = useState("boys");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  return (
    <section className="rooms" id="rooms">
      <motion.div
        className="section-container"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <span className="section-tag">Our PG Accommodations</span>
          <h2>
            Choose Your <span className="highlight">Perfect PG Space</span>
          </h2>
          <p>
            Comfortable Paying Guest accommodations designed for your peaceful
            living
          </p>
        </motion.div>

        <motion.div className="room-tabs" variants={fadeInUp}>
          {["boys", "girls"].map((tab) => (
            <motion.button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users size={20} />
              {tab.charAt(0).toUpperCase() + tab.slice(1)} PG
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="room-grid" layout>
          <AnimatePresence mode="wait">
            {rooms
              .filter((room) => room.type === activeTab)
              .map((room, index) => (
                <RoomCard
                  key={index}
                  room={room}
                  onViewDetails={handleViewDetails}
                />
              ))}
          </AnimatePresence>
        </motion.div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={
            selectedRoom
              ? `${selectedRoom.sharing} Sharing ${
                  selectedRoom.type === "boys" ? "Boys" : "Girls"
                } PG Details`
              : "Room Details"
          }
        >
          {selectedRoom && (
            <RoomDetailsModal
              room={selectedRoom}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </Modal>
      </motion.div>
    </section>
  );
};

// Amenities Section
const Amenities = () => {
  const amenities = [
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      desc: "Unlimited internet connectivity",
      color: "#3b82f6",
    },
    {
      icon: Waves,
      title: "Washing Machine",
      desc: "Free laundry services",
      color: "#06b6d4",
    },
    {
      icon: Sparkles,
      title: "Daily Cleaning",
      desc: "Hygienic environment",
      color: "#10b981",
    },
    {
      icon: ChefHat,
      title: "Home Cooked Meals",
      desc: "Healthy & delicious food",
      color: "#f59e0b",
    },
    {
      icon: Moon,
      title: "Bed with Mattress",
      desc: "Comfortable sleeping",
      color: "#8b5cf6",
    },
    {
      icon: Sun,
      title: "Power Backup",
      desc: "24/7 electricity",
      color: "#ef4444",
    },
    {
      icon: Home,
      title: "Furnished Rooms",
      desc: "Ready to move in",
      color: "#ec4899",
    },
    {
      icon: Building2,
      title: "Security",
      desc: "Safe & secure",
      color: "#6366f1",
    },
  ];

  return (
    <section className="amenities" id="amenities">
      <motion.div
        className="section-container"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <span className="section-tag">Amenities</span>
          <h2>
            Everything You <span className="highlight">Need</span>
          </h2>
          <p>We provide all essential amenities for comfortable living</p>
        </motion.div>

        <motion.div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="amenity-card"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div
                className="amenity-icon"
                style={{
                  backgroundColor: `${amenity.color}20`,
                  color: amenity.color,
                }}
              >
                <amenity.icon size={32} />
              </div>
              <h3>{amenity.title}</h3>
              <p>{amenity.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      type: "boys",
      room: "2 Sharing",
      stay: "1 Year",
      rating: 5,
      text: "Excellent PG facility with amazing food and very clean rooms. The staff is very helpful and the WiFi speed is great for my online classes. Highly recommended!",
      image: "RS",
    },
    {
      id: 2,
      name: "Priya Patel",
      type: "girls",
      room: "1 Sharing",
      stay: "8 Months",
      rating: 5,
      text: "Best PG experience ever! Safe, secure, and like a second home. The food is homely and healthy. Very close to my college in Magarpatta.",
      image: "PP",
    },
    {
      id: 3,
      name: "Amit Kumar",
      type: "boys",
      room: "3 Sharing",
      stay: "6 Months",
      rating: 4,
      text: "Great value for money. All amenities are provided as promised. The laundry service is very convenient. Would definitely stay here again.",
      image: "AK",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      type: "girls",
      room: "2 Sharing",
      stay: "1.5 Years",
      rating: 5,
      text: "I stayed here for my entire final year of college. The environment is perfect for studies. Very peaceful and the daily cleaning service is a big plus!",
      image: "SR",
    },
    {
      id: 5,
      name: "Vikram Singh",
      type: "boys",
      room: "4 Sharing",
      stay: "10 Months",
      rating: 5,
      text: "Amazing experience! Made great friends here. The food quality is consistent and the room maintenance is prompt. Very professional management.",
      image: "VS",
    },
    {
      id: 6,
      name: "Ananya Gupta",
      type: "girls",
      room: "3 Sharing",
      stay: "1 Year",
      rating: 5,
      text: "Perfect PG for girls. Security is excellent and all residents are very friendly. The weekend special meals are a treat!",
      image: "AG",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const filteredTestimonials =
    activeTab === "all"
      ? testimonials
      : testimonials.filter((t) => t.type === activeTab);

  return (
    <section className="testimonials" id="testimonials">
      <motion.div
        className="section-container"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <span className="section-tag">Testimonials</span>
          <h2>
            What Our <span className="highlight">Residents Say</span>
          </h2>
          <p>
            Real feedback from students and professionals who made Nagesh PG
            their home
          </p>
        </motion.div>

        <motion.div className="testimonial-tabs" variants={fadeInUp}>
          {["all", "boys", "girls"].map((tab) => (
            <motion.button
              key={tab}
              className={`testimonial-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={18} />
              {tab === "all"
                ? "All Reviews"
                : `${tab.charAt(0).toUpperCase() + tab.slice(1)} PG`}
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="testimonials-grid" layout>
          <AnimatePresence mode="wait">
            {filteredTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className={`testimonial-card ${testimonial.type}`}
                variants={fadeInUp}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                layout
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonial.image}</div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <span className="testimonial-meta">
                      {testimonial.room} • {testimonial.stay}
                    </span>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < testimonial.rating ? "#ffd93d" : "none"}
                        color={i < testimonial.rating ? "#ffd93d" : "#e0e0e0"}
                      />
                    ))}
                  </div>
                </div>
                <div className="testimonial-body">
                  <Quote size={24} className="quote-icon" />
                  <p>{testimonial.text}</p>
                </div>
                <div className="testimonial-badge">
                  {testimonial.type === "boys" ? "Boys PG" : "Girls PG"}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div className="testimonials-summary" variants={fadeInUp}>
          <div className="summary-item">
            <span className="summary-number">500+</span>
            <span className="summary-label">Happy Residents</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">4.8</span>
            <span className="summary-label">Average Rating</span>
          </div>
          <div className="summary-item">
            <span className="summary-number">95%</span>
            <span className="summary-label">Would Recommend</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// FAQ Section
const FAQ = () => {
  const faqItems = [
    {
      question: "What is included in the rent?",
      answer:
        "The monthly rent includes accommodation, high-speed WiFi, daily housekeeping, bed with mattress, and access to all common amenities. Three meals (Breakfast & Dinner on weekdays, all three meals on weekends) are also included.",
    },
    {
      question: "Is the security deposit refundable?",
      answer:
        "Yes, the security deposit of ₹3,000 is fully refundable at the time of checkout, provided there is no damage to the room or its fixtures and all dues are cleared.",
    },
    {
      question: "Are there any hidden charges?",
      answer:
        "No, we believe in complete transparency. The only additional costs are for extra services like laundry, extra meals, or beverages which are listed separately in our Additional Services section.",
    },
    {
      question: "What are the PG rules and regulations?",
      answer:
        "Our PG maintains a peaceful environment. Key rules include: No smoking, no alcohol, quiet hours from 10PM-6AM, guests allowed in common areas only (or in rooms with prior notice), and vegetarian food is available. Complete rules are shared at the time of admission.",
    },
    {
      question: "How do I book a room?",
      answer:
        "You can book a room by visiting us at our location, calling us at +91 96239 75463, or filling out the contact form on this website. We recommend visiting the PG before booking to see the facilities personally.",
    },
    {
      question: "Is there a lock-in period?",
      answer:
        "We prefer a minimum stay of 3 months, but you can leave with 30 days notice. The security deposit will be refunded as per the terms and conditions.",
    },
    {
      question: "What documents are required for admission?",
      answer:
        "You need to bring: 1) ID proof (Aadhaar/PAN), 2) Passport size photos (2 copies), 3) Previous address proof (if available). For students, college ID is also recommended.",
    },
    {
      question: "Is power backup available?",
      answer:
        "Yes, we have 24/7 power backup with inverter and generator support, so you never face electricity issues even during load shedding.",
    },
    {
      question: "How is the food quality and hygiene?",
      answer:
        "Food is prepared in a clean kitchen with fresh ingredients. We maintain high hygiene standards with daily cleaning. Special dietary requirements can be discussed with the kitchen staff.",
    },
    {
      question: "Is there any medical facility nearby?",
      answer:
        "Yes, Magarpatta has several hospitals and clinics nearby including Lifeline Hospital, Noble Hospital, and various pharmacies within 2-3 km radius.",
    },
    {
      question: "What about transportation and connectivity?",
      answer:
        "The PG is well-connected with public transport. Magarpatta bus stop is just 5 minutes walk. Auto-rickshaws and cabs are easily available. We also provide pickup services from airport and railway station at additional cost.",
    },
    {
      question: "Can I stay during college exams or semester breaks?",
      answer:
        "Yes, you can stay throughout the year including exam periods and breaks. We remain open even during festival holidays with reduced services.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" id="faq">
      <motion.div
        className="section-container"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <span className="section-tag">FAQ</span>
          <h2>
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p>Find answers to common questions about Nagesh PG</p>
        </motion.div>

        <motion.div className="faq-container" variants={fadeInUp}>
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              initial={false}
            >
              <motion.div
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                whileHover={{ x: 5 }}
              >
                <div className="faq-icon">
                  <HelpCircle size={22} />
                </div>
                <span>{item.question}</span>
                <motion.div
                  className="faq-toggle"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                >
                  <ArrowDown size={20} />
                </motion.div>
              </motion.div>
              <motion.div
                className="faq-answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{item.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="faq-cta" variants={fadeInUp}>
          <p>Still have questions?</p>
          <motion.a
            href="#contact"
            className="faq-contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Nearby Amenities Section
const NearbyAmenities = () => {
  const nearbyPlaces = [
    {
      category: "Education",
      icon: GraduationCap,
      places: [
        { name: "ISB Building", distance: "500m", time: "5 min walk" },
        { name: "Magarpatta College", distance: "1 km", time: "10 min walk" },
        {
          name: "Various Coaching Centers",
          distance: "800m",
          time: "8 min walk",
        },
      ],
    },
    {
      category: "Healthcare",
      icon: Stethoscope,
      places: [
        { name: "Noble Hospital", distance: "1.5 km", time: "5 min drive" },
        { name: "LifeLine Hospital", distance: "2 km", time: "8 min drive" },
        { name: "24/7 Pharmacies", distance: "500m", time: "5 min walk" },
      ],
    },
    {
      category: "Fitness",
      icon: Dumbbell,
      places: [
        { name: "Raw 7 Fitness Gym", distance: "On-site", time: "2 min walk" },
        { name: "CrossFit Box", distance: "1 km", time: "10 min walk" },
        { name: "Yoga Classes", distance: "800m", time: "8 min walk" },
      ],
    },
    {
      category: "Shopping",
      icon: ShoppingCart,
      places: [
        { name: "Amanora Mall", distance: "2 km", time: "8 min drive" },
        { name: "Magarpatta Market", distance: "500m", time: "5 min walk" },
        { name: "Daily Needs Store", distance: "200m", time: "2 min walk" },
      ],
    },
    {
      category: "Transportation",
      icon: Bus,
      places: [
        { name: "Magarpatta Bus Stop", distance: "400m", time: "4 min walk" },
        {
          name: "Hadapsar Railway Station",
          distance: "4 km",
          time: "15 min drive",
        },
        { name: "Pune Airport", distance: "12 km", time: "30 min drive" },
      ],
    },
    {
      category: "Dining & Entertainment",
      icon: Coffee,
      places: [
        { name: "Cafe Coffee Day", distance: "1 km", time: "10 min walk" },
        { name: "Restaurant Zone", distance: "800m", time: "8 min walk" },
        { name: "Food Court", distance: "1.5 km", time: "5 min drive" },
      ],
    },
  ];

  return (
    <section className="nearby-amenities" id="nearby-amenities">
      <motion.div
        className="section-container"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <span className="section-tag">Neighborhood</span>
          <h2>
            Nearby <span className="highlight">Amenities</span>
          </h2>
          <p>Everything you need is just around the corner</p>
        </motion.div>

        <motion.div className="amenities-map-visual" variants={fadeInUp}>
          <div className="map-placeholder">
            <div className="map-center">
              <Building2 size={48} />
              <span>Nagesh PG</span>
              <p>Magarpatta City, Pune</p>
            </div>
            <div className="map-pulse"></div>
            <div className="map-markers">
              {nearbyPlaces.map((category, index) => (
                <div
                  key={index}
                  className="map-marker"
                  style={{
                    "--delay": `${index * 0.2}s`,
                    "--angle": `${index * 60}deg`,
                  }}
                >
                  <category.icon size={20} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="amenities-list-grid" variants={staggerContainer}>
          {nearbyPlaces.map((category, index) => (
            <motion.div
              key={index}
              className="amenity-category-card"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="amenity-category-header">
                <div className="amenity-category-icon">
                  <category.icon size={24} />
                </div>
                <h3>{category.category}</h3>
              </div>
              <div className="amenity-places">
                {category.places.map((place, placeIndex) => (
                  <div key={placeIndex} className="amenity-place-item">
                    <div className="place-info">
                      <span className="place-name">{place.name}</span>
                      <span className="place-distance">{place.distance}</span>
                    </div>
                    <span className="place-time">{place.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="location-cta" variants={fadeInUp}>
          <motion.a
            href="https://maps.google.com"
            target="_blank"
            className="view-map-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin size={20} />
            View on Google Maps
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// ArrowDown icon component
const ArrowDown = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

// Gallery Section
const Gallery = () => {
  const images = [
    { title: "Common Area", icon: Home },
    { title: "Bedroom", icon: Moon },
    { title: "Kitchen", icon: ChefHat },
    { title: "Bathroom", icon: Waves },
    { title: "Study Room", icon: Wifi },
    { title: "Terrace", icon: Sun },
  ];

  return (
    <section className="gallery" id="gallery">
      <motion.div
        className="section-container"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <span className="section-tag">Gallery</span>
          <h2>
            Our <span className="highlight">Spaces</span>
          </h2>
          <p>Take a visual tour of Nagesh PG facilities</p>
        </motion.div>

        <motion.div className="gallery-grid" variants={staggerContainer}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="gallery-placeholder">
                <image.icon size={48} />
                <span>{image.title}</span>
              </div>
              <div className="gallery-overlay">
                <span>{image.title}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Location Section
const Location = () => {
  const locations = [
    {
      type: "boys",
      title: "Boys PG Location",
      address: "Dnyandeep Society, North Hadapsar, Magarpatta, Pune",
      nearby: "Dnyandeep Society, Magarpatta",
      mapLink: "https://maps.google.com",
    },
    {
      type: "girls",
      title: "Girls PG Location",
      address:
        "Nivrutti Building, opp. Noble Hospital, Laxmi Vihar, Hadapsar, Pune",
      nearby: "opp. Noble Hospital, Magarpatta",
      mapLink: "https://maps.google.com",
    },
  ];

  return (
    <section className="location" id="location">
      <motion.div
        className="section-container"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <span className="section-tag">Location</span>
          <h2>
            Find <span className="highlight">Us Easily</span>
          </h2>
          <p>Conveniently located in the heart of Magarpatta</p>
        </motion.div>

        <motion.div className="location-cards" variants={staggerContainer}>
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className={`location-card ${location.type}`}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="location-icon">
                <MapPin size={32} />
              </div>
              <h3>{location.title}</h3>
              <p className="location-address">{location.address}</p>
              <p className="location-nearby">
                <MapPin size={16} />
                {location.nearby}
              </p>
              <motion.a
                href={location.mapLink}
                target="_blank"
                className="map-btn"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin size={18} />
                View on Map
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pgType: "",
    roomType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const roomPriceMap = {
    1: { type: "1 Sharing", price: "₹8,000" },
    2: { type: "2 Sharing", price: "₹7,000" },
    3: { type: "3 Sharing", price: "₹6,500" },
    4: { type: "4 Sharing", price: "₹6,000" },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // const response = await fetch("https://nageshpg-backend.onrender.com/api/contact", {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          roomType: roomPriceMap[formData.roomType]?.type || formData.roomType,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          pgType: "",
          roomType: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <motion.div
        className="section-container"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <span className="section-tag">Contact</span>
          <h2>
            Get in <span className="highlight">Touch</span>
          </h2>
          <p>Ready to move in? Contact us today!</p>
        </motion.div>

        <motion.div className="contact-content" variants={fadeInUp}>
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={32} />
              </div>
              <h3>Call Us</h3>
              <p>Nagesh Chintham</p>
              <motion.a href="tel:9623975463" whileHover={{ scale: 1.05 }}>
                +91 96239 75463
              </motion.a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={32} />
              </div>
              <h3>Visit Us</h3>
              <p>Magarpatta City, Pune</p>
              <span>Dnyandeep Society, Magarpatta (Boys) </span>
              <span>opp. Noble Hospital, Hadapsar</span>
            </div>
          </div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address (Optional)"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <select
                name="pgType"
                value={formData.pgType}
                onChange={handleChange}
                required
              >
                <option value="">Select PG Type *</option>
                <option value="boys">Boys PG</option>
                <option value="girls">Girls PG</option>
              </select>
            </div>
            <div className="form-group">
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                required
              >
                <option value="">Select Room Type *</option>
                <option value="1">1 Sharing - ₹8,000/month</option>
                <option value="2">2 Sharing - ₹7,000/month</option>
                <option value="3">3 Sharing - ₹6,500/month</option>
                <option value="4">4 Sharing - ₹6,000/month</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message (Optional)"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Success/Error Message */}
            {submitStatus === "success" && (
              <motion.div
                className="form-message success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle size={20} />
                <span>Thank you! We will contact you within 24 hours.</span>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                className="form-message error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span>
                  Failed to send message. Please call us directly at +91 96239
                  75463
                </span>
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ChevronRight size={20} />
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Footer
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "PG Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const roomTypes = [
    { name: "Boys PG - 1 Sharing", href: "#rooms" },
    { name: "Boys PG - 2 Sharing", href: "#rooms" },
    { name: "Boys PG - 3 Sharing", href: "#rooms" },
    { name: "Boys PG - 4 Sharing", href: "#rooms" },
    { name: "Girls PG - 1 Sharing", href: "#rooms" },
    { name: "Girls PG - 2 Sharing", href: "#rooms" },
    { name: "Girls PG - 3 Sharing", href: "#rooms" },
    { name: "Girls PG - 4 Sharing", href: "#rooms" },
  ];

  const businessHours = [
    { day: "Monday - Sunday", time: "24/7 Available", icon: Clock },
    { day: "Office Hours", time: "9:00 AM - 8:00 PM", icon: Calendar },
    { day: "Phone Support", time: "Available 24/7", icon: Phone },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  ];

  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Main Footer Grid */}
        <div className="footer-main">
          {/* Brand & About */}
          <motion.div className="footer-brand" variants={fadeInUp}>
            <div className="footer-logo">
              <Building2 size={44} />
              <div className="logo-text">
                <span>Nagesh PG</span>
                <p>Your home away from home</p>
              </div>
            </div>
            <p className="footer-about">
              Premium paying guest accommodation in Magarpatta, Pune. We provide
              safe, secure, and comfortable living spaces for both boys and
              girls with all essential amenities.
            </p>
            <div className="footer-rating">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#ffd93d" color="#ffd93d" />
                ))}
              </div>
              <span>4.8/5 Rating</span>
              <span className="review-count">500+ Happy Residents</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-section quick-links"
            variants={fadeInUp}
          >
            <h4>Quick Links</h4>
            <div className="links-grid">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="footer-link"
                >
                  <ChevronRight size={16} />
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Room Types */}
          <motion.div className="footer-section room-types" variants={fadeInUp}>
            <h4>Our Rooms</h4>
            <div className="links-grid">
              {roomTypes.map((room, index) => (
                <motion.a
                  key={index}
                  href={room.href}
                  whileHover={{ x: 5 }}
                  className="footer-link"
                >
                  <ChevronRight size={16} />
                  <span>{room.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Hours */}
          <motion.div
            className="footer-section footer-contact-info"
            variants={fadeInUp}
          >
            <h4>Contact Info</h4>
            <div className="contact-details">
              <div className="contact-item">
                <MapPin size={20} />
                <div>
                  <span className="contact-label">Address</span>
                  <span className="contact-value">
                    Dnyandeep Society, Magarpatta, Pune - 411028
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <div>
                  <span className="contact-label">Phone</span>
                  <a href="tel:9623975463" className="contact-value">
                    +91 96239 75463
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <div>
                  <span className="contact-label">Email</span>
                  <a
                    href="mailto:nageshchintham4@gmail.com"
                    className="contact-value"
                  >
                    nageshchintham4@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="business-hours">
              <h5>Business Hours</h5>
              {businessHours.map((item, index) => (
                <div key={index} className="hours-item">
                  <item.icon size={16} />
                  <div>
                    <span className="hours-day">{item.day}</span>
                    <span className="hours-time">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div className="footer-stats" variants={fadeInUp}>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Happy Residents</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Well Furnished Rooms</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support Available</span>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div className="footer-bottom" variants={fadeInUp}>
          <div className="footer-bottom-content">
            <p>
              &copy; {new Date().getFullYear()} Nagesh PG. All rights reserved.
              Designed with care for your comfort.
            </p>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.a
          href="#home"
          className="back-to-top"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={24} />
        </motion.a>
      </motion.div>
    </footer>
  );
};

// Main App Component
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Testimonials />
      <NearbyAmenities />
      <Gallery />
      <Location />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
