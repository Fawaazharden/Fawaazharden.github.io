
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { Briefcase, Users, ChartBar, Building2, Star, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Connecting Great Talent <br className="hidden md:block" />
            with Great Opportunities
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Expert staffing solutions tailored to your business needs. We help companies find exceptional talent and professionals achieve their career goals.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Find Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              For Job Seekers
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <Briefcase className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Permanent Placement</h3>
              <p className="text-gray-600">Find the perfect permanent addition to your team with our comprehensive recruitment solutions.</p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Contract Staffing</h3>
              <p className="text-gray-600">Flexible staffing solutions for your temporary and project-based needs.</p>
            </Card>
            <Card className="p-6">
              <ChartBar className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Executive Search</h3>
              <p className="text-gray-600">Strategic recruitment of senior executives and specialized professionals.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Successful Placements</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Partner Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"StaffingPro helped us find the perfect candidates for our expanding tech team. Their understanding of our needs and quick response time made all the difference."</p>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm text-gray-500">CTO, TechVision Inc</div>
            </Card>
            <Card className="p-6">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Working with StaffingPro has transformed our hiring process. They consistently deliver high-quality candidates who fit both our technical requirements and company culture."</p>
              <div className="font-semibold">Michael Chen</div>
              <div className="text-sm text-gray-500">HR Director, Growth Solutions</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
            Let's Connect
          </h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Ready to find your next great hire or take the next step in your career? Get in touch with our team today.
            </p>
            <Button size="lg" className="text-lg">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 StaffingPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
