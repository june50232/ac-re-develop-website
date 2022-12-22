import { NextApiRequest, NextApiResponse } from 'next';
import { multerUpload } from 'helpers/fileHelper';

type Data = {
  name?: string;
  message?: string;
};

const attachEmail = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    if (req.method !== 'POST')
      return res.status(400).json({ message: 'Bad request' });
    return multerUpload.array('files');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(400).json({ message: 'Bad request' });
  }
};

export default attachEmail;
