import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function load({ cookies }) {
    const sidebar = cookies.get('sidebar') === 'true';
    const blogsDir = path.resolve('blogs');
    const posts = fs.readdirSync(blogsDir).map(file => {
        const filePath = path.join(blogsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data: metadata } = matter(fileContent);
        return { slug: file.replace('.svx', ''), title: metadata.title };
    });

    return { sidebar, posts };
}