import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, FileText, X } from "lucide-react";

interface CustomDropdownProps {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    placeholder: string;
    error?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
    value,
    onChange,
    options,
    placeholder,
    error
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div ref={dropdownRef} className="relative w-full">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-[#FAFAFB] border-[1.2px] rounded-[8px] py-3 px-4 text-[14px] flex items-center justify-between cursor-pointer transition-all focus:outline-none focus:border-[#F67300] focus:ring-1 focus:ring-[#F67300] ${selectedOption ? "text-[#1E293B]" : "text-[#9A9AA2]"
                    } ${error ? "border-red-500" : "border-[#DEDEE2]"}`}
            >
                <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
                <svg
                    className={`h-4.5 w-4.5 text-[#9A9AA2] shrink-0 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute z-30 mt-1.5 w-full bg-white border border-[#DEDEE2] rounded-[8px] shadow-lg max-h-[220px] overflow-y-auto">
                    <ul className="py-1">
                        {options.map((option) => (
                            <li key={option.value}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        onChange(option.value);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-left py-2.5 px-4 text-[14px] transition-colors hover:bg-[#FFF8F2] hover:text-[#F67300] cursor-pointer ${option.value === value
                                        ? "bg-[#FFF8F2] text-[#F67300] font-medium"
                                        : "text-[#1E293B]"
                                        }`}
                                >
                                    {option.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const EXPERIENCE_OPTIONS = [
    { value: "Freshers", label: "Fresher / Entry Level" },
    { value: "1-2 Years", label: "1 - 2 Years" },
    { value: "2-5 Years", label: "2 - 5 Years" },
    { value: "5-8 Years", label: "5 - 8 Years" },
    { value: "8+ Years", label: "8+ Years" }
];

const NOTICE_PERIOD_OPTIONS = [
    { value: "Immediate", label: "Immediate" },
    { value: "15 Days", label: "15 Days" },
    { value: "30 Days", label: "30 Days" },
    { value: "60 Days", label: "60 Days" },
    { value: "90 Days", label: "90 Days" }
];

interface CareersAppFormProps {
    selectedRole?: string;
    onBack?: () => void;
}


interface FormData {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    experience: string;
    noticePeriod: string;
    currentCompany: string;
    currentRole: string;
    linkedin: string;
    portfolio: string;
    github: string;
    whyJoin: string;
    anythingElse: string;
    agreed: boolean;
}

const initialFormData: FormData = {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    noticePeriod: "",
    currentCompany: "",
    currentRole: "",
    linkedin: "",
    portfolio: "",
    github: "",
    whyJoin: "",
    anythingElse: "",
    agreed: false,
};

const CareersAppForm: React.FC<CareersAppFormProps> = ({ selectedRole = "General Application", onBack }) => {
    const navigate = useNavigate();
    const [selectedRoleState, setSelectedRoleState] = useState<string>(selectedRole);

    React.useEffect(() => {
        if (selectedRole) {
            setSelectedRoleState(selectedRole);
        }
    }, [selectedRole]);

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigate("/careers");
            window.scrollTo({ top: 0, behavior: "instant" });
            if (window.lenis) {
                window.lenis.scrollTo(0, { immediate: true });
            }
        }
    };
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [dragActive, setDragActive] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
            if (errors[name]) {
                setErrors((prev) => {
                    const newErr = { ...prev };
                    delete newErr[name];
                    return newErr;
                });
            }
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
            if (errors[name]) {
                setErrors((prev) => {
                    const newErr = { ...prev };
                    delete newErr[name];
                    return newErr;
                });
            }
        }
    };

    const handleCustomDropdownChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => {
                const newErr = { ...prev };
                delete newErr[name];
                return newErr;
            });
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\+?[0-9\s\-()]{8,15}$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (!formData.location.trim()) newErrors.location = "Current location is required";

        if (!formData.experience) newErrors.experience = "Please select your experience level";

        if (!formData.noticePeriod) newErrors.noticePeriod = "Please select your notice period";

        if (!resumeFile) newErrors.resume = "Resume is required";

        if (!formData.whyJoin.trim()) newErrors.whyJoin = "This field is required";

        if (!formData.agreed) newErrors.agreed = "You must accept the agreement to submit";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFileChange = (file: File | null) => {
        if (!file) {
            setResumeFile(null);
            return;
        }

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ];

        if (!allowedTypes.includes(file.type) && !file.name.endsWith(".pdf") && !file.name.endsWith(".doc") && !file.name.endsWith(".docx")) {
            setErrors((prev) => ({ ...prev, resume: "Invalid file format. Please upload PDF or DOCX." }));
            setResumeFile(null);
            return;
        }

        setResumeFile(file);
        setErrors((prev) => {
            const newErr = { ...prev };
            delete newErr.resume;
            return newErr;
        });
    };

    const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            handleFileChange(e.target.files[0]);
        }
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileChange(e.dataTransfer.files[0]);
        }
    };

    const handleSaveDraft = () => {
        setToastMessage("Application details saved as draft!");
        setTimeout(() => setToastMessage(null), 3000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setToastMessage("Application submitted successfully!");
            setTimeout(() => setToastMessage(null), 3000);
            setFormData(initialFormData);
            setResumeFile(null);
            window.scrollTo({ top: 0, behavior: "instant" });
            if (window.lenis) {
                window.lenis.scrollTo(0, { immediate: true });
            }
        }, 1500);
    };

    return (
        <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] min-h-screen">
            {toastMessage && (
                <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-[#2D3748] text-white px-6 py-3 rounded-[8px] shadow-lg z-50 transition-all font-medium text-[14px]">
                    {toastMessage}
                </div>
            )}

            <div className="w-full max-w-[1254px] mx-auto">
                {/* Back button */}
                <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 text-[#4F4F4F] hover:text-[#F67300] font-medium text-[15px] mb-6 transition-colors group"
                >
                    <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
                    Back to Openings
                </button>

                {/* Form Card Container */}
                <div className="w-full bg-white border border-[#E7E7EA] rounded-[24px] p-6 md:p-[56px] shadow-sm">
                    <div className="mb-10">
                        <h1 className="font-bold text-[24px] md:text-[32px] leading-[1.2] text-[#17171A] tracking-tight">
                            Apply for This Role
                        </h1>
                        <p className="font-normal text-[14px] md:text-[15px] leading-[22px] text-[#63636C] mt-2 max-w-[680px]">
                            Ready to build what's next? Tell us a little about yourself and your experience.
                            We're excited to learn how you can contribute to the team at Coirei.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col">

                        {/* 1. PERSONAL INFORMATION */}
                        <div className="mb-2">
                            <h3 className="w-fit font-bold text-[12.5px] tracking-[0.05em] text-[#F78015] uppercase border-b-[1px] border-[#F1F5F9] pb-2 mb-6">
                                Personal Information
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                                {/* Full Name */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-medium text-[14px] text-[#17171A]">
                                        Full Name <span className="text-[#F67300]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        className={`w-full bg-[#FAFAFB] border-[1.2px] border-[#DEDEE2] rounded-[8px] py-3 px-4 text-[14px] text-[#1E293B] placeholder:text-[#9A9AA2] focus:outline-none focus:border-[#F67300] focus:ring-1 focus:ring-[#F67300] transition-colors ${errors.fullName ? "border-red-500" : "border-[#E2E8F0]"
                                            }`}
                                    />
                                    {errors.fullName && (
                                        <span className="text-red-500 text-[12px] font-medium">{errors.fullName}</span>
                                    )}
                                </div>

                                {/* Email Address */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-medium text-[14px] text-[#17171A]">
                                        Email Address <span className="text-[#F67300]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email address"
                                        className={`w-full bg-[#FAFAFB] border-[1.2px] border-[#DEDEE2] rounded-[8px] py-3 px-4 text-[14px] text-[#1E293B] placeholder:text-[#9A9AA2] focus:outline-none focus:border-[#F67300] focus:ring-1 focus:ring-[#F67300] transition-colors ${errors.email ? "border-red-500" : "border-[#E2E8F0]"
                                            }`}
                                    />
                                    {errors.email && (
                                        <span className="text-red-500 text-[12px] font-medium">{errors.email}</span>
                                    )}
                                </div>

                                {/* Phone Number */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-medium text-[14px] text-[#17171A]">
                                        Phone Number <span className="text-[#F67300]">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                        className={`w-full bg-[#FAFAFB] border-[1.2px] border-[#DEDEE2] rounded-[8px] py-3 px-4 text-[14px] text-[#1E293B] placeholder:text-[#9A9AA2] focus:outline-none focus:border-[#F67300] focus:ring-1 focus:ring-[#F67300] transition-colors ${errors.phone ? "border-red-500" : "border-[#E2E8F0]"
                                            }`}
                                    />
                                    {errors.phone && (
                                        <span className="text-red-500 text-[12px] font-medium">{errors.phone}</span>
                                    )}
                                </div>

                                {/* Current Location */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-medium text-[14px] text-[#17171A]">
                                        Current Location <span className="text-[#F67300]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        placeholder="City, State / Country"
                                        className={`w-full bg-[#FAFAFB] border-[1.2px] border-[#DEDEE2] rounded-[8px] py-3 px-4 text-[14px] text-[#1E293B] placeholder:text-[#9A9AA2] focus:outline-none focus:border-[#F67300] focus:ring-1 focus:ring-[#F67300] transition-colors ${errors.location ? "border-red-500" : "border-[#E2E8F0]"
                                            }`}
                                    />
                                    {errors.location && (
                                        <span className="text-red-500 text-[12px] font-medium">{errors.location}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* 2. PROFESSIONAL DETAILS */}
                        <div className="mb-2 mt-[40px]">
                            <h3 className="w-fit font-bold text-[12.5px] tracking-[0.05em] text-[#F78015] uppercase border-b-[1px] border-[#F1F5F9] pb-2 mb-6">
                                Professional Details
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                                {/* Position Applied For */}
                                <div className="flex flex-col gap-1.5 md:col-span-2">
                                    <label className="font-medium text-[14px] text-[#17171A]">
                                        Position Applied For <span className="text-[#F67300]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        readOnly
                                        value={selectedRoleState}
                                        className="w-full bg-[#F1F1F3] border-[1.2px] border-dashed border-[#DEDEE2] rounded-[10px] py-3 px-4 text-[14px] text-[#63636C] font-medium outline-none cursor-not-allowed"
                                    />
                                </div>

                                {/* Total Years of Experience */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-medium text-[14px] text-[#17171A]">
                                        Total Years of Experience <span className="text-[#F67300]">*</span>
                                    </label>
                                    <CustomDropdown
                                        value={formData.experience}
                                        onChange={(val) => handleCustomDropdownChange("experience", val)}
                                        options={EXPERIENCE_OPTIONS}
                                        placeholder="Select experience"
                                        error={errors.experience}
                                    />
                                    {errors.experience && (
                                        <span className="text-red-500 text-[12px] font-medium">{errors.experience}</span>
                                    )}
                                </div>

                                {/* Notice Period / Availability */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-medium text-[14px] text-[#17171A]">
                                        Notice Period / Availability <span className="text-[#F67300]">*</span>
                                    </label>
                                    <CustomDropdown
                                        value={formData.noticePeriod}
                                        onChange={(val) => handleCustomDropdownChange("noticePeriod", val)}
                                        options={NOTICE_PERIOD_OPTIONS}
                                        placeholder="Select availability"
                                        error={errors.noticePeriod}
                                    />
                                    {errors.noticePeriod && (
                                        <span className="text-red-500 text-[12px] font-medium">{errors.noticePeriod}</span>
                                    )}
                                </div>

                                {/* Current Company */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-medium text-[14px] text-[#17171A]">Current Company</label>
                                    <input
                                        type="text"
                                        name="currentCompany"
                                        value={formData.currentCompany}
                                        onChange={handleInputChange}
                                        placeholder="Enter your current company name"
                                        className="w-full bg-[#FAFAFB] border-[1.2px] border-[#DEDEE2] rounded-[8px] py-3 px-4 text-[14px] text-[#1E293B] placeholder:text-[#9A9AA2] focus:outline-none focus:border-[#F67300] focus:ring-1 focus:ring-[#F67300] transition-colors"
                                    />
                                </div>

                                {/* Current Role / Designation */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-medium text-[14px] text-[#17171A]">Current Role / Designation</label>
                                    <input
                                        type="text"
                                        name="currentRole"
                                        value={formData.currentRole}
                                        onChange={handleInputChange}
                                        placeholder="Enter your current job title"
                                        className="w-full bg-[#FAFAFB] border-[1.2px] border-[#DEDEE2] rounded-[8px] py-3 px-4 text-[14px] text-[#1E293B] placeholder:text-[#9A9AA2] focus:outline-none focus:border-[#F67300] focus:ring-1 focus:ring-[#F67300] transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 3. SHOW US YOUR WORK */}
                        <div className="mb-2 mt-[40px]">
                            <h3 className="w-fit font-bold text-[12.5px] tracking-[0.05em] text-[#F78015] uppercase border-b-[1px] border-[#F1F5F9] pb-2 mb-6">
                                Show Us Your Work
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                                {/* LinkedIn Profile */}
                                <div className="flex flex-col gap-1.5 md:col-span-2">
                                    <label className="font-medium text-[14px] text-[#17171A]">LinkedIn Profile</label>
                                    <input
                                        type="url"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleInputChange}
                                        placeholder="Paste your LinkedIn profile URL"
                                        className="w-full bg-[#FAFAFB] border-[1.2px] border-[#DEDEE2] rounded-[8px] py-3 px-4 text-[14px] text-[#1E293B] placeholder:text-[#9A9AA2] focus:outline-none focus:border-[#F67300] focus:ring-1 focus:ring-[#F67300] transition-colors"
                                    />
                                </div>

                                {/* Portfolio / Website */}
                                <div className="flex flex-col gap-1.5 md:col-span-2">
                                    <label className="font-medium text-[14px] text-[#17171A]">Portfolio / Website</label>
                                    <input
                                        type="url"
                                        name="portfolio"
                                        value={formData.portfolio}
                                        onChange={handleInputChange}
                                        placeholder="Paste your portfolio or website URL"
                                        className="w-full bg-[#FAFAFB] border-[1.2px] border-[#DEDEE2] rounded-[8px] py-3 px-4 text-[14px] text-[#1E293B] placeholder:text-[#9A9AA2] focus:outline-none focus:border-[#F67300] focus:ring-1 focus:ring-[#F67300] transition-colors"
                                    />
                                </div>

                                {/* GitHub Profile */}
                                <div className="flex flex-col gap-1.5 md:col-span-2">
                                    <label className="font-medium text-[14px] text-[#17171A]">GitHub Profile</label>
                                    <input
                                        type="url"
                                        name="github"
                                        value={formData.github}
                                        onChange={handleInputChange}
                                        placeholder="Paste your GitHub profile URL"
                                        className="w-full bg-[#FAFAFB] border-[1.2px] border-[#DEDEE2] rounded-[8px] py-3 px-4 text-[14px] text-[#1E293B] placeholder:text-[#9A9AA2] focus:outline-none focus:border-[#F67300] focus:ring-1 focus:ring-[#F67300] transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 4. RESUME */}
                        <div className="mb-2 mt-[40px]">
                            <h3 className="w-fit font-bold text-[12.5px] tracking-[0.05em] text-[#F78015] uppercase border-b-[1px] border-[#F1F5F9] pb-2 mb-6">
                                Resume
                            </h3>

                            <div className="flex flex-col gap-1.5">
                                <label className="font-medium text-[14px] text-[#17171A]">
                                    Upload Your Resume <span className="text-[#F67300]">*</span>
                                    <span className="text-[12px] text-[#64748B] font-normal ml-2">PDF or DOCX. Maximum file size: 5 MB</span>
                                </label>

                                <div
                                    id="resume-upload-zone"
                                    onDragEnter={handleDrag}
                                    onDragOver={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`relative border-2 border-dashed rounded-[12px] p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[140px] ${dragActive
                                        ? "border-[#F67300] bg-[#FFF8F2]"
                                        : errors.resume
                                            ? "border-red-500 bg-[#FFF5F5]"
                                            : "border-[#E2E8F0] bg-[#FAFBFD] hover:bg-[#FFF8F2] hover:border-[#F67300]"
                                        }`}
                                >
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={onFileInputChange}
                                        className="hidden"
                                    />

                                    {resumeFile ? (
                                        <div className="flex flex-col items-center gap-2 w-full max-w-[320px] p-2" onClick={(e) => e.stopPropagation()}>
                                            <div className="flex items-center gap-3 bg-[#F1F5F9] border border-[#CBD5E1] rounded-[8px] p-3 w-full relative">
                                                <div className="w-10 h-10 bg-white border border-[#E2E8F0] text-[#F67300] rounded-md flex items-center justify-center shrink-0">
                                                    <FileText size={20} />
                                                </div>
                                                <div className="text-left overflow-hidden pr-6">
                                                    <p className="text-[14px] font-semibold text-[#1E293B] truncate">{resumeFile.name}</p>
                                                    <p className="text-[12px] text-[#64748B]">{(resumeFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleFileChange(null)}
                                                    className="absolute top-1/2 right-3 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center bg-[#CBD5E1]/60 hover:bg-red-500 hover:text-white transition-colors cursor-pointer text-[#475569]"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="w-12 h-12 rounded-full bg-[#FFF3EB] flex items-center justify-center text-[#F67300] mb-3">
                                                <Upload size={22} className="stroke-[2]" />
                                            </div>
                                            <p className="text-[14px] font-medium text-[#1E293B]">
                                                Drag and drop your resume here or <span className="text-[#F67300] font-semibold hover:underline">Browse Files</span>
                                            </p>
                                        </>
                                    )}
                                </div>
                                {errors.resume && (
                                    <span className="text-red-500 text-[12px] font-medium">{errors.resume}</span>
                                )}
                            </div>
                        </div>

                        {/* 5. A LITTLE MORE ABOUT YOU */}
                        <div className="mb-2 mt-[40px]">
                            <h3 className="w-fit font-bold text-[12.5px] tracking-[0.05em] text-[#F78015] uppercase border-b-[1px] border-[#F1F5F9] pb-2 mb-6">
                                A Little More About You
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
                                {/* Why do you want to join Coirei? */}
                                <div className="flex flex-col gap-1.5 md:col-span-2">
                                    <label className="font-medium text-[14px] text-[#17171A]">
                                        Why do you want to join Coirei? <span className="text-[#F67300]">*</span>
                                    </label>
                                    <textarea
                                        name="whyJoin"
                                        value={formData.whyJoin}
                                        onChange={handleInputChange}
                                        placeholder="Tell us what excites you about this role and why you'd like to build with us."
                                        rows={4}
                                        className={`w-full bg-[#FAFAFB] border-[1.2px] border-[#DEDEE2] rounded-[8px] py-3 px-4 text-[14px] text-[#1E293B] placeholder:text-[#9A9AA2] focus:outline-none focus:border-[#F67300] focus:ring-1 focus:ring-[#F67300] transition-colors resize-none ${errors.whyJoin ? "border-red-500" : "border-[#E2E8F0]"
                                            }`}
                                    ></textarea>
                                    {errors.whyJoin && (
                                        <span className="text-red-500 text-[12px] font-medium">{errors.whyJoin}</span>
                                    )}
                                </div>

                                {/* Anything else you'd like us to know? */}
                                <div className="flex flex-col gap-1.5 md:col-span-2">
                                    <label className="font-medium text-[14px] text-[#17171A]">Anything else you'd like us to know?</label>
                                    <textarea
                                        name="anythingElse"
                                        value={formData.anythingElse}
                                        onChange={handleInputChange}
                                        placeholder="Share anything that helps us get to know you better."
                                        rows={4}
                                        className="w-full bg-[#FAFAFB] border-[1.2px] border-[#DEDEE2] rounded-[8px] py-3 px-4 text-[14px] text-[#1E293B] placeholder:text-[#9A9AA2] focus:outline-none focus:border-[#F67300] focus:ring-1 focus:ring-[#F67300] transition-colors resize-none"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Agreement Checkbox */}
                        <div className="mt-[40px] flex flex-col gap-2">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="agreed"
                                    checked={formData.agreed}
                                    onChange={handleInputChange}
                                    className="mt-1 w-[18px] h-[18px] rounded border-[#CBD5E1] text-[#F67300] focus:ring-[#F67300] accent-[#F67300] cursor-pointer"
                                />
                                <span className="font-normal text-[13.5px] leading-[20px] text-[#63636C] select-none">
                                    I confirm that the information provided is accurate and agree to the processing of my data for recruitment purposes.
                                </span>
                            </label>
                            {errors.agreed && (
                                <span className="text-red-500 text-[12px] font-medium ml-7">{errors.agreed}</span>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-[40px] w-full">
                            <button
                                type="button"
                                onClick={handleSaveDraft}
                                className="w-full sm:w-auto px-8 py-3.5 border! border-[1.5px]! border-[#F67300]! text-[#F67300] hover:bg-[#FFF8F2] hover:border-[#F67300]! font-semibold text-[15px] rounded-[8px] transition-colors cursor-pointer text-center"
                            >
                                Save as Draft
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 bg-[#F67300] hover:bg-[#e06900] disabled:bg-[#FDBA74] text-white font-semibold text-[15px] py-3.5 rounded-[8px] transition-colors cursor-pointer flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Application"
                                )}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default CareersAppForm;
