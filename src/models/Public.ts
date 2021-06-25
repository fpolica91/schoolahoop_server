import { Entity, Column, PrimaryColumn, JoinColumn } from 'typeorm';

@Entity('nces_public')
export default class Public {
  @PrimaryColumn()
  nces_school_id: string;

  @JoinColumn()
  zip_code: string;

  @Column()
  school_name: string;

  @Column()
  state_name: string;

  @Column()
  agency_name: string;

  @Column()
  nces_agency_id: string;

  @Column()
  county_name: string;

  @Column()
  street_address_01_txt: string;

  @Column()
  street_address_02_txt: string;

  @Column()
  city: string;

  @Column()
  zipcode: string;

  @Column()
  phone_number: string;

  @Column()
  school_type: string;

  @Column()
  school_status: string;

  @Column()
  charter_school: string;

  @Column()
  magnet_school: string;

  @Column()
  virtual_status: string;

  @Column()
  school_level: string;

  @Column()
  lowest_grade_taught: string;

  @Column()
  highest_grade_taught: string;

  @Column()
  total_students: string;

  @Column()
  male_students_cnt: string;

  @Column()
  female_students_cnt: string;

  @Column()
  native_american_students_cnt: string;

  @Column()
  asian_students_cnt: string;

  @Column()
  hispanic_students_cnt: string;

  @Column()
  african_american_students_cnt: string;

  @Column()
  white_students_cnt: string;

  @Column()
  hawaiian_students_cnt: string;

  @Column()
  two_or_more_races_students_cnt: string;

  @Column()
  student_teacher_ratio: string;
}
