import { VideoBlock } from "../videoBlock/VideoBlock";
import { ImageBlock } from "../imageBlock/ImageBlock";
import { TextBlock } from "../textBlock/TextBlock";

export type Page = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  videoBlocks?: Array<VideoBlock>;
  imageBlocks?: Array<ImageBlock>;
  textBlocks?: Array<TextBlock>;
};
