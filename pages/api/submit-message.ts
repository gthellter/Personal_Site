import type { NextApiRequest, NextApiResponse } from 'next'
import nodeMailer, { TransportOptions } from "nodemailer";
import {google} from 'googleapis'

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
const myEmail = process.env.MY_EMAIL;

const oAuth2 = google.auth.OAuth2
const oAuth2Client = new oAuth2(clientId, clientSecret, "https://developers.google.com/oauthplayground")
oAuth2Client.setCredentials({refresh_token: refreshToken})
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {contactInfo, message} = req.body
  await sendMeMail(contactInfo, message)
  res.status(200).json('OK')
}

async function sendMeMail(from: string, message: string) {
  const accessToken = await oAuth2Client.getAccessToken()
  console.log({accessToken})
  console.log({type: "OAuth2",
    user: myEmail,
    clientId,
    clientSecret,
    refreshToken,
    accessToken: accessToken})
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: myEmail,
      clientId,
      clientSecret,
      refreshToken,
      accessToken: accessToken.token

    }
  } as TransportOptions);
  const options = {
    from: "dhenderson.djh@gmail.com", // sender address
    to: "drewsworld16@gmail.com", // list of receivers
    subject: `New Message from ${from}`, // Subject line
    text: message, // plain text body
    html: `<h1>${from}</h1><p>${message}</p>`, // html body
  }
  const info = await transporter.sendMail(options)
  console.log("Message sent: %s", info.messageId);
}
