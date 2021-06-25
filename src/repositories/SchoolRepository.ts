/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import School from '../models/School';

@EntityRepository(School)
export default class SchoolRepository extends Repository<School> { }
