import { MarkdownInstance } from "astro";
import { Frontmatter } from "../models/Frontmatter";

export const compileCards = (cards: MarkdownInstance<Frontmatter>[]) => Object.values(cards).map((card) => {
	return { ...card.frontmatter, body: card.compiledContent() };
});