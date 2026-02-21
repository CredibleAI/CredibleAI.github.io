import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Link from "next/link";
import { navigationItems } from "@/constants/navigation";

export const metadata = {
  title: "Privacy Policy | CCAI",
  description: "Privacy Policy - Centre for Credible Artificial Intelligence",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar items={navigationItems} />

      <div className="pt-[64px] md:pt-[80px]">
        <Section className="py-20 md:py-32 lg:py-[180px]">
          <div className="flex flex-col gap-10 max-w-[800px] mx-auto text-[#001f33]">
            <h1 className="font-sans text-3xl md:text-[48px] font-normal leading-[1.1] tracking-[-0.96px]">
              Privacy Policy
            </h1>
            <p className="font-sans text-base md:text-lg font-normal leading-[1.6]">
              Centre for Credible Artificial Intelligence (CCAI)
              <br />
              Warsaw University of Technology
            </p>

            <section>
              <h2 className="font-sans text-xl md:text-2xl font-normal mt-8 mb-4">
                General Information
              </h2>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6]">
                This Privacy Policy describes how personal data of users of the website available at:{" "}
                <a href="https://credibleai.github.io" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                  https://credibleai.github.io
                </a>{" "}
                (hereinafter: the &ldquo;Website&rdquo;) are collected, processed, and stored.
              </p>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                The controller of personal data is:
              </p>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] pl-4">
                Warsaw University of Technology
                <br />
                Plac Politechniki 1
                <br />
                00-661 Warsaw, Poland
                <br />
                REGON: 000001554
              </p>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                The Data Protection Officer may be contacted at:{" "}
                <a href="mailto:iod@pw.edu.pl" className="underline hover:no-underline">iod@pw.edu.pl</a>.
              </p>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                Personal data are processed in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (GDPR).
              </p>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                By using the Website, the User accepts this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-xl md:text-2xl font-normal mt-8 mb-4">
                Purposes and Legal Basis of Processing
              </h2>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6]">
                Personal data may be processed in order to:
              </p>
              <ul className="font-sans text-base md:text-lg font-normal leading-[1.6] list-disc pl-6 mt-2 space-y-1">
                <li>ensure proper operation of the Website,</li>
                <li>provide access to published content,</li>
                <li>analyze traffic and usage statistics,</li>
                <li>improve and adapt the Website,</li>
                <li>maintain technical sessions,</li>
                <li>ensure security of the Website,</li>
                <li>establish, pursue, or defend legal claims.</li>
              </ul>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                The legal basis for processing is Article 6(1)(f) GDPR – the legitimate interest of the controller.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-xl md:text-2xl font-normal mt-8 mb-4">
                Types of Data Collected
              </h2>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6]">
                In accordance with standard internet practice, the server may automatically store information related to requests sent to the server, including:
              </p>
              <ul className="font-sans text-base md:text-lg font-normal leading-[1.6] list-disc pl-6 mt-2 space-y-1">
                <li>IP address,</li>
                <li>date and time of request,</li>
                <li>requested resource,</li>
                <li>HTTP response code,</li>
                <li>size of the response,</li>
                <li>referrer address,</li>
                <li>browser and operating system information.</li>
              </ul>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                These data may be stored in server logs for technical and security purposes.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-xl md:text-2xl font-normal mt-8 mb-4">
                Cookies
              </h2>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6]">
                The Website may use cookies, which are small text files stored on the User&rsquo;s device.
              </p>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                Cookies may be used to:
              </p>
              <ul className="font-sans text-base md:text-lg font-normal leading-[1.6] list-disc pl-6 mt-2 space-y-1">
                <li>maintain sessions,</li>
                <li>improve accessibility and usability,</li>
                <li>generate anonymous statistics,</li>
                <li>improve the structure and content of the Website.</li>
              </ul>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                Cookies may be:
              </p>
              <ul className="font-sans text-base md:text-lg font-normal leading-[1.6] list-disc pl-6 mt-2 space-y-1">
                <li>session cookies (temporary),</li>
                <li>persistent cookies (stored for a defined period).</li>
              </ul>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                Users may delete or disable cookies in their browser settings. Disabling cookies may limit certain functionalities of the Website.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-xl md:text-2xl font-normal mt-8 mb-4">
                Analytics and External Tools
              </h2>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6]">
                The Website may use third-party tools to analyze traffic and improve usability, such as:
              </p>
              <ul className="font-sans text-base md:text-lg font-normal leading-[1.6] list-disc pl-6 mt-2 space-y-1">
                <li>website analytics tools,</li>
                <li>accessibility tools,</li>
                <li>embedded media providers (e.g. YouTube, social media platforms).</li>
              </ul>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                These services may place their own cookies and process certain technical data in accordance with their own privacy policies.
              </p>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                Users can manage cookies and tracking preferences through their browser settings or appropriate browser extensions.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-xl md:text-2xl font-normal mt-8 mb-4">
                Transfer of Data Outside the EEA
              </h2>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6]">
                If third-party services are used whose infrastructure is located outside the European Economic Area (EEA), data may be transferred to countries outside the EEA.
              </p>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                Such transfers occur in accordance with GDPR requirements, including adequacy decisions or appropriate safeguards where applicable.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-xl md:text-2xl font-normal mt-8 mb-4">
                User Rights
              </h2>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6]">
                Under GDPR, users have the right to:
              </p>
              <ul className="font-sans text-base md:text-lg font-normal leading-[1.6] list-disc pl-6 mt-2 space-y-1">
                <li>access their personal data,</li>
                <li>rectify inaccurate data,</li>
                <li>request deletion of data,</li>
                <li>restrict processing,</li>
                <li>object to processing,</li>
                <li>data portability (where applicable),</li>
                <li>withdraw consent where processing is based on consent.</li>
              </ul>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                Requests regarding personal data may be submitted to the data controller.
              </p>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                Users also have the right to lodge a complaint with:
              </p>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] pl-4 mt-2">
                Urząd Ochrony Danych Osobowych (UODO)
                <br />
                ul. Stawki 2
                <br />
                00-193 Warsaw
                <br />
                <a href="https://uodo.gov.pl" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                  https://uodo.gov.pl
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-sans text-xl md:text-2xl font-normal mt-8 mb-4">
                Data Retention
              </h2>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6]">
                Personal data are stored only for the period necessary to fulfill the purposes described above, or as required by applicable law.
              </p>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                Server logs may be retained for technical and security purposes.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-xl md:text-2xl font-normal mt-8 mb-4">
                Changes to the Privacy Policy
              </h2>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6]">
                The controller reserves the right to amend this Privacy Policy, particularly in case of:
              </p>
              <ul className="font-sans text-base md:text-lg font-normal leading-[1.6] list-disc pl-6 mt-2 space-y-1">
                <li>legal changes,</li>
                <li>technical changes to the Website,</li>
                <li>introduction of new services or tools.</li>
              </ul>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                The current version will always be available on the Website.
              </p>
            </section>

            <section>
              <h2 className="font-sans text-xl md:text-2xl font-normal mt-8 mb-4">
                Contact
              </h2>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6]">
                Questions regarding this Privacy Policy may be directed to:
              </p>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] pl-4 mt-2">
                Centre for Credible Artificial Intelligence
                <br />
                Warsaw University of Technology
              </p>
              <p className="font-sans text-base md:text-lg font-normal leading-[1.6] mt-4">
                <Link href="/contact" className="underline hover:no-underline">
                  Contact us
                </Link>
              </p>
            </section>

            <p className="font-mono text-sm text-[#001f33]/70 mt-12">
              ©2026 Centre for Credible Artificial Intelligence. All rights reserved.
            </p>
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
}
