import Header from "@/components/layout/Navbar/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen text-foreground transition-colors duration-300">
      {/* Navbar */}
     
    <Header/>
      {/* Hero */}
      <div className="container text-center px-4 py-20 md:py-32">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Empower Your Future <br />
          <span className="text-primary">with Online Learning</span>
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-muted-foreground">
          Discover thousands of expert-led courses to boost your career, skills, and confidence.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/courses">
            <Button className="bg-primary text-primary-foreground px-6 py-3 text-lg hover:bg-primary/90">
              Browse Courses
            </Button>
          </Link>
          <Link to="/register">
            <Button
              variant="outline"
              className="text-primary border-primary hover:bg-primary/10 px-6 py-3 text-lg"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}