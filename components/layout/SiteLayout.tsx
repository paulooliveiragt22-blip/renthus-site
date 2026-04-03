import { Navbar } from "@/components/marketing/Navbar";
import { ChatWidget } from "@/components/marketing/ChatWidget";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-renthus-radial font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
