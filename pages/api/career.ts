import { NextApiRequest, NextApiResponse } from 'next';
import { contactTransporter, contactMailOptions } from 'common/nodemailer';

type Data = {
  name?: string;
  message?: string;
  success?: boolean;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const data = req.body;
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: 'Bad request' });
    }

    try {
      const mailData = {
        ...contactMailOptions,
        subject: data.subject,
        text: 'This is a test string',
        html: '<h1>Test title</h1><p>Some body text</p>',
      };
      await contactTransporter.sendMail(mailData);

      return res.status(200).json({ success: true });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return res.status(400).json({ message: 'Bad request' });
    }
  }

  return res.status(400).json({ message: 'Bad request' });
};

export default handler;
