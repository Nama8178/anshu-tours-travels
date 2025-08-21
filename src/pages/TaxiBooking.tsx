import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Users, MapPin, Calendar as CalendarIcon, Clock, Star, Shield, Fuel, CheckCircle, Phone, Mail } from "lucide-react";
import { format } from "date-fns";
import Header from "@/components/Header";

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
    features: ["AC", "Professional Driver", "GPS Tracking", "24/7 Support", "First Aid Kit", "Clean Interior"],
    pricePerKm: 12,
    pricePerDay: 2500,
    pricePerHour: 150,
    fuelType: "Petrol/Diesel",
    rating: 4.8,
    image: sedanImage,
    popular: false,
    luggage: "2-3 Bags",
    idealFor: "Couples, Small Families"
  },
  {
    id: 2,
    name: "SUV",
    capacity: "6+1 Seater",
    type: "SUV",
    description: "Spacious SUV ideal for medium groups. Extra luggage space and comfortable seating for longer journeys.",
    features: ["AC", "Professional Driver", "Extra Luggage Space", "USB Charging", "Comfortable Seats", "Safety Features"],
    pricePerKm: 18,
    pricePerDay: 3500,
    pricePerHour: 220,
    fuelType: "Diesel",
    rating: 4.9,
    image: suvImage,
    popular: true,
    luggage: "4-5 Bags",
    idealFor: "Families, Friends Group"
  },
  {
    id: 3,
    name: "Tempo Traveller",
    capacity: "14+1 Seater",
    type: "Mini Bus",
    description: "Perfect for large groups and family reunions. Comfortable seating with ample space for luggage.",
    features: ["AC", "Professional Driver", "Entertainment System", "First Aid Kit", "Comfortable Seating", "Storage Space"],
    pricePerKm: 25,
    pricePerDay: 4500,
    pricePerHour: 300,
    fuelType: "Diesel",
    rating: 4.7,
    image: tempoImage,
    popular: false,
    luggage: "8-10 Bags",
    idealFor: "Large Groups, Events"
  },
  {
    id: 4,
    name: "Luxury Tempo",
    capacity: "16+1 Seater",
    type: "Luxury Bus",
    description: "Premium tempo traveller with luxury seating, entertainment system, and superior comfort features.",
    features: ["AC", "Luxury Seats", "Entertainment System", "Mini Fridge", "WiFi", "Premium Interior"],
    pricePerKm: 35,
    pricePerDay: 6500,
    pricePerHour: 450,
    fuelType: "Diesel",
    rating: 4.9,
    image: luxuryTempoImage,
    popular: false,
    luggage: "10-12 Bags",
    idealFor: "Corporate, Premium Groups"
  }
];

const TaxiBooking = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [bookingType, setBookingType] = useState<"local" | "outstation" | "hourly">("outstation");
  const [activeTab, setActiveTab] = useState("select-vehicle");

  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    destination: "",
    pickupTime: "",
    returnTime: "",
    passengers: "1",
    specialRequests: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const selectedVehicleData = vehicles.find(v => v.id === selectedVehicle);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Book Your
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {" "}Perfect Ride
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose from our fleet of well-maintained vehicles with professional drivers. 
            Safe, comfortable, and affordable transportation for all your travel needs.
          </p>
          
          <div className="flex justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Professional Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>GPS Tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Clean & Safe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="select-vehicle" className="flex items-center gap-2">
                <Car className="w-4 h-4" />
                Select Vehicle
              </TabsTrigger>
              <TabsTrigger value="booking-details" disabled={!selectedVehicle}>
                <MapPin className="w-4 h-4 mr-2" />
                Booking Details
              </TabsTrigger>
              <TabsTrigger value="confirmation" disabled={!selectedVehicle || !bookingData.name}>
                <CheckCircle className="w-4 h-4 mr-2" />
                Confirmation
              </TabsTrigger>
            </TabsList>

            {/* Vehicle Selection */}
            <TabsContent value="select-vehicle" className="space-y-8">
              {/* Service Type Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Choose Service Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Button 
                      variant={bookingType === "local" ? "default" : "outline"}
                      onClick={() => setBookingType("local")}
                      className="h-20 flex-col gap-2"
                    >
                      <Car className="w-6 h-6" />
                      <div className="text-center">
                        <div className="font-semibold">Local</div>
                        <div className="text-xs opacity-70">Within City</div>
                      </div>
                    </Button>
                    <Button 
                      variant={bookingType === "outstation" ? "default" : "outline"}
                      onClick={() => setBookingType("outstation")}
                      className="h-20 flex-col gap-2"
                    >
                      <MapPin className="w-6 h-6" />
                      <div className="text-center">
                        <div className="font-semibold">Outstation</div>
                        <div className="text-xs opacity-70">Outside City</div>
                      </div>
                    </Button>
                    <Button 
                      variant={bookingType === "hourly" ? "default" : "outline"}
                      onClick={() => setBookingType("hourly")}
                      className="h-20 flex-col gap-2"
                    >
                      <Clock className="w-6 h-6" />
                      <div className="text-center">
                        <div className="font-semibold">Hourly</div>
                        <div className="text-xs opacity-70">Per Hour Basis</div>
                      </div>
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
                    }`}
                    onClick={() => setSelectedVehicle(vehicle.id)}
                  >
                    <CardHeader className="relative p-0">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
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
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-2">
                            <h3 className="font-bold text-sm">{vehicle.name}</h3>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Users className="w-3 h-3" />
                              <span>{vehicle.capacity}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        <span className="text-sm font-medium">{vehicle.rating}</span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {vehicle.description}
                      </p>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Ideal for:</span>
                          <span className="font-medium">{vehicle.idealFor}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Luggage:</span>
                          <span className="font-medium">{vehicle.luggage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Fuel:</span>
                          <span className="font-medium">{vehicle.fuelType}</span>
                        </div>
                      </div>

                      <div className="border-t pt-3 space-y-1">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Per KM:</span>
                          <span className="font-bold text-primary">₹{vehicle.pricePerKm}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Per Day:</span>
                          <span className="font-bold text-secondary">₹{vehicle.pricePerDay}</span>
                        </div>
                        {bookingType === "hourly" && (
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Per Hour:</span>
                            <span className="font-bold text-accent">₹{vehicle.pricePerHour}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedVehicle && (
                <div className="text-center">
                  <Button size="lg" onClick={() => setActiveTab("booking-details")}>
                    Continue with {selectedVehicleData?.name}
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Booking Details */}
            <TabsContent value="booking-details" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Booking Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Booking Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name" 
                          placeholder="Enter your full name"
                          value={bookingData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          placeholder="+91 98765 43210"
                          value={bookingData.phone}
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
                        value={bookingData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pickup">Pickup Location *</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            id="pickup" 
                            placeholder="Enter pickup location" 
                            className="pl-10"
                            value={bookingData.pickup}
                            onChange={(e) => handleInputChange("pickup", e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="destination">Destination *</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            id="destination" 
                            placeholder="Enter destination" 
                            className="pl-10"
                            value={bookingData.destination}
                            onChange={(e) => handleInputChange("destination", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Pickup Date *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {pickupDate ? format(pickupDate, "PPP") : "Select pickup date"}
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

                      {bookingType === "outstation" && (
                        <div className="space-y-2">
                          <Label>Return Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full justify-start text-left font-normal">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {returnDate ? format(returnDate, "PPP") : "Select return date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={returnDate}
                                onSelect={setReturnDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pickupTime">Pickup Time *</Label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            id="pickupTime" 
                            type="time" 
                            className="pl-10"
                            value={bookingData.pickupTime}
                            onChange={(e) => handleInputChange("pickupTime", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="passengers">Number of Passengers</Label>
                        <Select value={bookingData.passengers} onValueChange={(value) => handleInputChange("passengers", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select passengers" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: parseInt(selectedVehicleData?.capacity.split('+')[0] || "4") }, (_, i) => (
                              <SelectItem key={i} value={(i + 1).toString()}>{i + 1} Passenger{i > 0 ? 's' : ''}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requests">Special Requests</Label>
                      <Textarea 
                        id="requests"
                        placeholder="Any special requirements or requests..."
                        className="resize-none"
                        rows={3}
                        value={bookingData.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Booking Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Booking Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {selectedVehicleData && (
                      <>
                        <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                          <img 
                            src={selectedVehicleData.image} 
                            alt={selectedVehicleData.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="font-semibold">{selectedVehicleData.name}</h3>
                            <p className="text-sm text-muted-foreground">{selectedVehicleData.capacity}</p>
                            <div className="flex items-center gap-1 mt-1">
                              <Star className="w-3 h-3 fill-current text-yellow-500" />
                              <span className="text-xs">{selectedVehicleData.rating}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Service Type:</span>
                            <span className="font-medium capitalize">{bookingType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Vehicle:</span>
                            <span className="font-medium">{selectedVehicleData.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Capacity:</span>
                            <span className="font-medium">{selectedVehicleData.capacity}</span>
                          </div>
                          {pickupDate && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Date:</span>
                              <span className="font-medium">{format(pickupDate, "PPP")}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Passengers:</span>
                            <span className="font-medium">{bookingData.passengers}</span>
                          </div>
                        </div>

                        <div className="border-t pt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Base Rate ({bookingType}):</span>
                            <span>
                              ₹{bookingType === "hourly" ? selectedVehicleData.pricePerHour + "/hour" : 
                                bookingType === "local" ? selectedVehicleData.pricePerDay + "/day" : 
                                selectedVehicleData.pricePerKm + "/km"}
                            </span>
                          </div>
                          <div className="flex justify-between font-bold text-lg border-t pt-2">
                            <span>Total (Estimated):</span>
                            <span className="text-primary">₹{selectedVehicleData.pricePerDay}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            *Final amount may vary based on actual distance/time
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Included Features:</h4>
                          <div className="grid grid-cols-2 gap-1 text-xs">
                            {selectedVehicleData.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-1">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("select-vehicle")}>
                  Back to Vehicles
                </Button>
                <Button 
                  size="lg" 
                  onClick={() => setActiveTab("confirmation")}
                  disabled={!bookingData.name || !bookingData.phone || !bookingData.email || !bookingData.pickup}
                >
                  Review Booking
                </Button>
              </div>
            </TabsContent>

            {/* Confirmation */}
            <TabsContent value="confirmation" className="space-y-8">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Booking Confirmation</CardTitle>
                  <p className="text-muted-foreground">Your booking request has been submitted successfully!</p>
                </CardHeader>
                <CardContent className="max-w-2xl mx-auto space-y-6">
                  <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                    <h3 className="font-semibold text-lg">Booking Details</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Name:</span>
                        <div className="font-medium">{bookingData.name}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Phone:</span>
                        <div className="font-medium">{bookingData.phone}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Email:</span>
                        <div className="font-medium">{bookingData.email}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Vehicle:</span>
                        <div className="font-medium">{selectedVehicleData?.name}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Pickup:</span>
                        <div className="font-medium">{bookingData.pickup}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Destination:</span>
                        <div className="font-medium">{bookingData.destination}</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <p className="text-sm text-muted-foreground">
                      We'll contact you within 15 minutes to confirm your booking and provide driver details.
                    </p>
                    
                    <div className="flex justify-center gap-4">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Call Support
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Support
                      </Button>
                    </div>

                    <Button size="lg" className="w-full md:w-auto">
                      Book Another Ride
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default TaxiBooking;