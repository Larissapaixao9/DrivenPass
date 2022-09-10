import Joi from 'joi'

export const userSchema = Joi.object({
    email: Joi.string().required().trim().email(),
    password: Joi.string().required().min(10)
  });
  