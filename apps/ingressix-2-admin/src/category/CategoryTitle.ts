import { Category as TCategory } from "../api/category/Category";

export const CATEGORY_TITLE_FIELD = "categoryName";

export const CategoryTitle = (record: TCategory): string => {
  return record.categoryName?.toString() || String(record.id);
};
