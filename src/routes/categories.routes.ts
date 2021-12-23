import { Router } from 'express';

import { CategoriesRepository } from '../Modules/Cars/repositories/CategoriesRepository';
import { createCategoryController } from '../Modules/Cars/useCases/createCategory';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (requuest, response) => {
    const all = categoriesRepository.list();

    return response.json(all);
});

export { categoriesRoutes };
