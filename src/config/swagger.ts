import { DocumentBuilder } from "@nestjs/swagger";

export const options = new DocumentBuilder()
    .setTitle('Dummy API Service')
    .setDescription(
        'Esta es una API de prueba para demostrar la funcionalidad básica de un servicio backend.',
    )
    .setVersion('1.0')
    .build();
