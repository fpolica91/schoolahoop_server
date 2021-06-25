/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { EntityRepository, Repository, getManager } from 'typeorm';
import Public from '../models/Public';

@EntityRepository(Public)
export default class PublicRepository extends Repository<Public> {
  public async getAllSchools(): Promise<Public[] | null> {
    try {
      // const schools = await getManager().query(
      //   `select* from nces_public np
      //   inner join approved_zipcodes az
      //     on cast(np.zipcode as integer) = az.zip_code
      //   left join image_data as im
      //     on im.nces_school_id  = np.nces_school_id `
      // )
      // console.log(schools)
      const schools = await getManager().createQueryBuilder("nces_public", "np")
        .innerJoinAndMapMany(
          'np.zip_code',
          'approved_zipcodes',
          'az',
          'CAST(np.zipcode as integer)= az.zip_code'
          // 'np.zipcode  = az.zip_code'
        )
        // .leftJoinAndMapMany(
        //   'np.image_data',
        //   'image_data',
        //   'im',
        //   'np.nces_school_id = im.nces_school_id'
        // )
        .getMany();

      console.log(schools.length)

      return schools as any
    } catch (error) {
      throw new Error(error.message)
    }


  }
}
