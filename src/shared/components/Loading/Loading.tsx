import React from 'react';
import './Loading.css';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function Loading({ size = 'medium', className = '' }: LoadingProps) {
  return (
    <div className={`loading-container ${size} ${className}`}>
      <div className="loading-spinner"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
}
