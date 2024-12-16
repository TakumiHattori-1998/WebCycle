import axios, { AxiosError } from 'axios';

const API_TOKEN = process.env.VWO_API_KEY;
const ACCOUNT_ID = process.env.VWO_ACCOUNT_ID;

// キャンペーンを作成する関数
export const createABTest = async (url: string) => {
    const options = {
        method: 'POST',
        url: `https://app.vwo.com/api/v2/accounts/${ACCOUNT_ID}/campaigns`,
        headers: {
            accept: 'application/json',
            token: API_TOKEN,
            'Content-Type': 'application/json'
        },
        data: {
            type: "ab",
            urls: [
                {
                    type: "url",
                    value: url
                }
            ],
            primaryUrl: url,
            goals: [
                {
                    name: "New goal",
                    type: "visitPage",
                    urls: [
                        {
                            type: "url",
                            value: url
                        }
                    ]
                }
            ],
            variations: [
                {
                    name: "Original",
                    changes: "", 
                    percentSplit: 100 
                },
            ],
            stats: {
                conversionRate: 0.05,
                certaintyMode: 0.01,
                expectedMonthlyVisitors: 1000,
                expectedRevenuePerVisitor: 2,
                liftInConversionRate: 0.05
            }
        }
    };

    try {
        const response = await axios.request(options);
        console.log('Campaign created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating campaign:', error);
        throw error;
    }
};

// バリエーションを追加する関数
export const addVariation = async (campaignId: number, improvedHtml: string) => {
    const options = {
        method: 'POST',
        url: `https://app.vwo.com/api/v2/accounts/${ACCOUNT_ID}/campaigns/${campaignId}/variations`,
        headers: {
            accept: 'application/json',
            token: API_TOKEN,
            'Content-Type': 'application/json'
        },
        data: {
            variations: {
                name: "Improved Variation",
                changes: JSON.stringify({
                    "css": "body { font-size: 50px; }",
                    "js": "alert('Welcome to the improved variation!');"
                })
            }
        }
    };

    // レートリミット（429ステータス）への対応のためのリトライロジック
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const response = await axios.request(options);
            console.log('Variation added:', response.data);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axiosエラー:', error.response?.data);
            } else if (error instanceof Error) {
                console.error('エラー:', error.message);
            } else {
                console.error('不明なエラーが発生しました:', error);
            }
        }
    }
};

// キャンペーンを`RUNNING`にする関数
export const startCampaign = async (campaignId: number) => {
    const options = {
        method: 'PATCH',
        url: `https://app.vwo.com/api/v2/accounts/${ACCOUNT_ID}/campaigns/status`,
        headers: {
            accept: 'application/json',
            token: API_TOKEN,
            'Content-Type': 'application/json'
        },
        data: {
            ids: [campaignId],
            status: 'RUNNING'
        }
    };

    // 最大3回のリトライを設定し、各リトライの間に待機時間を追加
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const response = await axios.request(options);
            console.log('Campaign started:', response.data);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 429) {
                    console.warn('Too many requests. Retrying after delay...');
                    await new Promise(resolve => setTimeout(resolve, 5000)); // 5秒待機
                } else {
                    console.error('Axiosエラー:', error.response?.data);
                    throw error;
                }
            } else if (error instanceof Error) {
                console.error('エラー:', error.message);
                throw error;
            } else {
                console.error('不明なエラーが発生しました:', error);
                throw error;
            }
        }
    }
    throw new Error('キャンペーン開始に失敗しました。リトライがすべて失敗しました。');
};

// 特定のキャンペーンの詳細を取得する関数
export const getCampaignDetails = async (campaignId: number) => {
    const options = {
        method: 'GET',
        url: `https://app.vwo.com/api/v2/accounts/995685/campaigns/${campaignId}`,
        headers: {
            accept: 'application/json',
            token: '168bee1be311880f2ce1feb9423f21934a3979b96633a351458c669c3743ed5a',
        }
    };

    try {
        const response = await axios.request(options);
        console.log('Campaign details:', response.data);
        return response.data; // ここで評価指標データを返す
    } catch (error) {
        console.error('Error retrieving campaign details:', error);
        throw error;
    }
};

export default { createABTest, addVariation, startCampaign, getCampaignDetails };
