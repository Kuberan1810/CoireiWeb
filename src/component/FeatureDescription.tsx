import { type JSX } from 'react';

interface FeatureDescriptionProps {
    badge: string;
    title: string;
    description: string;
    id: string;
}

export default function FeatureDescription({ badge, title, description, id }: FeatureDescriptionProps): JSX.Element {
    return (
        <div className="space-y-6">
            <div
                key={`badge-${id}`}
                className="inline-block px-4 py-1.5 bg-yellow-400 text-yellow-900 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-500"
            >
                {badge}
            </div>

            <h2
                key={`title-${id}`}
                className="text-4xl font-light transition-all duration-500"
            >
                {title}
            </h2>

            <p
                key={`desc-${id}`}
                className="text-gray-400 text-lg leading-relaxed transition-all duration-500"
            >
                {description}
            </p>
        </div>
    );
}