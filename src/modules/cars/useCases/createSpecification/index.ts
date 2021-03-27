import SpecificationsRepository from "@modules/cars/repositories/implementations/SpecificationsRepository";
import CreateSpecificationController from "./CreateSpecificationController";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";


const specificationRepository = new SpecificationsRepository()

const createSpeccificationUseCase = new  CreateSpecificationUseCase(specificationRepository)

const createSpecificationController = new CreateSpecificationController(createSpeccificationUseCase)

export {createSpecificationController}
