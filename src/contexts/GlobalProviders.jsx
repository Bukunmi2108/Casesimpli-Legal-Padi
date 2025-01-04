import React from 'react';
import { AuthProvider } from './AuthContext';
import { BackendDomainProvider } from './BackendDomainContext'; 

export default function GlobalProviders({ children }) {
  return (
    <AuthProvider>
      <BackendDomainProvider>
        {children}
      </BackendDomainProvider>
    </AuthProvider>
  );
}