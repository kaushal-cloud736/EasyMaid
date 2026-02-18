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
        name: "Priya Sharma",
        role: "Working Professional, Delhi",
        initials: "PS",
        quote:
            "EasyMaid made my life so much easier. The maid arrives on time and does her work perfectly every day.",
    },
    {
        name: "Rajesh Verma",
        role: "Family of Four, Jaipur",
        initials: "RV",
        quote:
            "We booked a cooking maid through EasyMaid and the experience has been excellent. Very reliable service.",
    },
    {
        name: "Anita Patel",
        role: "Homemaker, Ahmedabad",
        initials: "AP",
        quote:
            "The booking process was very simple and the maid was polite and professional. Highly recommended.",
    },
];


// JSON data for credit system benefits
export const creditBenefits = [
    "Each service uses a fixed number of <strong class='text-emerald-500'>credits</strong>",
    "Use credits for <strong class='text-emerald-500'>cleaning, cooking, or babysitting</strong>",
    "Credits stay in your account and can be used <strong class='text-emerald-500'>anytime</strong>",
    "Easy booking with <strong class='text-emerald-500'>no hidden charges</strong>",
];
