/**
 * Notification Context
 * Manages toast notifications throughout the app
 */

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { nanoid } from "nanoid";
import BrutalToast, { ToastType } from "@/components/BrutalToast";

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface NotificationContextType {
  showNotification: (type: ToastType, title: string, message?: string, duration?: number) => void;
  showSuccess: (title: string, message?: string) => void;
  showError: (title: string, message?: string) => void;
  showInfo: (title: string, message?: string) => void;
  showWarning: (title: string, message?: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);
  
  const showNotification = useCallback(
    (type: ToastType, title: string, message?: string, duration: number = 5000) => {
      const id = nanoid();
      const newToast: Toast = { id, type, title, message, duration };
      
      setToasts((prev) => [...prev, newToast]);
    },
    []
  );
  
  const showSuccess = useCallback(
    (title: string, message?: string) => {
      showNotification("success", title, message);
    },
    [showNotification]
  );
  
  const showError = useCallback(
    (title: string, message?: string) => {
      showNotification("error", title, message);
    },
    [showNotification]
  );
  
  const showInfo = useCallback(
    (title: string, message?: string) => {
      showNotification("info", title, message);
    },
    [showNotification]
  );
  
  const showWarning = useCallback(
    (title: string, message?: string) => {
      showNotification("warning", title, message);
    },
    [showNotification]
  );
  
  return (
    <NotificationContext.Provider
      value={{
        showNotification,
        showSuccess,
        showError,
        showInfo,
        showWarning
      }}
    >
      {children}
      
      {/* Toast container */}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-4 pointer-events-none">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <BrutalToast
              id={toast.id}
              type={toast.type}
              title={toast.title}
              message={toast.message}
              duration={toast.duration}
              onClose={removeToast}
            />
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider");
  }
  
  return context;
}
