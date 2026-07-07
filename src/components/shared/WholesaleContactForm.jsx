import { useState } from "react";

const countryCodes = [
  { code: "+1", label: "US +1" },
  { code: "+44", label: "UK +44" },
  { code: "+61", label: "AU +61" },
  { code: "+91", label: "IN +91" },
  { code: "+971", label: "UAE +971" },
  { code: "+65", label: "SG +65" },
  { code: "+81", label: "JP +81" },
  { code: "+49", label: "DE +49" },
  { code: "+33", label: "FR +33" },
  { code: "+7", label: "RU +7" },
  { code: "+86", label: "CN +86" },
  { code: "+55", label: "BR +55" },
];

const businessOptions = ["", "Retailer", "Distributor", "Café / Restaurant", "Exporter", "Wholesaler", "E‑commerce", "Other"];
const gradeOptions = ["", "Premium", "Standard", "Bulk / Commercial"];

export default function WholesaleContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dialCode: "+91",
    phone: "",
    isOwner: "",
    businessType: "",
    grade: "",
    requirement: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const dialSet = (e) => setForm((f) => ({ ...f, dialCode: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    else if (!/^[0-9\s\-+()]{7,15}$/.test(form.phone)) errs.phone = "Enter a valid phone number";
    if (!form.isOwner) errs.isOwner = "Please select";
    if (!form.businessType) errs.businessType = "Please select";
    if (!form.grade) errs.grade = "Please select";
    if (!form.requirement.trim()) errs.requirement = "Requirement is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // ── Connect actual submission (email API / CRM / Google Sheets) here ──
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
          <div className="w-16 h-0.5 bg-[#A02020] mx-auto mb-6" />
          <h2 className="text-center font-display text-[#A02020] text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Contact Us
          </h2>
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[#A02020]/10 flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A02020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="font-display text-[#A02020] text-xl font-bold mb-2">
              Thank you!
            </p>
            <p className="font-body text-[#1F3864]/60 text-sm">
              We&rsquo;ll get back to you shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const inputBase = "w-full border rounded-md px-4 py-3 font-body text-sm text-[#1F3864] placeholder:text-[#1F3864]/30 bg-white outline-none transition-colors duration-200";
  const inputNormal = "border-tea-200 focus:border-[#A02020]/40 focus:ring-1 focus:ring-[#A02020]/20";
  const inputError = "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-300";
  const labelBase = "block font-body text-xs font-semibold text-[#1F3864] mb-1.5 tracking-wide";
  const selBase = "w-full border rounded-md px-4 py-[13px] font-body text-sm bg-white outline-none transition-colors duration-200 appearance-none cursor-pointer";
  const selNormal = "border-tea-200 text-[#1F3864] focus:border-[#A02020]/40 focus:ring-1 focus:ring-[#A02020]/20";
  const selError = "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-300";

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        <div className="w-16 h-0.5 bg-[#A02020] mx-auto mb-6" />

        <h2 className="text-center font-display text-[#A02020] text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
          Contact Us
        </h2>

        <p className="text-center font-body text-[#1F3864]/50 text-sm italic max-w-lg mx-auto mb-14">
          Feel free to let us know about your requirements
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5" noValidate>
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={set("name")}
              className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
            />
            {errors.name && <p className="text-red-500 text-[11px] mt-1 font-body">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={set("email")}
              className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
            />
            {errors.email && <p className="text-red-500 text-[11px] mt-1 font-body">{errors.email}</p>}
          </div>

          {/* Phone row */}
          <div>
            <div className="flex gap-2">
              <div className="relative shrink-0">
                <select
                  value={form.dialCode}
                  onChange={dialSet}
                  className="w-[110px] border rounded-md pl-9 pr-2 py-[13px] font-body text-sm text-[#1F3864] bg-white outline-none transition-colors duration-200 border-tea-200 focus:border-[#A02020]/40 focus:ring-1 focus:ring-[#A02020]/20 appearance-none cursor-pointer"
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>{c.label}</option>
                  ))}
                </select>
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base pointer-events-none">
                  {form.dialCode === "+1" && "🇺🇸"}
                  {form.dialCode === "+44" && "🇬🇧"}
                  {form.dialCode === "+61" && "🇦🇺"}
                  {form.dialCode === "+91" && "🇮🇳"}
                  {form.dialCode === "+971" && "🇦🇪"}
                  {form.dialCode === "+65" && "🇸🇬"}
                  {form.dialCode === "+81" && "🇯🇵"}
                  {form.dialCode === "+49" && "🇩🇪"}
                  {form.dialCode === "+33" && "🇫🇷"}
                  {form.dialCode === "+7" && "🇷🇺"}
                  {form.dialCode === "+86" && "🇨🇳"}
                  {form.dialCode === "+55" && "🇧🇷"}
                </span>
              </div>
              <div className="flex-1">
                <input
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={set("phone")}
                  className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
                />
              </div>
            </div>
            {errors.phone && <p className="text-red-500 text-[11px] mt-1 font-body">{errors.phone}</p>}
          </div>

          {/* Business owner */}
          <div>
            <label className={labelBase}>
              Are you a business owner?<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="relative">
              <select
                value={form.isOwner}
                onChange={set("isOwner")}
                className={`${selBase} ${errors.isOwner ? selError : selNormal}`}
              >
                <option value="" disabled>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1F3864]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </div>
            {errors.isOwner && <p className="text-red-500 text-[11px] mt-1 font-body">{errors.isOwner}</p>}
          </div>

          {/* Business type */}
          <div>
            <label className={labelBase}>
              What sort of business do you operate?<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="relative">
              <select
                value={form.businessType}
                onChange={set("businessType")}
                className={`${selBase} ${errors.businessType ? selError : selNormal}`}
              >
                {businessOptions.map((opt) => (
                  <option key={opt} value={opt} disabled={opt === ""}>{opt || "Select"}</option>
                ))}
              </select>
              <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1F3864]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </div>
            {errors.businessType && <p className="text-red-500 text-[11px] mt-1 font-body">{errors.businessType}</p>}
          </div>

          {/* Grade */}
          <div>
            <label className={labelBase}>
              Choose grade<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="relative">
              <select
                value={form.grade}
                onChange={set("grade")}
                className={`${selBase} ${errors.grade ? selError : selNormal}`}
              >
                {gradeOptions.map((opt) => (
                  <option key={opt} value={opt} disabled={opt === ""}>{opt || "Select"}</option>
                ))}
              </select>
              <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1F3864]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </div>
            {errors.grade && <p className="text-red-500 text-[11px] mt-1 font-body">{errors.grade}</p>}
          </div>

          {/* Requirement */}
          <div>
            <textarea
              rows={5}
              placeholder="Requirement*"
              value={form.requirement}
              onChange={set("requirement")}
              className={`${inputBase} resize-none ${errors.requirement ? inputError : inputNormal}`}
            />
            {errors.requirement && <p className="text-red-500 text-[11px] mt-1 font-body">{errors.requirement}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#1F3864] hover:bg-[#162A4A] active:bg-[#0F1F38] text-white font-body font-bold text-sm py-3.5 rounded-md transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed tracking-wide"
          >
            {submitting ? "Sending…" : "Submit"}
          </button>

          {/* Disclaimer */}
          <p className="text-center text-[10px] md:text-[11px] font-body text-[#1F3864]/35 leading-relaxed max-w-sm mx-auto">
            By signing up, you agree to receive marketing messages at the phone number or email
            provided. Msg and data rates may apply. View our{" "}
            <a href="/privacy-policy" className="text-[#A02020] underline underline-offset-2 hover:text-[#A02020]/70 transition-colors">privacy policy</a>{" "}
            and{" "}
            <a href="/terms-of-service" className="text-[#A02020] underline underline-offset-2 hover:text-[#A02020]/70 transition-colors">terms of service</a>{" "}
            for more info.
          </p>
        </form>

        <div className="w-full h-px bg-tea-100 mt-20" />
      </div>
    </section>
  );
}
