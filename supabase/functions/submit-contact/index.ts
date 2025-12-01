import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.86.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const createCustomerEmail = (data: ContactRequest) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1C1F22; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #6A8A8F 0%, #1C1F22 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #F7F7F5; padding: 30px; border-radius: 0 0 10px 10px; }
    .message-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #C9B27C; }
    .footer { text-align: center; padding: 20px; color: #6A8A8F; font-size: 14px; }
    .icon { font-size: 48px; margin-bottom: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="icon">✅</div>
      <h1 style="margin: 0; font-size: 28px;">Message Received!</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">VIP Curtains & Furniture</p>
    </div>
    <div class="content">
      <h2 style="color: #1C1F22; margin-top: 0;">Thank You, ${data.name}!</h2>
      <p>We've received your message and will get back to you as soon as possible, typically within 24 hours.</p>
      
      <div class="message-box">
        <h3 style="color: #6A8A8F; margin-top: 0;">Your Message Summary</h3>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Your Message:</strong></p>
        <p style="color: #6A8A8F; font-style: italic;">"${data.message}"</p>
      </div>

      <p><strong>In the meantime:</strong></p>
      <ul style="color: #6A8A8F;">
        <li>Browse our <a href="https://vipcurtains.ae/gallery" style="color: #C9B27C;">Gallery</a> for inspiration</li>
        <li>Check our <a href="https://vipcurtains.ae/faq" style="color: #C9B27C;">FAQ</a> for quick answers</li>
        <li>Call us directly at +971 50 464 9831</li>
        <li>Message us on WhatsApp for instant response</li>
      </ul>

      <div style="background: #E6D9C6; padding: 15px; border-radius: 6px; text-align: center; margin-top: 20px;">
        <p style="margin: 0;"><strong>Need immediate assistance?</strong></p>
        <a href="https://wa.me/971504649831" style="display: inline-block; background: #25D366; color: white; padding: 10px 25px; text-decoration: none; border-radius: 6px; margin-top: 10px;">Chat on WhatsApp</a>
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

const createAdminEmail = (data: ContactRequest) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1C1F22; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1C1F22; color: white; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #F7F7F5; padding: 30px; border-radius: 0 0 10px 10px; }
    .contact-card { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .urgent { background: #3FB984; color: white; padding: 10px 20px; border-radius: 6px; text-align: center; margin-bottom: 20px; }
    .message-content { background: #F7F7F5; padding: 15px; border-radius: 6px; border-left: 4px solid #6A8A8F; margin: 15px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">💬 New Contact Message</h1>
    </div>
    <div class="content">
      <div class="urgent">
        <strong>New customer inquiry received</strong>
      </div>
      
      <div class="contact-card">
        <h2 style="color: #1C1F22; margin-top: 0; border-bottom: 2px solid #C9B27C; padding-bottom: 10px;">Contact Details</h2>
        
        <p><strong>👤 Name:</strong> ${data.name}</p>
        <p><strong>✉️ Email:</strong> <a href="mailto:${data.email}" style="color: #6A8A8F;">${data.email}</a></p>
        ${data.phone ? `<p><strong>📱 Phone:</strong> <a href="tel:${data.phone}" style="color: #6A8A8F;">${data.phone}</a></p>` : ''}
        <p><strong>📋 Subject:</strong> <span style="color: #C9B27C;">${data.subject}</span></p>
        
        <div class="message-content">
          <strong>💬 Message:</strong>
          <p style="margin: 10px 0 0 0;">${data.message}</p>
        </div>
      </div>

      <div style="background: #E6D9C6; padding: 15px; border-radius: 6px; margin-top: 20px;">
        <strong>⚡ Quick Actions:</strong><br>
        <a href="mailto:${data.email}" style="color: #1C1F22;">✉️ Reply via Email</a>
        ${data.phone ? ` | <a href="tel:${data.phone}" style="color: #1C1F22;">📞 Call Customer</a>` : ''}
        ${data.phone ? ` | <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #1C1F22;">💬 WhatsApp</a>` : ''}
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

    const contactData: ContactRequest = await req.json();

    console.log("Submitting contact form:", { name: contactData.name, email: contactData.email });

    // Insert into database
    const { data, error } = await supabase
      .from("contacts")
      .insert({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        subject: contactData.subject,
        message: contactData.message,
        status: "unread",
      })
      .select()
      .single();

    if (error) {
      console.error("Error inserting contact:", error);
      throw error;
    }

    console.log("Contact submitted successfully:", data.id);

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
            to: [contactData.email],
            subject: "We Received Your Message - VIP Curtains & Furniture",
            html: createCustomerEmail(contactData),
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
            from: "VIP Contact <onboarding@resend.dev>",
            to: ["info@vipcurtains.ae"],
            subject: `💬 New Contact: ${contactData.name} - ${contactData.subject}`,
            html: createAdminEmail(contactData),
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
    console.error("Error in submit-contact function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
