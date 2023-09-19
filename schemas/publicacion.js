import Joi from 'joi-oid';

const schema = Joi.object({


    photo: Joi
        .string()
        .min(8)
        .uri()
        .messages({
            'string.min': 'La foto debe tener al menos 8 caracteres',
            'string.empty': 'La foto no puede estar vacía',
            'any.required': 'Se requiere una foto',
            'string.uri': 'Se necesita una URL válida'
        }),

    mail: Joi
        .string()
        .min(3)
        .max(100)
    ,
    name: Joi
        .string()
        .min(3)
        .max(100)
        .messages({
            "string.min": "El título debe tener al menos 3 caracteres",
            "string.max": "El título debe tener un máximo de 30 caracteres",
            'string.required': 'El título es obligatorio',
        }),
    cover_photo: Joi
        .string()
        .min(0)
        .uri()
        .messages(
            {
                'string.min': 'La foto debe tener al menos 8 caracteres',
                'string.empty': 'La foto no puede estar vacía',
                'any.required': 'Se requiere una foto',
                'string.uri': 'Se necesita una URL válida'
            }
        ),
    cover_photo1: Joi
        .string()
        .min(0)
        .uri()
        .messages(
            {
                'string.min': 'La foto debe tener al menos 8 caracteres',
                'string.empty': 'La foto no puede estar vacía',
                'any.required': 'Se requiere una foto',
                'string.uri': 'Se necesita una URL válida'
            }
        ),
    cover_photo2: Joi
        .string()
        .min(0)
        .uri()
        .messages(
            {
                'string.min': 'La foto debe tener al menos 8 caracteres',
                'string.empty': 'La foto no puede estar vacía',
                'any.required': 'Se requiere una foto',
                'string.uri': 'Se necesita una URL válida'
            }
        ),
    cover_photo3: Joi
        .string()
        .min(0)
        .messages(
            {
                'string.min': 'La foto debe tener al menos 8 caracteres',
                'string.empty': 'La foto no puede estar vacía',
                'any.required': 'Se requiere una foto',
                'string.uri': 'Se necesita una URL válida'
            }
        ),
    description: Joi
        .string()
        .required()
        .min(3)
        .max(1500)
        .messages({
            "string.min": "La descripción debe tener al menos 3 caracteres",
            "string.max": "La descripción debe tener un máximo de 1500 caracteres",
            'string.required': 'La descripción es obligatoria',
        }),
    title: Joi
        .string()
        .required()
        .min(3)
        .max(1500)
        .messages({
            "string.min": "El título debe tener al menos 3 caracteres",
            "string.max": "El título debe tener un máximo de 1500 caracteres",
            'string.required': 'El título es obligatorio',
        }),
    ubicacion: Joi
        .string()
        .required()
        .min(3)
        .max(1500)
        .messages({
            "string.min": "El título debe tener al menos 3 caracteres",
            "string.max": "El título debe tener un máximo de 1500 caracteres",
            'string.required': 'El título es obligatorio',
        }),
    categoria: Joi
        .required()
        .messages({
            "string.min": "The description must have at least 20 characters",
            "string.max": "The description must have a maximum of 200 characters",
            'string.required': 'the description is required',
        }),
    user_id: Joi
        .objectId()
        .required(),

})

export default schema

