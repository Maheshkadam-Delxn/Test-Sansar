import { google } from "googleapis";
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { fname, lname, mobile, email, insuranceType } = await req.json(); // Parse the form data from the request body

    // Load the service account key
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: "enquiry-policysansar@cohesive-bolt-450513-t3.iam.gserviceaccount.com",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCkwoL8N2mZMrIj\nzGIwnA3JPw2wi8ltqGzFi+wTecn6DloZbZD++T/4QvcG3A3zIgqQODerviTvXbPI\nDUWJpJ6Jmi2DYUdcvW5iZ+9sU88yFqAIlzJROpdJWwQWICpqqjcI/+3qC91tADmP\nc1rMxVEzmAQ1oTJgMncNUYEZACVwlN52+CwzmhEWFU0jkOmtoZvqJPr/SkCtE6Az\nkjT4ih+FFGNk8UgG2oSWU9fFAXNgq0Sb5//td/P6/WFFEDZeT06bBAN3XFwXJsy2\naj88eLNtcurBQvbYGlcrCqybgBrGdnWwTRP5eBCi++VyQve3Sr6jRWusMvGlxDSx\nW8u9Osp3AgMBAAECggEAAQJKmGN5JhMFZuq4KeFgGZIP8hDTvvQqa7CbqtLdcHE+\nDqx5GCv2lFKfU09tq8YoQmcrEBuDUQ6bLJJy5pDiLP2LYc6VXUqxA7FB6haT95Pj\n5FQ+CU6j4TMe0fPdzqFpjN3kWxaPgzyzyDPF+T22wut0uyStkPaTfBAPtlN7PIvq\nUNGdkdhNJy3leWwV2aTWr1ooQFI0MFqREIPpCn1d5V79Rq+ilDRxSFkuIp5hXxYr\nYBWVXn/nFWRtGJmI3AmaGmk8jycKSDHcSJCRQdClYyi9LrJYeVy8DMCE4jzTvDtr\n4chJOhIlItWS9r7rpD8ERRdjTzJo8EiLtHxcqcHEgQKBgQDbgLxzwK2Jj1l37K8p\nYWcUThzu7LZjpAC3Swk4BMNmm21ckJCOsJ1iFN7zlEY6iTNz52dUfAsXWTG+Efqq\nkjjg0d/V4niCj0lFlW+6TgieSY8NZR+dWeaMzWuGaR04QZiGS1tLgNlt/8C889Vf\nj/5FmqsWcddsCetQwkYffNnixwKBgQDAJ5snW54SfSJThdV1M4zReyzfHcTd9Jrv\ncotlu877NMg1Y4fj9sG21qLvYAfF8GzjrfACJBGy+2kX6fbZCk4L+FcDqLUB/f5k\naZQl210HqA/fa7+FDgQcxCtJ3D7BhkFe5Gl8H7fOPSS/rbRdJnQd9hw0HFgIkYuA\nnj6dSrwq0QKBgAU7SkKQAxLWQdGj6IDZ+3T2b6YaKjaxv/qeZTfalTWq2q5sG6Xq\n+7VMvgucKxhWEM3gZAwVcMY7r/3Ru+G43nYtSmJ0pV6nP53S8/jCx13ObwRotpov\nfFk6xCdN9g5TMelxflmMVqJSiCt4vEssyWirSQyd5f6DNgKUvssdVKwdAoGAYMYR\nn9rGW21mEkZ+4I3bx8yPJrcpZNdCCIHZrpzNezpz8l90Gt01Zk3mtUPZ5lhVnr0E\n+S8NMuTnYsHULi7Aa8rgl9kpgB1ZN1zs3bwCuE5t4Am15N7QN2ScoJApkvF4jr/e\nWELpIRcuINLs2VT6efRu89eqhnY2mcoYosL2zWECgYALBJ6ZFjrhBN/UIGFFpzGe\ngd7b0YCNWEJ2Q3P42K8+hANK9SE3ix2fExr5Xd2LYmQqktJfkellw3t80U36J6M9\nHxYqR9BB1dQUWEi/lQEgVCzplg/Ywdn/GbBkpb4S1FbPIoqvV7iTCCjZ3bwUPT73\nbs6AYCC4R/buZ8DwPiwYpw==\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Create a Sheets client
    const sheets = google.sheets({ version: "v4", auth });

    // Add data to Google Sheet
    const spreadsheetId = "1VGuSY4nPAo0Q7tfbWFpT2RnlxKMK-5jWDHkTUTEAkLI";
    const range = `${insuranceType}!A:D`; // Update based on your sheet structure
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[fname, lname, mobile, email]], // Data to append
      },
    });

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'enquirypolicysansar@gmail.com',
        pass: 'ivrg jkli vchb hmqq',
      },
    });

    // Send email notification
    await transporter.sendMail({
      from: '"Policy Sansar" <enquirypolicysansar@gmail.com>',
      to: 'enquirypolicysansar@gmail.com',
      subject: `New ${insuranceType} Inquiry Received - Policy Sansar`,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>New Inquiry Notification - Policy Sansar</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
              }
              .header {
                  background-color: #1a73e8;
                  color: white;
                  padding: 20px;
                  text-align: center;
                  border-radius: 5px 5px 0 0;
              }
              .logo {
                  font-size: 24px;
                  font-weight: bold;
                  margin-bottom: 10px;
              }
              .content {
                  padding: 20px;
                  background-color: #f9f9f9;
                  border-left: 1px solid #ddd;
                  border-right: 1px solid #ddd;
              }
              .inquiry-details {
                  background-color: white;
                  padding: 15px;
                  border-radius: 5px;
                  margin-top: 20px;
                  border: 1px solid #eee;
              }
              .field {
                  margin-bottom: 10px;
              }
              .label {
                  font-weight: bold;
                  color: #1a73e8;
              }
              .value {
                  margin-left: 10px;
              }
              .insurance-type {
                  background-color: #f0f7ff;
                  padding: 10px;
                  border-radius: 5px;
                  margin: 15px 0;
                  border-left: 4px solid #1a73e8;
                  font-weight: bold;
              }
              .footer {
                  background-color: #ecf0f1;
                  padding: 15px;
                  text-align: center;
                  font-size: 14px;
                  color: #7f8c8d;
                  border-radius: 0 0 5px 5px;
                  border: 1px solid #ddd;
                  border-top: none;
              }
              .cta-button {
                  display: inline-block;
                  background-color: #34a853;
                  color: white;
                  text-decoration: none;
                  padding: 10px 20px;
                  border-radius: 5px;
                  margin-top: 15px;
                  font-weight: bold;
              }
          </style>
      </head>
      <body>
          <div class="header">
              <div class="logo">Policy Sansar</div>
              <div style="font-size: 14px;">Your Insurance Partner</div>
          </div>
          
          <div class="content">
              <h2>New ${insuranceType} Inquiry Received</h2>
              <p>A new insurance inquiry has been submitted through your website. Please find the details below:</p>
              
              <div class="insurance-type">
                  Insurance Type: ${insuranceType}
              </div>
              
              <div class="inquiry-details">
                  <div class="field">
                      <span class="label">Date & Time:</span>
                      <span class="value">${new Date().toLocaleString()}</span>
                  </div>
                  <div class="field">
                      <span class="label">First Name:</span>
                      <span class="value">${fname}</span>
                  </div>
                  <div class="field">
                      <span class="label">Last Name:</span>
                      <span class="value">${lname}</span>
                  </div>
                  <div class="field">
                      <span class="label">Mobile Number:</span>
                      <span class="value">${mobile}</span>
                  </div>
                  <div class="field">
                      <span class="label">Email:</span>
                      <span class="value">${email}</span>
                  </div>
              </div>
              
              <div style="text-align: center; margin-top: 25px;">
                  <a href="https://docs.google.com/spreadsheets/d/${spreadsheetId}" class="cta-button">View in Google Sheets</a>
              </div>
          </div>
          
          <div class="footer">
              <p>This is an automated notification from <strong>Policy Sansar</strong></p>
              <p>© 2025 Policy Sansar. All rights reserved.</p>
          </div>
      </body>
      </html>`,
      text: `A new ${insuranceType} inquiry has been submitted:\n\nFirst Name: ${fname}\nLast Name: ${lname}\nMobile: ${mobile}\nEmail: ${email}\nInsurance Type: ${insuranceType}\n\nCheck your Google Sheet: https://docs.google.com/spreadsheets/d/${spreadsheetId}`,
    });

    return new Response(
      JSON.stringify({ success: true, data: response.data }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}