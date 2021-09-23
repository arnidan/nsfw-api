import {Controller, Post} from 'simple-ts-express-decorators';
import multer, {memoryStorage} from 'multer';
import {Request, Response} from 'express';
import {NsfwImageClassifier} from 'app/NsfwImageClassifier';

const upload = multer({storage: memoryStorage()});

@Controller()
export class NsfwController {
  classifier: NsfwImageClassifier;

  constructor() {
    this.classifier = new NsfwImageClassifier();
  }

  @Post('/classify', upload.single('image'))
  async classify(request: Request, response: Response) {
    if (!request.file) {
      return response
        .status(410)
        .json({error: 'Specify image'});
    }

    const data = await this.classifier.classify(request.file.buffer);

    return response.json(data);
  }

  @Post('/classify-many', upload.array('images', 10))
  async classifyMany(request: Request, response: Response) {
    if (!request.files || !request.files.length) {
      return response
        .status(410)
        .json({error: 'Specify images'});
    }

    const buffers = (request.files as Express.Multer.File[]).map(file => file.buffer);
    const data = await this.classifier.classifyMany(buffers);

    return response.json(data);
  }
}
