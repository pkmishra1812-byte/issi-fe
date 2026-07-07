// src/pages/PoliciesPage.jsx
import PageHero from "../components/shared/PageHero";

const sections = [
  {
    id: "privacy",
    title: "Privacy Policy",
    content: `At Golden Leaf Tea Co., we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services.

We collect information you provide directly — such as your name, email address, phone number, and business details when you fill out forms, register for an account, or contact us. We also automatically collect certain technical data including IP address, browser type, and usage patterns through cookies and similar technologies.

Your data is used solely to process your enquiries, fulfil orders, improve our services, and send relevant communications with your consent. We never sell your personal information to third parties. We may share data with trusted service providers (e.g., logistics partners, payment processors) who are bound by strict confidentiality agreements.

You have the right to access, correct, or delete your personal data at any time. To exercise these rights or raise a concern, please contact us at privacy@goldenleaftea.com. We retain your data only as long as necessary to fulfil the purposes outlined in this policy.

We use industry-standard security measures including SSL encryption, firewalls, and regular security audits to protect your data. However, no method of transmission over the Internet is 100% secure. By using our website, you acknowledge and agree to this Privacy Policy.`,
  },
  {
    id: "terms",
    title: "Terms of Service",
    content: `These Terms of Service govern your use of the Golden Leaf Tea Co. website and the purchase of products from us. By accessing our site or placing an order, you agree to be bound by these terms.

All orders are subject to availability and acceptance. We reserve the right to refuse or cancel any order at our discretion, including instances where product quantities are insufficient, pricing errors occur, or credit verification fails. Prices are quoted in Indian Rupees (INR) and are exclusive of applicable taxes and shipping charges.

Title and risk of loss pass to you upon delivery to the carrier. Claims for damaged or missing items must be reported within 48 hours of receipt. We are not liable for delays caused by force majeure events including natural disasters, strikes, or transportation disruptions.

All content on this website — including text, images, logos, and product descriptions — is the intellectual property of Golden Leaf Tea Co. and may not be reproduced without prior written consent. You agree not to use our site for any unlawful purpose or in violation of applicable laws.

We reserve the right to update these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our site after changes constitutes acceptance of the new terms.`,
  },
  {
    id: "shipping",
    title: "Shipping Policy",
    content: `Golden Leaf Tea Co. offers pan-India shipping through our network of trusted logistics partners. Orders are processed within 1–2 business days after payment confirmation.

Standard delivery timelines are 3–5 business days for most pin codes, and 5–7 business days for remote or north-eastern regions. Cold-chain delivery is available in 15 major metropolitan cities — additional transit time of 1–2 days may apply.

Shipping charges are calculated at checkout based on order weight, volume, and delivery location. Orders above ₹25,000 qualify for free standard shipping. Express shipping is available at an additional cost — please contact your account manager for a quote.

We take utmost care in packaging to ensure product integrity during transit. All shipments are insured against damage and theft. In the rare event of a damaged delivery, please document the issue with photographs and notify us within 48 hours at shipping@goldenleaftea.com for a replacement or refund.

International shipping is currently available to select markets including the UAE, USA, UK, and Singapore. Duties, taxes, and customs fees are the responsibility of the buyer. Please contact our export team at exports@goldenleaftea.com for international shipping quotes and lead times.`,
  },
  {
    id: "returns",
    title: "Return & Refund Policy",
    content: `Your satisfaction is our priority. If you receive a product that does not meet our quality standards, we will gladly assist you with a return, replacement, or refund.

To be eligible for a return, products must be reported within 7 days of delivery and must be in their original, unopened packaging. We reserve the right to inspect returned goods before processing any refund. Perishable items such as tea and spices that have been opened cannot be returned due to hygiene and safety regulations.

To initiate a return, please contact our support team at returns@goldenleaftea.com with your order number, product details, and reason for return. We will provide a return authorization number and shipping instructions. Return shipping costs are borne by Golden Leaf Tea Co. in cases of defective or incorrect shipments.

Refunds are processed within 7–10 business days after we receive and inspect the returned goods. The refund will be credited to your original payment method. For wholesale accounts, refunds may be issued as account credit or adjusted against future invoices at your preference.

In cases where products are damaged during transit, we require photographic evidence within 48 hours of delivery to process a full refund or replacement. This policy applies to all retail and wholesale orders unless otherwise specified in your wholesale agreement.`,
  },
];

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        title="Policies"
        subtitle="Golden Leaf Tea Co."
        breadcrumb="Home / Policies"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">
              Information & Compliance
            </p>
            <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold">
              Our Policies
            </h2>
            <p className="font-body text-charcoal/55 text-base mt-4 max-w-xl mx-auto">
              We believe in transparency. Here you'll find everything you need to know about how
              we handle your data, your orders, and your experience with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            {sections.map((s) => (
              <div key={s.id} id={s.id}>
                <h3 className="font-display text-tea-800 text-2xl lg:text-3xl font-bold mb-5 pb-3 border-b border-tea-100">
                  {s.title}
                </h3>
                {s.content.split("\n\n").map((para, i) => (
                  <p key={i} className="font-body text-charcoal/60 text-sm leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
