import { google } from "googleapis";
import { format } from "date-fns";
import { Readable } from "stream"; // Import Readable to convert Buffer to a stream

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
        // client_email: "google-sheet-api@policysansar.iam.gserviceaccount.com",
        // private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCnsK0leFA6nEuq\n5xtBJqUpxJrVJYOCKigH8maUpLGI2zQ9UbAUXUpEX3xjkLPE23PRj8MdeNzqCx7w\nVEnqVIYHB2JJcl9a4qc8qN/llyWBJS4uzVxUCGawdH/YyjxfS7aElfmFgvGn2FEb\nEzj/ULUIAqGpU3YtwVyXN8wBxQ+Acklp+E9y55TXCypleOLR2PMIQ6TFleHuPSYX\nOQIMEP/jMx2SUPlyd0yJm5qaXAUajeKrHmLb/q2l1Upmzbie8BXGweXf6+5bZSio\nrgmEFV960np6fHzyZols1h3uTXJqx30yt2pJCU26MeZK+G4WUWMrtqBVs01RBAQ+\nYidmlDrpAgMBAAECggEAGkYQAEnx5W0DB2ZUb93P4lPKn/t+YmZGhWWRIFhkSflx\nHZZvTJGIBwnK9zKp5/3WZLmYrEUj9TZZhPWVQIuOawrYzIHeDOMW/uXFcYyVX2m6\n6wcEIKp8Tx4XFe7XN2XT1WxGKd69YZCpYeDzfOq2opL++gUjWWyYHEgCxS2MuJFu\nKofDrgcRaqmBV+12sTubEY3Oi436QJJgrbAoLco5rsuTvv0ypoFfZe2zl8GWACOD\nxmNeoxN+P16EoM99oSn97r1P6U9a56hO03DxxgujIvq8tVd+lh98ywxhxslvQjaK\nGmm2E749iVR0Ge8PRrUb1bI9AEIyvz9+MqKKm5/tnQKBgQDpVVge+N9njc3zXdU8\nXApv1ZOrgfMLsF+Gdryp6gTD9tXcjOAOTBU4ojtC1JIRh35quP/BCxInY+W1P42b\n40w5x1MWS4YYdm6002n2cTQA3kQB8uBoSvFJb4dHeGdRQ4FoNWewhF2XdvnU8nGz\nvWgI3nvk2N9mhHDQ3afWRDQ7ywKBgQC3+uHNdLP3KMXHU/28SEq2GEe+MZCPF2op\naSJ4pPVzs6gGdfboJiQ8D2eeN1ygb7ZGnBZhGccFJszWUJdmwOKRGFdVpKeMX1xC\nOgJzYe0mK0Gqh/Qjigd9NOqYL9zJnN6+TBb6j5nv/zUbWaCmpBgI9wZCl9CTyMmu\nM5NvY1k1mwKBgQCFeDwf+1xPb94PB+2hyURvFEyUHpFYbls2H1VsHGD9d4R91FeV\n1g+Nhb9ASzgCru6xPYGOeza3MX2EYAYw1aQUqN/uMOVTuOs6pHRIdBi7JmjgdH3J\nKpU63IEVcNooseSkJ2hYoF6o9XWTSdugZQfNivZzwVqI2dluoFwRRJJcYQKBgQCA\nFC/OEEiY79GACoDB6rHYQt7vESJJ+0r0uTQ+ONiHS7LVjJnu0162USMZigD5z8td\nLJyHzKI4e+Jt8Hz2E6Gm0QM7o/zgRCK+GBRMrwehYsu8JBlaBGViTMxkVi2mTYbj\ng6UbmYzY/xnBiIvGdsYkt5OsGHQj7cw5cb5Z9RfNsQKBgAQe76T94oPDAew0721D\nwBTL0UIy4mYi+D6yMkEsA/ZC/Abx5sIuYpnp5idJ5mSQ7xo4VU0rryLN1vhIx12B\n+iGprOQNisDk1rjknMG5Hjc/khs3rPy4Odx2e4pRbyRwPBEXN1+t6MDuKlvAXQu2\nLsq5tIX2L6JQ++9XT//Sfldn\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n"),
        client_email: "enquiry-policysansar@cohesive-bolt-450513-t3.iam.gserviceaccount.com",
        private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCkwoL8N2mZMrIj\nzGIwnA3JPw2wi8ltqGzFi+wTecn6DloZbZD++T/4QvcG3A3zIgqQODerviTvXbPI\nDUWJpJ6Jmi2DYUdcvW5iZ+9sU88yFqAIlzJROpdJWwQWICpqqjcI/+3qC91tADmP\nc1rMxVEzmAQ1oTJgMncNUYEZACVwlN52+CwzmhEWFU0jkOmtoZvqJPr/SkCtE6Az\nkjT4ih+FFGNk8UgG2oSWU9fFAXNgq0Sb5//td/P6/WFFEDZeT06bBAN3XFwXJsy2\naj88eLNtcurBQvbYGlcrCqybgBrGdnWwTRP5eBCi++VyQve3Sr6jRWusMvGlxDSx\nW8u9Osp3AgMBAAECggEAAQJKmGN5JhMFZuq4KeFgGZIP8hDTvvQqa7CbqtLdcHE+\nDqx5GCv2lFKfU09tq8YoQmcrEBuDUQ6bLJJy5pDiLP2LYc6VXUqxA7FB6haT95Pj\n5FQ+CU6j4TMe0fPdzqFpjN3kWxaPgzyzyDPF+T22wut0uyStkPaTfBAPtlN7PIvq\nUNGdkdhNJy3leWwV2aTWr1ooQFI0MFqREIPpCn1d5V79Rq+ilDRxSFkuIp5hXxYr\nYBWVXn/nFWRtGJmI3AmaGmk8jycKSDHcSJCRQdClYyi9LrJYeVy8DMCE4jzTvDtr\n4chJOhIlItWS9r7rpD8ERRdjTzJo8EiLtHxcqcHEgQKBgQDbgLxzwK2Jj1l37K8p\nYWcUThzu7LZjpAC3Swk4BMNmm21ckJCOsJ1iFN7zlEY6iTNz52dUfAsXWTG+Efqq\nkjjg0d/V4niCj0lFlW+6TgieSY8NZR+dWeaMzWuGaR04QZiGS1tLgNlt/8C889Vf\nj/5FmqsWcddsCetQwkYffNnixwKBgQDAJ5snW54SfSJThdV1M4zReyzfHcTd9Jrv\ncotlu877NMg1Y4fj9sG21qLvYAfF8GzjrfACJBGy+2kX6fbZCk4L+FcDqLUB/f5k\naZQl210HqA/fa7+FDgQcxCtJ3D7BhkFe5Gl8H7fOPSS/rbRdJnQd9hw0HFgIkYuA\nnj6dSrwq0QKBgAU7SkKQAxLWQdGj6IDZ+3T2b6YaKjaxv/qeZTfalTWq2q5sG6Xq\n+7VMvgucKxhWEM3gZAwVcMY7r/3Ru+G43nYtSmJ0pV6nP53S8/jCx13ObwRotpov\nfFk6xCdN9g5TMelxflmMVqJSiCt4vEssyWirSQyd5f6DNgKUvssdVKwdAoGAYMYR\nn9rGW21mEkZ+4I3bx8yPJrcpZNdCCIHZrpzNezpz8l90Gt01Zk3mtUPZ5lhVnr0E\n+S8NMuTnYsHULi7Aa8rgl9kpgB1ZN1zs3bwCuE5t4Am15N7QN2ScoJApkvF4jr/e\nWELpIRcuINLs2VT6efRu89eqhnY2mcoYosL2zWECgYALBJ6ZFjrhBN/UIGFFpzGe\ngd7b0YCNWEJ2Q3P42K8+hANK9SE3ix2fExr5Xd2LYmQqktJfkellw3t80U36J6M9\nHxYqR9BB1dQUWEi/lQEgVCzplg/Ywdn/GbBkpb4S1FbPIoqvV7iTCCjZ3bwUPT73\nbs6AYCC4R/buZ8DwPiwYpw==\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n"),
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
    const spreadsheetId ="1VGuSY4nPAo0Q7tfbWFpT2RnlxKMK-5jWDHkTUTEAkLI";
    const range = "Resumes!A:E";
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[fname, lname, mobile, email, fileUrl]],
      },
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
