import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field((type) => Int)
  @Max(20000)
  @Min(1500)
  monthlyPrice: number;

  @Field((type) => Int)
  @Max(1000)
  @Min(10)
  dailyPrice: number;

  @Field()
  mileage: string;

  @Field()
  gas: string;

  @Field()
  gear: string;

  @Field()
  thumbnailUrl: string;
}
