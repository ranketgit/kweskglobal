'use client'

import { usePathname } from 'next/navigation'

export default function GlobalJsonLd() {
  const pathname = usePathname()
  
  // IF we are on a blog page, render NOTHING.
  // This checks if the URL contains "/blog/"
  if (pathname?.includes('/blog/')) {
    return null
  }

  // Your massive JSON goes here
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kwesk.com/#organization",
        "name": "KWESK",
        "url": "https://kwesk.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kwesk.com/kwesk-logo.png",
          "width": 384,
          "height": 96
        },
        "description": "KWESK designs and manufactures ergonomic chairs for intensive use in offices or at home. Manufacturer and supplier of premium ergonomic seating for enterprises.",
        "foundingDate": "2008",
        "founder": {
          "@type": "Person",
          "name": "Tarik Benjelloun",
          "jobTitle": "Founder, CEO of KWESK"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Anfa Place Tour Ouest, Niv 1 Anfa Place bd de la corniche, Ain diab",
          "postalCode": "20180",
          "addressLocality": "Casablanca",
          "addressCountry": "MA"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+212-5-20-24-16-37",
          "contactType": "customer service",
          "areaServed": [
            "MA",
            "US",
            "International"
          ],
          "availableLanguage": [
            "English",
            "French"
          ]
        },
        "telephone": [
          "+212-5-20-24-16-37",
          "+212-6-61-48-16-16"
        ],
        "email": "contact@kwesk.com",
        "sameAs": [
          "https://web.facebook.com/kwesk/",
          "https://www.instagram.com/kwesk.maroc/"
        ],
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": 50
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1245",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://kwesk.com/#website",
        "url": "https://kwesk.com",
        "name": "KWESK - Ergonomic Office Chair Manufacturer",
        "publisher": {
          "@id": "https://kwesk.com/#organization"
        },
        "inLanguage": [
          "en-US",
          "fr-FR"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://kwesk.com/en#webpage",
        "url": "https://kwesk.com/en",
        "name": "Office Chair Factory - Manufacturer of Premium Ergonomic Seating",
        "description": "KWESK designs and manufactures chairs for intensive use in the office or at home. Manufacturer and supplier of premium ergonomic seating for enterprises.",
        "isPartOf": {
          "@id": "https://kwesk.com/#website"
        },
        "about": {
          "@id": "https://kwesk.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Product",
        "@id": "https://kwesk.com/chairs/gamma#product",
        "name": "GAMMA 150",
        "description": "The brand new Gamma 150 is the ultimate balance between comfort, price and robustness offered by Kwesk. This chair is the perfect choice for intensive use in the office or at home.",
        "category": "Operator Chair",
        "brand": {
          "@id": "https://kwesk.com/#organization"
        },
        "manufacturer": {
          "@id": "https://kwesk.com/#organization"
        },
        "image": "https://kwesk.com/gamma/2.jpg",
        "url": "https://kwesk.com/chairs/gamma",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "999",
          "priceCurrency": "MAD",
          "url": "https://kwesk.com/chairs/gamma",
          "seller": {
            "@id": "https://kwesk.com/#organization"
          },
          "priceValidUntil": "2026-12-31"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Warranty",
            "value": "5 years"
          },
          {
            "@type": "PropertyValue",
            "name": "Certification",
            "value": "BIFMA, EN1335-1-2-3"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://kwesk.com/chairs/gamma-c#product",
        "name": "CORPO C",
        "description": "Visitor chair version of the GAMMA range, offering the same balance between comfort, price and robustness.",
        "category": "Visitor Chair",
        "brand": {
          "@id": "https://kwesk.com/#organization"
        },
        "manufacturer": {
          "@id": "https://kwesk.com/#organization"
        },
        "image": "https://kwesk.com/gamma/2.jpg",
        "url": "https://kwesk.com/chairs/gamma-c",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "1299",
          "priceCurrency": "MAD",
          "url": "https://kwesk.com/chairs/gamma-c",
          "seller": {
            "@id": "https://kwesk.com/#organization"
          },
          "priceValidUntil": "2026-12-31"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Warranty",
            "value": "5 years"
          },
          {
            "@type": "PropertyValue",
            "name": "Certification",
            "value": "BIFMA, EN1335-1-2-3"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://kwesk.com/chairs/corpo-100#product",
        "name": "CORPO 100",
        "description": "The CORPO 100 offers the ultimate balance between comfort and style, designed to keep you productive all day long. Its sleek design and superior ergonomics make it a must-have for any modern workspace.",
        "category": "Operator Chair",
        "brand": {
          "@id": "https://kwesk.com/#organization"
        },
        "manufacturer": {
          "@id": "https://kwesk.com/#organization"
        },
        "image": "https://kwesk.com/corpo-100/cp1.jpg",
        "url": "https://kwesk.com/chairs/corpo-100",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "1499",
          "priceCurrency": "MAD",
          "url": "https://kwesk.com/chairs/corpo-100",
          "seller": {
            "@id": "https://kwesk.com/#organization"
          },
          "priceValidUntil": "2026-12-31"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Warranty",
            "value": "5 years"
          },
          {
            "@type": "PropertyValue",
            "name": "Certification",
            "value": "BIFMA, EN1335-1-2-3"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://kwesk.com/chairs/by-1#product",
        "name": "BY 100",
        "description": "The BY range offers a panel of three complementary asynchronous chairs to equip your offices, meeting rooms or to welcome your visitors. With a wooden frame and high density injected foam, the BY chairs are a low cost, durable solution offering a refined design and appreciable comfort.",
        "category": "President Chair",
        "brand": {
          "@id": "https://kwesk.com/#organization"
        },
        "manufacturer": {
          "@id": "https://kwesk.com/#organization"
        },
        "image": "https://kwesk.com/by100/by1.jpg",
        "url": "https://kwesk.com/chairs/by-1",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "1399",
          "priceCurrency": "MAD",
          "url": "https://kwesk.com/chairs/by-1",
          "seller": {
            "@id": "https://kwesk.com/#organization"
          },
          "priceValidUntil": "2026-12-31"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Warranty",
            "value": "5 years"
          },
          {
            "@type": "PropertyValue",
            "name": "Certification",
            "value": "BIFMA, EN1335-1-2-3"
          },
          {
            "@type": "PropertyValue",
            "name": "Material",
            "value": "Wooden frame, high density injected foam"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://kwesk.com/chairs/by-g#product",
        "name": "BY G",
        "description": "Operator chair from the BY range with wooden frame and high density injected foam, offering a refined design and appreciable comfort.",
        "category": "Operator Chair",
        "brand": {
          "@id": "https://kwesk.com/#organization"
        },
        "manufacturer": {
          "@id": "https://kwesk.com/#organization"
        },
        "image": "https://kwesk.com/by100/by1.jpg",
        "url": "https://kwesk.com/chairs/by-g",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "1499",
          "priceCurrency": "MAD",
          "url": "https://kwesk.com/chairs/by-g",
          "seller": {
            "@id": "https://kwesk.com/#organization"
          },
          "priceValidUntil": "2026-12-31"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Warranty",
            "value": "5 years"
          },
          {
            "@type": "PropertyValue",
            "name": "Certification",
            "value": "BIFMA, EN1335-1-2-3"
          },
          {
            "@type": "PropertyValue",
            "name": "Material",
            "value": "Wooden frame, high density injected foam"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://kwesk.com/chairs/challenger#product",
        "name": "CHALLENGER 175",
        "description": "The Challenger 175 remains one of the best options for companies looking for a corporate-look chair with an excellent level of comfort, optimized cost and a 5-year lifespan in intensive use like all KWESK chairs. Its wide and deep seat and its many possible adjustments offer an exceptional feeling of comfort even over long periods of use.",
        "category": "Manager Chair",
        "brand": {
          "@id": "https://kwesk.com/#organization"
        },
        "manufacturer": {
          "@id": "https://kwesk.com/#organization"
        },
        "image": "https://kwesk.com/challenger/ch1.jpg",
        "url": "https://kwesk.com/chairs/challenger",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "1699",
          "priceCurrency": "MAD",
          "url": "https://kwesk.com/chairs/challenger",
          "seller": {
            "@id": "https://kwesk.com/#organization"
          },
          "priceValidUntil": "2026-12-31"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Warranty",
            "value": "5 years"
          },
          {
            "@type": "PropertyValue",
            "name": "Certification",
            "value": "BIFMA, EN1335-1-2-3"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://kwesk.com/chairs/exclusive#product",
        "name": "EXCLUSIVE 500",
        "description": "The EXCLUSIVE range perfectly meets the highest expectations of companies in terms of design and comfort. Its avant-garde design, its materials and its advanced settings provide a high level of comfort for its users. The EXCLUSIVE chairs can be customised according to the use: general management, VIP meeting room, liberal professions.",
        "category": "President Chair",
        "brand": {
          "@id": "https://kwesk.com/#organization"
        },
        "manufacturer": {
          "@id": "https://kwesk.com/#organization"
        },
        "image": "https://kwesk.com/exclusive/2.jpg",
        "url": "https://kwesk.com/chairs/exclusive",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "2399",
          "priceCurrency": "MAD",
          "url": "https://kwesk.com/chairs/exclusive",
          "seller": {
            "@id": "https://kwesk.com/#organization"
          },
          "priceValidUntil": "2026-12-31"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Warranty",
            "value": "5 years"
          },
          {
            "@type": "PropertyValue",
            "name": "Certification",
            "value": "BIFMA, EN1335-1-2-3"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://kwesk.com/chairs/exclusive-g#product",
        "name": "EXCLUSIVE G",
        "description": "Operator chair from the EXCLUSIVE range with avant-garde design and advanced settings for a high level of comfort.",
        "category": "Operator Chair",
        "brand": {
          "@id": "https://kwesk.com/#organization"
        },
        "manufacturer": {
          "@id": "https://kwesk.com/#organization"
        },
        "image": "https://kwesk.com/exclusive/2.jpg",
        "url": "https://kwesk.com/chairs/exclusive-g",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "1499",
          "priceCurrency": "MAD",
          "url": "https://kwesk.com/chairs/exclusive-g",
          "seller": {
            "@id": "https://kwesk.com/#organization"
          },
          "priceValidUntil": "2026-12-31"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Warranty",
            "value": "5 years"
          },
          {
            "@type": "PropertyValue",
            "name": "Certification",
            "value": "BIFMA, EN1335-1-2-3"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://kwesk.com/chairs/caddy#product",
        "name": "CADDY 80",
        "description": "CADDY chairs offer optimised ergonomics for training sessions. The adjustable shelf and storage spaces give users the mobility to change the layout of your space according to your needs. You will be training your teams with ease!",
        "category": "Training Chair",
        "brand": {
          "@id": "https://kwesk.com/#organization"
        },
        "manufacturer": {
          "@id": "https://kwesk.com/#organization"
        },
        "image": "https://kwesk.com/chairs/caddy-chair.png",
        "url": "https://kwesk.com/chairs/caddy",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "1399",
          "priceCurrency": "MAD",
          "url": "https://kwesk.com/chairs/caddy",
          "seller": {
            "@id": "https://kwesk.com/#organization"
          },
          "priceValidUntil": "2026-12-31"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Warranty",
            "value": "5 years"
          },
          {
            "@type": "PropertyValue",
            "name": "Certification",
            "value": "BIFMA, EN1335-1-2-3"
          },
          {
            "@type": "PropertyValue",
            "name": "Usage",
            "value": "Training sessions"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://kwesk.com/en#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the warranty on KWESK chairs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "KWESK chairs come with a minimum warranty of 5 years for intensive use in the office or at home."
            }
          },
          {
            "@type": "Question",
            "name": "Are KWESK chairs certified?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, KWESK chairs are BIFMA 2011 and EN1335-1-2-3 2016 compliant, guaranteeing their quality and ergonomics."
            }
          },
          {
            "@type": "Question",
            "name": "Does KWESK deliver internationally?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, KWESK offers worldwide delivery through its affiliate network in 12 countries."
            }
          },
          {
            "@type": "Question",
            "name": "What materials are used in KWESK chairs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "KWESK chairs feature reinforced structures with steel-based alloy, anti-allergic air-mesh coating, high-density foam, and antistatic dust-proof plastic."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://kwesk.com/en#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kwesk.com/en"
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}