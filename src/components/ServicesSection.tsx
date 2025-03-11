
import { Card } from "@/components/ui/card";
import { Briefcase, Clock, BarChart4, Users, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const ServiceCard = ({ icon, title, description, benefits }: ServiceCardProps) => (
  <Card className="group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary/30">
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Animated circle */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-16 -translate-y-16 group-hover:scale-[2.5] transition-transform duration-700" />
    
    <div className="p-6 relative z-10">
      <div className="bg-primary/10 rounded-2xl p-4 inline-block mb-4 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-4 transition-all duration-300 group-hover:text-gray-700">{description}</p>
      <div className="space-y-2 mb-4">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 text-sm text-gray-600 transition-all duration-300 hover:translate-x-1"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
      <div className="overflow-hidden h-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent text-primary font-medium">
            Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
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
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="flex items-center justify-center gap-2 mb-4"
          data-aos="fade-up"
        >
          <div className="h-px w-8 bg-primary"></div>
          <span className="text-primary font-medium tracking-wider">OUR EXPERTISE</span>
          <div className="h-px w-8 bg-primary"></div>
        </div>
        <h2 
          className="text-4xl md:text-5xl font-playfair font-bold text-center mb-6 relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="relative inline-block">
            Comprehensive Staffing Solutions
            <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-primary/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </span>
        </h2>
        <p 
          className="text-gray-600 text-center max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We offer end-to-end recruitment services tailored to your specific needs, ensuring the perfect match for your organization.
        </p>
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="transform transition-all duration-500"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 100}ms`
              }}
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        <div 
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="inline-flex items-center gap-8 py-4 px-6 bg-primary/5 rounded-full hover:bg-primary/10 transition-colors duration-300 hover:scale-105 transform">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm">Expert Recruiters</span>
            </div>
            <div className="h-4 w-px bg-primary/20"></div>
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
