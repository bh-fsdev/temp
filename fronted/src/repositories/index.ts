/**
 * Centralized repository configuration.
 * Swap these implementations to switch from static data to an API backend.
 * See docs/FUTURE_BACKEND.md for migration guide.
 */
import {
  StaticPromptRepository,
  StaticCategoryRepository,
  StaticCollectionRepository,
} from "./static-prompt-repository";

export const promptRepository = new StaticPromptRepository();
export const categoryRepository = new StaticCategoryRepository();
export const collectionRepository = new StaticCollectionRepository();
