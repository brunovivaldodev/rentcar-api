import CreateRentalDTO from "../dtos/CreateRentalDTO";
import Rental from "../infra/typeorm/entities/Rental";

interface IRentalsRepository{
  findOpenRentalByCar(car_id :string) : Promise<Rental | undefined>
  findOpenRentalByUser(user_id : string): Promise<Rental | undefined>
  create(data : CreateRentalDTO) : Promise<Rental>
}

export default IRentalsRepository
