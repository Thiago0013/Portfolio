export async function getGithubData() {
    try {
        const response = await fetch("http://localhost:8080/github/data", {
            next: { revalidate: 3600 },
            cache: "no-store"
        });
        if (!response.ok) throw new Error('Erro ao buscar dados');
        return await response.json();
    } catch (error) {
        console.error(error);
        return {
            login: "none",
            public_repos: 0,
            followers: 0
        };
    }
}