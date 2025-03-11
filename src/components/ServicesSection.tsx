
import { Card } from "@/components/ui/card";
import { Briefcase, Clock, BarChart4, Users, Building2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const ServiceCard = ({ icon, title, description, benefits }: ServiceCardProps) => (
  <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-primary/20">
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
    <div className="p-6 relative">
      <div className="bg-primary/10 rounded-2xl p-4 inline-block mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  </Card>
);

const ServicesSection = () => {
  const services: ServiceCardProps[] = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary group-hover:text-white transition-colors" />,
      title: "Permanent Placement",
      description: "Find the perfect permanent addition to your team with our comprehensive recruitment solutions.",
      benefits: [
        "Thorough candidate screening",
        "Culture fit assessment",
        "Industry expertise",
        "Long-term success focus"
      ]
    },
    {
      icon: <Clock className="h-8 w-8 text-primary group-hover:text-white transition-colors" />,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for your temporary and project-based needs.",
      benefits: [
        "Quick turnaround time",
        "Skilled professionals",
        "Flexible arrangements",
        "Project-based scaling"
      ]
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-primary group-hover:text-white transition-colors" />,
      title: "Executive Search",
      description: "Strategic recruitment of senior executives and specialized professionals.",
      benefits: [
        "C-level placements",
        "Industry networks",
        "Confidential search",
        "Leadership assessment"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from- to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-px w-8 bg-primary"></div>
          <span className="text-primary font-medium tracking-wider">OUR EXPERTISE</span>
          <div className="h-px w-8 bg-primary"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-6">
          Comprehensive Staffing Solutions
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          We offer end-to-end recruitment services tailored to your specific needs, ensuring the perfect match for your organization.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 py-4 px-6 bg-primary/5 rounded-full">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm">Expert Recruiters</span>
            </div>
            <div className="h-4 w-px bg-primary/20" />
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="text-sm">Industry Leaders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
