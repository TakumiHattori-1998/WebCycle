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
                    js: `document.body.innerHTML = \`${improvedHtml}\`;`,
                    css: 'body { background-color: #f00c0c; }'
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

export default { createABTest, addVariation };
