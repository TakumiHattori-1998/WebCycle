import { getCampaignDetails } from '@/utils/vwo';

(async () => {
    const campaignId = 2; // 実際のキャンペーンID
    try {
        const campaignDetails = await getCampaignDetails(campaignId);
        console.log('キャンペーン詳細:', JSON.stringify(campaignDetails, null, 2));
    } catch (error) {
        console.error('キャンペーン詳細の取得中にエラーが発生しました:', error);
    }
})();