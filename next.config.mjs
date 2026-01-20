import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

export default withNextIntl({
  experimental: {
    staticGenerationRetryCount: 1
  },
  async redirects() {
    // 1. Your manual specific links
    const manualLinks = [
      {
        "Source": "https://kwesk.com/fr/gamma",
        "Target": "https://kwesk.com/fr/chairs/gamma"
      },
      {
        "Source": "https://kwesk.com/fr/gamma-c",
        "Target": "https://kwesk.com/fr/chairs/gamma-c"
      },
      {
        "Source": "https://kwesk.com/fr/corpo-100",
        "Target": "https://kwesk.com/fr/chairs/corpo-100"
      },
      {
        "Source": "https://kwesk.com/fr/by-100",
        "Target": "https://kwesk.com/fr/chairs/by-100"
      },
      {
        "Source": "https://kwesk.com/fr/by-g",
        "Target": "https://kwesk.com/fr/chairs/by-g"
      },
      {
        "Source": "https://kwesk.com/fr/challenger",
        "Target": "https://kwesk.com/fr/chairs/challenger"
      },
      {
        "Source": "https://kwesk.com/fr/exclusive",
        "Target": "https://kwesk.com/fr/chairs/exclusive"
      },
      {
        "Source": "https://kwesk.com/fr/exclusive-g",
        "Target": "https://kwesk.com/fr/chairs/exclusive-g"
      },
      {
        "Source": "https://kwesk.com/fr/caddy",
        "Target": "https://kwesk.com/fr/chairs/caddy"
      },
      {
        "Source": "https://kwesk.com/en/gamma",
        "Target": "https://kwesk.com/en/chairs/gamma"
      },
      {
        "Source": "https://kwesk.com/en/gamma-c",
        "Target": "https://kwesk.com/en/chairs/gamma-c"
      },
      {
        "Source": "https://kwesk.com/en/corpo-100",
        "Target": "https://kwesk.com/en/chairs/corpo-100"
      },
      {
        "Source": "https://kwesk.com/en/by-100",
        "Target": "https://kwesk.com/en/chairs/by-100"
      },
      {
        "Source": "https://kwesk.com/en/by-g",
        "Target": "https://kwesk.com/en/chairs/by-g"
      },
      {
        "Source": "https://kwesk.com/en/challenger",
        "Target": "https://kwesk.com/en/chairs/challenger"
      },
      {
        "Source": "https://kwesk.com/en/exclusive",
        "Target": "https://kwesk.com/en/chairs/exclusive"
      },
      {
        "Source": "https://kwesk.com/en/exclusive-g",
        "Target": "https://kwesk.com/en/chairs/exclusive-g"
      },
      {
        "Source": "https://kwesk.com/en/caddy",
        "Target": "https://kwesk.com/en/chairs/caddy"
      },
      {
        "Source": "https://kwesk.com/fr/winner/",
        "Target": "https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel"
      },
      {
        "Source": "https://kwesk.com/fr/winner-125/",
        "Target": "https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel"
      },
      {
        "Source": "https://kwesk.com/fr/winner-c/",
        "Target": "https://kwesk.com/fr/fabricant-de-chaises-de-bureau-professionnel"
      },
      {
        "Source": "https://kwesk.com/en/winner/",
        "Target": "https://kwesk.com/fr/office-chair-manufacturer/usa"
      },
      {
        "Source": "https://kwesk.com/en/winner-125/",
        "Target": "https://kwesk.com/fr/office-chair-manufacturer/usa"
      },
      {
        "Source": "https://kwesk.com/en/winner-c/",
        "Target": "https://kwesk.com/fr/office-chair-manufacturer/usa"
      }
    ]

    const formattedManualLinks = manualLinks.map((link) => ({
      source: link.Source.replace('https://kwesk.com', ''),
      destination: link.Target,
      permanent: true,
    }));

    return [
      ...formattedManualLinks,
      
      // ---------------------------------------------------------
      // DYNAMIC CITY RULE (Handles thousands of cities at once)
      // ---------------------------------------------------------
      // Old: /fr/mobilier-de-bureau-professionnel-a-libourne
      // New: /fr/fabricant-de-chaises-de-bureau-professionnel/france/libourne
      {
        source: '/fr/mobilier-de-bureau-professionnel-a-:city',
        destination: '/fr/fabricant-de-chaises-de-bureau-professionnel/france/:city',
        permanent: true,
      }
    ]
  }
})