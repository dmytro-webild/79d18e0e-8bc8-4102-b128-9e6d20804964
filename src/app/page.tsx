"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="noise"
        cardStyle="layered-gradient"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="BeefyKing"
      button={{
        text: "Order Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="The King of Beef, Served Fresh."
      description="Experience the ultimate burger journey with our premium, flame-grilled creations. Taste the difference quality makes."
      testimonials={[
        {
          name: "John Doe",
          handle: "@johndoe",
          testimonial: "Best burger in town, truly amazing flavor!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-burger-table_23-2148678799.jpg",
          imageAlt: "delicious gourmet beef burger restaurant",
        },
        {
          name: "Sarah Smith",
          handle: "@sarahsmith",
          testimonial: "Juicy, fresh, and delivered hot. 10/10.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-grilled-steak-with-rosemary-tomatoes-human-hands-barbecue_176474-3115.jpg",
          imageAlt: "delicious gourmet beef burger restaurant",
        },
        {
          name: "Mike Brown",
          handle: "@mikeb",
          testimonial: "The BeefyKing never disappoints. Simply quality.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/ingredients-pasta_23-2147694275.jpg",
          imageAlt: "delicious gourmet beef burger restaurant",
        },
        {
          name: "Emily White",
          handle: "@emwhite",
          testimonial: "Amazing texture and taste. Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-delivery-man-climbing-stairs_23-2148767100.jpg",
          imageAlt: "delicious gourmet beef burger restaurant",
        },
        {
          name: "David Clark",
          handle: "@dclark",
          testimonial: "Great service and even better burgers.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pumpkin-pie-making-arrangement_23-2149055383.jpg",
          imageAlt: "delicious gourmet beef burger restaurant",
        },
      ]}
      buttons={[
        {
          text: "Explore Menu",
          href: "#products",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-burger-table_23-2148678799.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5054.jpg",
          alt: "Happy diner",
        },
        {
          src: "http://img.b2bpic.net/free-photo/photo-overjoyed-dark-skinned-girl-has-bushy-hair-laughs-looks-aside-uses-cell-phone-online-communication-messaging-with-friends-drinks-smoothie-cozy-cafeteria_273609-29417.jpg",
          alt: "Satisfied customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5512.jpg",
          alt: "Burgers fan",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5053.jpg",
          alt: "Food lover",
        },
        {
          src: "http://img.b2bpic.net/free-photo/friends-with-food-beer_23-2147680643.jpg",
          alt: "Group of happy diners",
        },
      ]}
      avatarText="50k+ Happy Customers"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Passion for Perfection"
      description={[
        "At BeefyKing, we believe every burger tells a story. Starting with 100% premium beef, we flame-grill each patty to lock in the juices and flavor.",
        "Our chefs select only the freshest ingredients—crispy farm-grown lettuce, vine-ripened tomatoes, and hand-crafted sauces to deliver a gourmet experience you won't forget.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          tag: "Fresh",
          title: "Farm to Table",
          subtitle: "Local Sourced",
          description: "We partner with local farms to ensure our ingredients are fresh every single day.",
          imageSrc: "http://img.b2bpic.net/free-photo/ingredients-pasta_23-2147694275.jpg",
        },
        {
          tag: "Fast",
          title: "Speedy Delivery",
          subtitle: "Hot to Door",
          description: "Our delivery network ensures your burger arrives piping hot within 30 minutes.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-delivery-man-climbing-stairs_23-2148767100.jpg",
        },
        {
          tag: "Craft",
          title: "Artisan Methods",
          subtitle: "Chef Prepared",
          description: "Every burger is crafted with artisan passion to maintain consistency and flavor.",
          imageSrc: "http://img.b2bpic.net/free-photo/pumpkin-pie-making-arrangement_23-2149055383.jpg",
        },
      ]}
      title="Why Choose BeefyKing?"
      description="We are dedicated to quality, passion, and delivering the absolute best flavor to your door."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "The Royal Beef",
          price: "$12.99",
          imageSrc: "http://img.b2bpic.net/free-photo/beef-bacon-hamburger_74190-5976.jpg",
        },
        {
          id: "p2",
          name: "Classic Cheeseburger",
          price: "$9.99",
          imageSrc: "http://img.b2bpic.net/free-photo/composition-with-delicious-vegan-burger_23-2149039331.jpg",
        },
        {
          id: "p3",
          name: "Crispy Chicken Special",
          price: "$10.49",
          imageSrc: "http://img.b2bpic.net/free-photo/cheese-sandwich-with-french-fries-wooden-board_140725-4522.jpg",
        },
        {
          id: "p4",
          name: "Garden Veggie Patty",
          price: "$8.99",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-hamburgers_23-2148575453.jpg",
        },
        {
          id: "p5",
          name: "Steakhouse Wrap",
          price: "$11.49",
          imageSrc: "http://img.b2bpic.net/free-photo/tortilla-wraps-with-meat-fresh-vegetables_2829-9493.jpg",
        },
        {
          id: "p6",
          name: "King Double Patty",
          price: "$14.99",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-bacon-burger-with-copy-space_23-2148784483.jpg",
        },
      ]}
      title="Our Signature Menu"
      description="Explore our wide variety of premium beef burgers, crafted to satisfy every craving."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Achievements"
      tag="Milestones"
      metrics={[
        {
          id: "m1",
          value: "50k+",
          description: "Satisfied Customers",
        },
        {
          id: "m2",
          value: "120k",
          description: "Burgers Served",
        },
        {
          id: "m3",
          value: "15+",
          description: "Locations Open",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Alice R.",
          handle: "@alicer",
          testimonial: "Best burger in town!",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5052.jpg",
        },
        {
          id: "t2",
          name: "Bob T.",
          handle: "@bobt",
          testimonial: "Incredible flavor and freshness.",
          imageSrc: "http://img.b2bpic.net/free-photo/slice-tasty-tuna-meal-with-glass-white-wine-restaurant_8353-10588.jpg",
        },
        {
          id: "t3",
          name: "Charlie M.",
          handle: "@charliem",
          testimonial: "My go-to place for every lunch.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-enjoying-food_23-2149303573.jpg",
        },
        {
          id: "t4",
          name: "Diana V.",
          handle: "@dianav",
          testimonial: "Fast, hot, and tasty.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-enjoying-spending-good-time-together-while-having-date-restaurant_58466-16046.jpg",
        },
        {
          id: "t5",
          name: "Edward P.",
          handle: "@edwardp",
          testimonial: "The king of burgers indeed!",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-talking-by-lunch_1098-14622.jpg",
        },
      ]}
      title="What Our Kings Say"
      description="Customer satisfaction is our greatest reward."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you deliver?",
          content: "Yes, we offer fast local delivery within 30 minutes of our locations.",
        },
        {
          id: "q2",
          title: "Are ingredients organic?",
          content: "We source our vegetables from local organic farms to ensure peak freshness.",
        },
        {
          id: "q3",
          title: "Can I place bulk orders?",
          content: "Absolutely! Contact us for corporate catering and bulk burger orders.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/chef-kitchen-cooking-with-vegetables_23-2148006162.jpg"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Answers to the most common questions about our food and delivery."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Contact Us"
      title="Ready for a Kingly Feast?"
      description="Visit our locations or order online today to get your burger fix instantly."
      buttons={[
        {
          text: "Order Online",
          href: "#products",
        },
        {
          text: "Find Locations",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "Burgers",
              href: "#products",
            },
            {
              label: "Specials",
              href: "#products",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="BeefyKing"
      copyrightText="© 2025 BeefyKing. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
