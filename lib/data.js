import {
    MapPin,
    UserCheck,
    CalendarCheck,
    ShieldCheck,
    Star,
    Clock,
} from "lucide-react";

// JSON data for features
export const features = [
    {
        icon: <MapPin className="h-6 w-6 text-emerald-400" />,
        title: "Select Your City",
        description:
            "Choose your location to find trusted and experienced maids available near your home.",
    },
    {
        icon: <UserCheck className="h-6 w-6 text-emerald-400" />,
        title: "Verified Maids",
        description:
            "All maids are background-checked and verified to ensure safety, reliability, and peace of mind.",
    },
    {
        icon: <CalendarCheck className="h-6 w-6 text-emerald-400" />,
        title: "Easy Booking",
        description:
            "Book a maid in just a few clicks by selecting your service, date, and preferred time slot.",
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
        title: "Safe and Trusted Service",
        description:
            "We prioritize your safety with trained, verified, and professionally managed service staff.",
    },
    {
        icon: <Star className="h-6 w-6 text-emerald-400" />,
        title: "Rated and Reviewed",
        description:
            "Check ratings and reviews to choose the best maid based on real customer experiences.",
    },
    {
        icon: <Clock className="h-6 w-6 text-emerald-400" />,
        title: "On-Time Arrival",
        description:
            "Our maids arrive on schedule, ensuring reliable and hassle-free service every time.",
    },
];


// JSON data for testimonials
export const testimonials = [
    {
        initials: "SP",
        name: "Sarah P.",
        role: "Patient",
        quote:
            "The video consultation feature saved me so much time. I was able to get medical advice without taking time off work or traveling to a clinic.",
    },
    {
        initials: "DR",
        name: "Dr. Robert M.",
        role: "Cardiologist",
        quote:
            "This platform has revolutionized my practice. I can now reach more patients and provide timely care without the constraints of a physical office.",
    },
    {
        initials: "JT",
        name: "James T.",
        role: "Patient",
        quote:
            "The credit system is so convenient. I purchased a package for my family, and we've been able to consult with specialists whenever needed.",
    },
];

// JSON data for credit system benefits
export const creditBenefits = [
    "Each consultation requires <strong class='text-emerald-400'>2 credits</strong> regardless of duration",
    "Credits <strong class='text-emerald-400'>never expire</strong> - use them whenever you need",
    "Monthly subscriptions give you <strong class='text-emerald-400'>fresh credits every month</strong>",
    "Cancel or change your subscription <strong class='text-emerald-400'>anytime</strong> without penalties",
];