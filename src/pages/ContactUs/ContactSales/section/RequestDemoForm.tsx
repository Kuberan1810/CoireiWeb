import React, { useEffect, useState } from "react";
import { ArrowLeft, ChevronDown, X } from "lucide-react";
import useScrollAnimations from "../../../../hooks/useScrollAnimations";

interface RequestDemoFormProps {
    onBack: () => void;
}

const RequestDemoForm: React.FC<RequestDemoFormProps> = ({ onBack }) => {
    useScrollAnimations();
    const [engineerOpen, setEngineerOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobTitle: "",
        engineerCount: "",
        helpWith: "",
        message: ""
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    /* 🔥 Scroll page to TOP when toast shows */
    useEffect(() => {
        if (isSubmitted) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }, [isSubmitted]);

    /* ---------------- INPUT CHANGE ---------------- */
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
    };

    /* ---------------- VALIDATION ---------------- */
    const validateForm = () => {
        const e: Record<string, string> = {};

        if (!formData.firstName) e.firstName = "First name is required";
        if (!formData.lastName) e.lastName = "Last name is required";

        if (!formData.email) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            e.email = "Please enter a valid email";

        if (!formData.company) e.company = "Company name is required";
        if (!formData.jobTitle) e.jobTitle = "Job title is required";
        if (!formData.engineerCount) e.engineerCount = "Please select an option";
        if (!formData.helpWith) e.helpWith = "Please select an option";

        setErrors(e);
        return Object.keys(e).length === 0;
    };

    /* ---------------- SUBMIT ---------------- */
    const handleSubmit = () => {
        if (validateForm()) {
            setIsSubmitted(true);
        }
    };

    /* ---------------- SUCCESS TOAST ---------------- */
    if (isSubmitted) {
        return (
            <div className="fixed top-6 right-6 z-50 animate-[toast_0.3s_ease-out_forwards]">
                <div className="flex items-start gap-4 bg-[#1a1a1a] border border-white/10 rounded-xl px-6 py-4 shadow-lg">
                    <div className="w-10 h-10 bg-green-500/15 rounded-full flex items-center justify-center">
                        <svg
                            className="w-5 h-5 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>

                    <div className="flex-1">
                        <p className="text-white font-medium text-sm">
                            Request sent successfully
                        </p>
                        <p className="text-white/60 text-sm mt-1">
                            We’ll get back to you shortly.
                        </p>
                    </div>

                    <button
                        onClick={onBack}
                        className="text-white/40 hover:text-white transition cursor-pointer"
                    >
                        <X size={16} />
                    </button>
                </div>

                <style>{`
          @keyframes toast {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
            </div>
        );
    }

    /* ---------------- FORM ---------------- */
    return (
        <div
            data-ns-animate
            data-offset="60"
            className="w-full px-4"
        >
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-lg text-white/80 hover:text-white transition mb-8 cursor-pointer"
            >
                <ArrowLeft /> Back
            </button>

            <div className="space-y-6">
                {[
                    { key: "firstName", label: "First Name" },
                    { key: "lastName", label: "Last Name" },
                    { key: "email", label: "Email" },
                    { key: "company", label: "Company" },
                    { key: "jobTitle", label: "Job Title" }
                ].map(({ key, label }, index) => (
                    <div
                        key={key}
                        data-ns-animate
                        data-delay={0.05 * index}
                        data-offset="20"
                    >
                        <label className="block text-lg text-white/50 mb-2.5">
                            {label}
                        </label>

                        <input
                            name={key}
                            value={(formData as any)[key]}
                            onChange={handleChange}
                            className={`w-full h-12 bg-[#1a1a1a] border ${errors[key] ? "border-red-500/50" : "border-[#2d2d2d]"
                                } rounded-lg px-4 text-lg text-white/90 focus:outline-none focus:border-white/20 transition`}
                        />

                        {errors[key] && (
                            <p className="text-sm text-red-400 mt-1.5">{errors[key]}</p>
                        )}
                    </div>
                ))}

                {/* Engineer dropdown */}
                <Dropdown
                    label="Number of engineers at your company"
                    open={engineerOpen}
                    setOpen={setEngineerOpen}
                    value={formData.engineerCount}
                    error={errors.engineerCount}
                    options={["1–10", "11–50", "51–200", "200+"]}
                    onSelect={(v: string) => {
                        setFormData(p => ({ ...p, engineerCount: v }));
                        setErrors(p => ({ ...p, engineerCount: "" }));
                    }}
                />

                {/* Help dropdown */}
                <Dropdown
                    label="What can we help you with?"
                    open={helpOpen}
                    setOpen={setHelpOpen}
                    value={formData.helpWith}
                    error={errors.helpWith}
                    options={["Request demo", "Pricing", "Support"]}
                    onSelect={(v: string) => {
                        setFormData(p => ({ ...p, helpWith: v }));
                        setErrors(p => ({ ...p, helpWith: "" }));
                    }}
                />

                <div
                    data-ns-animate
                    data-delay="0.3"
                    data-offset="20"
                >
                    <label className="block text-lg text-white/50 mb-2">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-[#1a1a1a] border border-[#2d2d2d] rounded-lg px-4 py-3 text-lg text-white/90 resize-none focus:outline-none focus:border-white/20 transition"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full h-12 bg-[#FC7C04] text-white rounded-lg text-lg font-medium transition-all duration-300 ease-out hover:brightness-95 hover:shadow-[0_0_0_3px_rgba(252,124,4,0.25)] active:scale-[0.98] cursor-pointer"
                >
                    Get in touch
                </button>
            </div>
        </div>
    );
};

/* ---------------- DROPDOWN COMPONENT ---------------- */
const Dropdown = ({ label, open, setOpen, value, error, options, onSelect }: any) => (
    <div data-ns-animate
        data-delay="0.3"
        data-offset="20">
        <label className="block text-lg text-white/50 mb-3">{label}</label>

        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className={`w-full h-12 bg-linear-to-b from-[#1f1f1f] to-[#191919] border ${error ? "border-red-500/50" : "border-white/10"
                    } rounded-lg px-4 pr-10 text-sm text-left text-white/90 transition cursor-pointer`}
            >
                {value || <span className="text-white/50">Select one...</span>}
                <ChevronDown
                    size={18}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 transition ${open ? "rotate-180" : ""
                        } ${error ? "text-red-400" : "text-white/50"}`}
                />
            </button>

            {open && (
                <ul className="absolute z-50 mt-2 w-full bg-[#181818] border border-white/10 rounded-lg shadow-xl overflow-hidden animate-[dropdown_0.2s_ease-out]">
                    {options.map((o: string) => (
                        <li
                            key={o}
                            onClick={() => {
                                onSelect(o);
                                setOpen(false);
                            }}
                            className={`px-4 py-3 text-sm cursor-pointer transition ${value === o
                                ? "bg-[#292929] text-white"
                                : "text-white/80 hover:bg-white/5"
                                }`}
                        >
                            {o}
                        </li>
                    ))}
                </ul>
            )}
        </div>

        {error && <p className="text-sm text-red-400 mt-1.5">{error}</p>}

        <style>{`
      @keyframes dropdown {
        from { opacity: 0; transform: translateY(-6px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}</style>
    </div>
);

export default RequestDemoForm;
