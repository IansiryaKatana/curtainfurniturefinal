// Google Analytics utility functions
// Extend the Window interface to include gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Track a Google Analytics event
 * @param eventName - The name of the event (e.g., 'button_click', 'form_submit')
 * @param eventParams - Additional parameters for the event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  }
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

/**
 * Track a conversion event (for Google Ads)
 * @param conversionLabel - The conversion label from Google Ads
 * @param value - Optional conversion value
 * @param currency - Optional currency code (default: 'AED')
 */
export const trackConversion = (
  conversionLabel: string,
  value?: number,
  currency: string = "AED"
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `AW-17853797570/${conversionLabel}`,
      value: value,
      currency: currency,
    });
  }
};

/**
 * Track page views (useful for SPA navigation)
 * @param pagePath - The path of the page
 * @param pageTitle - Optional page title
 */
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "AW-17853797570", {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

// Common event tracking helpers
export const analytics = {
  // Form submissions
  trackFormSubmit: (formName: string) => {
    trackEvent("form_submit", {
      event_category: "engagement",
      event_label: formName,
    });
  },

  // Button clicks
  trackButtonClick: (buttonName: string, location?: string) => {
    trackEvent("button_click", {
      event_category: "engagement",
      event_label: buttonName,
      location: location,
    });
  },

  // Phone calls
  trackPhoneCall: (phoneNumber: string) => {
    trackEvent("phone_call", {
      event_category: "contact",
      event_label: phoneNumber,
    });
  },

  // WhatsApp clicks
  trackWhatsAppClick: () => {
    trackEvent("whatsapp_click", {
      event_category: "contact",
      event_label: "whatsapp_button",
    });
  },

  // Navigation clicks
  trackNavigation: (destination: string) => {
    trackEvent("navigation", {
      event_category: "navigation",
      event_label: destination,
    });
  },
};
