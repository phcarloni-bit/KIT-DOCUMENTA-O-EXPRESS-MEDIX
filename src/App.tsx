import React, { useState, useEffect } from 'react';
import { AuthorSection } from './components/AuthorSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { FAQSection } from './components/FAQSection';
import { BeliefBreakSection } from './components/BeliefBreakSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { FooterSection } from './components/FooterSection';
import { FuturePacingSection } from './components/FuturePacingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { HeroSection } from './components/HeroSection';
import { MarketChangeSection } from './components/MarketChangeSection';
import { PricingSection } from './components/PricingSection';
import { SneakPeekSection } from './components/SneakPeekSection';
import { SocialProofSection } from './components/SocialProofSection';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { TopAlertBar } from './components/TopAlertBar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { WhatIsItSection } from './components/WhatIsItSection';
import { WhoIsThisForSection } from './components/WhoIsThisForSection';
import { WhySoCheapSection } from './components/WhySoCheapSection';

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the hero section (approx 600px)
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-emerald-200 selection:text-teal-900 pb-20 md:pb-0">
      <TopAlertBar />
      <StickyMobileCTA show={showStickyCTA} onClick={scrollToOffer} />

      <HeroSection onPrimaryCtaClick={scrollToOffer} />
      <MarketChangeSection />
      <WhoIsThisForSection />
      <BeliefBreakSection />
      <WhatIsItSection />
      <DeliverablesSection />
      <TargetAudienceSection />
      <BeforeAfterSection />
      <SneakPeekSection />
      <AuthorSection />
      <WhySoCheapSection />

      <PricingSection />

      <GuaranteeSection onCtaClick={scrollToOffer} />

      <SocialProofSection />
      <FuturePacingSection year={new Date().getFullYear()} onCtaClick={scrollToOffer} />

      <FAQSection />
      <FooterSection />
      <WhatsAppButton />

    </div>
  );
}
