"use client";
import React, { useState } from 'react';

const TestimonialGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "What stood out for me was how easy it was to find fresh opportunities that matched my style. The team really cares about helping you win.",
      author: "Founder, Solarcorp"
    },
    {
      quote: "The platform connected me with clients I never would have found otherwise. It's been transformative for my business.",
      author: "Designer, Creativo"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="discover-container">
      <div className="discover-content">
        <h1 className="discover-title">Discover and Hire</h1>
        <p className="discover-description">
          Tap into experts who create vital content for the biggest names in the world, whether that's freelance or full-time
        </p>
        
        <div className="image-grid">
          {/* Left image stack */}
          <div className="image-stack left-stack">
            <div className="image-wrapper top-left-1">
              <img src="/p1.png" alt="Professional working" className="stacked-image" />
            </div>
            <div className="image-wrapper top-left-2">
              <img src="/p1.png" alt="Professional working" className="stacked-image" />
            </div>
            <div className="image-wrapper bottom-left">
              <img src="/p1.png" alt="Professional working" className="stacked-image" />
            </div>
          </div>
          
          {/* Center image stack */}
          <div className="image-stack center-stack">
            <div className="image-wrapper center-top">
              <img src="/p1.png" alt="Professional working" className="stacked-image" />
            </div>
            <div className="image-wrapper center-bottom">
              <img src="/p1.png" alt="Professional working" className="stacked-image" />
            </div>
          </div>
          
          {/* Right image stack */}
          <div className="image-stack right-stack">
            <div className="image-wrapper top-right-1">
              <img src="/p1.png" alt="Professional working" className="stacked-image" />
            </div>
            <div className="image-wrapper top-right-2">
              <img src="/p1.png" alt="Professional working" className="stacked-image" />
            </div>
            <div className="image-wrapper bottom-right">
              <img src="/p1.png" alt="Professional working" className="stacked-image" />
            </div>
          </div>
        </div>
        
        <div className="testimonial-section">
          <p className="testimonial-author">{testimonials[currentSlide].author}</p>
          <p className="testimonial-quote">"{testimonials[currentSlide].quote}"</p>
          
          <div className="testimonial-controls">
            <button 
              className="control-button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="control-button next-button"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .discover-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        
        .discover-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        
        .discover-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .discover-description {
          font-size: 1.1rem;
          line-height: 1.5;
          color: #666;
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .image-grid {
          display: flex;
          justify-content: space-between;
          position: relative;
          height: 400px;
          margin-bottom: 3rem;
        }
        
        .image-stack {
          position: relative;
          width: 33%;
        }
        
        .image-wrapper {
          position: absolute;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }
        
        .image-wrapper:hover {
          transform: translateY(-8px);
        }
        
        .stacked-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Left stack positioning */
        .top-left-1 {
          top: 20px;
          left: 10px;
          width: 120px;
          height: 160px;
          z-index: 2;
        }
        
        .top-left-2 {
          top: 70px;
          left: 50px;
          width: 120px;
          height: 160px;
          z-index: 1;
        }
        
        .bottom-left {
          top: 180px;
          left: 30px;
          width: 140px;
          height: 180px;
          z-index: 3;
        }
        
        /* Center stack positioning */
        .center-top {
          top: 50px;
          left: calc(50% - 75px);
          width: 150px;
          height: 190px;
          z-index: 2;
        }
        
        .center-bottom {
          top: 160px;
          left: calc(50% - 75px);
          width: 150px;
          height: 190px;
          z-index: 1;
        }
        
        /* Right stack positioning */
        .top-right-1 {
          top: 20px;
          right: 10px;
          width: 120px;
          height: 160px;
          z-index: 2;
        }
        
        .top-right-2 {
          top: 70px;
          right: 50px;
          width: 120px;
          height: 160px;
          z-index: 1;
        }
        
        .bottom-right {
          top: 180px;
          right: 30px;
          width: 140px;
          height: 180px;
          z-index: 3;
        }
        
        .testimonial-section {
          margin-top: 2rem;
          padding: 1rem;
        }
        
        .testimonial-author {
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .testimonial-quote {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto 1.5rem;
          font-style: italic;
        }
        
        .testimonial-controls {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        
        .control-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e0e0e0;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .control-button:hover {
          background: #f5f5f5;
        }
        
        .next-button {
          background: #6366f1;
          color: white;
          border: none;
        }
        
        .next-button:hover {
          background: #4f46e5;
        }
        
        @media (max-width: 768px) {
          .image-grid {
            height: 300px;
          }
          
          .discover-title {
            font-size: 2rem;
          }
          
          .discover-description {
            font-size: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .image-grid {
            height: 250px;
            flex-direction: column;
            align-items: center;
          }
          
          .image-stack {
            width: 100%;
            height: 33%;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialGrid;