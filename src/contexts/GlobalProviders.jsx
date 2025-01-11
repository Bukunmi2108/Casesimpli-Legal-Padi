import React from 'react';
import { BackendDomainProvider } from './BackendDomainContext'; 

export default function GlobalProviders({ children }) {
  return (
    <BackendDomainProvider>
      {children}
    </BackendDomainProvider>
  );
}