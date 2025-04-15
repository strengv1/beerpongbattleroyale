import { HeroSection } from "./_components/HeroSection"
import { AboutSection } from "./_components/AboutSection"
import { PrizesSection } from "./_components/PrizesSection"
import { TournamentSection } from "./_components/TournamentSection"
import { RegistrationSection } from "./_components/RegistrationSection"
import { OrganizersSection } from "./_components/OrganizersSection"
import { FAQSection } from "./_components/FAQSection"
import { CTASection } from "./_components/CTASection"
import PartnerSection from "./_components/PartnerSection"

export default function BeerPongBattleRoyale() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PrizesSection />
        <TournamentSection />
        <RegistrationSection />
        <OrganizersSection />
        <FAQSection />
        <PartnerSection />
        <CTASection />
      </main>
    </div>
  )
}