export async function extractJobDescription(pageContent) {
    try {
        const response = await fetch("http://127.0.0.1:5000/api/v1/extract-job-description", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pageContent: pageContent
            })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error extracting job description:", error);
        throw error;
    }
}
