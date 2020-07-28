import { Document } from 'mongoose';

import Reminder from '../schemas/Reminder';

interface Request {
  user_id: string;
  date: string;
  parsed_date: string;
  notification_message: string;
}

class CreateRemindersService {
  public async execute({
    user_id,
    date,
    parsed_date,
    notification_message,
  }: Request): Promise<Document> {
    const reminder = await Reminder.create({
      user_id,
      date,
      parsed_date,
      notification_message,
    });

    return reminder;
  }
}

export default CreateRemindersService;
