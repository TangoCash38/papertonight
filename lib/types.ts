export type ClassLevel = "10" | "12";

export type QuestionType =
  | "mcq"
  | "assertion_reason"
  | "short_2"
  | "short_3"
  | "case_sub";

export type OptionId = "A" | "B" | "C" | "D";

export const AR_OPTIONS = [
  { id: "A" as const, text: "Both A and R true, and R explains A" },
  { id: "B" as const, text: "Both A and R true, but R does not explain A" },
  { id: "C" as const, text: "A true, R false" },
  { id: "D" as const, text: "A false, R true" },
];

export type SourceCite = {
  kind: "upload" | "ncert";
  label: string;
  quote: string;
};

export type Option = { id: OptionId; text: string };

export type Question = {
  id: string;
  type: QuestionType;
  marks: 1 | 2 | 3 | 4;
  stem: string;
  assertion?: string;
  reason?: string;
  options?: Option[];
  answer?: OptionId | string;
  markscheme?: string[];
  explanation: string;
  source: SourceCite;
  passage?: string;
  wordLimit?: number;
};

export type Paper = {
  id: string;
  classLevel: ClassLevel;
  subject: string;
  chapter: string;
  title: string;
  totalMarks: 25;
  durationMin: 20;
  questions: Question[];
  killedIds: string[];
};

export type GenerateRequest = {
  classLevel: ClassLevel;
  subject: string;
  chapter: string;
  notesText?: string;
  imageBase64?: string;
};

export type Attempt = {
  paperId: string;
  answers: Record<string, string>;
  submittedAt?: string;
};
