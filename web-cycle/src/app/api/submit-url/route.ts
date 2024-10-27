import { NextResponse } from 'next/server';
import { generateImprovedPage } from '@/utils/generateAI';
import { createABTest, addVariation } from '@/utils/vwo';
import axios from 'axios';

export async function POST(request: Request) {
    try {
        const { url } = await request.json();
        const improvedHtml = await generateImprovedPage(url);
        console.log('Generated Improved HTML:', improvedHtml); // デバッグ用

        // improvedHtmlが正しく生成されているかチェック
        if (!improvedHtml) {
            throw new Error('Improved HTMLの生成に失敗しました');
        }

        // キャンペーンを作成し、結果からキャンペーンIDを取得
        const campaignData = await createABTest(url);
        const campaignId = campaignData?._data?.id;

        if (campaignId) {
            // 2秒待機してからバリエーションを追加
            await new Promise(resolve => setTimeout(resolve, 2000));

            // 改善HTMLをバリエーションとして追加
            await addVariation(campaignId, improvedHtml);

            // improvedHtmlをレスポンスに含める
            return NextResponse.json({ success: true, campaignId, improvedHtml });
        } else {
            throw new Error('キャンペーンIDの取得に失敗しました');
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // AxiosErrorの場合の処理
            console.error('Axiosエラー:', error.response?.data);
        } else if (error instanceof Error) {
            // 一般的なError型の場合
            console.error('エラー:', error.message);
        } else {
            // 予期しない型の場合
            console.error('不明なエラーが発生しました:', error);
        }

        return NextResponse.json({ error: 'エラーが発生しました' }, { status: 500 });
    }
}
