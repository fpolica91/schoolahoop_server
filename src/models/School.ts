import { Entity, Column, PrimaryColumn } from 'typeorm';
// SELECT school_name, address, greatschools_url, score_math, state_score_math, score_math_grade_3, score_math_grade_4, score_math_grade_5, state_score_math_grade_3, state_score_math_grade_4, state_score_math_grade_5,
//  score_reading, state_score_reading, score_reading_grade_3, score_reading_grade_4, score_reading_grade_5, state_score_reading_grade_3, state_score_reading_grade_4, state_score_reading_grade_5,
// score_science, state_score_science, score_science_grade_5, state_score_science_grade_5, score_writing, state_score_writing, score_writing_grade_4, state_score_writing_grade_4, score_reading_grade_6,
// score_reading_grade_7, score_reading_grade_8, state_score_reading_grade_6, state_score_reading_grade_7, state_score_reading_grade_8,
// score_math_grade_6, score_math_grade_7, score_math_grade_8, state_score_math_grade_6, state_score_math_grade_7, state_score_math_grade_8,
// score_science_grade_8, state_score_science_grade_8, score_writing_grade_7, state_score_writing_grade_7, score_social_studies, state_score_social_studies,
// score_social_studies_grade_8, state_score_social_studies_grade_8, score_algebra_i, state_score_algebra_i, score_english, state_score_english, score_biology_i, state_score_biology_i, score_english_2, state_score_english_2, score_us_history, state_score_us_history
// 	FROM public.great_schools;

@Entity('great_schools')
export default class School {
  @PrimaryColumn()
  school_name: string;

  @Column()
  address: string;

  @Column()
  greatschools_url: string;

  @Column()
  score_math: string;

  @Column()
  state_score_math: string;

  @Column()
  score_math_grade_3: string;

  @Column()
  score_math_grade_4: string;

  @Column()
  score_math_grade_5: string;

  @Column()
  state_score_math_grade_3: string;

  @Column()
  state_score_math_grade_4: string;

  @Column()
  state_score_math_grade_5: string;

  @Column()
  score_reading: string;

  @Column()
  score_reading_grade_3: string;

  @Column()
  score_reading_grade_4: string;

  @Column()
  score_reading_grade_5: string;

  @Column()
  state_score_reading: string;

  @Column()
  state_score_reading_grade_3: string;

  @Column()
  state_score_reading_grade_4: string;

  @Column()
  state_score_reading_grade_5: string;

  @Column()
  score_science: string;

  @Column()
  state_score_science: string;

  @Column()
  score_science_grade_5: string;

  @Column()
  state_score_science_grade_5: string;

  @Column()
  score_writing: string;

  @Column()
  state_score_writing: string;

  @Column()
  score_writing_grade_4: string;

  @Column()
  state_score_writing_grade_4: string;

  @Column()
  score_reading_grade_6: string;

  @Column()
  score_reading_grade_7: string;

  @Column()
  score_reading_grade_8: string;

  @Column()
  state_score_reading_grade_6: string;

  @Column()
  state_score_reading_grade_7: string;

  @Column()
  state_score_math_grade_8: string;

  @Column()
  score_science_grade_8: string;

  @Column()
  state_score_science_grade_8: string;

  @Column()
  score_writing_grade_7: string;

  @Column()
  state_score_writing_grade_7: string;

  @Column()
  score_social_studies: string;

  @Column()
  state_score_social_studies: string;

  @Column()
  score_social_studies_grade_8: string;

  @Column()
  state_score_social_studies_grade_8: string;

  @Column()
  score_algebra_i: string;

  @Column()
  state_score_algebra_i: string;

  @Column()
  score_english: string;

  state_score_english: string;

  @Column()
  score_biology_i: string;

  @Column()
  state_score_biology_i: string;

  @Column()
  score_english_2: string;

  @Column()
  state_score_english_2: string;

  @Column()
  score_us_history: string;

  @Column()
  state_score_us_history: string;
}
