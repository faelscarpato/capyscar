/**
 * Notification Demo Component
 * Demonstrates the brutal notification system
 */

import { Button } from "@/components/ui/button";
import { useNotification } from "@/contexts/NotificationContext";

export default function NotificationDemo() {
  const { showSuccess, showError, showInfo, showWarning } = useNotification();
  
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section title */}
        <div className="mb-16">
          <div className="inline-block brutal-border brutal-shadow-sm bg-accent p-4 mb-6">
            <h2 className="text-5xl md:text-7xl font-black text-black">
              NOTIFICAÇÕES
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Sistema de notificações personalizadas com estilo Neo-Brutalismo Digital. 
            Clique nos botões abaixo para testar diferentes tipos de notificações.
          </p>
        </div>
        
        {/* Demo buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Success notification */}
          <div className="brutal-border brutal-shadow bg-card p-6 space-y-4">
            <div className="text-4xl font-black text-accent">✓</div>
            <h3 className="text-2xl font-bold text-white font-display">
              Sucesso
            </h3>
            <p className="text-muted-foreground text-sm">
              Notificação de ação concluída com sucesso
            </p>
            <Button
              onClick={() => showSuccess(
                "Operação Concluída!",
                "Sua ação foi executada com sucesso."
              )}
              className="brutal-border bg-accent hover:bg-accent/90 text-black font-bold w-full"
            >
              Testar Sucesso
            </Button>
          </div>
          
          {/* Error notification */}
          <div className="brutal-border brutal-shadow bg-card p-6 space-y-4">
            <div className="text-4xl font-black text-destructive">✕</div>
            <h3 className="text-2xl font-bold text-white font-display">
              Erro
            </h3>
            <p className="text-muted-foreground text-sm">
              Notificação de erro ou falha na operação
            </p>
            <Button
              onClick={() => showError(
                "Erro Detectado!",
                "Não foi possível completar a operação."
              )}
              className="brutal-border bg-destructive hover:bg-destructive/90 text-white font-bold w-full"
            >
              Testar Erro
            </Button>
          </div>
          
          {/* Info notification */}
          <div className="brutal-border brutal-shadow bg-card p-6 space-y-4">
            <div className="text-4xl font-black text-white">i</div>
            <h3 className="text-2xl font-bold text-white font-display">
              Informação
            </h3>
            <p className="text-muted-foreground text-sm">
              Notificação informativa ou dica útil
            </p>
            <Button
              onClick={() => showInfo(
                "Informação Importante",
                "Esta é uma mensagem informativa para você."
              )}
              variant="outline"
              className="brutal-border bg-transparent hover:bg-white hover:text-black text-white font-bold w-full"
            >
              Testar Info
            </Button>
          </div>
          
          {/* Warning notification */}
          <div className="brutal-border brutal-shadow bg-card p-6 space-y-4">
            <div className="text-4xl font-black text-yellow-500">⚠</div>
            <h3 className="text-2xl font-bold text-white font-display">
              Aviso
            </h3>
            <p className="text-muted-foreground text-sm">
              Notificação de alerta ou atenção necessária
            </p>
            <Button
              onClick={() => showWarning(
                "Atenção Necessária",
                "Esta ação requer sua confirmação."
              )}
              className="brutal-border bg-yellow-500 hover:bg-yellow-400 text-black font-bold w-full"
            >
              Testar Aviso
            </Button>
          </div>
        </div>
        
        {/* Usage example */}
        <div className="mt-16 brutal-border brutal-shadow bg-card p-8">
          <h3 className="text-3xl font-black text-accent mb-4 font-display">
            COMO USAR
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Para usar as notificações em qualquer componente, importe o hook <code className="bg-secondary px-2 py-1 text-accent font-bold">useNotification</code>:
            </p>
            <pre className="bg-secondary p-4 overflow-x-auto border-2 border-white">
              <code className="text-white font-mono text-sm">
{`import { useNotification } from "@/contexts/NotificationContext";

function MeuComponente() {
  const { showSuccess, showError, showInfo, showWarning } = useNotification();
  
  const handleAction = () => {
    showSuccess("Título", "Mensagem opcional");
  };
  
  return <button onClick={handleAction}>Clique</button>;
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
