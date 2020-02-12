import { IsString, IsNumber, IsOptional } from 'class-validator';

export class Item {
  @IsNumber() @IsOptional() readonly id: number;
  @IsString() readonly version: string;
  @IsString() readonly octreeDir: string;
  @IsString() readonly projection: string;
  @IsString() readonly points: number;
  @IsString() readonly boundingBox: object;
  @IsString() readonly tightBoundingBox: object;
  @IsString() readonly pointAttributes: object;
  @IsString() readonly spacing: number;
  @IsString() readonly scale: number;
  @IsString() readonly hierarchyStepSize: number;
}
