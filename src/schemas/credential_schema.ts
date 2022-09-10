import Joi from 'joi'

export const credentialSchema = Joi.object({
    title: Joi.string().required().trim(),
    url: Joi.string().required().trim(),
    user:Joi.string().required().trim(),
    password:Joi.string().required().trim()
  });