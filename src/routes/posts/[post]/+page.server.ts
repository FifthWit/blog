import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function load({ params }) {
	const { post } = params;
	const filePath = path.resolve('src/posts', `${post}.svx`);

	if (!fs.existsSync(filePath)) {
		throw error(404, 'Post Not Found :(');
	}

	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data: metadata, content } = matter(fileContent);
	const html = marked(content);

	return { content: html, metadata };
}
