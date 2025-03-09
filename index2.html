import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SmartTripPrototype() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-600">SmartTrip Solutions</h1>
      <p className="text-gray-700 mt-2">Your Gateway to Hassle-Free Travel</p>
      
      <Card className="w-full max-w-md mt-6">
        <CardContent>
          {submitted ? (
            <div className="text-center text-green-600">
              <p>Thank you, {form.name}! Your request has been received.</p>
              <p>We will contact you at {form.email} soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              <Input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
              <Input name="service" placeholder="Service Needed (Visa, Flight, etc.)" value={form.service} onChange={handleChange} required />
              <Textarea name="message" placeholder="Additional Message" value={form.message} onChange={handleChange} />
              <Button type="submit" className="bg-blue-600 text-white">Submit Request</Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
