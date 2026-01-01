/**
 * Brutal Toast Component
 * Neo-Brutalism Digital Design: Custom toast notifications
 */

import { useEffect } from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

interface BrutalToastProps {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
}

const toastConfig = {
  success: {
    icon: CheckCircle,
    bgColor: "bg-accent",
    textColor: "text-black",
    borderColor: "border-accent"
  },
  error: {
    icon: AlertCircle,
    bgColor: "bg-destructive",
    textColor: "text-white",
    borderColor: "border-destructive"
  },
  info: {
    icon: Info,
    bgColor: "bg-card",
    textColor: "text-white",
    borderColor: "border-white"
  },
  warning: {
    icon: AlertTriangle,
    bgColor: "bg-yellow-500",
    textColor: "text-black",
    borderColor: "border-yellow-500"
  }
};

export default function BrutalToast({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose
}: BrutalToastProps) {
  const config = toastConfig[type];
  const Icon = config.icon;
  
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);
  
  return (
    <div
      className={`brutal-border brutal-shadow ${config.bgColor} ${config.textColor} p-4 min-w-[320px] max-w-[420px] animate-in slide-in-from-right`}
      role="alert"
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <Icon className="h-6 w-6 flex-shrink-0 mt-0.5" />
        
        {/* Content */}
        <div className="flex-1 space-y-1">
          <h4 className="font-bold text-lg leading-tight">
            {title}
          </h4>
          {message && (
            <p className="text-sm opacity-90 leading-relaxed">
              {message}
            </p>
          )}
        </div>
        
        {/* Close button */}
        <button
          onClick={() => onClose(id)}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Fechar notificação"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
