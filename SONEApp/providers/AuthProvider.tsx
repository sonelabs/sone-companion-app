import React from 'react';
import { Auth0Provider } from 'react-native-auth0';
import { AUTH0_CONFIG } from '@/config/auth0-config';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <Auth0Provider
      domain={AUTH0_CONFIG.domain}
      clientId={AUTH0_CONFIG.clientId}
    >
      {children}
    </Auth0Provider>
  );
} 