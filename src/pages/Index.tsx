import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import { 
  Users, 
  ChartBar, 
  Building2, 
  Star, 
  ArrowRight, 
  Award, 
  Phone, 
  Mail, 
  ChevronRight,
  CheckCircle,
  TrendingUp,
  Briefcase
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pattern-grid-lg pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center bg-blue-100 text-primary rounded-full px-4 py-1 mb-6">
            <Award className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Top Rated Staffing Agency</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Connecting Great Talent <br className="hidden md:block" />
            with Great Opportunities
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Expert staffing solutions tailored to your business needs. We help companies find exceptional talent and professionals achieve their career goals.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg group">
              Find Talent
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              For Job Seekers
            </Button>
          </div>
          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500 h-5 w-5" />
              <span>Fast Placements</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500 h-5 w-5" />
              <span>Qualified Candidates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500 h-5 w-5" />
              <span>Industry Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <TrendingUp className="h-10 w-10 mb-4" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Successful Placements</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-10 w-10 mb-4" />
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
            <div className="flex flex-col items-center">
              <Building2 className="h-10 w-10 mb-4" />
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Partner Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-primary"></div>
                <span className="text-primary font-medium">ABOUT US</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Why Choose StaffingPro For Your Hiring Needs?
              </h2>
              <p className="text-gray-600 mb-6">
                With over a decade of experience in the recruitment industry, StaffingPro has built a reputation for connecting the right talent with the right opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Industry Expertise</h3>
                    <p className="text-gray-600">Specialized recruiters with deep industry knowledge</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Personalized Approach</h3>
                    <p className="text-gray-600">Customized solutions tailored to your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Extensive Network</h3>
                    <p className="text-gray-600">Access to a wide pool of pre-vetted professionals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/10 rounded-lg p-8 relative z-10">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="font-bold text-xl mb-4">Our Recruitment Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</div>
                      <div>Understand your requirements</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</div>
                      <div>Source qualified candidates</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</div>
                      <div>Screen and evaluate</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">4</div>
                      <div>Present top matches</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">5</div>
                      <div>Support the hiring process</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/5 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/5 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-primary font-medium">TESTIMONIALS</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 relative border-t-4 border-t-primary">
              <div className="absolute -top-5 left-8 bg-white p-2 rounded-full shadow-md">
                <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="flex gap-2 mb-4 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic">"StaffingPro helped us find the perfect candidates for our expanding tech team. Their understanding of our needs and quick response time made all the difference."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary">SJ</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">CTO, TechVision Inc</div>
                </div>
              </div>
            </Card>
            <Card className="p-8 relative border-t-4 border-t-primary">
              <div className="absolute -top-5 left-8 bg-white p-2 rounded-full shadow-md">
                <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="flex gap-2 mb-4 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic">"Working with StaffingPro has transformed our hiring process. They consistently deliver high-quality candidates who fit both our technical requirements and company culture."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary">MC</span>
                </div>
                <div>
                  <div className="font-semibold">Michael Chen</div>
                  <div className="text-sm text-gray-500">HR Director, Growth Solutions</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-primary font-medium">GET IN TOUCH</span>
            <div className="h-px w-8 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
            Let's Connect
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <p className="text-lg text-gray-600 mb-8">
                Ready to find your next great hire or take the next step in your career? Get in touch with our team today.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-gray-600">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-gray-600">info@staffingpro.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Visit Us</div>
                    <div className="text-gray-600">123 Business Ave, Suite 100<br />Metropolis, NY 10001</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-4">Send Us a Message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full p-2 border rounded-md" placeholder="Your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea className="w-full p-2 border rounded-md" rows={4} placeholder="How can we help?"></textarea>
                </div>
                <Button className="w-full">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-6 w-6" />
                <span className="text-xl font-bold">StaffingPro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting the right talent with the right opportunities since 2010.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Permanent Placement</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contract Staffing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Executive Search</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">HR Consulting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest industry insights.</p>
              <div className="flex">
                <input type="email" className="p-2 bg-gray-800 text-white rounded-l-md w-full" placeholder="Email address" />
                <Button variant="default" className="rounded-l-none">
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 StaffingPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

