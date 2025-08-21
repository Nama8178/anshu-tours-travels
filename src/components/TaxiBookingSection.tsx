import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Car, Users, MapPin, Calendar as CalendarIcon, Clock, Star, Shield, Fuel } from "lucide-react";
import { format } from "date-fns";

// Import vehicle images
import sedanImage from "@/assets/vehicles/sedan-4plus1.jpg";
import suvImage from "@/assets/vehicles/suv-6plus1.jpg";
import tempoImage from "@/assets/vehicles/tempo-14plus1.jpg";
import luxuryTempoImage from "@/assets/vehicles/luxury-tempo-16plus1.jpg";

const vehicles = [
  {
    id: 1,
    name: "Sedan Car",
    capacity: "4+1 Seater",
    type: "Sedan",
    description: "Comfortable sedan perfect for small families and couples. AC included with professional driver.",
    features: ["AC", "Professional Driver", "GPS Tracking", "24/7 Support"],
    pricePerKm: 12,
    pricePerDay: 2500,
    fuelType: "Petrol/Diesel",
    rating: 4.8,
    image: sedanImage,
    popular: false
  },
  {
    id: 2,
    name: "SUV",
    capacity: "6+1 Seater",
    type: "SUV",
    description: "Spacious SUV ideal for medium groups. Extra luggage space and comfortable seating for longer journeys.",
    features: ["AC", "Professional Driver", "Extra Luggage Space", "USB Charging"],
    pricePerKm: 18,
    pricePerDay: 3500,
    fuelType: "Diesel",
    rating: 4.9,
    image: suvImage,
    popular: true
  },
  {
    id: 3,
    name: "Tempo Traveller",
    capacity: "14+1 Seater",
    type: "Mini Bus",
    description: "Perfect for large groups and family reunions. Comfortable seating with ample space for luggage.",
    features: ["AC", "Professional Driver", "Entertainment System", "First Aid Kit"],
    pricePerKm: 25,
    pricePerDay: 4500,
    fuelType: "Diesel",
    rating: 4.7,
    image: tempoImage,
    popular: false
  },
  {
    id: 4,
    name: "Luxury Tempo",
    capacity: "16+1 Seater",
    type: "Luxury Bus",
    description: "Premium tempo traveller with luxury seating, entertainment system, and superior comfort features.",
    features: ["AC", "Luxury Seats", "Entertainment System", "Mini Fridge", "WiFi"],
    pricePerKm: 35,
    pricePerDay: 6500,
    fuelType: "Diesel",
    rating: 4.9,
    image: luxuryTempoImage,
    popular: false
  }
];

const TaxiBookingSection = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);
  const [pickupDate, setPickupDate] = useState<Date>();
  const [bookingType, setBookingType] = useState<"local" | "outstation">("outstation");

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
            Taxi Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {" "}Perfect Ride
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our fleet of well-maintained vehicles with professional drivers. 
            Safe, comfortable, and affordable transportation for all your travel needs.
          </p>
        </div>

        {/* Booking Form */}
        <Card className="mb-12 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="w-5 h-5" />
              Quick Booking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="pickup">Pickup Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="pickup" placeholder="Enter pickup location" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="destination" placeholder="Enter destination" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Pickup Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {pickupDate ? format(pickupDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={pickupDate}
                      onSelect={setPickupDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Pickup Time</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="time" type="time" className="pl-10" />
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <Button 
                variant={bookingType === "local" ? "default" : "outline"}
                onClick={() => setBookingType("local")}
                className="flex-1"
              >
                Local (Within City)
              </Button>
              <Button 
                variant={bookingType === "outstation" ? "default" : "outline"}
                onClick={() => setBookingType("outstation")}
                className="flex-1"
              >
                Outstation (Outside City)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Selection */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <Card 
              key={vehicle.id} 
              className={`group cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                selectedVehicle === vehicle.id ? 'ring-2 ring-primary shadow-lg' : ''
              } ${vehicle.popular ? 'bg-gradient-to-br from-primary/5 to-secondary/5' : 'bg-gradient-to-br from-background to-muted/30'}`}
              onClick={() => setSelectedVehicle(vehicle.id)}
            >
              <CardHeader className="relative pb-2">
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {vehicle.popular && (
                    <div className="absolute top-3 right-3">
                      <Badge className="text-xs">Most Popular</Badge>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{vehicle.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Users className="w-4 h-4" />
                    <span>{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <span className="text-sm font-medium">{vehicle.rating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {vehicle.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Fuel className="w-4 h-4 text-primary" />
                    <span>{vehicle.fuelType}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {vehicle.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {vehicle.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{vehicle.features.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Per KM:</span>
                    <span className="font-bold text-primary">₹{vehicle.pricePerKm}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Per Day:</span>
                    <span className="font-bold text-secondary">₹{vehicle.pricePerDay}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedVehicle && (
          <div className="mt-8 text-center">
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-muted-foreground">
                    Selected: {vehicles.find(v => v.id === selectedVehicle)?.name}
                  </span>
                </div>
                <Button size="lg" className="w-full">
                  Proceed to Book
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Free cancellation up to 2 hours before pickup
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default TaxiBookingSection;