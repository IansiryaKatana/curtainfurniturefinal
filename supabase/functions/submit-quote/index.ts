import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.86.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  location: string;
  project_type: string[];
  product_type?: string;
  room_type?: string;
  num_windows?: number;
  width?: number;
  height?: number;
  budget_range?: string;
  additional_details?: string;
  preferred_contact_time?: string;
}

const createCustomerEmail = (data: QuoteRequest) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1C1F22; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #C9B27C 0%, #6A8A8F 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #F7F7F5; padding: 30px; border-radius: 0 0 10px 10px; }
    .quote-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #C9B27C; }
    .detail-row { padding: 8px 0; border-bottom: 1px solid #E6D9C6; }
    .detail-label { font-weight: 600; color: #6A8A8F; display: inline-block; min-width: 150px; }
    .timeline { background: #E6D9C6; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .timeline-step { margin: 10px 0; padding-left: 25px; position: relative; }
    .timeline-step:before { content: '✓'; position: absolute; left: 0; color: #3FB984; font-weight: bold; }
    .footer { text-align: center; padding: 20px; color: #6A8A8F; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 28px;">📋 Quote Request Received</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">VIP Curtains & Furniture</p>
    </div>
    <div class="content">
      <h2 style="color: #1C1F22; margin-top: 0;">Thank You, ${data.name}!</h2>
      <p>We've received your quote request and are preparing your personalized proposal. Our team will contact you within 24 hours with detailed pricing and options.</p>
      
      <div class="quote-details">
        <h3 style="color: #C9B27C; margin-top: 0; border-bottom: 2px solid #E6D9C6; padding-bottom: 10px;">Your Request Summary</h3>
        <div class="detail-row">
          <span class="detail-label">Name:</span> ${data.name}
        </div>
        <div class="detail-row">
          <span class="detail-label">Phone:</span> ${data.phone}
        </div>
        <div class="detail-row">
          <span class="detail-label">Email:</span> ${data.email}
        </div>
        <div class="detail-row">
          <span class="detail-label">Location:</span> ${data.location}
        </div>
        <div class="detail-row">
          <span class="detail-label">Project Type:</span> ${data.project_type.join(', ')}
        </div>
        ${data.product_type ? `<div class="detail-row"><span class="detail-label">Product Type:</span> ${data.product_type}</div>` : ''}
        ${data.room_type ? `<div class="detail-row"><span class="detail-label">Room Type:</span> ${data.room_type}</div>` : ''}
        ${data.num_windows ? `<div class="detail-row"><span class="detail-label">Number of Windows:</span> ${data.num_windows}</div>` : ''}
        ${data.width && data.height ? `<div class="detail-row"><span class="detail-label">Dimensions:</span> ${data.width}m × ${data.height}m</div>` : ''}
        ${data.budget_range ? `<div class="detail-row"><span class="detail-label">Budget Range:</span> ${data.budget_range}</div>` : ''}
        ${data.preferred_contact_time ? `<div class="detail-row"><span class="detail-label">Preferred Contact:</span> ${data.preferred_contact_time}</div>` : ''}
        ${data.additional_details ? `<div class="detail-row"><span class="detail-label">Additional Notes:</span> ${data.additional_details}</div>` : ''}
      </div>

      <div class="timeline">
        <h3 style="margin-top: 0; color: #1C1F22;">What Happens Next?</h3>
        <div class="timeline-step">Our expert will review your requirements</div>
        <div class="timeline-step">We'll prepare a detailed quote with multiple options</div>
        <div class="timeline-step">Contact you within 24 hours to discuss</div>
        <div class="timeline-step">Schedule free home visit for measurements</div>
        <div class="timeline-step">Final installation within 48-72 hours</div>
      </div>

      <div style="background: white; border: 2px solid #C9B27C; padding: 20px; border-radius: 8px; text-align: center;">
        <p style="margin: 0 0 15px 0;"><strong>Need to speak with us right away?</strong></p>
        <a href="tel:+971504649831" style="display: inline-block; background: #6A8A8F; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 5px;">📞 Call Now</a>
        <a href="https://wa.me/971504649831" style="display: inline-block; background: #25D366; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 5px;">💬 WhatsApp</a>
      </div>
    </div>
    <div class="footer">
      <p><strong>VIP Curtains & Furniture</strong><br>
      Dragon Mart, International City, Dubai<br>
      📞 +971 50 464 9831 | ✉️ info@vipcurtains.ae</p>
    </div>
  </div>
</body>
</html>
`;

const createAdminEmail = (data: QuoteRequest) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1C1F22; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #C9B27C; color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #F7F7F5; padding: 30px; border-radius: 0 0 10px 10px; }
    .quote-card { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .urgent { background: #E5A44B; color: white; padding: 10px 20px; border-radius: 6px; text-align: center; margin-bottom: 20px; font-weight: bold; }
    .section { margin: 20px 0; padding: 15px; background: #F7F7F5; border-radius: 6px; border-left: 4px solid #C9B27C; }
    .section-title { color: #6A8A8F; font-weight: bold; margin-bottom: 10px; }
    .highlight { background: #C9B27C; color: white; padding: 2px 8px; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 32px;">💰 New Quote Request</h1>
    </div>
    <div class="content">
      <div class="urgent">
        ⚡ HIGH PRIORITY - New quote request needs response within 24 hours
      </div>
      
      <div class="quote-card">
        <h2 style="color: #1C1F22; margin-top: 0;">Customer Information</h2>
        <p><strong>👤 Name:</strong> ${data.name}</p>
        <p><strong>📱 Phone:</strong> <a href="tel:${data.phone}" style="color: #6A8A8F; font-weight: bold;">${data.phone}</a></p>
        <p><strong>✉️ Email:</strong> <a href="mailto:${data.email}" style="color: #6A8A8F;">${data.email}</a></p>
        <p><strong>📍 Location:</strong> ${data.location}</p>
        ${data.preferred_contact_time ? `<p><strong>⏰ Best Time to Call:</strong> <span class="highlight">${data.preferred_contact_time}</span></p>` : ''}
      </div>

      <div class="section">
        <div class="section-title">📋 Project Details</div>
        <p><strong>Project Type:</strong> ${data.project_type.join(', ')}</p>
        ${data.product_type ? `<p><strong>Product:</strong> ${data.product_type}</p>` : ''}
        ${data.room_type ? `<p><strong>Room:</strong> ${data.room_type}</p>` : ''}
        ${data.num_windows ? `<p><strong>Windows:</strong> ${data.num_windows}</p>` : ''}
        ${data.width && data.height ? `<p><strong>Dimensions:</strong> ${data.width}m × ${data.height}m</p>` : ''}
        ${data.budget_range ? `<p><strong>Budget:</strong> <span class="highlight">${data.budget_range}</span></p>` : ''}
      </div>

      ${data.additional_details ? `
        <div class="section">
          <div class="section-title">💬 Additional Requirements</div>
          <p>${data.additional_details}</p>
        </div>
      ` : ''}

      <div style="background: #E6D9C6; padding: 20px; border-radius: 6px; margin-top: 20px;">
        <strong style="display: block; margin-bottom: 10px;">⚡ Quick Actions:</strong>
        <a href="tel:${data.phone}" style="display: inline-block; background: #6A8A8F; color: white; padding: 8px 15px; text-decoration: none; border-radius: 4px; margin: 5px;">📞 Call</a>
        <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="display: inline-block; background: #25D366; color: white; padding: 8px 15px; text-decoration: none; border-radius: 4px; margin: 5px;">💬 WhatsApp</a>
        <a href="mailto:${data.email}" style="display: inline-block; background: #C9B27C; color: white; padding: 8px 15px; text-decoration: none; border-radius: 4px; margin: 5px;">✉️ Email</a>
      </div>

      <div style="background: #3FB984; color: white; padding: 15px; border-radius: 6px; margin-top: 20px; text-align: center;">
        <strong>⏰ REMINDER:</strong> Contact customer within 24 hours for best conversion rate
      </div>
    </div>
  </div>
</body>
</html>
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const quoteData: QuoteRequest = await req.json();

    console.log("Submitting quote:", { name: quoteData.name, email: quoteData.email });

    // Insert into database
    const { data, error } = await supabase
      .from("quotes")
      .insert({
        ...quoteData,
        status: "pending",
      })
      .select()
      .single();

    if (error) {
      console.error("Error inserting quote:", error);
      throw error;
    }

    console.log("Quote submitted successfully:", data.id);

    // Send emails if Resend is configured
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      console.log("Sending confirmation emails...");
      
      try {
        // Send customer confirmation
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "VIP Curtains <onboarding@resend.dev>",
            to: [quoteData.email],
            subject: "Quote Request Received - VIP Curtains & Furniture",
            html: createCustomerEmail(quoteData),
          }),
        });

        // Send admin notification
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "VIP Quotes <onboarding@resend.dev>",
            to: ["info@vipcurtains.ae"],
            subject: `💰 New Quote Request: ${quoteData.name} - ${quoteData.project_type.join(', ')}`,
            html: createAdminEmail(quoteData),
          }),
        });

        console.log("Emails sent successfully");
      } catch (emailError) {
        console.error("Error sending emails:", emailError);
        // Don't fail the request if emails fail
      }
    } else {
      console.log("RESEND_API_KEY not configured, skipping email notifications");
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-quote function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
