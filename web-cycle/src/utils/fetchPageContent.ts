import axios from 'axios';
import { JSDOM } from 'jsdom';

// HTMLとCSSを取得して結合する関数
export async function fetchPageContent(url: string) {
    try {
        // HTMLファイルを取得
        const { data: htmlContent } = await axios.get(url);
        const dom = new JSDOM(htmlContent);
        const document = dom.window.document;

        // CSSファイルのリンクを取得
        const linkElements = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
        let combinedCss = '';

        // CSSファイルを取得して結合
        for (const link of linkElements) {
            const cssHref = link.getAttribute('href');
            if (cssHref) {
                const cssUrl = new URL(cssHref, url).href; // 絶対URLを作成
                const { data: cssContent } = await axios.get(cssUrl);
                combinedCss += cssContent;
            }
        }

        // HTMLとCSSを結合
        const combinedContent = `
            <style>${combinedCss}</style>
            ${htmlContent}
        `;

        return combinedContent;
    } catch (error) {
        console.error('Error fetching page content:', error);
        throw new Error('Failed to fetch page content');
    }
}
