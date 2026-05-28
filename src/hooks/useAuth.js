import { useState, useEffect } from 'react';
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signInWithRedirect, 
  getRedirectResult,
  signOut 
} from 'firebase/auth';
import { auth, googleProvider, isConfigured } from '../config/firebase';

export const useAuth = (isLocalMode, setIsLocalMode, setCompletedItems) => {
  const [user, setUser] = useState(null);
  const [authChecking, setAuthChecking] = useState(true);

  useEffect(() => {
    if (isLocalMode || !isConfigured) {
      setAuthChecking(false);
      return;
    }

    // Capture the login result when returning from a PWA redirect login
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          setUser(result.user);
        }
      })
      .catch((error) => {
        console.error("Redirect auth resolution failed:", error);
      });

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthChecking(false);
    });
    return () => unsubscribe();
  }, [isLocalMode]);

  const handleLogin = async () => {
    // Detect PWA standalone mode
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    
    try {
      if (isStandalone) {
        // iOS standalone apps block popup windows, so we redirect the entire PWA window
        await signInWithRedirect(auth, googleProvider);
      } else {
        // Regular browser tabs use the clean popup window authentication
        await signInWithPopup(auth, googleProvider);
      }
    } 
    catch (error) { 
      console.error("Login failed", error); 
    }
  };

  const handleLogout = async () => {
    if (isLocalMode) {
      setIsLocalMode(false);
      setCompletedItems({});
    } else {
      try { 
        await signOut(auth); 
        setCompletedItems({}); 
      } 
      catch (error) { 
        console.error("Logout failed", error); 
      }
    }
  };

  const enableLocalMode = () => {
    setIsLocalMode(true);
    setUser({ uid: 'local_dev', email: 'Local Developer (No Sync)' });
  };

  return { user, setUser, authChecking, handleLogin, handleLogout, enableLocalMode };
};