import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class Event extends mongoose.Document { 
  @Prop({index: true})
  name: string;

  @Prop()
  type: string;

  @Prop(mongoose.SchemaTypes.Mixed)
  payload: Record<string, any>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
EventSchema.index({
  name: 1, // 1 for ascending, -1 for descending
  type: -1
});
