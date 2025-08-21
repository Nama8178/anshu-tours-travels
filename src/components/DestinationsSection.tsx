import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Users, Phone, MessageCircle } from "lucide-react";

// Import destination images
import agraImage from "@/assets/destinations/agra-taj-mahal.jpg";
import delhiImage from "@/assets/destinations/delhi-red-fort.jpg";
import himachalImage from "@/assets/destinations/himachal-mountains.jpg";
import nainitalImage from "@/assets/destinations/nainital-lake.jpg";
import ladakhImage from "@/assets/destinations/leh-ladakh-landscape.jpg";
import haridwarImage from "@/assets/destinations/haridwar-ganga-aarti.jpg";

const destinations = [
  {
    id: 1,
    name: "Agra",
    state: "Uttar Pradesh",
    description: "Home to the iconic Taj Mahal, one of the Seven Wonders of the World. Experience Mughal architecture and rich history.",
    duration: "2-3 Days",
    groupSize: "2-15 People",
    rating: 4.9,
    reviews: 2847,
    price: "₹8,999",
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
    image: agraImage,
    badge: "Most Popular"
  },
  {
    id: 2,
    name: "Delhi",
    state: "National Capital Territory",
    description: "India's vibrant capital blending ancient heritage with modern dynamism. Explore Red Fort, India Gate, and bustling markets.",
    duration: "3-4 Days",
    groupSize: "2-20 People",
    rating: 4.7,
    reviews: 3241,
    price: "₹12,999",
    highlights: ["Red Fort", "India Gate", "Chandni Chowk"],
    image: delhiImage,
    badge: "Heritage"
  },
  {
    id: 3,
    name: "Himachal Pradesh",
    state: "Northern India",
    description: "Breathtaking hill stations with snow-capped mountains, apple orchards, and adventure activities in the Himalayan foothills.",
    duration: "5-7 Days",
    groupSize: "2-12 People",
    rating: 4.8,
    reviews: 1956,
    price: "₹18,999",
    highlights: ["Shimla", "Manali", "Dharamshala"],
    image: himachalImage,
    badge: "Adventure"
  },
  {
    id: 4,
    name: "Nainital",
    state: "Uttarakhand",
    description: "Charming lake town nestled in the Kumaon Hills. Perfect for boat rides, nature walks, and peaceful mountain retreats.",
    duration: "3-4 Days",
    groupSize: "2-10 People",
    rating: 4.6,
    reviews: 1432,
    price: "₹14,999",
    highlights: ["Naini Lake", "Mall Road", "Snow View Point"],
    image: nainitalImage,
    badge: "Romantic"
  },
  {
    id: 5,
    name: "Leh Ladakh",
    state: "Jammu & Kashmir",
    description: "High-altitude desert with stunning landscapes, Buddhist monasteries, and thrilling mountain passes. An adventure lover's paradise.",
    duration: "7-10 Days",
    groupSize: "2-8 People",
    rating: 4.9,
    reviews: 2156,
    price: "₹35,999",
    highlights: ["Pangong Lake", "Nubra Valley", "Magnetic Hill"],
    image: ladakhImage,
    badge: "Exclusive"
  },
  {
    id: 6,
    name: "Haridwar",
    state: "Uttarakhand",
    description: "Sacred city on the banks of River Ganga. Witness the spiritual Ganga Aarti and explore ancient temples and ashrams.",
    duration: "2-3 Days",
    groupSize: "2-25 People",
    rating: 4.5,
    reviews: 1687,
    price: "₹9,999",
    highlights: ["Har Ki Pauri", "Chandi Devi", "Mansa Devi"],
    image: haridwarImage,
    badge: "Spiritual"
  }
];

const DestinationsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
            Popular Destinations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}India's Treasures
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From majestic monuments to serene hill stations, discover India's diverse landscapes 
            and rich cultural heritage with our expertly crafted tour packages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-background to-muted/50">
              <CardHeader className="relative pb-2">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge 
                      variant={destination.badge === "Most Popular" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {destination.badge}
                    </Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {destination.state}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-current text-yellow-500 mr-1" />
                      <span className="font-medium">{destination.rating}</span>
                      <span className="text-muted-foreground ml-1">({destination.reviews})</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {destination.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-2 text-secondary" />
                    <span>{destination.groupSize}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3 pt-6 border-t">
                <Button 
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open(`https://wa.me/918506940925?text=Hi! I'm interested in the ${destination.name} tour package. Can you provide more details?`, '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open('tel:+918506940925')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;