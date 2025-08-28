import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, Clock, Users, Search, Filter, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";

// Import destination images
import agraImage from "@/assets/destinations/agra-taj-mahal.jpg";
import delhiImage from "@/assets/destinations/delhi-red-fort.jpg";
import himachalImage from "@/assets/destinations/himachal-mountains.jpg";
import nainitalImage from "@/assets/destinations/nainital-lake.jpg";
import ladakhImage from "@/assets/destinations/leh-ladakh-landscape.jpg";
import haridwarImage from "@/assets/destinations/haridwar-ganga-aarti.jpg";

const allDestinations = [
  {
    id: 1,
    name: "Agra",
    state: "Uttar Pradesh",
    region: "North India",
    description: "Home to the iconic Taj Mahal, one of the Seven Wonders of the World. Experience Mughal architecture and rich history.",
    longDescription: "Agra, the city of the Taj Mahal, is a testament to India's rich Mughal heritage. Beyond the world-famous monument of love, explore the magnificent Agra Fort, the stunning Fatehpur Sikri, and the exquisite Itimad-ud-Daulah tomb. Walk through bustling bazaars, savor authentic Mughlai cuisine, and witness the breathtaking sunrise over the Taj Mahal.",
    duration: "2-3 Days",
    groupSize: "2-15 People",
    rating: 4.9,
    reviews: 2847,
    price: "₹8,999",
    originalPrice: "₹12,999",
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh", "Local Markets"],
    image: agraImage,
    category: "Heritage",
    bestTime: "Oct-Mar",
    difficulty: "Easy"
  },
  {
    id: 2,
    name: "Delhi",
    state: "National Capital Territory",
    region: "North India",
    description: "India's vibrant capital blending ancient heritage with modern dynamism. Explore Red Fort, India Gate, and bustling markets.",
    longDescription: "Delhi, India's dynamic capital, offers a fascinating blend of ancient history and modern life. Explore the majestic Red Fort, pay homage at India Gate, wander through the narrow lanes of Chandni Chowk, and visit world-class museums. From street food adventures to luxury shopping, Delhi has something for every traveler.",
    duration: "3-4 Days",
    groupSize: "2-20 People",
    rating: 4.7,
    reviews: 3241,
    price: "₹12,999",
    originalPrice: "₹16,999",
    highlights: ["Red Fort", "India Gate", "Chandni Chowk", "Lotus Temple", "Qutub Minar"],
    image: delhiImage,
    category: "Heritage",
    bestTime: "Oct-Mar",
    difficulty: "Easy"
  },
  {
    id: 3,
    name: "Himachal Pradesh",
    state: "Himachal Pradesh",
    region: "North India",
    description: "Breathtaking hill stations with snow-capped mountains, apple orchards, and adventure activities in the Himalayan foothills.",
    longDescription: "Himachal Pradesh, the 'Land of Gods', offers stunning mountain landscapes, charming hill stations, and thrilling adventures. From the colonial charm of Shimla to the adventure capital Manali, experience paragliding, trekking, river rafting, and peaceful moments in apple orchards and pine forests.",
    duration: "5-7 Days",
    groupSize: "2-12 People",
    rating: 4.8,
    reviews: 1956,
    price: "₹18,999",
    originalPrice: "₹24,999",
    highlights: ["Shimla", "Manali", "Dharamshala", "Kasol", "Adventure Sports"],
    image: himachalImage,
    category: "Adventure",
    bestTime: "Mar-Jun, Oct-Nov",
    difficulty: "Moderate"
  },
  {
    id: 4,
    name: "Nainital",
    state: "Uttarakhand",
    region: "North India",
    description: "Charming lake town nestled in the Kumaon Hills. Perfect for boat rides, nature walks, and peaceful mountain retreats.",
    longDescription: "Nainital, the 'Lake District of India', is a picturesque hill station centered around the beautiful Naini Lake. Take romantic boat rides, explore the vibrant Mall Road, visit Snow View Point for panoramic mountain views, and enjoy peaceful walks through oak and pine forests. Perfect for couples and families seeking tranquility.",
    duration: "3-4 Days",
    groupSize: "2-10 People",
    rating: 4.6,
    reviews: 1432,
    price: "₹14,999",
    originalPrice: "₹19,999",
    highlights: ["Naini Lake", "Mall Road", "Snow View Point", "Naina Devi Temple", "Cable Car"],
    image: nainitalImage,
    category: "Hill Station",
    bestTime: "Mar-Jun, Sep-Nov",
    difficulty: "Easy"
  },
  {
    id: 5,
    name: "Leh Ladakh",
    state: "Jammu & Kashmir",
    region: "North India",
    description: "High-altitude desert with stunning landscapes, Buddhist monasteries, and thrilling mountain passes. An adventure lover's paradise.",
    longDescription: "Leh Ladakh, the 'Land of High Passes', offers otherworldly landscapes, ancient Buddhist monasteries, and the thrill of high-altitude adventure. Drive through the world's highest motorable passes, camp beside pristine lakes, explore ancient gompas, and experience the unique Ladakhi culture in this moon-like terrain.",
    duration: "7-10 Days",
    groupSize: "2-8 People",
    rating: 4.9,
    reviews: 2156,
    price: "₹35,999",
    originalPrice: "₹45,999",
    highlights: ["Pangong Lake", "Nubra Valley", "Magnetic Hill", "Monasteries", "High Passes"],
    image: ladakhImage,
    category: "Adventure",
    bestTime: "May-Sep",
    difficulty: "Challenging"
  },
  {
    id: 6,
    name: "Haridwar",
    state: "Uttarakhand",
    region: "North India",
    description: "Sacred city on the banks of River Ganga. Witness the spiritual Ganga Aarti and explore ancient temples and ashrams.",
    longDescription: "Haridwar, one of India's seven holiest cities, is where the sacred Ganges descends from the Himalayas to the plains. Witness the mesmerizing Ganga Aarti at Har Ki Pauri, visit ancient temples, explore traditional ashrams, and take a holy dip in the sacred river. Experience the spiritual heart of India.",
    duration: "2-3 Days",
    groupSize: "2-25 People",
    rating: 4.5,
    reviews: 1687,
    price: "₹9,999",
    originalPrice: "₹13,999",
    highlights: ["Har Ki Pauri", "Chandi Devi", "Mansa Devi", "Ganga Aarti", "Ashrams"],
    image: haridwarImage,
    category: "Spiritual",
    bestTime: "Oct-Mar",
    difficulty: "Easy"
  },
  {
    id: 7,
    name: "Jaipur",
    state: "Rajasthan",
    region: "North India", 
    description: "The Pink City showcasing royal palaces, magnificent forts, colorful bazaars, and rich Rajasthani culture.",
    longDescription: "Jaipur, the capital of Rajasthan, is famous for its pink-hued buildings, majestic palaces, and vibrant culture. Explore the iconic Hawa Mahal, Amber Fort, City Palace, and shop for handicrafts in colorful bazaars. Experience royal hospitality and authentic Rajasthani cuisine.",
    duration: "3-4 Days",
    groupSize: "2-15 People",
    rating: 4.8,
    reviews: 2956,
    highlights: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar", "Local Markets"],
    image: delhiImage,
    category: "Heritage",
    bestTime: "Oct-Mar",
    difficulty: "Easy"
  },
  {
    id: 8,
    name: "Kashmir",
    state: "Jammu & Kashmir", 
    region: "North India",
    description: "Paradise on Earth with Dal Lake, houseboats, Mughal gardens, and snow-capped mountains.",
    longDescription: "Kashmir, often called 'Paradise on Earth', mesmerizes visitors with its pristine beauty. Stay in traditional houseboats on Dal Lake, stroll through Mughal gardens, enjoy shikara rides, and experience the warm hospitality of Kashmiri people amidst breathtaking Himalayan landscapes.",
    duration: "5-7 Days",
    groupSize: "2-10 People", 
    rating: 4.8,
    reviews: 1876,
    highlights: ["Dal Lake", "Houseboats", "Mughal Gardens", "Gulmarg", "Pahalgam"],
    image: ladakhImage,
    category: "Hill Station",
    bestTime: "Apr-Oct",
    difficulty: "Easy"
  },
  {
    id: 9,
    name: "Varanasi",
    state: "Uttar Pradesh",
    region: "North India", 
    description: "The spiritual capital of India with ancient ghats, temples, and the sacred Ganges River.",
    longDescription: "Varanasi, one of the world's oldest continuously inhabited cities, is the spiritual heart of India. Witness mesmerizing Ganga Aarti ceremonies, explore ancient temples, take boat rides on the sacred Ganges, and experience the profound spirituality that permeates this holy city.",
    duration: "2-3 Days",
    groupSize: "2-20 People",
    rating: 4.6,
    reviews: 2156,
    highlights: ["Ganga Aarti", "Ancient Temples", "Boat Rides", "Sarnath", "Silk Weaving"],
    image: haridwarImage,
    category: "Spiritual", 
    bestTime: "Oct-Mar",
    difficulty: "Easy"
  }
];

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const categories = ["All", "Heritage", "Adventure", "Hill Station", "Spiritual"];

  const filteredDestinations = allDestinations
    .filter(dest => 
      (selectedCategory === "All" || dest.category === selectedCategory) &&
      (searchTerm === "" || dest.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       dest.state.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return parseInt(a.price.replace(/[₹,]/g, "")) - parseInt(b.price.replace(/[₹,]/g, ""));
      if (sortBy === "price-high") return parseInt(b.price.replace(/[₹,]/g, "")) - parseInt(a.price.replace(/[₹,]/g, ""));
      if (sortBy === "rating") return b.rating - a.rating;
      return b.reviews - a.reviews; // popular (most reviews)
    });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Explore
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}India's Destinations
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover incredible destinations across India with Anshu Tours & Travels. 
            From heritage monuments to adventure-filled mountains, find your perfect getaway.
          </p>

          {/* Search and Filters */}
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto shadow-lg">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search destinations..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              <Button className="w-full">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {selectedCategory === "All" ? "All Destinations" : `${selectedCategory} Destinations`}
              </h2>
              <p className="text-muted-foreground">
                Found {filteredDestinations.length} destinations
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Card key={destination.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <CardHeader className="relative p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {destination.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-background/90">
                        {destination.difficulty}
                      </Badge>
                    </div>

                    {/* Discount Badge */}
                    {destination.originalPrice && (
                      <div className="absolute top-4 right-4">
                        <Badge className="text-xs">
                          {Math.round((1 - parseInt(destination.price.replace(/[₹,]/g, "")) / parseInt(destination.originalPrice.replace(/[₹,]/g, ""))) * 100)}% OFF
                        </Badge>
                      </div>
                    )}

                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                      <div className="flex items-center text-sm opacity-90">
                        <MapPin className="w-4 h-4 mr-1" />
                        {destination.state}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-500" />
                      <span className="font-medium">{destination.rating}</span>
                      <span className="text-muted-foreground text-sm">({destination.reviews})</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-secondary" />
                      <span>{destination.groupSize}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.slice(0, 3).map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {destination.highlights.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{destination.highlights.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <div className="flex gap-2 w-full">
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.open(`https://wa.me/918506940925?text=Hi, I'm interested in ${destination.name} tour package. Please share more details.`, '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open('tel:+918506940925', '_self')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No destinations found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Destinations;  