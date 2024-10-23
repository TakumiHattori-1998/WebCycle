import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'vwo/unknown (api/6.1.2)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Delete users
   *
   */
  deleteUserOfCurrentSubAccount(metadata: types.DeleteUserOfCurrentSubAccountMetadataParam): Promise<FetchResponse<204, types.DeleteUserOfCurrentSubAccountResponse204>> {
    return this.core.fetch('/accounts/{account_id}/users/{user_id}', 'delete', metadata);
  }

  /**
   * Get user details
   *
   */
  getSpecificUserOfCurrentSubAccount(metadata: types.GetSpecificUserOfCurrentSubAccountMetadataParam): Promise<FetchResponse<200, types.GetSpecificUserOfCurrentSubAccountResponse200>> {
    return this.core.fetch('/accounts/{account_id}/users/{user_id}', 'get', metadata);
  }

  /**
   * Update user details
   *
   */
  updateUserOfCurrentSubAccount(body: types.UpdateUserOfCurrentSubAccountBodyParam, metadata: types.UpdateUserOfCurrentSubAccountMetadataParam): Promise<FetchResponse<200, types.UpdateUserOfCurrentSubAccountResponse200>>;
  updateUserOfCurrentSubAccount(metadata: types.UpdateUserOfCurrentSubAccountMetadataParam): Promise<FetchResponse<200, types.UpdateUserOfCurrentSubAccountResponse200>>;
  updateUserOfCurrentSubAccount(body?: types.UpdateUserOfCurrentSubAccountBodyParam | types.UpdateUserOfCurrentSubAccountMetadataParam, metadata?: types.UpdateUserOfCurrentSubAccountMetadataParam): Promise<FetchResponse<200, types.UpdateUserOfCurrentSubAccountResponse200>> {
    return this.core.fetch('/accounts/{account_id}/users/{user_id}', 'patch', body, metadata);
  }

  /**
   * Retrieve all workspaces
   *
   */
  getAllSubAccounts(metadata?: types.GetAllSubAccountsMetadataParam): Promise<FetchResponse<200, types.GetAllSubAccountsResponse200>> {
    return this.core.fetch('/accounts', 'get', metadata);
  }

  /**
   * Create a workspace
   *
   */
  createSubAccount(body: types.CreateSubAccountBodyParam): Promise<FetchResponse<201, types.CreateSubAccountResponse201>> {
    return this.core.fetch('/accounts', 'post', body);
  }

  /**
   * Get share link for a specific campaign
   *
   */
  getShareLinkForASpecificCampaign(metadata: types.GetShareLinkForASpecificCampaignMetadataParam): Promise<FetchResponse<200, types.GetShareLinkForASpecificCampaignResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/share', 'get', metadata);
  }

  /**
   * Get all drafts campaigns
   *
   */
  getDraftsOfCurrentSubAccount(metadata: types.GetDraftsOfCurrentSubAccountMetadataParam): Promise<FetchResponse<200, types.GetDraftsOfCurrentSubAccountResponse200>> {
    return this.core.fetch('/accounts/{account_id}/drafts', 'get', metadata);
  }

  /**
   * Create a draft
   *
   */
  createDraftInCurrentSubAccount(metadata: types.CreateDraftInCurrentSubAccountMetadataParam): Promise<FetchResponse<201, types.CreateDraftInCurrentSubAccountResponse201>> {
    return this.core.fetch('/accounts/{account_id}/drafts', 'post', metadata);
  }

  /**
   * Create a campaign variation
   *
   */
  createACampaignVariation(metadata: types.CreateACampaignVariationMetadataParam): Promise<FetchResponse<201, types.CreateACampaignVariationResponse201>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/variations', 'post', metadata);
  }

  /**
   * Get all variations of a campaign
   *
   */
  getAllTheVariationsOfACampaign(metadata: types.GetAllTheVariationsOfACampaignMetadataParam): Promise<FetchResponse<200, types.GetAllTheVariationsOfACampaignResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/variations', 'get', metadata);
  }

  /**
   * Create a campaign section
   *
   */
  createACampaignSection(metadata: types.CreateACampaignSectionMetadataParam): Promise<FetchResponse<201, types.CreateACampaignSectionResponse201>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/sections', 'post', metadata);
  }

  /**
   * Get all sections of a campaign
   *
   */
  getAllTheSectionsOfACampaign(metadata: types.GetAllTheSectionsOfACampaignMetadataParam): Promise<FetchResponse<200, types.GetAllTheSectionsOfACampaignResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/sections', 'get', metadata);
  }

  /**
   * Get details of a specific campaign section
   *
   */
  getDetailsOfASpecificCampaignSection(metadata: types.GetDetailsOfASpecificCampaignSectionMetadataParam): Promise<FetchResponse<200, types.GetDetailsOfASpecificCampaignSectionResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/sections/{section_id}', 'get', metadata);
  }

  /**
   * Update a campaign section
   *
   */
  updateACampaignSection(metadata: types.UpdateACampaignSectionMetadataParam): Promise<FetchResponse<200, types.UpdateACampaignSectionResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/sections/{section_id}', 'patch', metadata);
  }

  /**
   * Delete a campaign section
   *
   */
  deleteACampaignSection(metadata: types.DeleteACampaignSectionMetadataParam): Promise<FetchResponse<204, types.DeleteACampaignSectionResponse204>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/sections/{section_id}', 'delete', metadata);
  }

  /**
   * Get labels of a specific campaign
   *
   */
  getAllTheLabelsAssociatedWithACampaign(metadata: types.GetAllTheLabelsAssociatedWithACampaignMetadataParam): Promise<FetchResponse<200, types.GetAllTheLabelsAssociatedWithACampaignResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/labels', 'get', metadata);
  }

  /**
   * Add labels to a campaign
   *
   */
  addLabelsToACampaign(metadata: types.AddLabelsToACampaignMetadataParam): Promise<FetchResponse<200, types.AddLabelsToACampaignResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/labels', 'post', metadata);
  }

  /**
   * Update a campaign
   *
   */
  updateACampaign(metadata: types.UpdateACampaignMetadataParam): Promise<FetchResponse<200, types.UpdateACampaignResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}', 'patch', metadata);
  }

  /**
   * Get details of a specific campaign
   *
   */
  getDetailsOfASpecificCampaign(metadata: types.GetDetailsOfASpecificCampaignMetadataParam): Promise<FetchResponse<200, types.GetDetailsOfASpecificCampaignResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}', 'get', metadata);
  }

  /**
   * Delete a campaign label
   *
   */
  deleteACampaignLabel(metadata: types.DeleteACampaignLabelMetadataParam): Promise<FetchResponse<204, types.DeleteACampaignLabelResponse204>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/labels/{label_id}', 'delete', metadata);
  }

  /**
   * Retrieve specific workspace
   *
   */
  getCurrentAccountInformation(metadata: types.GetCurrentAccountInformationMetadataParam): Promise<FetchResponse<200, types.GetCurrentAccountInformationResponse200>> {
    return this.core.fetch('/accounts/{account_id}', 'get', metadata);
  }

  /**
   * Update workspace
   *
   */
  updateAccountInformation(body: types.UpdateAccountInformationBodyParam, metadata: types.UpdateAccountInformationMetadataParam): Promise<FetchResponse<200, types.UpdateAccountInformationResponse200>>;
  updateAccountInformation(metadata: types.UpdateAccountInformationMetadataParam): Promise<FetchResponse<200, types.UpdateAccountInformationResponse200>>;
  updateAccountInformation(body?: types.UpdateAccountInformationBodyParam | types.UpdateAccountInformationMetadataParam, metadata?: types.UpdateAccountInformationMetadataParam): Promise<FetchResponse<200, types.UpdateAccountInformationResponse200>> {
    return this.core.fetch('/accounts/{account_id}', 'patch', body, metadata);
  }

  /**
   * Update a campaign variation
   *
   */
  updateACampaignVariation(metadata: types.UpdateACampaignVariationMetadataParam): Promise<FetchResponse<200, types.UpdateACampaignVariationResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/variations/{variation_id}', 'patch', metadata);
  }

  /**
   * Get details of a specific campaign variation
   *
   */
  getDetailsOfASpecificCampaignVariation(metadata: types.GetDetailsOfASpecificCampaignVariationMetadataParam): Promise<FetchResponse<200, types.GetDetailsOfASpecificCampaignVariationResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/variations/{variation_id}', 'get', metadata);
  }

  /**
   * Delete a campaign variation
   *
   */
  removeASpecificCampaignVariation(metadata: types.RemoveASpecificCampaignVariationMetadataParam): Promise<FetchResponse<204, types.RemoveASpecificCampaignVariationResponse204>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/variations/{variation_id}', 'delete', metadata);
  }

  /**
   * Update workspace thresholds
   *
   */
  updateAccountThresholds(body: types.UpdateAccountThresholdsBodyParam, metadata: types.UpdateAccountThresholdsMetadataParam): Promise<FetchResponse<200, types.UpdateAccountThresholdsResponse200>>;
  updateAccountThresholds(metadata: types.UpdateAccountThresholdsMetadataParam): Promise<FetchResponse<200, types.UpdateAccountThresholdsResponse200>>;
  updateAccountThresholds(body?: types.UpdateAccountThresholdsBodyParam | types.UpdateAccountThresholdsMetadataParam, metadata?: types.UpdateAccountThresholdsMetadataParam): Promise<FetchResponse<200, types.UpdateAccountThresholdsResponse200>> {
    return this.core.fetch('/accounts/{account_id}/thresholds', 'patch', body, metadata);
  }

  /**
   * Get workspace thresholds
   *
   */
  currentSubAccountThresholds(metadata: types.CurrentSubAccountThresholdsMetadataParam): Promise<FetchResponse<200, types.CurrentSubAccountThresholdsResponse200>> {
    return this.core.fetch('/accounts/{account_id}/thresholds', 'get', metadata);
  }

  /**
   * Update campaign status
   *
   */
  updateACampaign1(metadata: types.UpdateACampaign1MetadataParam): Promise<FetchResponse<200, types.UpdateACampaign1Response200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/status', 'patch', metadata);
  }

  /**
   * Update draft campaigns
   *
   */
  updateDraftOfCurrentSubAccount(metadata: types.UpdateDraftOfCurrentSubAccountMetadataParam): Promise<FetchResponse<200, types.UpdateDraftOfCurrentSubAccountResponse200>> {
    return this.core.fetch('/accounts/{account_id}/drafts/{draft_id}', 'patch', metadata);
  }

  /**
   * Delete draft campaigns
   *
   */
  deleteDraftOfCurrentSubAccount(metadata: types.DeleteDraftOfCurrentSubAccountMetadataParam): Promise<FetchResponse<204, types.DeleteDraftOfCurrentSubAccountResponse204>> {
    return this.core.fetch('/accounts/{account_id}/drafts/{draft_id}', 'delete', metadata);
  }

  /**
   * Get specific draft campaign
   *
   */
  getDraftsOfCurrentSubAccount1(metadata: types.GetDraftsOfCurrentSubAccount1MetadataParam): Promise<FetchResponse<200, types.GetDraftsOfCurrentSubAccount1Response200>> {
    return this.core.fetch('/accounts/{account_id}/drafts/{draft_id}', 'get', metadata);
  }

  /**
   * Get partner details
   *
   */
  partnerDetailsOfAccount(): Promise<FetchResponse<200, types.PartnerDetailsOfAccountResponse200>> {
    return this.core.fetch('/accounts/partners', 'get');
  }

  /**
   * Update integration settings for specific account
   *
   */
  updateThirdPartyIntegrationsForAccount(body: types.UpdateThirdPartyIntegrationsForAccountBodyParam, metadata: types.UpdateThirdPartyIntegrationsForAccountMetadataParam): Promise<FetchResponse<200, types.UpdateThirdPartyIntegrationsForAccountResponse200>>;
  updateThirdPartyIntegrationsForAccount(metadata: types.UpdateThirdPartyIntegrationsForAccountMetadataParam): Promise<FetchResponse<200, types.UpdateThirdPartyIntegrationsForAccountResponse200>>;
  updateThirdPartyIntegrationsForAccount(body?: types.UpdateThirdPartyIntegrationsForAccountBodyParam | types.UpdateThirdPartyIntegrationsForAccountMetadataParam, metadata?: types.UpdateThirdPartyIntegrationsForAccountMetadataParam): Promise<FetchResponse<200, types.UpdateThirdPartyIntegrationsForAccountResponse200>> {
    return this.core.fetch('/accounts/{account_id}/integrations', 'patch', body, metadata);
  }

  /**
   * Get integration settings of a Workspace
   *
   */
  thirdPartyIntegrationsOfCurrentSubAccount(metadata: types.ThirdPartyIntegrationsOfCurrentSubAccountMetadataParam): Promise<FetchResponse<200, types.ThirdPartyIntegrationsOfCurrentSubAccountResponse200>> {
    return this.core.fetch('/accounts/{account_id}/integrations', 'get', metadata);
  }

  /**
   * Delete a campaign goal
   *
   */
  deleteACampaignGoal(metadata: types.DeleteACampaignGoalMetadataParam): Promise<FetchResponse<204, types.DeleteACampaignGoalResponse204>> {
    return this.core.fetch('/accounts/{account_id}/campaign/{campaign_id}/goals/{goal_id}', 'delete', metadata);
  }

  /**
   * Update a campaign goal
   *
   */
  updateACampaignGoal(metadata: types.UpdateACampaignGoalMetadataParam): Promise<FetchResponse<200, types.UpdateACampaignGoalResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaign/{campaign_id}/goals/{goal_id}', 'patch', metadata);
  }

  /**
   * Get VWO SmartCode of workspace
   *
   */
  getTrackingCodeOfCurrentSubAccount(metadata: types.GetTrackingCodeOfCurrentSubAccountMetadataParam): Promise<FetchResponse<200, types.GetTrackingCodeOfCurrentSubAccountResponse200>> {
    return this.core.fetch('/accounts/{account_id}/smartcode', 'get', metadata);
  }

  /**
   * Get labels
   *
   */
  currentSubAccountLabels(metadata: types.CurrentSubAccountLabelsMetadataParam): Promise<FetchResponse<200, types.CurrentSubAccountLabelsResponse200>> {
    return this.core.fetch('/accounts/{account_id}/labels', 'get', metadata);
  }

  /**
   * Get all campaigns in a workspace
   *
   */
  getTheCampaignsOfAnAccount(metadata: types.GetTheCampaignsOfAnAccountMetadataParam): Promise<FetchResponse<200, types.GetTheCampaignsOfAnAccountResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns', 'get', metadata);
  }

  /**
   * Create a campaign
   *
   */
  createACampaign(metadata: types.CreateACampaignMetadataParam): Promise<FetchResponse<201, types.CreateACampaignResponse201>> {
    return this.core.fetch('/accounts/{account_id}/campaigns', 'post', metadata);
  }

  /**
   * Create a user
   *
   */
  createUserInTheCurrentSubAccount(metadata: types.CreateUserInTheCurrentSubAccountMetadataParam): Promise<FetchResponse<200, types.CreateUserInTheCurrentSubAccountResponse200>> {
    return this.core.fetch('/accounts/{account_id}/users', 'post', metadata);
  }

  /**
   * Get all users
   *
   */
  currentSubAccountUsers(metadata: types.CurrentSubAccountUsersMetadataParam): Promise<FetchResponse<200, types.CurrentSubAccountUsersResponse200>> {
    return this.core.fetch('/accounts/{account_id}/users', 'get', metadata);
  }

  /**
   * Get billing cycle details of accounts
   *
   */
  billingCycleDetailsOfCurrentSubAccount(): Promise<FetchResponse<200, types.BillingCycleDetailsOfCurrentSubAccountResponse200>> {
    return this.core.fetch('/accounts/billing-cycles', 'get');
  }

  /**
   * Get account invoices
   *
   */
  getInvoicesOfAccount(metadata: types.GetInvoicesOfAccountMetadataParam): Promise<FetchResponse<200, types.GetInvoicesOfAccountResponse200>> {
    return this.core.fetch('/accounts/invoice', 'get', metadata);
  }

  /**
   * Get all goals of a campaign
   *
   */
  getAllTheGoalsOfACampaign(metadata: types.GetAllTheGoalsOfACampaignMetadataParam): Promise<FetchResponse<200, types.GetAllTheGoalsOfACampaignResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/goals', 'get', metadata);
  }

  /**
   * Create a campaign goal
   *
   */
  createACampaignGoal(metadata: types.CreateACampaignGoalMetadataParam): Promise<FetchResponse<201, types.CreateACampaignGoalResponse201>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/goals', 'post', metadata);
  }

  /**
   * Get details of a specific goal in a campaign
   *
   */
  getDetailsOfASpecificGoalInACampaign(metadata: types.GetDetailsOfASpecificGoalInACampaignMetadataParam): Promise<FetchResponse<200, types.GetDetailsOfASpecificGoalInACampaignResponse200>> {
    return this.core.fetch('/accounts/{account_id}/campaigns/{campaign_id}/goals/{goal_id}', 'get', metadata);
  }

  /**
   * Get billing details of accounts
   *
   */
  billingDetailsOfAccount(): Promise<FetchResponse<200, types.BillingDetailsOfAccountResponse200>> {
    return this.core.fetch('/accounts/billing-details', 'get');
  }

  /**
   * Get all projects in an account / sub-account
   *
   * @throws FetchError<400, types.GetAllProjectsInAnAccountSubAccountResponse400> 400
   */
  getAllProjectsInAnAccountSubAccount(metadata: types.GetAllProjectsInAnAccountSubAccountMetadataParam): Promise<FetchResponse<200, types.GetAllProjectsInAnAccountSubAccountResponse200>> {
    return this.core.fetch('/accounts/{account_id}/projects', 'get', metadata);
  }

  /**
   * Create a Project
   *
   * @throws FetchError<400, types.CreateAProjectResponse400> 400
   */
  createAProject(metadata: types.CreateAProjectMetadataParam): Promise<FetchResponse<200, types.CreateAProjectResponse200>> {
    return this.core.fetch('/accounts/{account_id}/projects', 'post', metadata);
  }

  /**
   * Get details of a specific project
   *
   * @throws FetchError<400, types.GetDetailsOfASpecificProjectResponse400> 400
   */
  getDetailsOfASpecificProject(metadata: types.GetDetailsOfASpecificProjectMetadataParam): Promise<FetchResponse<200, types.GetDetailsOfASpecificProjectResponse200>> {
    return this.core.fetch('/accounts/{account_id}/projects/{project_id}', 'get', metadata);
  }

  /**
   * Update a project
   *
   * @throws FetchError<400, types.UpdateAProjectResponse400> 400
   */
  updateAProject(metadata: types.UpdateAProjectMetadataParam): Promise<FetchResponse<200, types.UpdateAProjectResponse200>> {
    return this.core.fetch('/accounts/{account_id}/projects/{project_id}', 'patch', metadata);
  }

  /**
   * Delete a project
   *
   * @throws FetchError<400, types.DeleteAProjectResponse400> 400
   */
  deleteAProject(metadata: types.DeleteAProjectMetadataParam): Promise<FetchResponse<200, types.DeleteAProjectResponse200>> {
    return this.core.fetch('/accounts/{account_id}/projects/{project_id}', 'delete', metadata);
  }

  /**
   * Get all features in a workspace
   *
   * @throws FetchError<400, types.GetAllFeaturesInAnAccountSubAccountResponse400> 400
   */
  getAllFeaturesInAnAccountSubAccount(metadata: types.GetAllFeaturesInAnAccountSubAccountMetadataParam): Promise<FetchResponse<200, types.GetAllFeaturesInAnAccountSubAccountResponse200>> {
    return this.core.fetch('/accounts/{account_id}/features', 'get', metadata);
  }

  /**
   * Create a Feature
   *
   * @throws FetchError<400, types.CreateAFeatureResponse400> 400
   */
  createAFeature(metadata: types.CreateAFeatureMetadataParam): Promise<FetchResponse<200, types.CreateAFeatureResponse200>> {
    return this.core.fetch('/accounts/{account_id}/features', 'post', metadata);
  }

  /**
   * Get details of a specific feature
   *
   * @throws FetchError<400, types.GetDetailsOfASpecificFeatureResponse400> 400
   */
  getDetailsOfASpecificFeature(metadata: types.GetDetailsOfASpecificFeatureMetadataParam): Promise<FetchResponse<200, types.GetDetailsOfASpecificFeatureResponse200>> {
    return this.core.fetch('/accounts/{account_id}/features/{feature_id}', 'get', metadata);
  }

  /**
   * Update a feature
   *
   * @throws FetchError<400, types.UpdateAFeatureResponse400> 400
   */
  updateAFeature(metadata: types.UpdateAFeatureMetadataParam): Promise<FetchResponse<200, types.UpdateAFeatureResponse200>> {
    return this.core.fetch('/accounts/{account_id}/features/{feature_id}', 'patch', metadata);
  }

  /**
   * Delete a feature
   *
   * @throws FetchError<400, types.DeleteAFeatureResponse400> 400
   */
  deleteAFeature(metadata: types.DeleteAFeatureMetadataParam): Promise<FetchResponse<200, types.DeleteAFeatureResponse200>> {
    return this.core.fetch('/accounts/{account_id}/features/{feature_id}', 'delete', metadata);
  }

  /**
   * Retrieve timeline feeds of a workspace
   *
   */
  retrieveAccountTimeline(metadata: types.RetrieveAccountTimelineMetadataParam): Promise<FetchResponse<200, types.RetrieveAccountTimelineResponse200>> {
    return this.core.fetch('/accounts/{account_id}/feeds', 'get', metadata);
  }

  /**
   * Get all websites with their attributes
   *
   * @throws FetchError<400, types.GetAllWebsitesResponse400> 400
   */
  getAllWebsites(metadata: types.GetAllWebsitesMetadataParam): Promise<FetchResponse<200, types.GetAllWebsitesResponse200>> {
    return this.core.fetch('/accounts/{account_id}/websites', 'get', metadata);
  }

  /**
   * Get details of a specific website
   *
   * @throws FetchError<400, types.GetDetailsOfASpecificWebsiteResponse400> 400
   */
  getDetailsOfASpecificWebsite(metadata: types.GetDetailsOfASpecificWebsiteMetadataParam): Promise<FetchResponse<200, types.GetDetailsOfASpecificWebsiteResponse200>> {
    return this.core.fetch('/accounts/{account_id}/websites/{website_id}', 'get', metadata);
  }

  /**
   * Get SmartCode for a specific website
   *
   * @throws FetchError<400, types.GetSmartcodeForASpecificWebsiteResponse400> 400
   */
  getSmartcodeForASpecificWebsite(metadata: types.GetSmartcodeForASpecificWebsiteMetadataParam): Promise<FetchResponse<200, types.GetSmartcodeForASpecificWebsiteResponse200>> {
    return this.core.fetch('/accounts/{account_id}/websites/{website_id}/smartcode', 'get', metadata);
  }

  /**
   * Update configuration of a specific website
   *
   * @throws FetchError<400, types.UpdateConfigurationOfASpecificWebsiteResponse400> 400
   */
  updateConfigurationOfASpecificWebsite(metadata: types.UpdateConfigurationOfASpecificWebsiteMetadataParam): Promise<FetchResponse<200, types.UpdateConfigurationOfASpecificWebsiteResponse200>> {
    return this.core.fetch('/accounts/{account_id}/websites/{website_id}/smartcode/configuration', 'patch', metadata);
  }

  /**
   * Get configuration details of a specific website
   *
   * @throws FetchError<400, types.GetConfigurationDetailsOfASpecificWebsiteResponse400> 400
   */
  getConfigurationDetailsOfASpecificWebsite(metadata: types.GetConfigurationDetailsOfASpecificWebsiteMetadataParam): Promise<FetchResponse<200, types.GetConfigurationDetailsOfASpecificWebsiteResponse200>> {
    return this.core.fetch('/accounts/{account_id}/websites/{website_id}/smartcode/configuration', 'get', metadata);
  }

  /**
   * Create a custom widget
   *
   * @throws FetchError<400, types.CreateACustomWidgetResponse400> 400
   */
  createACustomWidget(metadata: types.CreateACustomWidgetMetadataParam): Promise<FetchResponse<200, types.CreateACustomWidgetResponse200>> {
    return this.core.fetch('/accounts/{account_id}/changesets', 'post', metadata);
  }

  /**
   * Get all custom widgets
   *
   * @throws FetchError<404, types.GetAllCustomWidgetsResponse404> 404
   */
  getAllCustomWidgets(metadata: types.GetAllCustomWidgetsMetadataParam): Promise<FetchResponse<200, types.GetAllCustomWidgetsResponse200>> {
    return this.core.fetch('/accounts/{account_id}/changesets', 'get', metadata);
  }

  /**
   * Get details of a specific custom widget
   *
   * @throws FetchError<404, types.GetDetailsOfASpecificCustomWidgetResponse404> 404
   */
  getDetailsOfASpecificCustomWidget(metadata: types.GetDetailsOfASpecificCustomWidgetMetadataParam): Promise<FetchResponse<200, types.GetDetailsOfASpecificCustomWidgetResponse200>> {
    return this.core.fetch('/accounts/{account_id}/changesets/{changeset_id}', 'get', metadata);
  }

  /**
   * Delete a custom widget
   *
   * @throws FetchError<404, types.DeleteACustomWidgetResponse404> 404
   */
  deleteACustomWidget(metadata: types.DeleteACustomWidgetMetadataParam): Promise<FetchResponse<204, types.DeleteACustomWidgetResponse204>> {
    return this.core.fetch('/accounts/{account_id}/changesets/{changeset_id}', 'delete', metadata);
  }

  /**
   * Update a custom widget
   *
   * @throws FetchError<400, types.UpdateACustomWidgetResponse400> 400
   * @throws FetchError<404, types.UpdateACustomWidgetResponse404> 404
   */
  updateACustomWidget(metadata: types.UpdateACustomWidgetMetadataParam): Promise<FetchResponse<200, types.UpdateACustomWidgetResponse200>> {
    return this.core.fetch('/accounts/{account_id}/changesets/{changeset_id}', 'patch', metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { AddLabelsToACampaignMetadataParam, AddLabelsToACampaignResponse200, BillingCycleDetailsOfCurrentSubAccountResponse200, BillingDetailsOfAccountResponse200, CreateACampaignGoalMetadataParam, CreateACampaignGoalResponse201, CreateACampaignMetadataParam, CreateACampaignResponse201, CreateACampaignSectionMetadataParam, CreateACampaignSectionResponse201, CreateACampaignVariationMetadataParam, CreateACampaignVariationResponse201, CreateACustomWidgetMetadataParam, CreateACustomWidgetResponse200, CreateACustomWidgetResponse400, CreateAFeatureMetadataParam, CreateAFeatureResponse200, CreateAFeatureResponse400, CreateAProjectMetadataParam, CreateAProjectResponse200, CreateAProjectResponse400, CreateDraftInCurrentSubAccountMetadataParam, CreateDraftInCurrentSubAccountResponse201, CreateSubAccountBodyParam, CreateSubAccountResponse201, CreateUserInTheCurrentSubAccountMetadataParam, CreateUserInTheCurrentSubAccountResponse200, CurrentSubAccountLabelsMetadataParam, CurrentSubAccountLabelsResponse200, CurrentSubAccountThresholdsMetadataParam, CurrentSubAccountThresholdsResponse200, CurrentSubAccountUsersMetadataParam, CurrentSubAccountUsersResponse200, DeleteACampaignGoalMetadataParam, DeleteACampaignGoalResponse204, DeleteACampaignLabelMetadataParam, DeleteACampaignLabelResponse204, DeleteACampaignSectionMetadataParam, DeleteACampaignSectionResponse204, DeleteACustomWidgetMetadataParam, DeleteACustomWidgetResponse204, DeleteACustomWidgetResponse404, DeleteAFeatureMetadataParam, DeleteAFeatureResponse200, DeleteAFeatureResponse400, DeleteAProjectMetadataParam, DeleteAProjectResponse200, DeleteAProjectResponse400, DeleteDraftOfCurrentSubAccountMetadataParam, DeleteDraftOfCurrentSubAccountResponse204, DeleteUserOfCurrentSubAccountMetadataParam, DeleteUserOfCurrentSubAccountResponse204, GetAllCustomWidgetsMetadataParam, GetAllCustomWidgetsResponse200, GetAllCustomWidgetsResponse404, GetAllFeaturesInAnAccountSubAccountMetadataParam, GetAllFeaturesInAnAccountSubAccountResponse200, GetAllFeaturesInAnAccountSubAccountResponse400, GetAllProjectsInAnAccountSubAccountMetadataParam, GetAllProjectsInAnAccountSubAccountResponse200, GetAllProjectsInAnAccountSubAccountResponse400, GetAllSubAccountsMetadataParam, GetAllSubAccountsResponse200, GetAllTheGoalsOfACampaignMetadataParam, GetAllTheGoalsOfACampaignResponse200, GetAllTheLabelsAssociatedWithACampaignMetadataParam, GetAllTheLabelsAssociatedWithACampaignResponse200, GetAllTheSectionsOfACampaignMetadataParam, GetAllTheSectionsOfACampaignResponse200, GetAllTheVariationsOfACampaignMetadataParam, GetAllTheVariationsOfACampaignResponse200, GetAllWebsitesMetadataParam, GetAllWebsitesResponse200, GetAllWebsitesResponse400, GetConfigurationDetailsOfASpecificWebsiteMetadataParam, GetConfigurationDetailsOfASpecificWebsiteResponse200, GetConfigurationDetailsOfASpecificWebsiteResponse400, GetCurrentAccountInformationMetadataParam, GetCurrentAccountInformationResponse200, GetDetailsOfASpecificCampaignMetadataParam, GetDetailsOfASpecificCampaignResponse200, GetDetailsOfASpecificCampaignSectionMetadataParam, GetDetailsOfASpecificCampaignSectionResponse200, GetDetailsOfASpecificCampaignVariationMetadataParam, GetDetailsOfASpecificCampaignVariationResponse200, GetDetailsOfASpecificCustomWidgetMetadataParam, GetDetailsOfASpecificCustomWidgetResponse200, GetDetailsOfASpecificCustomWidgetResponse404, GetDetailsOfASpecificFeatureMetadataParam, GetDetailsOfASpecificFeatureResponse200, GetDetailsOfASpecificFeatureResponse400, GetDetailsOfASpecificGoalInACampaignMetadataParam, GetDetailsOfASpecificGoalInACampaignResponse200, GetDetailsOfASpecificProjectMetadataParam, GetDetailsOfASpecificProjectResponse200, GetDetailsOfASpecificProjectResponse400, GetDetailsOfASpecificWebsiteMetadataParam, GetDetailsOfASpecificWebsiteResponse200, GetDetailsOfASpecificWebsiteResponse400, GetDraftsOfCurrentSubAccount1MetadataParam, GetDraftsOfCurrentSubAccount1Response200, GetDraftsOfCurrentSubAccountMetadataParam, GetDraftsOfCurrentSubAccountResponse200, GetInvoicesOfAccountMetadataParam, GetInvoicesOfAccountResponse200, GetShareLinkForASpecificCampaignMetadataParam, GetShareLinkForASpecificCampaignResponse200, GetSmartcodeForASpecificWebsiteMetadataParam, GetSmartcodeForASpecificWebsiteResponse200, GetSmartcodeForASpecificWebsiteResponse400, GetSpecificUserOfCurrentSubAccountMetadataParam, GetSpecificUserOfCurrentSubAccountResponse200, GetTheCampaignsOfAnAccountMetadataParam, GetTheCampaignsOfAnAccountResponse200, GetTrackingCodeOfCurrentSubAccountMetadataParam, GetTrackingCodeOfCurrentSubAccountResponse200, PartnerDetailsOfAccountResponse200, RemoveASpecificCampaignVariationMetadataParam, RemoveASpecificCampaignVariationResponse204, RetrieveAccountTimelineMetadataParam, RetrieveAccountTimelineResponse200, ThirdPartyIntegrationsOfCurrentSubAccountMetadataParam, ThirdPartyIntegrationsOfCurrentSubAccountResponse200, UpdateACampaign1MetadataParam, UpdateACampaign1Response200, UpdateACampaignGoalMetadataParam, UpdateACampaignGoalResponse200, UpdateACampaignMetadataParam, UpdateACampaignResponse200, UpdateACampaignSectionMetadataParam, UpdateACampaignSectionResponse200, UpdateACampaignVariationMetadataParam, UpdateACampaignVariationResponse200, UpdateACustomWidgetMetadataParam, UpdateACustomWidgetResponse200, UpdateACustomWidgetResponse400, UpdateACustomWidgetResponse404, UpdateAFeatureMetadataParam, UpdateAFeatureResponse200, UpdateAFeatureResponse400, UpdateAProjectMetadataParam, UpdateAProjectResponse200, UpdateAProjectResponse400, UpdateAccountInformationBodyParam, UpdateAccountInformationMetadataParam, UpdateAccountInformationResponse200, UpdateAccountThresholdsBodyParam, UpdateAccountThresholdsMetadataParam, UpdateAccountThresholdsResponse200, UpdateConfigurationOfASpecificWebsiteMetadataParam, UpdateConfigurationOfASpecificWebsiteResponse200, UpdateConfigurationOfASpecificWebsiteResponse400, UpdateDraftOfCurrentSubAccountMetadataParam, UpdateDraftOfCurrentSubAccountResponse200, UpdateThirdPartyIntegrationsForAccountBodyParam, UpdateThirdPartyIntegrationsForAccountMetadataParam, UpdateThirdPartyIntegrationsForAccountResponse200, UpdateUserOfCurrentSubAccountBodyParam, UpdateUserOfCurrentSubAccountMetadataParam, UpdateUserOfCurrentSubAccountResponse200 } from './types';
