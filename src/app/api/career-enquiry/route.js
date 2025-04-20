import { google } from "googleapis";
import { format } from "date-fns";
import { Readable } from "stream";
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const formData = await req.formData(); // Parse form data
    const fname = formData.get("fname");
    const lname = formData.get("lname");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const resume = formData.get("resume"); // Resume file (Blob)

    if (!resume) {
      throw new Error("Resume file is required");
    }

    // Convert Blob to Buffer
    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Convert buffer to a readable stream
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null); // End the stream

    // Format date (e.g., 1Jan)
    const dateStr = format(new Date(), "dMMM");
    const fileName = `${fname}${lname}${dateStr}.pdf`;

    // Google Authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: "enquiry-policysansar@cohesive-bolt-450513-t3.iam.gserviceaccount.com",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCkwoL8N2mZMrIj\nzGIwnA3JPw2wi8ltqGzFi+wTecn6DloZbZD++T/4QvcG3A3zIgqQODerviTvXbPI\nDUWJpJ6Jmi2DYUdcvW5iZ+9sU88yFqAIlzJROpdJWwQWICpqqjcI/+3qC91tADmP\nc1rMxVEzmAQ1oTJgMncNUYEZACVwlN52+CwzmhEWFU0jkOmtoZvqJPr/SkCtE6Az\nkjT4ih+FFGNk8UgG2oSWU9fFAXNgq0Sb5//td/P6/WFFEDZeT06bBAN3XFwXJsy2\naj88eLNtcurBQvbYGlcrCqybgBrGdnWwTRP5eBCi++VyQve3Sr6jRWusMvGlxDSx\nW8u9Osp3AgMBAAECggEAAQJKmGN5JhMFZuq4KeFgGZIP8hDTvvQqa7CbqtLdcHE+\nDqx5GCv2lFKfU09tq8YoQmcrEBuDUQ6bLJJy5pDiLP2LYc6VXUqxA7FB6haT95Pj\n5FQ+CU6j4TMe0fPdzqFpjN3kWxaPgzyzyDPF+T22wut0uyStkPaTfBAPtlN7PIvq\nUNGdkdhNJy3leWwV2aTWr1ooQFI0MFqREIPpCn1d5V79Rq+ilDRxSFkuIp5hXxYr\nYBWVXn/nFWRtGJmI3AmaGmk8jycKSDHcSJCRQdClYyi9LrJYeVy8DMCE4jzTvDtr\n4chJOhIlItWS9r7rpD8ERRdjTzJo8EiLtHxcqcHEgQKBgQDbgLxzwK2Jj1l37K8p\nYWcUThzu7LZjpAC3Swk4BMNmm21ckJCOsJ1iFN7zlEY6iTNz52dUfAsXWTG+Efqq\nkjjg0d/V4niCj0lFlW+6TgieSY8NZR+dWeaMzWuGaR04QZiGS1tLgNlt/8C889Vf\nj/5FmqsWcddsCetQwkYffNnixwKBgQDAJ5snW54SfSJThdV1M4zReyzfHcTd9Jrv\ncotlu877NMg1Y4fj9sG21qLvYAfF8GzjrfACJBGy+2kX6fbZCk4L+FcDqLUB/f5k\naZQl210HqA/fa7+FDgQcxCtJ3D7BhkFe5Gl8H7fOPSS/rbRdJnQd9hw0HFgIkYuA\nnj6dSrwq0QKBgAU7SkKQAxLWQdGj6IDZ+3T2b6YaKjaxv/qeZTfalTWq2q5sG6Xq\n+7VMvgucKxhWEM3gZAwVcMY7r/3Ru+G43nYtSmJ0pV6nP53S8/jCx13ObwRotpov\nfFk6xCdN9g5TMelxflmMVqJSiCt4vEssyWirSQyd5f6DNgKUvssdVKwdAoGAYMYR\nn9rGW21mEkZ+4I3bx8yPJrcpZNdCCIHZrpzNezpz8l90Gt01Zk3mtUPZ5lhVnr0E\n+S8NMuTnYsHULi7Aa8rgl9kpgB1ZN1zs3bwCuE5t4Am15N7QN2ScoJApkvF4jr/e\nWELpIRcuINLs2VT6efRu89eqhnY2mcoYosL2zWECgYALBJ6ZFjrhBN/UIGFFpzGe\ngd7b0YCNWEJ2Q3P42K8+hANK9SE3ix2fExr5Xd2LYmQqktJfkellw3t80U36J6M9\nHxYqR9BB1dQUWEi/lQEgVCzplg/Ywdn/GbBkpb4S1FbPIoqvV7iTCCjZ3bwUPT73\nbs6AYCC4R/buZ8DwPiwYpw==\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const drive = google.drive({ version: "v3", auth });

    // Upload file to Google Drive
    const fileMetadata = {
      name: fileName,
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID], // Ensure this is set in your env
    };

    const media = {
      mimeType: resume.type,
      body: stream, // Pass the readable stream instead of buffer
    };

    const fileResponse = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: "id", // Get only the file ID
    });

    const fileId = fileResponse.data.id;

    // 🔹 Grant Public Access to the File
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    // Generate a public shareable link
    const fileUrl = `https://drive.google.com/uc?id=${fileId}`;

    // Append data to Google Sheet
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = "1VGuSY4nPAo0Q7tfbWFpT2RnlxKMK-5jWDHkTUTEAkLI";
    const range = "Resumes!A:E";
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[fname, lname, mobile, email, fileUrl]],
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
      subject: `New Job Application Received - ${fname} ${lname}`,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>New Job Application - Policy Sansar</title>
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
              .application-details {
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
              .resume-section {
                  background-color: #f0f7ff;
                  padding: 15px;
                  border-radius: 5px;
                  margin: 15px 0;
                  border-left: 4px solid #1a73e8;
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
              .resume-button {
                  display: inline-block;
                  background-color: #ff5722;
                  color: white;
                  text-decoration: none;
                  padding: 10px 20px;
                  border-radius: 5px;
                  margin-top: 10px;
                  font-weight: bold;
              }
          </style>
      </head>
      <body>
          <div class="header">
              <div class="logo">Policy Sansar</div>
              <div style="font-size: 14px;">New Job Application Received</div>
          </div>
          
          <div class="content">
              <h2>Job Application Details</h2>
              <p>A new candidate has submitted their application through your website. Please find the details below:</p>
              
              <div class="application-details">
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
              
              <div class="resume-section">
                  <h3 style="margin-top: 0;">Resume Document</h3>
                  <p>The candidate's resume has been uploaded to Google Drive.</p>
                  <p><strong>File Name:</strong> ${fileName}</p>
                  <a href="${fileUrl}" class="resume-button" target="_blank">View Resume</a>
              </div>
              
              <div style="text-align: center; margin-top: 25px;">
                  <a href="https://docs.google.com/spreadsheets/d/${spreadsheetId}" class="cta-button">View All Applications</a>
              </div>
          </div>
          
          <div class="footer">
              <p>This is an automated notification from <strong>Policy Sansar</strong></p>
              <p>© 2025 Policy Sansar. All rights reserved.</p>
          </div>
      </body>
      </html>`,
      text: `A new job application has been submitted:\n\nName: ${fname} ${lname}\nMobile: ${mobile}\nEmail: ${email}\nResume: ${fileUrl}\n\nCheck your Google Sheet: https://docs.google.com/spreadsheets/d/${spreadsheetId}`,
    });

    return new Response(
      JSON.stringify({ success: true, fileId, fileUrl }),
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