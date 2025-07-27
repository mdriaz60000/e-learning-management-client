import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
             <header className="container py-6 flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <img 
            src="https://i.ibb.co/PGrSLh9Z/download-removebg-preview.png" 
            alt="logo" 
            className="h-10 w-10" 
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Learn<span className="font-extrabold">X</span>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">Courses</Link>
          <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
        <div className="hidden md:flex space-x-3">
          <Link to="/login">
            <Button 
              variant="outline" 
              className="border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60"
            >
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-gradient-to-r from-primary to-purple-600 text-white hover:from-primary/90 hover:to-purple-600/90">
              Sign Up
            </Button>
          </Link>
        </div>
      </header>
        </div>
    );
};

export default Header;