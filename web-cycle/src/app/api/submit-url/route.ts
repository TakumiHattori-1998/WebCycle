// src/app/api/submit-url/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { url } = await request.json();

    // Google Tag ManagerやGoogle OptimizeにURLを送信し、A/Bテストをセットアップ
    // 必要ならGoogle APIを使用

    return NextResponse.json({ message: `URL ${url} が送信されました` });
}
