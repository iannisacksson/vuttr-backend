import { Joi, Segments, celebrate } from 'celebrate';

export const create = celebrate({
  [Segments.BODY]: {
    title: Joi.string().required(),
    link: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.array().items(Joi.string().required()).required(),
  },
});

export const query = celebrate({
  [Segments.QUERY]: {
    tag: Joi.string(),
  },
});

export const id = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});
