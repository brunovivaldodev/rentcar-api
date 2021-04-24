import ICreateCarDTO from "../dtos/ICreateCarDTO";
import Car from "../infra/typeorm/entities/Car";

interface ICarsRepository{
    create(data : ICreateCarDTO): Promise<Car>
    findByLicensePlate(license_plate : string) : Promise<undefined | Car>
    findAvailable(brand? : string,name?:string,category_id? : string) : Promise<Car[]>
    findById(id : string) : Promise<Car | undefined>
}

export default ICarsRepository;
