import Joi from 'joi-oid';

const schema = Joi.object({


    photo: Joi
        .string()
        .min(8)
        .uri()
        .messages(
            {
                'string.min': 'La foto debe tener al menos 8 caracteres',
                'string.empty': 'La foto no puede estar vacía',
                'any.required': 'Se requiere una foto',
                'string.uri': 'Se necesita una URL válida'
            }
        ),
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
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 30 characters",
            'string.required': 'the title is required',
        }),


    cover_photo: Joi
        .string()
        .min(0)
        .max(1000)
        .uri()
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
            "string.min": "El title debe tener al menos 3 caracteres",
            "string.max": "El title debe tener un máximo de 1500 caracteres",
            'string.required': 'El title es obligatoria',
        }),

    categoria: Joi

        .required()
        .string()
        .messages({
            "string.min": "La categoria debe tener al menos 20 caracteres",
            "string.max": "La categoria debe tener un máximo de 200 caracteres",
            'string.required': 'La categoria es obligatoria',
        }),

    ubicacion: Joi

        .required()
        .string()
        .messages({
            "string.min": "La ubicacion debe tener al menos 20 caracteres",
            "string.max": "La ubicacion debe tener un máximo de 200 caracteres",
            'string.required': 'La ubicacion es obligatoria',
        }),
    user_id: Joi
        .objectId()
        .required(),
    tipo: Joi
        .string()

    ,
})

export default schema

