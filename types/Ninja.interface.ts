export interface iNinja {
  name:string;
  email:string;
  phoneNumber:string;
  office:string;
  orgUnit:string;
  mainText?:string[];
  gitHub?:string;
  twitter?:string;
  stackOverflow?:string;
  linkedIn?:string;
  imagePortraitUrl?: string;
  imageWallOfLeetUrl: string;
  highlighted: boolean;
  published: boolean;
};
