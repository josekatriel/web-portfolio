"use client";
import React from "react";

const Footer = () => (
  <footer style={{ 
    background: 'var(--color-primary)', 
    color: 'var(--color-tertiary)',
    padding: '3rem 0', 
    marginTop: '4rem'
  }}>
    <div style={{ 
      maxWidth: '1000px', 
      margin: '0 auto',
      padding: '0 2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <div>
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 600, 
            marginBottom: '1rem',
            color: 'var(--color-white)'
          }}>
            Jose
          </h3>
          <p style={{ maxWidth: '300px', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Creative developer specializing in web, video, and animation projects. 
            Let's create something amazing together.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'var(--color-tertiary)', fontSize: '1.2rem', textDecoration: 'none' }}>LinkedIn</a>
            <a href="#" style={{ color: 'var(--color-tertiary)', fontSize: '1.2rem', textDecoration: 'none' }}>Twitter</a>
            <a href="#" style={{ color: 'var(--color-tertiary)', fontSize: '1.2rem', textDecoration: 'none' }}>Instagram</a>
          </div>
        </div>
        
        <div>
          <h4 style={{ color: 'var(--color-white)', marginBottom: '1rem', fontWeight: 600 }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="#about" style={{ color: 'var(--color-tertiary)', textDecoration: 'none' }}>About</a>
            <a href="#projects" style={{ color: 'var(--color-tertiary)', textDecoration: 'none' }}>Projects</a>
            <a href="#services" style={{ color: 'var(--color-tertiary)', textDecoration: 'none' }}>Services</a>
            <a href="#gallery" style={{ color: 'var(--color-tertiary)', textDecoration: 'none' }}>Gallery</a>
            <a href="#blog" style={{ color: 'var(--color-tertiary)', textDecoration: 'none' }}>Blog</a>
            <a href="#contact" style={{ color: 'var(--color-tertiary)', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
        
        <div>
          <h4 style={{ color: 'var(--color-white)', marginBottom: '1rem', fontWeight: 600 }}>Contact</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="mailto:jose@example.com" style={{ color: 'var(--color-tertiary)', textDecoration: 'none' }}>jose@example.com</a>
            <div style={{ color: 'var(--color-tertiary)' }}>Los Angeles, CA</div>
          </div>
        </div>
      </div>
      
      <div style={{ 
        borderTop: '1px solid rgba(248, 248, 248, 0.2)', 
        paddingTop: '1.5rem',
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>&copy; {new Date().getFullYear()} Jose Portfolio. All rights reserved.</div>
        <div>
          <a href="#" style={{ color: 'var(--color-tertiary)', textDecoration: 'none', marginLeft: '1rem' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'var(--color-tertiary)', textDecoration: 'none', marginLeft: '1rem' }}>Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
