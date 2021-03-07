import { Joi, Segments, celebrate } from 'celebrate';

const create = celebrate({
  [Segments.BODY]: {
    title: Joi.string().required(),
    link: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.array().items(Joi.string().required()).required(),
  },
});

export default create;
