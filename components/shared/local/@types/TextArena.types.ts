export interface TextArenaItem {
  title: string;
  width?: string;
  type?: string;
  id?: string;
  required?: boolean;
  value?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}