import { getRepository } from 'typeorm';

import Message from '../models/Message';

interface Request {
  user_id: string;
  message_type: 'text' | 'file';
  message_content: string;
}

class CreateMessageService {
  public async execute({
    user_id,
    message_content,
    message_type,
  }: Request): Promise<Message> {
    const messageRepository = getRepository(Message);

    const message = messageRepository.create({
      user_id,
      message_type,
      message_content,
    });

    await messageRepository.save(message);

    return message;
  }
}

export default CreateMessageService;
