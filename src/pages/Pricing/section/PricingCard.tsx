interface PricingCardProps {
    title: string;
    description: string;
    price: string | number;
    subText?: string;
    buttonText: string;
    highlight?: boolean;
}

const PricingCard = ({
    title,
    description,
    price,
    subText,
    buttonText,
    highlight,
}: PricingCardProps) => {
    return (
        <div className={`bg-[#D9D9D9] text-black rounded-xl p-6 w-80
      ${highlight ? "border-2 border-orange-500" : ""}`}
        >
            <h3 className="text-lg font-semibold pb-4 border-b border-[#ACACAC]">
                {title}
            </h3>

            <p className="text-sm text-gray-600 mt-6">{description}</p>

            <p className="text-3xl font-bold mt-12">{price}</p>
            {subText && <p className="text-sm">{subText}</p>}

            <button className={`w-full mt-12 py-3 rounded-md
        ${highlight ? "bg-orange-500 text-white" : "bg-black text-white"}`}>
                {buttonText}
            </button>
        </div>
    );
};

export default PricingCard;
