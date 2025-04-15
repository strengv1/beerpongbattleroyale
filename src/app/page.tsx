import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { AboutSection } from "./components/AboutSection"
import { PrizesSection } from "./components/PrizesSection"
import { TournamentSection } from "./components/TournamentSection"
import { RegistrationSection } from "./components/RegistrationSection"
import { OrganizersSection } from "./components/OrganizersSection"
import { FAQSection } from "./components/FAQSection"
import { CTASection } from "./components/CTASection"
import { Footer } from "./components/Footer"

export default function BeerPongBattleRoyale() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PrizesSection />
        <TournamentSection />
        <RegistrationSection />
        <OrganizersSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}