import { About } from "@/modules/About/About";
import { AppHeader } from "@/modules/AppHeader/AppHeader";

export default function Home() {
  /*
  
    Header + nav
    About
    Projects
    Team
    Contact?
  
  */

  return (
    <main className=" container">
      <AppHeader />
      <About />
    </main>
  );
}
