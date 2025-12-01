import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.86.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingRequest {
  name: string;
  phone: string;
  email: string;
  location: string;
  preferred_date: string;
  preferred_time: string;
  message?: string;
}

const createCustomerEmail = (data: BookingRequest) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1C1F22; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #6A8A8F 0%, #1C1F22 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #F7F7F5; padding: 30px; border-radius: 0 0 10px 10px; }
    .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #C9B27C; }
    .detail-row { padding: 10px 0; border-bottom: 1px solid #E6D9C6; }
    .detail-label { font-weight: 600; color: #6A8A8F; }
    .footer { text-align: center; padding: 20px; color: #6A8A8F; font-size: 14px; }
    .cta-button { display: inline-block; background: #C9B27C; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 28px;">VIP Curtains & Furniture</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Your Booking Confirmation</p>
    </div>
    <div class="content">
      <h2 style="color: #1C1F22; margin-top: 0;">Thank You, ${data.name}!</h2>
      <p>We've received your booking request for a free home visit. Our team will contact you shortly to confirm your appointment.</p>
      
      <div class="booking-details">
        <h3 style="color: #6A8A8F; margin-top: 0;">Your Booking Details</h3>
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
          <span class="detail-label">Preferred Date:</span> ${data.preferred_date}
        </div>
        <div class="detail-row">
          <span class="detail-label">Preferred Time:</span> ${data.preferred_time}
        </div>
        ${data.message ? `<div class="detail-row"><span class="detail-label">Additional Notes:</span> ${data.message}</div>` : ''}
      </div>

      <p><strong>What's Next?</strong></p>
      <ul style="color: #6A8A8F;">
        <li>Our expert will call you within 24 hours</li>
        <li>We'll bring fabric samples to your home</li>
        <li>Free consultation and accurate measurements</li>
        <li>Transparent pricing with no hidden fees</li>
      </ul>

      <center>
        <a href="https://wa.me/971504649831" class="cta-button">Contact Us on WhatsApp</a>
      </center>
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

const createAdminEmail = (data: BookingRequest) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1C1F22; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1C1F22; color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #F7F7F5; padding: 30px; border-radius: 0 0 10px 10px; }
    .booking-card { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .urgent { background: #D35C5C; color: white; padding: 10px 20px; border-radius: 6px; text-align: center; margin-bottom: 20px; }
    .detail-grid { display: grid; gap: 10px; }
    .detail-item { padding: 12px; background: #F7F7F5; border-radius: 6px; }
    .label { font-weight: 600; color: #6A8A8F; display: block; margin-bottom: 5px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🔔 New Booking Request</h1>
    </div>
    <div class="content">
      <div class="urgent">
        <strong>⏰ ACTION REQUIRED</strong> - New customer booking needs confirmation
      </div>
      
      <div class="booking-card">
        <h2 style="color: #1C1F22; margin-top: 0; border-bottom: 2px solid #C9B27C; padding-bottom: 10px;">Customer Information</h2>
        <div class="detail-grid">
          <div class="detail-item">
            <span class="label">👤 Name</span>
            <strong>${data.name}</strong>
          </div>
          <div class="detail-item">
            <span class="label">📱 Phone</span>
            <a href="tel:${data.phone}" style="color: #6A8A8F; text-decoration: none;"><strong>${data.phone}</strong></a>
          </div>
          <div class="detail-item">
            <span class="label">✉️ Email</span>
            <a href="mailto:${data.email}" style="color: #6A8A8F; text-decoration: none;">${data.email}</a>
          </div>
          <div class="detail-item">
            <span class="label">📍 Location</span>
            ${data.location}
          </div>
          <div class="detail-item">
            <span class="label">📅 Preferred Date</span>
            <strong style="color: #D35C5C;">${data.preferred_date}</strong>
          </div>
          <div class="detail-item">
            <span class="label">🕐 Preferred Time</span>
            <strong style="color: #D35C5C;">${data.preferred_time}</strong>
          </div>
          ${data.message ? `<div class="detail-item"><span class="label">💬 Additional Notes</span>${data.message}</div>` : ''}
        </div>
      </div>

      <div style="background: #E6D9C6; padding: 15px; border-radius: 6px; margin-top: 20px;">
        <strong>⚡ Quick Actions:</strong><br>
        <a href="tel:${data.phone}" style="color: #1C1F22;">📞 Call Customer</a> | 
        <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #1C1F22;">💬 WhatsApp</a> | 
        <a href="mailto:${data.email}" style="color: #1C1F22;">✉️ Send Email</a>
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

    const bookingData: BookingRequest = await req.json();

    console.log("Submitting booking:", { name: bookingData.name, email: bookingData.email });

    // Insert into database
    const { data, error } = await supabase
      .from("bookings")
      .insert({
        name: bookingData.name,
        phone: bookingData.phone,
        email: bookingData.email,
        location: bookingData.location,
        preferred_date: bookingData.preferred_date,
        preferred_time: bookingData.preferred_time,
        message: bookingData.message,
        status: "pending",
      })
      .select()
      .single();

    if (error) {
      console.error("Error inserting booking:", error);
      throw error;
    }

    console.log("Booking submitted successfully:", data.id);

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
            to: [bookingData.email],
            subject: "Booking Confirmed - VIP Curtains & Furniture",
            html: createCustomerEmail(bookingData),
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
            from: "VIP Bookings <onboarding@resend.dev>",
            to: ["info@vipcurtains.ae"],
            subject: `🔔 New Booking: ${bookingData.name} - ${bookingData.preferred_date}`,
            html: createAdminEmail(bookingData),
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
    console.error("Error in submit-booking function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
