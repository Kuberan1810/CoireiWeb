import {  useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { blogs } from "./BlogData";
import SEO from "../../../component/SEO";
import { BlogSchema, BreadcrumbSchema } from "../../../component/StructuredData";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer/Footer";
import useScrollAnimations from "../../../hooks/useScrollAnimations";

const FAQAccordion = ({ content }: { content: string }) => {
    // Parse the markdown string into Q&A pairs
    // Format: "**Question**\nAnswer" or "Q: Question\nA: Answer"
    const pairs: { q: string; a: string }[] = [];
    const parts = content.split(/\*\*(.*?)\*\*/g);
    
    // First part is usually empty string, followed by Q, then A, then Q, then A
    // E.g. ["", "Q", "\nA\n\n", "Q", "\nA"]
    for (let i = 1; i < parts.length; i += 2) {
        let question = parts[i].trim();
        
        // Strip out existing prefixes like "Q:", "1.", "1:", "Q " etc.
        question = question.replace(/^(Q:|Q\s|FAQ\s|A:|\d+[\.\:]\s*)/i, "").trim();

        const answer = parts[i + 1] ? parts[i + 1].trim() : "";
        if (question) {
            pairs.push({ q: question, a: answer });
        }
    }

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="flex flex-col gap-4 mt-6">
            {pairs.map((pair, index) => {
                const isOpen = openIndex === index;
                return (
                    <div 
                        key={index} 
                        className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 "
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer"
                        >
                            <span className="font-medium text-lg text-[#E3E3E0] pr-4">{index + 1}. {pair.q}</span>
                            <ChevronDown 
                                size={18} 
                                className={`text-white/50 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : ""}`}
                            />
                        </button>
                        <div 
                            className={`px-6 overflow-hidden transition-all duration-300 pt-1 ${isOpen ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 opacity-0"}`}
                        >
                            <p className="text-white/60 text-base leading-relaxed">
                                {pair.a}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const BlogDetails = () => {
    useScrollAnimations();
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return (
            <>
                <div className="fixed w-full top-0 z-10">
                    <Navbar />
                </div>
                <div className="min-h-screen flex flex-col items-center justify-center text-white gap-4">
                    <h2 className="text-3xl font-semibold">Blog not found</h2>
                    <button
                        onClick={() => navigate("/resources/blog")}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition cursor-pointer"
                    >
                        <ArrowLeft size={16} />
                        Back to Blogs
                    </button>
                </div>
                <Footer />
            </>
        );
    }

    // 3 related blogs (exclude current)
    const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

    return (
        <div className=" text-white selection:bg-white/20">
            <SEO 
                title={blog.metaTitle || blog.title}
                description={blog.metaDescription || ""}
                keywords={blog.metaKeywords || ""}
                breadcrumbs={[
                    { name: "Home", url: "https://www.coirei.com" },
                    { name: "Resources", url: "https://www.coirei.com" },
                    { name: "Blog", url: "https://www.coirei.com/resources/blog" },
                    { name: blog.title, url: `https://www.coirei.com/resources/blog/${blog.slug}` }
                ]}
            />
            <BlogSchema
                title={blog.metaTitle || blog.title}
                description={blog.metaDescription || ""}
                date={blog.date}
                author={blog.author}
                url={`https://www.coirei.com/resources/blog/${blog.slug}`}
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.coirei.com" },
                    { name: "Blog", url: "https://www.coirei.com/resources/blog" },
                    { name: blog.title, url: `https://www.coirei.com/resources/blog/${blog.slug}` },
                ]}
            />
            <div className="fixed w-full top-0 z-50">
                <Navbar />
            </div>

            <main className="min-h-screen pt-28 pb-0">
                <div className=" pt-14  px-6 md:px-10 ">

                    {/* ── Title ── */}
                    <h1 data-ns-animate="true" className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-[#E3E3E0] leading-tight mb-4">
                        {blog.title}
                    </h1>

                    {/* ── Author + Date ── */}
                    <div data-ns-animate="true" data-delay="0.1" className="flex items-center gap-3 text-sm text-white/50 mb-6">
                        <span className="font-medium text-white/70">{blog.author}</span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span>{blog.date}</span>
                    </div>

                    {/* ── Back + Category ── */}
                    <div data-ns-animate="true" data-delay="0.1" className="flex items-center gap-3 mb-8">
                        <button
                            onClick={() => navigate("/resources/blog")}
                            className="flex items-center justify-center w-8 h-8 rounded-[4px] bg-white/8 hover:bg-white/15 border border-white/10 text-white/60 hover:text-white transition-all duration-300 group cursor-pointer"
                        >
                            <ArrowLeft
                                size={14}
                                className="group-hover:-translate-x-0.5 transition-transform duration-300"
                            />
                        </button>
                        <span className="text-sm font-medium text-white/70 bg-white/8 border border-white/12 px-4 py-1.5 rounded-[4px]">
                           {blog.category || "Services"}
                        </span>
                    </div>

                    {/* ── Hero Image (contained, rounded) ── */}
                    <div data-ns-animate="true" data-delay="0.2" className="overflow-hidden rounded-xl shadow-2xl mb-10">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-64 md:h-[420px] object-cover"
                        />
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-6 md:px-10">

                    {/* Article Body */}
                    <div className="flex flex-col gap-12 mb-20">
                        {blog.sections.map((section, index) => {
                            const isFAQ = section.title.toUpperCase() === "FAQ" || section.title.toUpperCase() === "FAQS";

                            return (
                                <div key={index} data-ns-animate="true">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                                        {section.title}
                                    </h2>
                                    
                                    {isFAQ ? (
                                        <FAQAccordion content={section.content} />
                                    ) : (
                                        <div className="space-y-4">
                                            {section.content.split("\n\n").map((block, i) => {
                                                if (!block.trim()) return null;

                                                // Check for list
                                                if (block.includes("\n- ") || block.startsWith("- ")) {
                                                    return (
                                                        <ul key={i} className="space-y-3 my-4">
                                                            {block.split("\n- ").map((item, idx) => {
                                                                const text = item.startsWith("- ") ? item.slice(2) : item;
                                                                if (!text.trim()) return null;
                                                                return (
                                                                    <li key={idx} className="flex gap-4 text-white/70 text-lg leading-relaxed">
                                                                        <span className="text-white mt-2.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                                                        <span className="flex-1">
                                                                            {parseMarkdown(text)}
                                                                        </span>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    );
                                                }

                                                return (
                                                    <p key={i} className="text-white/70 text-[18px] md:text-xl leading-[1.7] font-light">
                                                        {parseMarkdown(block)}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Related Posts ── */}
                {related.length > 0 && (
                    <div className="border-t border-white/10 pt-14 pb-20 px-6 md:px-10 ">
                        <h3 data-ns-animate="true" className="text-base font-semibold text-white/60 uppercase tracking-widest mb-8">
                            Related
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {related.map((rel, idx) => (
                                <article
                                    key={rel.id}
                                    data-ns-animate="true"
                                    data-delay={(idx * 0.1).toString()}
                                    onClick={() => navigate(`/resources/blog/${rel.slug}`)}
                                    className="group cursor-pointer rounded-2xl p-5 bg-transparent hover:bg-[#29292950] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden rounded-xl mb-6">
                                        <img
                                            src={rel.image}
                                            alt={rel.title}
                                            className="h-50 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                                        />
                                    </div>
                                    {/* Content */}
                                    <div>
                                        <h3 className="text-xl font-medium text-white leading-snug mb-6 transition-colors duration-500 group-hover:text-white">
                                            {rel.title}
                                        </h3>
                                        <span className="inline-block mb-6 text-sm font-medium text-white/90 bg-white/10 py-2 px-4 rounded transition-all duration-500 group-hover:bg-white/15">
                                            By {rel.author}
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            <div className="border-t border-white/5">
                <Footer />
            </div>
        </div>
    );
};

// Helper to parse simple markdown (**bold**)
const parseMarkdown = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, pidx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <strong key={pidx} className="text-white font-bold">
                    {part.slice(2, -2)}
                </strong>
            );
        }
        return part;
    });
};

export default BlogDetails;
