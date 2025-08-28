import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Headphones, Navigation } from "lucide-react";
import Header from "@/components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Create email content
    const emailBody = `
Dear Anshu Tours & Travels,

${formData.message}

Contact Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Inquiry Type: ${formData.inquiryType || 'Not specified'}

Best regards,
${formData.name}
    `;

    // Create mailto link
    const mailtoLink = `mailto:anshutoursandtravels03@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91-8506940925", "Ranjit Kumar Ranjan"],
      description: "Available 24/7 for emergencies",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["anshutoursandtravels03@gmail.com", "support@anshutoursandtravels03@gmail.com"],
      description: "We'll respond within 2 hours",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Travel Street", "New Delhi, India - 110001"],
      description: "Mon-Sat: 9AM-7PM",
      color: "text-red-600"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      details: ["Emergency Helpline", "+91-8506940925"],
      description: "Round the clock assistance",
      color: "text-purple-600"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
    { day: "Holidays", hours: "Emergency support only" }
  ];

  const faqItems = [
    {
      question: "How do I book a tour with Anshu Tours & Travels?",
      answer: "You can book online through our website, call us directly, or visit our office. We'll help you choose the perfect package for your needs."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer flexible cancellation policies. Free cancellation up to 48 hours before departure for most packages. Terms may vary for special packages."
    },
    {
      question: "Do you provide customized tour packages?",
      answer: "Yes! We specialize in creating personalized itineraries based on your preferences, budget, and travel dates."
    },
    {
      question: "Are your drivers experienced and licensed?",
      answer: "All our drivers are experienced, licensed, and background-verified. They undergo regular training and health checkups."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {" "}Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Have questions about your next adventure? Our travel experts are here to help you 
            plan the perfect trip across incredible India. Reach out to us anytime!
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="flex items-center gap-2" onClick={() => window.open('tel:+918506940925')}>
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2" onClick={() => window.open('https://wa.me/918506940925?text=Hi! I need help with tour planning.', '_blank')}>
              <MessageCircle className="w-5 h-5" />
              Chat with Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mx-auto mb-4">
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="font-medium">{detail}</div>
                    ))}
                    <p className="text-sm text-muted-foreground mt-3">{info.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-black">
                  <Send className="w-6 h-6" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
               <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tour-booking">Tour Booking</SelectItem>
                      <SelectItem value="taxi-booking">Taxi Booking</SelectItem>
                      <SelectItem value="custom-package">Custom Package</SelectItem>
                      <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                      <SelectItem value="complaint">Complaint</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input 
                    id="subject" 
                    placeholder="Brief subject of your message"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your travel plans, questions, or requirements..."
                    className="resize-none min-h-[150px]"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 2 hours during business hours.
                </p>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Emergency Support:</strong> Available 24/7 for ongoing trips and urgent assistance.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {faqItems.map((faq, index) => (
                      <div key={index}>
                        <h4 className="font-semibold mb-2">{faq.question}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-muted-foreground">
                      Can't find what you're looking for? 
                      <Button variant="link" className="p-0 h-auto text-primary">
                        Contact our support team
                      </Button>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Navigation className="w-5 h-5" />
                    Find Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Head Office</h4>
                      <p className="text-muted-foreground">
                        123 Travel Street<br />
                        Connaught Place<br />
                        New Delhi, India - 110001
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Branch Office</h4>
                      <p className="text-muted-foreground">
                        456 Tourism Avenue<br />
                        Haridwar Road<br />
                        Rishikesh, Uttarakhand - 249201
                      </p>
                    </div>

                    <div className="pt-4">
                      <Button variant="outline" className="w-full">
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait! Our travel experts are ready to help you plan the perfect trip. 
            Contact us today and let's make your travel dreams come true.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => window.open('tel:+918506940925')}>
              <Phone className="w-5 h-5 mr-2" />
              Call +91-8506940925
            </Button>
            <Button size="lg" variant="outline" className="text-black border-none hover:bg-primary hover:text-white" onClick={() => window.location.href = "mailto:anshutoursandtravels03@gmail.com"}>
              <Mail className="w-5 h-5 mr-2" />
              Email Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;