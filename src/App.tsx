import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TargetCustomers } from './components/TargetCustomers';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Projects } from './components/Projects';
import { Pricing } from './components/Pricing';

import { CustomQuoteForm } from './components/CustomQuoteForm';

import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [selectedProjectType, setSelectedProjectType] = useState<string | undefined>(undefined);
  const [selectedDiscountCode, setSelectedDiscountCode] = useState<string | undefined>(undefined);

  const handleOpenQuote = (projectType?: string, discountCode?: string) => {
    setSelectedProjectType(projectType);
    setSelectedDiscountCode(discountCode);

    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const offsetTop = contactElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Sticky Glass Navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 2. Target Customer Section */}
        <TargetCustomers onOpenQuote={handleOpenQuote} />

        {/* 3. Services Section */}
        <Services onOpenQuote={handleOpenQuote} />

        {/* 4. How It Works Workflow */}
        <HowItWorks onOpenQuote={handleOpenQuote} />

        {/* 5. Portfolio Projects */}
        <Projects onOpenQuote={handleOpenQuote} />

        {/* 6. Pricing Packages */}
        <Pricing onOpenQuote={handleOpenQuote} />



        {/* 8. Interactive Custom Quote Generator Form */}
        <CustomQuoteForm
          initialProjectType={selectedProjectType}
          initialDiscountCode={selectedDiscountCode}
        />



        {/* 11. About Us Section */}
        <About />

        {/* 12. Why Choose VINGS */}
        <WhyChooseUs />

        {/* 15. Final Conversion CTA */}
        <Contact onOpenQuote={handleOpenQuote} />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

    </div>
  );
}

export default App;
