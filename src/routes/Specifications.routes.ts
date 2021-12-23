import { Router } from 'express';

import { SpecificationsRepository } from '../Modules/Cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../Modules/Cars/services/CreateSpecificationService';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
    const { name, description } = request.body;
    const createSpecificationService = new CreateSpecificationService(
        specificationsRepository,
    );
    createSpecificationService.execute({ name, description });

    return response.status(201).send();
});

export { specificationsRoutes };
