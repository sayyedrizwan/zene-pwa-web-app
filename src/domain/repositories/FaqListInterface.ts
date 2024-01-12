import type { FaqData } from "../entities/FaqData";

export interface FaqRepositoryInterface {
    getAllFaqs(): FaqData[];
  }