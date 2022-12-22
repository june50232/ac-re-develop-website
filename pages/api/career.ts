import { NextApiRequest, NextApiResponse } from 'next';
import { transporter, mailOptions } from 'helpers/nodemailer';

type Data = {
  name?: string;
  message?: string;
  files?: any;
  success?: boolean;
};

const sendCareerForm = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) => {
  try {
    if (req.method !== 'POST')
      return res.status(400).json({ message: 'Bad request' });

    const { emailObject } = req.body;
    // const files = req?.files
    const files = null;

    if (!emailObject) return res.status(400).json({ message: 'Bad request' });

    const data = JSON.parse(emailObject);

    if (
      !data.title ||
      !data.name ||
      !data.mobile ||
      !data.email ||
      !data.resume
    ) {
      return res.status(400).json({ message: 'Bad request' });
    }

    const mailData = {
      ...mailOptions,
      subject: 'This is a test subject',
      text: 'This is a test string',
      html: '<h1>Test title</h1><p>Some body text</p>',
      attachments: files,
    };

    await transporter.sendMail(mailData, (error, info) => {
      if (error) {
        return res.status(400).json(error);
      } else {
        // eslint-disable-next-line no-console
        console.log('Email send: ' + info.response);
        return res.status(200).json({ success: true, message: info.response });
      }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(400).json({ message: 'Bad request' });
  }
};

export default sendCareerForm;
