import { AppNavigation } from "@/components/Navigation/Navigation";
import { About } from "@/modules/About/About";
import { AppHeader } from "@/modules/AppHeader/AppHeader";
import { Projects } from "@/modules/Projects/Projects";
import { Team } from "@/modules/Team/Team";

export default function Home() {
  return (
    <main className=" container relative">
      <AppNavigation />
      <AppHeader />
      <About />
      <Projects />
      <Team />
    </main>
  );
}
