export function load({ cookies }) {
	const sidebar = cookies.get('sidebar');
	if (sidebar === 'true') {
		return { sidebar: true };
	}
	return { sidebar: false };
}
