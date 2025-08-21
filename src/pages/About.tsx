import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, MapPin, Clock, Star, CheckCircle, Heart, Shield, Headphones } from "lucide-react";
import Header from "@/components/Header";

const About = () => {
  const stats = [
    { label: "Happy Customers", value: "50,000+", icon: Users },
    { label: "Years Experience", value: "15+", icon: Award },
    { label: "Destinations Covered", value: "100+", icon: MapPin },
    { label: "Tours Completed", value: "25,000+", icon: CheckCircle }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around providing the best experience for our customers."
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Your safety is our top priority. All our vehicles and drivers are thoroughly verified."
    },
    {
      icon: Star,
      title: "Quality Service",
      description: "We maintain the highest standards in service quality and customer satisfaction."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our support team is available round the clock to assist you with any queries."
    }
  ];

  const team = [
    {
      name: "Anshu Kumar",
      role: "Founder & CEO",
      experience: "15+ years in Tourism",
      description: "Passionate about showcasing India's incredible heritage and natural beauty to travelers from around the world."
    },
    {
      name: "Priya Sharma",
      role: "Operations Head",
      experience: "12+ years in Operations",
      description: "Ensures smooth operations and maintains our high service standards across all destinations."
    },
    {
      name: "Rajesh Singh",
      role: "Head of Fleet",
      experience: "10+ years in Transport",
      description: "Manages our fleet of vehicles and ensures they meet our safety and comfort standards."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">About Us</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Trusted
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}Travel Partner
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over 15 years, Anshu Tours & Travels has been creating unforgettable travel experiences 
              across India. We believe that travel is not just about visiting places, but about creating 
              memories that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Anshu Tours & Travels was founded in 2008 with a simple vision: to make India's 
                  incredible diversity accessible to every traveler. What started as a small family 
                  business has grown into one of the most trusted travel companies in North India.
                </p>
                <p>
                  Our founder, Anshu Kumar, fell in love with travel while exploring the hidden 
                  gems of Uttarakhand and Himachal Pradesh. He realized that many travelers were 
                  missing out on the authentic experiences that make India truly special.
                </p>
                <p>
                  Today, we're proud to have served over 50,000 happy customers, helping them 
                  discover the magic of destinations like Agra, Delhi, Leh Ladakh, and countless 
                  other incredible places across India.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg">Plan Your Journey</Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
                    <div className="text-3xl font-bold text-primary mb-2">2008</div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-to-br from-secondary/5 to-accent/5">
                    <div className="text-3xl font-bold text-secondary mb-2">4.9</div>
                    <div className="text-sm text-muted-foreground">Avg Rating</div>
                  </Card>
                </div>
                <div className="space-y-4 pt-8">
                  <Card className="p-6 text-center bg-gradient-to-br from-accent/5 to-primary/5">
                    <div className="text-3xl font-bold text-accent mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Verified</div>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values drive everything we do and shape every experience we create.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Leadership</h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary">RKR</div>
                </div>
                <CardTitle className="text-2xl mb-2">Ranjit Kumar Ranjan</CardTitle>
                <Badge variant="secondary" className="text-lg px-4 py-2">Owner & Founder</Badge>
              </CardHeader>
              <CardContent>
                <div className="mt-6 pt-6 border-t">
                  <CardTitle className="text-xl mb-2">Aman Yadav</CardTitle>
                  <Badge variant="outline" className="text-base px-3 py-1">Operations Manager</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Choose Anshu Tours & Travels?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Local Expertise</h3>
                    <p className="text-muted-foreground">Our deep local knowledge ensures you experience the authentic culture and hidden gems of each destination.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Customized Packages</h3>
                    <p className="text-muted-foreground">Every tour is tailored to your preferences, budget, and travel style for a truly personalized experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Professional Drivers</h3>
                    <p className="text-muted-foreground">All our drivers are experienced, licensed, and trained to provide safe and comfortable journeys.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Transparent Pricing</h3>
                    <p className="text-muted-foreground">No hidden costs or surprise charges. What you see is what you pay, with complete transparency.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">Our support team is always available to assist you before, during, and after your journey.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
                    <p className="text-muted-foreground">Regular vehicle maintenance, driver training, and service quality checks ensure the best experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore India?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of happy travelers who have discovered the magic of India with Anshu Tours & Travels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Plan Your Trip
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-300">
              Call Now: +91-8506940925
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;