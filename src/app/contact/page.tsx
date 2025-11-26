import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const navigationItems = [
  { label: "about", href: "/about" },
  { label: "news", href: "/news" },
  { label: "opportunities", href: "/opportunities" },
  { label: "projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const spotlightLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { platform: "LinkedIn", href: "#" },
  { platform: "Facebook", href: "#" },
  { platform: "Twitter", href: "#" },
  { platform: "YouTube", href: "#" },
];

const partners = [
  "Warsaw University of Technology",
  "Polish Science Foundation",
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
];

const contactInfo = {
  address: {
    line1: "Warsaw University of Technology",
    line2: "Centre for Credible Artificial Intelligence",
    line3: "Warsaw, Poland",
  },
  email: "contact@ccai.pl",
  phone: "+48 XX XXX XX XX",
  officeHours: "Monday - Friday, 9:00 AM - 5:00 PM",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} activeItem="/contact" />

      {/* Main Content */}
      <div className="pt-20">
        {/* Header Section */}
        <Section className="py-20">
          <div className="flex flex-col gap-12 items-start max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-[19px] items-start leading-[1.1] text-[#001f33] w-full">
              <p className="font-mono text-lg font-normal uppercase">
                contact us
              </p>
              <h1 className="font-sans text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
                Get in Touch
              </h1>
              <p className="font-sans text-xl font-normal leading-[1.4] tracking-[-0.2px] max-w-[800px]">
                Have a question, want to collaborate, or interested in our
                research? We'd love to hear from you. Reach out through the form
                below or contact us directly.
              </p>
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section className="pb-20">
          <div className="flex flex-col lg:flex-row gap-16 max-w-[1200px] mx-auto">
            {/* Contact Form */}
            <div className="flex-1">
              <h2 className="font-sans text-[36px] font-normal leading-[1.1] tracking-[-0.72px] text-[#001f33] mb-8">
                Send us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="flex-1 flex flex-col gap-8">
              <div>
                <h2 className="font-sans text-[36px] font-normal leading-[1.1] tracking-[-0.72px] text-[#001f33] mb-8">
                  Contact Information
                </h2>
                <div className="flex flex-col gap-6">
                  {/* Address */}
                  <div className="flex flex-col gap-2">
                    <p className="font-mono text-sm font-normal uppercase text-[#001f33]">
                      Address
                    </p>
                    <div className="font-sans text-lg font-normal leading-[1.6] text-[#001f33]">
                      <p>{contactInfo.address.line1}</p>
                      <p>{contactInfo.address.line2}</p>
                      <p>{contactInfo.address.line3}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <p className="font-mono text-sm font-normal uppercase text-[#001f33]">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="font-sans text-lg font-normal leading-[1.6] text-[#001f33] hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <p className="font-mono text-sm font-normal uppercase text-[#001f33]">
                      Phone
                    </p>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                      className="font-sans text-lg font-normal leading-[1.6] text-[#001f33] hover:underline"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>

                  {/* Office Hours */}
                  <div className="flex flex-col gap-2">
                    <p className="font-mono text-sm font-normal uppercase text-[#001f33]">
                      Office Hours
                    </p>
                    <p className="font-sans text-lg font-normal leading-[1.6] text-[#001f33]">
                      {contactInfo.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-sans text-[24px] font-normal leading-[1.1] tracking-[-0.48px] text-[#001f33] mb-6">
                  Follow Us
                </h3>
                <div className="flex flex-col gap-4 font-mono text-base font-normal uppercase leading-[1.1] text-[#001f33]">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {link.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Map Section (Optional - placeholder) */}
        <Section className="pb-20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-sans text-[36px] font-normal leading-[1.1] tracking-[-0.72px] text-[#001f33] mb-8">
              Find Us
            </h2>
            <div className="w-full h-[400px] bg-gray-200 border border-[#a3a3a3] flex items-center justify-center">
              <p className="font-sans text-lg font-normal text-[#001f33]">
                Map integration can be added here
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <Footer
        spotlightLinks={spotlightLinks}
        socialLinks={socialLinks}
        partners={partners}
        legalLinks={legalLinks}
      />
    </div>
  );
}

