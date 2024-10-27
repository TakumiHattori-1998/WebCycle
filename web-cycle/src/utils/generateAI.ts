import axios from 'axios';
import { fetchPageContent } from '@/utils/fetchPageContent';

const openaiApiKey = process.env.OPENAI_API_KEY;

export async function generateImprovedPage(url: string) {
    if (!openaiApiKey) {
        throw new Error('OpenAI API key is not defined in environment variables');
    }

    try {
        // URLからHTMLコンテンツを取得
        const htmlContent = await fetchPageContent(url);

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                "model": "gpt-4o-mini",
                "messages": [
                    { "role": "system", "content": "You are a helpful assistant." },
                    {
                        "role": "user",
                        "content": `Please provide an improved version of the following HTML and CSS. A significant change in the overall color scheme of the page is desirable. Only return the modified code without any explanation or commentary:\n\n${htmlContent}`
                    }
                ],
                "max_tokens": 15000
            },
            {
                headers: {
                    Authorization: `Bearer ${openaiApiKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const improvedHtmlAndCss = response.data.choices[0].message.content;
        return improvedHtmlAndCss;
    } catch (error) {
        console.error('Error calling AI API:', error);
        throw new Error('Failed to generate improved page');
    }
}
