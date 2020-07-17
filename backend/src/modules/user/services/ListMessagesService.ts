import { getRepository } from 'typeorm';

import Message from '../models/Message';

interface Request {
  user_id: string;
}

class ListMessagesSerive {
  public async execute({ user_id }: Request): Promise<Message[]> {
    const messageRepository = getRepository(Message);

    const messages = await messageRepository.find({
      where: {
        user_id,
      },
    });

    return messages;
  }
}

export default ListMessagesSerive;
