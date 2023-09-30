import { AppNavigation } from "@/components/Navigation/Navigation";
import { About } from "@/modules/About/About";
import { AppFooter } from "@/modules/AppFooter/AppFooter";
import { AppHeader } from "@/modules/AppHeader/AppHeader";
import { Contact } from "@/modules/Contact/Contact";
import { Projects } from "@/modules/Projects/Projects";
import { Team } from "@/modules/Team/Team";

export default function Home() {
  return (
    <main className="container relative">
      <AppNavigation />
      <AppHeader />
      <About />
      <Projects />
      <Team />
      <Contact />
      <AppFooter />
    </main>
  );
}
