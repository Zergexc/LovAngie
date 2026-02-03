import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem',
            color: 'var(--color-text-muted)',
            fontSize: '0.9rem'
        }}>
            <p>Hecho con ❤️ para ti</p>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>&copy; {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
