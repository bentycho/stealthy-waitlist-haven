import { ParticleBackground } from "@/components/ParticleBackground";
import { WaitlistForm } from "@/components/WaitlistForm";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    const channel = supabase
      .channel('waitlist-notifications')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'waitlist',
          filter: 'email=eq.' + 'ben@tychopharma.com'
        },
        (payload) => {
          if (payload.eventType !== 'INSERT') return;
          if (!payload.new?.email) return;
          
          toast({
            title: "New Waitlist Signup!",
            description: `${payload.new.email} just joined the waitlist.`,
          });
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [toast]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="space-y-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium mb-6">
            Coming Soon
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            Behind the scenes, innovation is quietly transforming the future of Life Science
          </h1>
          
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            We're crafting something unique in stealth mode. Be among the first to
            experience it when we launch.
          </p>
        </div>

        <div className="mt-12 w-full animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
};

export default Index;