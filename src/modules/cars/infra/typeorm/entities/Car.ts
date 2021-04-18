import {v4 as uuidV4} from 'uuid'
class Car {
  id? : string;
  name: string;
  description: string;
  avaliable: boolean;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
  created_at? : Date;
  updated_at? : Date

  constructor(){
    this.id = uuidV4()
    this.avaliable = true
    this.created_at = new Date
    this.updated_at = new Date
  }
}

export default Car
