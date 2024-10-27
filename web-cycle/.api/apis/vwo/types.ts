import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type AddLabelsToACampaignMetadataParam = FromSchema<typeof schemas.AddLabelsToACampaign.metadata>;
export type AddLabelsToACampaignResponse200 = FromSchema<typeof schemas.AddLabelsToACampaign.response['200']>;
export type BillingCycleDetailsOfCurrentSubAccountResponse200 = FromSchema<typeof schemas.BillingCycleDetailsOfCurrentSubAccount.response['200']>;
export type BillingDetailsOfAccountResponse200 = FromSchema<typeof schemas.BillingDetailsOfAccount.response['200']>;
export type CreateACampaignGoalMetadataParam = FromSchema<typeof schemas.CreateACampaignGoal.metadata>;
export type CreateACampaignGoalResponse201 = FromSchema<typeof schemas.CreateACampaignGoal.response['201']>;
export type CreateACampaignMetadataParam = FromSchema<typeof schemas.CreateACampaign.metadata>;
export type CreateACampaignResponse201 = FromSchema<typeof schemas.CreateACampaign.response['201']>;
export type CreateACampaignSectionMetadataParam = FromSchema<typeof schemas.CreateACampaignSection.metadata>;
export type CreateACampaignSectionResponse201 = FromSchema<typeof schemas.CreateACampaignSection.response['201']>;
export type CreateACampaignVariationMetadataParam = FromSchema<typeof schemas.CreateACampaignVariation.metadata>;
export type CreateACampaignVariationResponse201 = FromSchema<typeof schemas.CreateACampaignVariation.response['201']>;
export type CreateACustomWidgetMetadataParam = FromSchema<typeof schemas.CreateACustomWidget.metadata>;
export type CreateACustomWidgetResponse200 = FromSchema<typeof schemas.CreateACustomWidget.response['200']>;
export type CreateACustomWidgetResponse400 = FromSchema<typeof schemas.CreateACustomWidget.response['400']>;
export type CreateAFeatureMetadataParam = FromSchema<typeof schemas.CreateAFeature.metadata>;
export type CreateAFeatureResponse200 = FromSchema<typeof schemas.CreateAFeature.response['200']>;
export type CreateAFeatureResponse400 = FromSchema<typeof schemas.CreateAFeature.response['400']>;
export type CreateAProjectMetadataParam = FromSchema<typeof schemas.CreateAProject.metadata>;
export type CreateAProjectResponse200 = FromSchema<typeof schemas.CreateAProject.response['200']>;
export type CreateAProjectResponse400 = FromSchema<typeof schemas.CreateAProject.response['400']>;
export type CreateDraftInCurrentSubAccountMetadataParam = FromSchema<typeof schemas.CreateDraftInCurrentSubAccount.metadata>;
export type CreateDraftInCurrentSubAccountResponse201 = FromSchema<typeof schemas.CreateDraftInCurrentSubAccount.response['201']>;
export type CreateSubAccountBodyParam = FromSchema<typeof schemas.CreateSubAccount.body>;
export type CreateSubAccountResponse201 = FromSchema<typeof schemas.CreateSubAccount.response['201']>;
export type CreateUserInTheCurrentSubAccountMetadataParam = FromSchema<typeof schemas.CreateUserInTheCurrentSubAccount.metadata>;
export type CreateUserInTheCurrentSubAccountResponse200 = FromSchema<typeof schemas.CreateUserInTheCurrentSubAccount.response['200']>;
export type CurrentSubAccountLabelsMetadataParam = FromSchema<typeof schemas.CurrentSubAccountLabels.metadata>;
export type CurrentSubAccountLabelsResponse200 = FromSchema<typeof schemas.CurrentSubAccountLabels.response['200']>;
export type CurrentSubAccountThresholdsMetadataParam = FromSchema<typeof schemas.CurrentSubAccountThresholds.metadata>;
export type CurrentSubAccountThresholdsResponse200 = FromSchema<typeof schemas.CurrentSubAccountThresholds.response['200']>;
export type CurrentSubAccountUsersMetadataParam = FromSchema<typeof schemas.CurrentSubAccountUsers.metadata>;
export type CurrentSubAccountUsersResponse200 = FromSchema<typeof schemas.CurrentSubAccountUsers.response['200']>;
export type DeleteACampaignGoalMetadataParam = FromSchema<typeof schemas.DeleteACampaignGoal.metadata>;
export type DeleteACampaignGoalResponse204 = FromSchema<typeof schemas.DeleteACampaignGoal.response['204']>;
export type DeleteACampaignLabelMetadataParam = FromSchema<typeof schemas.DeleteACampaignLabel.metadata>;
export type DeleteACampaignLabelResponse204 = FromSchema<typeof schemas.DeleteACampaignLabel.response['204']>;
export type DeleteACampaignSectionMetadataParam = FromSchema<typeof schemas.DeleteACampaignSection.metadata>;
export type DeleteACampaignSectionResponse204 = FromSchema<typeof schemas.DeleteACampaignSection.response['204']>;
export type DeleteACustomWidgetMetadataParam = FromSchema<typeof schemas.DeleteACustomWidget.metadata>;
export type DeleteACustomWidgetResponse204 = FromSchema<typeof schemas.DeleteACustomWidget.response['204']>;
export type DeleteACustomWidgetResponse404 = FromSchema<typeof schemas.DeleteACustomWidget.response['404']>;
export type DeleteAFeatureMetadataParam = FromSchema<typeof schemas.DeleteAFeature.metadata>;
export type DeleteAFeatureResponse200 = FromSchema<typeof schemas.DeleteAFeature.response['200']>;
export type DeleteAFeatureResponse400 = FromSchema<typeof schemas.DeleteAFeature.response['400']>;
export type DeleteAProjectMetadataParam = FromSchema<typeof schemas.DeleteAProject.metadata>;
export type DeleteAProjectResponse200 = FromSchema<typeof schemas.DeleteAProject.response['200']>;
export type DeleteAProjectResponse400 = FromSchema<typeof schemas.DeleteAProject.response['400']>;
export type DeleteDraftOfCurrentSubAccountMetadataParam = FromSchema<typeof schemas.DeleteDraftOfCurrentSubAccount.metadata>;
export type DeleteDraftOfCurrentSubAccountResponse204 = FromSchema<typeof schemas.DeleteDraftOfCurrentSubAccount.response['204']>;
export type DeleteUserOfCurrentSubAccountMetadataParam = FromSchema<typeof schemas.DeleteUserOfCurrentSubAccount.metadata>;
export type DeleteUserOfCurrentSubAccountResponse204 = FromSchema<typeof schemas.DeleteUserOfCurrentSubAccount.response['204']>;
export type GetAllCustomWidgetsMetadataParam = FromSchema<typeof schemas.GetAllCustomWidgets.metadata>;
export type GetAllCustomWidgetsResponse200 = FromSchema<typeof schemas.GetAllCustomWidgets.response['200']>;
export type GetAllCustomWidgetsResponse404 = FromSchema<typeof schemas.GetAllCustomWidgets.response['404']>;
export type GetAllFeaturesInAnAccountSubAccountMetadataParam = FromSchema<typeof schemas.GetAllFeaturesInAnAccountSubAccount.metadata>;
export type GetAllFeaturesInAnAccountSubAccountResponse200 = FromSchema<typeof schemas.GetAllFeaturesInAnAccountSubAccount.response['200']>;
export type GetAllFeaturesInAnAccountSubAccountResponse400 = FromSchema<typeof schemas.GetAllFeaturesInAnAccountSubAccount.response['400']>;
export type GetAllProjectsInAnAccountSubAccountMetadataParam = FromSchema<typeof schemas.GetAllProjectsInAnAccountSubAccount.metadata>;
export type GetAllProjectsInAnAccountSubAccountResponse200 = FromSchema<typeof schemas.GetAllProjectsInAnAccountSubAccount.response['200']>;
export type GetAllProjectsInAnAccountSubAccountResponse400 = FromSchema<typeof schemas.GetAllProjectsInAnAccountSubAccount.response['400']>;
export type GetAllSubAccountsMetadataParam = FromSchema<typeof schemas.GetAllSubAccounts.metadata>;
export type GetAllSubAccountsResponse200 = FromSchema<typeof schemas.GetAllSubAccounts.response['200']>;
export type GetAllTheGoalsOfACampaignMetadataParam = FromSchema<typeof schemas.GetAllTheGoalsOfACampaign.metadata>;
export type GetAllTheGoalsOfACampaignResponse200 = FromSchema<typeof schemas.GetAllTheGoalsOfACampaign.response['200']>;
export type GetAllTheLabelsAssociatedWithACampaignMetadataParam = FromSchema<typeof schemas.GetAllTheLabelsAssociatedWithACampaign.metadata>;
export type GetAllTheLabelsAssociatedWithACampaignResponse200 = FromSchema<typeof schemas.GetAllTheLabelsAssociatedWithACampaign.response['200']>;
export type GetAllTheSectionsOfACampaignMetadataParam = FromSchema<typeof schemas.GetAllTheSectionsOfACampaign.metadata>;
export type GetAllTheSectionsOfACampaignResponse200 = FromSchema<typeof schemas.GetAllTheSectionsOfACampaign.response['200']>;
export type GetAllTheVariationsOfACampaignMetadataParam = FromSchema<typeof schemas.GetAllTheVariationsOfACampaign.metadata>;
export type GetAllTheVariationsOfACampaignResponse200 = FromSchema<typeof schemas.GetAllTheVariationsOfACampaign.response['200']>;
export type GetAllWebsitesMetadataParam = FromSchema<typeof schemas.GetAllWebsites.metadata>;
export type GetAllWebsitesResponse200 = FromSchema<typeof schemas.GetAllWebsites.response['200']>;
export type GetAllWebsitesResponse400 = FromSchema<typeof schemas.GetAllWebsites.response['400']>;
export type GetConfigurationDetailsOfASpecificWebsiteMetadataParam = FromSchema<typeof schemas.GetConfigurationDetailsOfASpecificWebsite.metadata>;
export type GetConfigurationDetailsOfASpecificWebsiteResponse200 = FromSchema<typeof schemas.GetConfigurationDetailsOfASpecificWebsite.response['200']>;
export type GetConfigurationDetailsOfASpecificWebsiteResponse400 = FromSchema<typeof schemas.GetConfigurationDetailsOfASpecificWebsite.response['400']>;
export type GetCurrentAccountInformationMetadataParam = FromSchema<typeof schemas.GetCurrentAccountInformation.metadata>;
export type GetCurrentAccountInformationResponse200 = FromSchema<typeof schemas.GetCurrentAccountInformation.response['200']>;
export type GetDetailsOfASpecificCampaignMetadataParam = FromSchema<typeof schemas.GetDetailsOfASpecificCampaign.metadata>;
export type GetDetailsOfASpecificCampaignResponse200 = FromSchema<typeof schemas.GetDetailsOfASpecificCampaign.response['200']>;
export type GetDetailsOfASpecificCampaignSectionMetadataParam = FromSchema<typeof schemas.GetDetailsOfASpecificCampaignSection.metadata>;
export type GetDetailsOfASpecificCampaignSectionResponse200 = FromSchema<typeof schemas.GetDetailsOfASpecificCampaignSection.response['200']>;
export type GetDetailsOfASpecificCampaignVariationMetadataParam = FromSchema<typeof schemas.GetDetailsOfASpecificCampaignVariation.metadata>;
export type GetDetailsOfASpecificCampaignVariationResponse200 = FromSchema<typeof schemas.GetDetailsOfASpecificCampaignVariation.response['200']>;
export type GetDetailsOfASpecificCustomWidgetMetadataParam = FromSchema<typeof schemas.GetDetailsOfASpecificCustomWidget.metadata>;
export type GetDetailsOfASpecificCustomWidgetResponse200 = FromSchema<typeof schemas.GetDetailsOfASpecificCustomWidget.response['200']>;
export type GetDetailsOfASpecificCustomWidgetResponse404 = FromSchema<typeof schemas.GetDetailsOfASpecificCustomWidget.response['404']>;
export type GetDetailsOfASpecificFeatureMetadataParam = FromSchema<typeof schemas.GetDetailsOfASpecificFeature.metadata>;
export type GetDetailsOfASpecificFeatureResponse200 = FromSchema<typeof schemas.GetDetailsOfASpecificFeature.response['200']>;
export type GetDetailsOfASpecificFeatureResponse400 = FromSchema<typeof schemas.GetDetailsOfASpecificFeature.response['400']>;
export type GetDetailsOfASpecificGoalInACampaignMetadataParam = FromSchema<typeof schemas.GetDetailsOfASpecificGoalInACampaign.metadata>;
export type GetDetailsOfASpecificGoalInACampaignResponse200 = FromSchema<typeof schemas.GetDetailsOfASpecificGoalInACampaign.response['200']>;
export type GetDetailsOfASpecificProjectMetadataParam = FromSchema<typeof schemas.GetDetailsOfASpecificProject.metadata>;
export type GetDetailsOfASpecificProjectResponse200 = FromSchema<typeof schemas.GetDetailsOfASpecificProject.response['200']>;
export type GetDetailsOfASpecificProjectResponse400 = FromSchema<typeof schemas.GetDetailsOfASpecificProject.response['400']>;
export type GetDetailsOfASpecificWebsiteMetadataParam = FromSchema<typeof schemas.GetDetailsOfASpecificWebsite.metadata>;
export type GetDetailsOfASpecificWebsiteResponse200 = FromSchema<typeof schemas.GetDetailsOfASpecificWebsite.response['200']>;
export type GetDetailsOfASpecificWebsiteResponse400 = FromSchema<typeof schemas.GetDetailsOfASpecificWebsite.response['400']>;
export type GetDraftsOfCurrentSubAccount1MetadataParam = FromSchema<typeof schemas.GetDraftsOfCurrentSubAccount1.metadata>;
export type GetDraftsOfCurrentSubAccount1Response200 = FromSchema<typeof schemas.GetDraftsOfCurrentSubAccount1.response['200']>;
export type GetDraftsOfCurrentSubAccountMetadataParam = FromSchema<typeof schemas.GetDraftsOfCurrentSubAccount.metadata>;
export type GetDraftsOfCurrentSubAccountResponse200 = FromSchema<typeof schemas.GetDraftsOfCurrentSubAccount.response['200']>;
export type GetInvoicesOfAccountMetadataParam = FromSchema<typeof schemas.GetInvoicesOfAccount.metadata>;
export type GetInvoicesOfAccountResponse200 = FromSchema<typeof schemas.GetInvoicesOfAccount.response['200']>;
export type GetShareLinkForASpecificCampaignMetadataParam = FromSchema<typeof schemas.GetShareLinkForASpecificCampaign.metadata>;
export type GetShareLinkForASpecificCampaignResponse200 = FromSchema<typeof schemas.GetShareLinkForASpecificCampaign.response['200']>;
export type GetSmartcodeForASpecificWebsiteMetadataParam = FromSchema<typeof schemas.GetSmartcodeForASpecificWebsite.metadata>;
export type GetSmartcodeForASpecificWebsiteResponse200 = FromSchema<typeof schemas.GetSmartcodeForASpecificWebsite.response['200']>;
export type GetSmartcodeForASpecificWebsiteResponse400 = FromSchema<typeof schemas.GetSmartcodeForASpecificWebsite.response['400']>;
export type GetSpecificUserOfCurrentSubAccountMetadataParam = FromSchema<typeof schemas.GetSpecificUserOfCurrentSubAccount.metadata>;
export type GetSpecificUserOfCurrentSubAccountResponse200 = FromSchema<typeof schemas.GetSpecificUserOfCurrentSubAccount.response['200']>;
export type GetTheCampaignsOfAnAccountMetadataParam = FromSchema<typeof schemas.GetTheCampaignsOfAnAccount.metadata>;
export type GetTheCampaignsOfAnAccountResponse200 = FromSchema<typeof schemas.GetTheCampaignsOfAnAccount.response['200']>;
export type GetTrackingCodeOfCurrentSubAccountMetadataParam = FromSchema<typeof schemas.GetTrackingCodeOfCurrentSubAccount.metadata>;
export type GetTrackingCodeOfCurrentSubAccountResponse200 = FromSchema<typeof schemas.GetTrackingCodeOfCurrentSubAccount.response['200']>;
export type PartnerDetailsOfAccountResponse200 = FromSchema<typeof schemas.PartnerDetailsOfAccount.response['200']>;
export type RemoveASpecificCampaignVariationMetadataParam = FromSchema<typeof schemas.RemoveASpecificCampaignVariation.metadata>;
export type RemoveASpecificCampaignVariationResponse204 = FromSchema<typeof schemas.RemoveASpecificCampaignVariation.response['204']>;
export type RetrieveAccountTimelineMetadataParam = FromSchema<typeof schemas.RetrieveAccountTimeline.metadata>;
export type RetrieveAccountTimelineResponse200 = FromSchema<typeof schemas.RetrieveAccountTimeline.response['200']>;
export type ThirdPartyIntegrationsOfCurrentSubAccountMetadataParam = FromSchema<typeof schemas.ThirdPartyIntegrationsOfCurrentSubAccount.metadata>;
export type ThirdPartyIntegrationsOfCurrentSubAccountResponse200 = FromSchema<typeof schemas.ThirdPartyIntegrationsOfCurrentSubAccount.response['200']>;
export type UpdateACampaign1MetadataParam = FromSchema<typeof schemas.UpdateACampaign1.metadata>;
export type UpdateACampaign1Response200 = FromSchema<typeof schemas.UpdateACampaign1.response['200']>;
export type UpdateACampaignGoalMetadataParam = FromSchema<typeof schemas.UpdateACampaignGoal.metadata>;
export type UpdateACampaignGoalResponse200 = FromSchema<typeof schemas.UpdateACampaignGoal.response['200']>;
export type UpdateACampaignMetadataParam = FromSchema<typeof schemas.UpdateACampaign.metadata>;
export type UpdateACampaignResponse200 = FromSchema<typeof schemas.UpdateACampaign.response['200']>;
export type UpdateACampaignSectionMetadataParam = FromSchema<typeof schemas.UpdateACampaignSection.metadata>;
export type UpdateACampaignSectionResponse200 = FromSchema<typeof schemas.UpdateACampaignSection.response['200']>;
export type UpdateACampaignVariationMetadataParam = FromSchema<typeof schemas.UpdateACampaignVariation.metadata>;
export type UpdateACampaignVariationResponse200 = FromSchema<typeof schemas.UpdateACampaignVariation.response['200']>;
export type UpdateACustomWidgetMetadataParam = FromSchema<typeof schemas.UpdateACustomWidget.metadata>;
export type UpdateACustomWidgetResponse200 = FromSchema<typeof schemas.UpdateACustomWidget.response['200']>;
export type UpdateACustomWidgetResponse400 = FromSchema<typeof schemas.UpdateACustomWidget.response['400']>;
export type UpdateACustomWidgetResponse404 = FromSchema<typeof schemas.UpdateACustomWidget.response['404']>;
export type UpdateAFeatureMetadataParam = FromSchema<typeof schemas.UpdateAFeature.metadata>;
export type UpdateAFeatureResponse200 = FromSchema<typeof schemas.UpdateAFeature.response['200']>;
export type UpdateAFeatureResponse400 = FromSchema<typeof schemas.UpdateAFeature.response['400']>;
export type UpdateAProjectMetadataParam = FromSchema<typeof schemas.UpdateAProject.metadata>;
export type UpdateAProjectResponse200 = FromSchema<typeof schemas.UpdateAProject.response['200']>;
export type UpdateAProjectResponse400 = FromSchema<typeof schemas.UpdateAProject.response['400']>;
export type UpdateAccountInformationBodyParam = FromSchema<typeof schemas.UpdateAccountInformation.body>;
export type UpdateAccountInformationMetadataParam = FromSchema<typeof schemas.UpdateAccountInformation.metadata>;
export type UpdateAccountInformationResponse200 = FromSchema<typeof schemas.UpdateAccountInformation.response['200']>;
export type UpdateAccountThresholdsBodyParam = FromSchema<typeof schemas.UpdateAccountThresholds.body>;
export type UpdateAccountThresholdsMetadataParam = FromSchema<typeof schemas.UpdateAccountThresholds.metadata>;
export type UpdateAccountThresholdsResponse200 = FromSchema<typeof schemas.UpdateAccountThresholds.response['200']>;
export type UpdateConfigurationOfASpecificWebsiteMetadataParam = FromSchema<typeof schemas.UpdateConfigurationOfASpecificWebsite.metadata>;
export type UpdateConfigurationOfASpecificWebsiteResponse200 = FromSchema<typeof schemas.UpdateConfigurationOfASpecificWebsite.response['200']>;
export type UpdateConfigurationOfASpecificWebsiteResponse400 = FromSchema<typeof schemas.UpdateConfigurationOfASpecificWebsite.response['400']>;
export type UpdateDraftOfCurrentSubAccountMetadataParam = FromSchema<typeof schemas.UpdateDraftOfCurrentSubAccount.metadata>;
export type UpdateDraftOfCurrentSubAccountResponse200 = FromSchema<typeof schemas.UpdateDraftOfCurrentSubAccount.response['200']>;
export type UpdateThirdPartyIntegrationsForAccountBodyParam = FromSchema<typeof schemas.UpdateThirdPartyIntegrationsForAccount.body>;
export type UpdateThirdPartyIntegrationsForAccountMetadataParam = FromSchema<typeof schemas.UpdateThirdPartyIntegrationsForAccount.metadata>;
export type UpdateThirdPartyIntegrationsForAccountResponse200 = FromSchema<typeof schemas.UpdateThirdPartyIntegrationsForAccount.response['200']>;
export type UpdateUserOfCurrentSubAccountBodyParam = FromSchema<typeof schemas.UpdateUserOfCurrentSubAccount.body>;
export type UpdateUserOfCurrentSubAccountMetadataParam = FromSchema<typeof schemas.UpdateUserOfCurrentSubAccount.metadata>;
export type UpdateUserOfCurrentSubAccountResponse200 = FromSchema<typeof schemas.UpdateUserOfCurrentSubAccount.response['200']>;
