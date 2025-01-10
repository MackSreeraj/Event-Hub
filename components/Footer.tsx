import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Event-Hub</h3>
          <p className="text-sm text-muted-foreground">
            Host and manage events. We provide a simple and easy-to-use interface to create and manage events completely for free.
          </p>
          <div className="space-x-4">
            <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Place: Somewhere around Earth</li>
            {/* <li></li> */}
            <li>Phone: Find it!</li>
            <li>Email: ask@eventhub.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Newsletter</h3>
          <p className="text-sm text-muted-foreground">
            Subscribe to our newsletter for updates and news.
          </p>
          <div className="flex gap-2">
            <Input 
              type="email" 
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Event-Hub. All Rights Reserved.
          </p>
          
          <p className="text-muted-foreground text-center my-2 md:my-0">
          Cooked with ❤️
          </p>

          <div className="space-x-4">
            <Link 
              href="https://github.com/MackSreeraj/Event-Hub"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaGithub className="inline-block w-5 h-5" />
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;